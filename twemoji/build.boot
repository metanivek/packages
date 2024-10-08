(set-env!
 :resource-paths #{"resources"}
 :dependencies '[[cljsjs/boot-cljsjs "0.10.5" :scope "test"]])

(require '[cljsjs.boot-cljsjs.packaging :refer :all])

(def +lib-version+ "14.0.1")
(def +version+ (str +lib-version+ "-0"))

(task-options!
 pom {:project 'cljsjs/twemoji
      :version +version+
      :description "Twitter Emoji for Everyone"
      :url "https://twemoji.twitter.com"
      :scm {:url "https://github.com/twitter/twemoji"}
      :license {"MIT license" "https://github.com/twitter/twemoji/blob/gh-pages/LICENSE"}})

(defn download-url [version filename]
  (format "http://twemoji.maxcdn.com/v/%s/%s" version filename))

(defn twemoji-files [version]
  {:js {:name "twemoji.js"
        :url (download-url version "twemoji.js")}
   :js-min {:name "twemoji.min.js"
            :url (download-url version "twemoji.min.js")}})

(defn download-files [version]
  (let [files (twemoji-files version)]
    (apply comp
      (for [{:keys [name url md5]} (vals files)]
        (download :name name :url url)))))

(deftask package []
  (comp (download-files +lib-version+)
        (sift :move {#"twemoji.js" "cljsjs/twemoji/development/twemoji.inc.js"
                     #"twemoji.min.js" "cljsjs/twemoji/production/twemoji.min.inc.js"})
        (deps-cljs :name "cljsjs.twemoji")
        (pom)
        (show :fileset true)
        (jar)
        (validate)))
