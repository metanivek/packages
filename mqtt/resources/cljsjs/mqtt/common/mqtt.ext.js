/**********************************************************************
 * Extern for mqtt
 * Generated by http://jmmk.github.io/javascript-externs-generator
 **********************************************************************/
var mqtt = {
  "Client": function () {},
  "DefaultMessageIdProvider": function () {},
  "ErrorWithReasonCode": function () {},
  "MqttClient": function () {},
  "ReasonCodes": {
    "0": {},
    "1": {},
    "128": {},
    "129": {},
    "130": {},
    "131": {},
    "132": {},
    "133": {},
    "134": {},
    "135": {},
    "136": {},
    "137": {},
    "138": {},
    "139": {},
    "140": {},
    "141": {},
    "142": {},
    "143": {},
    "144": {},
    "145": {},
    "146": {},
    "147": {},
    "148": {},
    "149": {},
    "150": {},
    "151": {},
    "152": {},
    "153": {},
    "154": {},
    "155": {},
    "156": {},
    "157": {},
    "158": {},
    "159": {},
    "16": {},
    "160": {},
    "161": {},
    "162": {},
    "17": {},
    "2": {},
    "3": {},
    "4": {},
    "5": {}
  },
  "Store": function () {},
  "UniqueMessageIdProvider": function () {},
  "applyMixin": function () {},
  "connect": function () {},
  "connectAsync": function () {},
  "default": {
    "Client": function () {},
    "DefaultMessageIdProvider": function () {},
    "ErrorWithReasonCode": function () {},
    "MqttClient": function () {},
    "ReasonCodes": {
      "0": {},
      "1": {},
      "128": {},
      "129": {},
      "130": {},
      "131": {},
      "132": {},
      "133": {},
      "134": {},
      "135": {},
      "136": {},
      "137": {},
      "138": {},
      "139": {},
      "140": {},
      "141": {},
      "142": {},
      "143": {},
      "144": {},
      "145": {},
      "146": {},
      "147": {},
      "148": {},
      "149": {},
      "150": {},
      "151": {},
      "152": {},
      "153": {},
      "154": {},
      "155": {},
      "156": {},
      "157": {},
      "158": {},
      "159": {},
      "16": {},
      "160": {},
      "161": {},
      "162": {},
      "17": {},
      "2": {},
      "3": {},
      "4": {},
      "5": {}
    },
    "Store": function () {},
    "UniqueMessageIdProvider": function () {},
    "applyMixin": function () {},
    "connect": function () {},
    "connectAsync": function () {},
    "nextTick": function () {}
  },
  "nextTick": function () {}
};
mqtt.Client.prototype = {
  "_events": function () {},
  "_eventsCount": function () {},
  "_maxListeners": function () {},
  "addListener": function () {},
  "emit": function () {},
  "eventNames": function () {},
  "getMaxListeners": function () {},
  "listenerCount": function () {},
  "listeners": function () {},
  "off": function () {},
  "on": function () {},
  "once": function () {},
  "prependListener": function () {},
  "prependOnceListener": function () {},
  "rawListeners": function () {},
  "removeAllListeners": function () {},
  "removeListener": function () {},
  "setMaxListeners": function () {}
};
mqtt.MqttClient.prototype = {
  "_events": function () {},
  "_eventsCount": function () {},
  "_maxListeners": function () {},
  "addListener": function () {},
  "emit": function () {},
  "eventNames": function () {},
  "getMaxListeners": function () {},
  "listenerCount": function () {},
  "listeners": function () {},
  "off": function () {},
  "on": function () {},
  "once": function () {},
  "prependListener": function () {},
  "prependOnceListener": function () {},
  "rawListeners": function () {},
  "removeAllListeners": function () {},
  "removeListener": function () {},
  "setMaxListeners": function () {}
};
mqtt.default.Client.prototype = {
  "_events": function () {},
  "_eventsCount": function () {},
  "_maxListeners": function () {},
  "addListener": function () {},
  "emit": function () {},
  "eventNames": function () {},
  "getMaxListeners": function () {},
  "listenerCount": function () {},
  "listeners": function () {},
  "off": function () {},
  "on": function () {},
  "once": function () {},
  "prependListener": function () {},
  "prependOnceListener": function () {},
  "rawListeners": function () {},
  "removeAllListeners": function () {},
  "removeListener": function () {},
  "setMaxListeners": function () {}
};
mqtt.default.MqttClient.prototype = {
  "_events": function () {},
  "_eventsCount": function () {},
  "_maxListeners": function () {},
  "addListener": function () {},
  "emit": function () {},
  "eventNames": function () {},
  "getMaxListeners": function () {},
  "listenerCount": function () {},
  "listeners": function () {},
  "off": function () {},
  "on": function () {},
  "once": function () {},
  "prependListener": function () {},
  "prependOnceListener": function () {},
  "rawListeners": function () {},
  "removeAllListeners": function () {},
  "removeListener": function () {},
  "setMaxListeners": function () {}
};
/**********************************************************************
 * End Generated Extern for mqtt
/**********************************************************************//**********************************************************************
 * Extern for mqtt
 * Generated by http://jmmk.github.io/javascript-externs-generator
 **********************************************************************/
