// Swarbs LibreWolf user overrides
// This file is symlinked to the LibreWolf profile for Arkenfox user.js integration

// Privacy and security overrides for Swarbs
user_pref("privacy.resistFingerprinting", true);
user_pref("privacy.trackingprotection.enabled", true);
user_pref("privacy.firstparty.isolate", true);

// Disable telemetry
user_pref("datareporting.healthreport.uploadEnabled", false);
user_pref("datareporting.policy.dataSubmissionEnabled", false);

// Disable Pocket
user_pref("extensions.pocket.enabled", false);

// Container tabs
user_pref("privacy.userContext.enabled", true);
user_pref("privacy.userContext.ui.enabled", true);
