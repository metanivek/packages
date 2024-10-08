(set-env!
  :resource-paths #{"resources"}
  :dependencies '[[cljsjs/boot-cljsjs "0.10.5" :scope "test"]])

(require '[cljsjs.boot-cljsjs.packaging :refer :all])

(def +lib-version+ "4.1.1")
(def +version+ (str +lib-version+ "-0"))

(task-options!
 pom  {:project     'cljsjs/crypto-js
       :version     +version+
       :description "JavaScript library of crypto standards"
       :url         "http://github.com/brix/crypto-js"
       :scm         {:url "https://github.com/cljsjs/packages"}
       :license     {"MIT" "https://raw.githubusercontent.com/brix/crypto-js/develop/LICENSE"}})

(deftask package []
  (comp
   (download :url (str "https://github.com/brix/crypto-js/archive/" +lib-version+ ".zip")
             :unzip true)
   (sift :move {#"^crypto-js.*/crypto-js\.js" "cljsjs/crypto-js/development/crypto-js.inc.js"})
   (minify :in "cljsjs/crypto-js/development/crypto-js.inc.js"
           :out "cljsjs/crypto-js/production/crypto-js.min.inc.js")
   (sift :include #{#"^cljsjs"})
   (deps-cljs :name "cljsjs.crypto-js")
   (pom)
   (jar)
   (validate)))
