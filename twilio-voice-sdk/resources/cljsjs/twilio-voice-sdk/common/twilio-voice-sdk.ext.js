/**********************************************************************
 * Extern for Twilio
 * Generated by http://jmmk.github.io/javascript-externs-generator
 **********************************************************************/
var Twilio = {
  "Call": {
    "CallDirection": {
      "Incoming": {},
      "Outgoing": {}
    },
    "Codec": {
      "Opus": {},
      "PCMU": {}
    },
    "EventEmitter": {
      "EventEmitter": function () {},
      "defaultMaxListeners": {},
      "listenerCount": function () {}
    },
    "FeedbackIssue": {
      "AudioLatency": {},
      "ChoppyAudio": {},
      "DroppedCall": {},
      "Echo": {},
      "NoisyCall": {},
      "OneWayAudio": {}
    },
    "FeedbackScore": {
      "1": {},
      "2": {},
      "3": {},
      "4": {},
      "5": {},
      "Five": {},
      "Four": {},
      "One": {},
      "Three": {},
      "Two": {}
    },
    "IceGatheringFailureReason": {
      "None": {},
      "Timeout": {}
    },
    "MediaFailure": {
      "ConnectionDisconnected": {},
      "ConnectionFailed": {},
      "IceGatheringFailed": {},
      "LowBytes": {}
    },
    "State": {
      "Closed": {},
      "Connecting": {},
      "Open": {},
      "Pending": {},
      "Reconnecting": {},
      "Ringing": {}
    },
    "defaultMaxListeners": {},
    "listenerCount": function () {},
    "toString": function () {}
  },
  "Device": {
    "EventEmitter": {
      "EventEmitter": function () {},
      "defaultMaxListeners": {},
      "listenerCount": function () {}
    },
    "EventName": {
      "Destroyed": {},
      "Error": {},
      "Incoming": {},
      "Registered": {},
      "Registering": {},
      "TokenWillExpire": {},
      "Unregistered": {}
    },
    "SoundName": {
      "Disconnect": {},
      "Dtmf0": {},
      "Dtmf1": {},
      "Dtmf2": {},
      "Dtmf3": {},
      "Dtmf4": {},
      "Dtmf5": {},
      "Dtmf6": {},
      "Dtmf7": {},
      "Dtmf8": {},
      "Dtmf9": {},
      "DtmfH": {},
      "DtmfS": {},
      "Incoming": {},
      "Outgoing": {}
    },
    "State": {
      "Destroyed": {},
      "Registered": {},
      "Registering": {},
      "Unregistered": {}
    },
    "_defaultSounds": {
      "disconnect": {
        "filename": {},
        "maxDuration": {}
      },
      "dtmf0": {
        "filename": {},
        "maxDuration": {}
      },
      "dtmf1": {
        "filename": {},
        "maxDuration": {}
      },
      "dtmf2": {
        "filename": {},
        "maxDuration": {}
      },
      "dtmf3": {
        "filename": {},
        "maxDuration": {}
      },
      "dtmf4": {
        "filename": {},
        "maxDuration": {}
      },
      "dtmf5": {
        "filename": {},
        "maxDuration": {}
      },
      "dtmf6": {
        "filename": {},
        "maxDuration": {}
      },
      "dtmf7": {
        "filename": {},
        "maxDuration": {}
      },
      "dtmf8": {
        "filename": {},
        "maxDuration": {}
      },
      "dtmf9": {
        "filename": {},
        "maxDuration": {}
      },
      "dtmfh": {
        "filename": {},
        "maxDuration": {}
      },
      "dtmfs": {
        "filename": {},
        "maxDuration": {}
      },
      "incoming": {
        "filename": {},
        "shouldLoop": {}
      },
      "outgoing": {
        "filename": {},
        "maxDuration": {}
      }
    },
    "_getOrCreateAudioContext": function () {},
    "audioContext": {},
    "defaultMaxListeners": {},
    "extension": {},
    "isSupported": {},
    "listenerCount": function () {},
    "packageName": {},
    "runPreflight": function () {},
    "toString": function () {},
    "version": {}
  },
  "Logger": {
    "debug": function () {},
    "disableAll": function () {},
    "enableAll": function () {},
    "error": function () {},
    "getLevel": function () {},
    "info": function () {},
    "levels": {
      "DEBUG": {},
      "ERROR": {},
      "INFO": {},
      "SILENT": {},
      "TRACE": {},
      "WARN": {}
    },
    "log": function () {},
    "methodFactory": function () {},
    "name": {},
    "setDefaultLevel": function () {},
    "setLevel": function () {},
    "trace": function () {},
    "warn": function () {}
  },
  "PStream": {},
  "PreflightTest": {
    "CallQuality": {
      "Degraded": {},
      "Excellent": {},
      "Fair": {},
      "Good": {},
      "Great": {}
    },
    "EventEmitter": {
      "EventEmitter": function () {},
      "defaultMaxListeners": {},
      "listenerCount": function () {}
    },
    "Events": {
      "Completed": {},
      "Connected": {},
      "Failed": {},
      "Sample": {},
      "Warning": {}
    },
    "Status": {
      "Completed": {},
      "Connected": {},
      "Connecting": {},
      "Failed": {}
    },
    "defaultMaxListeners": {},
    "listenerCount": function () {}
  }
};
Twilio.Call.prototype = {
  "_checkVolume": function () {},
  "_cleanupEventListeners": function () {},
  "_createMetricPayload": function () {},
  "_disconnect": function () {},
  "_events": function () {},
  "_maxListeners": function () {},
  "_maybeTransitionToOpen": function () {},
  "_postFeedbackDeclined": function () {},
  "_publishMetrics": function () {},
  "_setCallSid": function () {},
  "_setInputTracksFromStream": function () {},
  "_setSinkIds": function () {},
  "accept": function () {},
  "addListener": function () {},
  "codec": function () {},
  "constructor": function () {},
  "direction": function () {},
  "disconnect": function () {},
  "emit": function () {},
  "eventNames": function () {},
  "getLocalStream": function () {},
  "getMaxListeners": function () {},
  "getRemoteStream": function () {},
  "ignore": function () {},
  "isMuted": function () {},
  "listenerCount": function () {},
  "listeners": function () {},
  "mute": function () {},
  "on": function () {},
  "once": function () {},
  "postFeedback": function () {},
  "prependListener": function () {},
  "prependOnceListener": function () {},
  "rawListeners": function () {},
  "reject": function () {},
  "removeAllListeners": function () {},
  "removeListener": function () {},
  "sendDigits": function () {},
  "setMaxListeners": function () {},
  "status": function () {}
};
Twilio.Call.EventEmitter.prototype = {
  "_events": function () {},
  "_maxListeners": function () {},
  "addListener": function () {},
  "emit": function () {},
  "eventNames": function () {},
  "getMaxListeners": function () {},
  "listenerCount": function () {},
  "listeners": function () {},
  "on": function () {},
  "once": function () {},
  "prependListener": function () {},
  "prependOnceListener": function () {},
  "rawListeners": function () {},
  "removeAllListeners": function () {},
  "removeListener": function () {},
  "setMaxListeners": function () {}
};
Twilio.Device.prototype = {
  "_confirmClose": function () {},
  "_destroyAudioHelper": function () {},
  "_destroyPublisher": function () {},
  "_destroyStream": function () {},
  "_events": function () {},
  "_findCall": function () {},
  "_makeCall": function () {},
  "_maxListeners": function () {},
  "_maybeStopIncomingSound": function () {},
  "_removeCall": function () {},
  "_sendPresence": function () {},
  "_setState": function () {},
  "_setupAudioHelper": function () {},
  "_setupPublisher": function () {},
  "_setupStream": function () {},
  "_showIncomingCall": function () {},
  "_startRegistrationTimer": function () {},
  "_stopRegistrationTimer": function () {},
  "_throwIfDestroyed": function () {},
  "_updateRingtoneSinkIds": function () {},
  "_updateSpeakerSinkIds": function () {},
  "addListener": function () {},
  "audio": function () {},
  "calls": function () {},
  "connect": function () {},
  "constructor": function () {},
  "destroy": function () {},
  "disconnectAll": function () {},
  "edge": function () {},
  "emit": function () {},
  "eventNames": function () {},
  "getMaxListeners": function () {},
  "home": function () {},
  "identity": function () {},
  "isBusy": function () {},
  "listenerCount": function () {},
  "listeners": function () {},
  "on": function () {},
  "once": function () {},
  "prependListener": function () {},
  "prependOnceListener": function () {},
  "rawListeners": function () {},
  "register": function () {},
  "removeAllListeners": function () {},
  "removeListener": function () {},
  "setMaxListeners": function () {},
  "state": function () {},
  "toString": function () {},
  "token": function () {},
  "unregister": function () {},
  "updateOptions": function () {},
  "updateToken": function () {}
};
Twilio.Device.EventEmitter.prototype = {
  "_events": function () {},
  "_maxListeners": function () {},
  "addListener": function () {},
  "emit": function () {},
  "eventNames": function () {},
  "getMaxListeners": function () {},
  "listenerCount": function () {},
  "listeners": function () {},
  "on": function () {},
  "once": function () {},
  "prependListener": function () {},
  "prependOnceListener": function () {},
  "rawListeners": function () {},
  "removeAllListeners": function () {},
  "removeListener": function () {},
  "setMaxListeners": function () {}
};
Twilio.PreflightTest.prototype = {
  "_emitWarning": function () {},
  "_events": function () {},
  "_getCallQuality": function () {},
  "_getRTCSampleTotals": function () {},
  "_getRTCStats": function () {},
  "_getReport": function () {},
  "_getStreamFromFile": function () {},
  "_initDevice": function () {},
  "_maxListeners": function () {},
  "_onDeviceError": function () {},
  "_onDeviceRegistered": function () {},
  "_onFailed": function () {},
  "_onUnregistered": function () {},
  "_releaseHandlers": function () {},
  "_setupCallHandlers": function () {},
  "addListener": function () {},
  "callSid": function () {},
  "constructor": function () {},
  "emit": function () {},
  "endTime": function () {},
  "eventNames": function () {},
  "getMaxListeners": function () {},
  "latestSample": function () {},
  "listenerCount": function () {},
  "listeners": function () {},
  "on": function () {},
  "once": function () {},
  "prependListener": function () {},
  "prependOnceListener": function () {},
  "rawListeners": function () {},
  "removeAllListeners": function () {},
  "removeListener": function () {},
  "report": function () {},
  "setMaxListeners": function () {},
  "startTime": function () {},
  "status": function () {},
  "stop": function () {}
};
Twilio.PreflightTest.EventEmitter.prototype = {
  "_events": function () {},
  "_maxListeners": function () {},
  "addListener": function () {},
  "emit": function () {},
  "eventNames": function () {},
  "getMaxListeners": function () {},
  "listenerCount": function () {},
  "listeners": function () {},
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
 * End Generated Extern for Twilio
/**********************************************************************/