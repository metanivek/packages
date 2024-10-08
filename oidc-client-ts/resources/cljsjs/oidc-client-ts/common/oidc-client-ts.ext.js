/**********************************************************************
 * Extern for oidc
 * Generated by http://jmmk.github.io/javascript-externs-generator
 **********************************************************************/
var oidc = {
  "AccessTokenEvents": function () {},
  "CheckSessionIFrame": function () {},
  "ErrorResponse": {
    "stackTraceLimit": {}
  },
  "InMemoryWebStorage": function () {},
  "Log": {
    "_level": {},
    "_logger": {
      "debug": function () {},
      "error": function () {},
      "info": function () {},
      "warn": function () {}
    }
  },
  "MetadataService": function () {},
  "OidcClient": function () {},
  "OidcClientSettingsStore": function () {},
  "SessionMonitor": function () {},
  "SigninResponse": function () {},
  "SigninState": function () {},
  "SignoutResponse": function () {},
  "State": function () {},
  "User": function () {},
  "UserManager": function () {},
  "UserManagerSettingsStore": function () {},
  "Version": {},
  "WebStorageStateStore": function () {}
};
/**********************************************************************
 * End Generated Extern for oidc
/**********************************************************************/

// Non generated externs.
// Many copied from oidc-client.ext.js

oidc.AccessTokenEvents.prototype = {
  "addAccessTokenExpired": function () {},
  "addAccessTokenExpiring": function () {},
  "load": function () {},
  "removeAccessTokenExpired": function () {},
  "removeAccessTokenExpiring": function () {},
  "unload": function () {}
};
oidc.CheckSessionIFrame.prototype = {
  "_message": function () {},
  "load": function () {},
  "start": function () {},
  "stop": function () {}
};
oidc.CordovaIFrameNavigator.prototype = {
  "prepare": function () {}
};
oidc.CordovaPopupNavigator.prototype = {
  "prepare": function () {}
};
oidc.InMemoryWebStorage.prototype = {
  "getItem": function () {},
  "key": function () {},
  "removeItem": function () {},
  "setItem": function () {}
};
oidc.MetadataService.prototype = {
  "_getMetadataProperty": function () {},
  "getAuthorizationEndpoint": function () {},
  "getCheckSessionIframe": function () {},
  "getEndSessionEndpoint": function () {},
  "getIssuer": function () {},
  "getKeysEndpoint": function () {},
  "getMetadata": function () {},
  "getRevocationEndpoint": function () {},
  "getSigningKeys": function () {},
  "getTokenEndpoint": function () {},
  "getUserInfoEndpoint": function () {},
  "resetSigningKeys": function () {}
};
oidc.OidcClient.prototype = {
  "clearStaleState": function () {},
  "createSigninRequest": function () {},
  "createSignoutRequest": function () {},
  "processSigninResponse": function () {},
  "processSignoutResponse": function () {},
  "readSigninResponseState": function () {},
  "readSignoutResponseState": function () {}
};
oidc.OidcClientSettings.prototype = {
  "getEpochTime": function () {}
};
oidc.SessionMonitor.prototype = {
  "_callback": function () {},
  "_start": function () {},
  "_stop": function () {}
};
oidc.TokenRevocationClient.prototype = {
  "_revoke": function () {},
  "revoke": function () {}
};
oidc.User.prototype = {
  "toStorageString": function () {}
};
oidc.UserManager.prototype = {
  "_loadUser": function () {},
  "_revokeInternal": function () {},
  "_revokeRefreshTokenInternal": function () {},
  "_revokeTokensInternal": function () {},
  "_signin": function () {},
  "_signinCallback": function () {},
  "_signinEnd": function () {},
  "_signinSilentIframe": function () {},
  "_signinStart": function () {},
  "_signout": function () {},
  "_signoutEnd": function () {},
  "_signoutStart": function () {},
  "_useRefreshToken": function () {},
  "_validateIdTokenFromTokenRefreshToken": function () {},
  "clearStaleState": function () {},
  "createSigninRequest": function () {},
  "createSignoutRequest": function () {},
  "getUser": function () {},
  "processSigninResponse": function () {},
  "processSignoutResponse": function () {},
  "querySessionStatus": function () {},
  "readSigninResponseState": function () {},
  "readSignoutResponseState": function () {},
  "removeUser": function () {},
  "revokeTokens": function () {},
  "signinCallback": function () {},
  "signinPopup": function () {},
  "signinPopupCallback": function () {},
  "signinRedirect": function () {},
  "signinRedirectCallback": function () {},
  "signinSilent": function () {},
  "signinSilentCallback": function () {},
  "signoutCallback": function () {},
  "signoutPopup": function () {},
  "signoutPopupCallback": function () {},
  "signoutRedirect": function () {},
  "signoutRedirectCallback": function () {},
  "startSilentRenew": function () {},
  "stopSilentRenew": function () {},
  "storeUser": function () {}
};
oidc.WebStorageStateStore.prototype = {
  "get": function () {},
  "getAllKeys": function () {},
  "remove": function () {},
  "set": function () {}
};


/** @record */
function UserManagerEvents() {};

UserManagerEvents.prototype = {
  "addUserLoaded": function () {},
  "removeUserLoaded": function () {},
  "addUserUnloaded": function () {},
  "removeUserUnloaded": function () {},
  "addAccessTokenExpiring": function () {},
  "removeAccessTokenExpiring": function () {},
  "addAccessTokenExpired": function () {},
  "removeAccessTokenExpired": function () {},
  "addSilentRenewError": function () {},
  "removeSilentRenewError": function () {},
  "addUserSignedOut": function () {},
  "removeUserSignedOut": function () {}
};

/** @type {UserManagerEvents} */
oidc.UserManager.prototype.events;

/** @record */
function User() {};

User.prototype = {
    "id_token": function () {},
    "session_state": function () {},
    "access_token": function () {},
    "refresh_token": function () {},
    "token_type": function () {},
    "scope": function () {},
    "profile": function () {},
    "expires_at": function () {},
    "state": function () {},
    "expires_in": function () {},
    "expired": function () {},
    "scopes": function () {},
    "toStorageString": function () {},
    "fromStorageString": function () {}
};

/** @type {User} */
oidc.UserManager.prototype.getUser;