var mqtt = {
  "MqttClient": {
    "super_": {
      "EventEmitter": function () {},
      "defaultMaxListeners": {},
      "listenerCount": function () {}
    }
  },
  "connect": {
    "MqttClient": {
      "super_": {
        "EventEmitter": function () {},
        "defaultMaxListeners": {},
        "listenerCount": function () {}
      }
    },
    "connect": function () {}
  }
};
mqtt.MqttClient.prototype = {
  "_checkDisconnecting": function () {},
  "_checkPing": function () {},
  "_cleanUp": function () {},
  "_clearReconnect": function () {},
  "_events": function () {},
  "_handleAck": function () {},
  "_handleConnack": function () {},
  "_handlePacket": function () {},
  "_handlePingresp": function () {},
  "_handlePublish": function () {},
  "_handlePubrel": function () {},
  "_maxListeners": function () {},
  "_nextId": function () {},
  "_reconnect": function () {},
  "_sendPacket": function () {},
  "_setupPingTimer": function () {},
  "_setupReconnect": function () {},
  "_setupStream": function () {},
  "_shiftPingInterval": function () {},
  "addListener": function () {},
  "emit": function () {},
  "end": function () {},
  "getLastMessageId": function () {},
  "handleMessage": function () {},
  "listenerCount": function () {},
  "listeners": function () {},
  "on": function () {},
  "once": function () {},
  "publish": function () {},
  "removeAllListeners": function () {},
  "removeListener": function () {},
  "removeOutgoingMessage": function () {},
  "setMaxListeners": function () {},
  "subscribe": function () {},
  "unsubscribe": function () {}
};
mqtt.MqttClient.super_.prototype = {
  "_events": function () {},
  "_maxListeners": function () {},
  "addListener": function () {},
  "emit": function () {},
  "listenerCount": function () {},
  "listeners": function () {},
  "on": function () {},
  "once": function () {},
  "removeAllListeners": function () {},
  "removeListener": function () {},
  "setMaxListeners": function () {}
};
mqtt.connect.MqttClient.prototype = {
  "_checkDisconnecting": function () {},
  "_checkPing": function () {},
  "_cleanUp": function () {},
  "_clearReconnect": function () {},
  "_events": function () {},
  "_handleAck": function () {},
  "_handleConnack": function () {},
  "_handlePacket": function () {},
  "_handlePingresp": function () {},
  "_handlePublish": function () {},
  "_handlePubrel": function () {},
  "_maxListeners": function () {},
  "_nextId": function () {},
  "_reconnect": function () {},
  "_sendPacket": function () {},
  "_setupPingTimer": function () {},
  "_setupReconnect": function () {},
  "_setupStream": function () {},
  "_shiftPingInterval": function () {},
  "addListener": function () {},
  "emit": function () {},
  "end": function () {},
  "getLastMessageId": function () {},
  "handleMessage": function () {},
  "listenerCount": function () {},
  "listeners": function () {},
  "on": function () {},
  "once": function () {},
  "publish": function () {},
  "removeAllListeners": function () {},
  "removeListener": function () {},
  "removeOutgoingMessage": function () {},
  "setMaxListeners": function () {},
  "subscribe": function () {},
  "unsubscribe": function () {}
};
mqtt.connect.MqttClient.super_.prototype = {
  "_events": function () {},
  "_maxListeners": function () {},
  "addListener": function () {},
  "emit": function () {},
  "listenerCount": function () {},
  "listeners": function () {},
  "on": function () {},
  "once": function () {},
  "removeAllListeners": function () {},
  "removeListener": function () {},
  "setMaxListeners": function () {}
};
/**********************************************************************
 * End Generated Extern for mqtt
/**********************************************************************/