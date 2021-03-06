var readAloudManifest = {
  "manifest_version": 2,

  "name": "__MSG_extension_name__",
  "short_name": "__MSG_extension_short_name__",
  "description": "__MSG_extension_description__",
  "version": "1.3.3",
  "default_locale": "en",

  "browser_action": {
    "default_icon": "img/icon.png",
    "default_popup": "popup.html"
  },
  "icons": {
    "16": "img/icon-16.png",
    "48": "img/icon-48.png",
    "128": "img/icon.png"
  },
  "permissions": [
    "activeTab",
    "tabs",
    "tts",
    "storage",
    "ttsEngine",
    "contextMenus",
    "https://support.lsdsoftware.com/"
  ],
  "content_security_policy": "script-src 'self'; object-src 'self'",
  "web_accessible_resources": [
  ],
  "background": {
    "scripts": [
      "js/es6-promise.auto.min.js",
      "js/defaults.js",
      "js/speech.js",
      "js/document.js",
      "js/events.js",
      "js/stt.js",
      "js/listen.js"
    ],
    "persistent": false
  },
  "options_page": "options.html",
  "options_ui": {
    "page": "options.html",
    "chrome_style": true
  },
  "commands": {
    "play": {
      "suggested_key": {"default": "Alt+P"},
      "description": "play/pause"
    },
    "stop": {
      "suggested_key": {"default": "Alt+O"},
      "description": "stop"
    },
    "forward": {
      "suggested_key": {"default": "Alt+Period"},
      "description": "forward"
    },
    "rewind": {
      "suggested_key": {"default": "Alt+Comma"},
      "description": "rewind"
    }
  },

  "tts_engine": {
    "voices": [
      {"voice_name": "GoogleTranslate Afrikaans", "lang": "af", "event_types": ["start", "end", "error"]},
      {"voice_name": "GoogleTranslate Albanian", "lang": "sq", "event_types": ["start", "end", "error"]},
      {"voice_name": "GoogleTranslate Arabic", "lang": "ar", "event_types": ["start", "end", "error"]},
      {"voice_name": "GoogleTranslate Armenian", "lang": "hy", "event_types": ["start", "end", "error"]},
      {"voice_name": "GoogleTranslate Bengali", "lang": "bn", "event_types": ["start", "end", "error"]},
      {"voice_name": "GoogleTranslate Bosnian", "lang": "bs", "event_types": ["start", "end", "error"]},
      {"voice_name": "GoogleTranslate Catalan", "lang": "ca", "event_types": ["start", "end", "error"]},
      {"voice_name": "GoogleTranslate Chinese", "lang": "zh-CN", "event_types": ["start", "end", "error"]},
      {"voice_name": "GoogleTranslate Croatian", "lang": "hr", "event_types": ["start", "end", "error"]},
      {"voice_name": "GoogleTranslate Czech", "lang": "cs", "event_types": ["start", "end", "error"]},
      {"voice_name": "GoogleTranslate Danish", "lang": "da", "event_types": ["start", "end", "error"]},
      {"voice_name": "GoogleTranslate Dutch", "lang": "nl", "event_types": ["start", "end", "error"]},
      {"voice_name": "GoogleTranslate English", "lang": "en", "event_types": ["start", "end", "error"]},
      {"voice_name": "GoogleTranslate Esperanto", "lang": "eo", "event_types": ["start", "end", "error"]},
      {"voice_name": "GoogleTranslate Finnish", "lang": "fi", "event_types": ["start", "end", "error"]},
      {"voice_name": "GoogleTranslate French", "lang": "fr", "event_types": ["start", "end", "error"]},
      {"voice_name": "GoogleTranslate German", "lang": "de", "event_types": ["start", "end", "error"]},
      {"voice_name": "GoogleTranslate Greek", "lang": "el", "event_types": ["start", "end", "error"]},
      {"voice_name": "GoogleTranslate Hebrew", "lang": "he", "event_types": ["start", "end", "error"]},
      {"voice_name": "GoogleTranslate Hindi", "lang": "hi", "event_types": ["start", "end", "error"]},
      {"voice_name": "GoogleTranslate Hungarian", "lang": "hu", "event_types": ["start", "end", "error"]},
      {"voice_name": "GoogleTranslate Icelandic", "lang": "is", "event_types": ["start", "end", "error"]},
      {"voice_name": "GoogleTranslate Indonesian", "lang": "id", "event_types": ["start", "end", "error"]},
      {"voice_name": "GoogleTranslate Italian", "lang": "it", "event_types": ["start", "end", "error"]},
      {"voice_name": "GoogleTranslate Japanese", "lang": "ja", "event_types": ["start", "end", "error"]},
      {"voice_name": "GoogleTranslate Khmer", "lang": "km", "event_types": ["start", "end", "error"]},
      {"voice_name": "GoogleTranslate Korean", "lang": "ko", "event_types": ["start", "end", "error"]},
      {"voice_name": "GoogleTranslate Latin", "lang": "la", "event_types": ["start", "end", "error"]},
      {"voice_name": "GoogleTranslate Latvian", "lang": "lv", "event_types": ["start", "end", "error"]},
      {"voice_name": "GoogleTranslate Macedonian", "lang": "mk", "event_types": ["start", "end", "error"]},
      {"voice_name": "GoogleTranslate Nepali", "lang": "ne", "event_types": ["start", "end", "error"]},
      {"voice_name": "GoogleTranslate Norwegian", "lang": "no", "event_types": ["start", "end", "error"]},
      {"voice_name": "GoogleTranslate Polish", "lang": "pl", "event_types": ["start", "end", "error"]},
      {"voice_name": "GoogleTranslate Portuguese", "lang": "pt", "event_types": ["start", "end", "error"]},
      {"voice_name": "GoogleTranslate Romanian", "lang": "ro", "event_types": ["start", "end", "error"]},
      {"voice_name": "GoogleTranslate Russian", "lang": "ru", "event_types": ["start", "end", "error"]},
      {"voice_name": "GoogleTranslate Serbian", "lang": "sr", "event_types": ["start", "end", "error"]},
      {"voice_name": "GoogleTranslate Sinhala", "lang": "si", "event_types": ["start", "end", "error"]},
      {"voice_name": "GoogleTranslate Slovak", "lang": "sk", "event_types": ["start", "end", "error"]},
      {"voice_name": "GoogleTranslate Spanish", "lang": "es", "event_types": ["start", "end", "error"]},
      {"voice_name": "GoogleTranslate Swahili", "lang": "sw", "event_types": ["start", "end", "error"]},
      {"voice_name": "GoogleTranslate Swedish", "lang": "sv", "event_types": ["start", "end", "error"]},
      {"voice_name": "GoogleTranslate Tamil", "lang": "ta", "event_types": ["start", "end", "error"]},
      {"voice_name": "GoogleTranslate Thai", "lang": "th", "event_types": ["start", "end", "error"]},
      {"voice_name": "GoogleTranslate Turkish", "lang": "tr", "event_types": ["start", "end", "error"]},
      {"voice_name": "GoogleTranslate Ukrainian", "lang": "uk", "event_types": ["start", "end", "error"]},
      {"voice_name": "GoogleTranslate Vietnamese", "lang": "vi", "event_types": ["start", "end", "error"]},
      {"voice_name": "GoogleTranslate Welsh", "lang": "cy", "event_types": ["start", "end", "error"]},

      {"voice_name": "Amazon Australian English (Nicole)", "lang": "en-AU", "gender": "female", "event_types": ["start", "end", "error"]},
      {"voice_name": "Amazon Australian English (Russell)", "lang": "en-AU", "gender": "male", "event_types": ["start", "end", "error"]},
      {"voice_name": "Amazon Brazilian Portuguese (Ricardo)", "lang": "pt-BR", "gender": "male", "event_types": ["start", "end", "error"]},
      {"voice_name": "Amazon Brazilian Portuguese (Vitoria)", "lang": "pt-BR", "gender": "female", "event_types": ["start", "end", "error"]},
      {"voice_name": "Amazon British English (Amy)", "lang": "en-GB", "gender": "female", "event_types": ["start", "end", "error"]},
      {"voice_name": "Amazon British English (Brian)", "lang": "en-GB", "gender": "male", "event_types": ["start", "end", "error"]},
      {"voice_name": "Amazon British English (Emma)", "lang": "en-GB", "gender": "female", "event_types": ["start", "end", "error"]},
      {"voice_name": "Amazon Canadian French (Chantal)", "lang": "fr-CA", "gender": "female", "event_types": ["start", "end", "error"]},
      {"voice_name": "Amazon Castilian Spanish (Conchita)", "lang": "es-ES", "gender": "female", "event_types": ["start", "end", "error"]},
      {"voice_name": "Amazon Castilian Spanish (Enrique)", "lang": "es-ES", "gender": "male", "event_types": ["start", "end", "error"]},
      {"voice_name": "Amazon Danish (Mads)", "lang": "da-DK", "gender": "male", "event_types": ["start", "end", "error"]},
      {"voice_name": "Amazon Danish (Naja)", "lang": "da-DK", "gender": "female", "event_types": ["start", "end", "error"]},
      {"voice_name": "Amazon Dutch (Lotte)", "lang": "nl-NL", "gender": "female", "event_types": ["start", "end", "error"]},
      {"voice_name": "Amazon Dutch (Ruben)", "lang": "nl-NL", "gender": "male", "event_types": ["start", "end", "error"]},
      {"voice_name": "Amazon French (Celine)", "lang": "fr-FR", "gender": "female", "event_types": ["start", "end", "error"]},
      {"voice_name": "Amazon French (Mathieu)", "lang": "fr-FR", "gender": "male", "event_types": ["start", "end", "error"]},
      {"voice_name": "Amazon German (Hans)", "lang": "de-DE", "gender": "male", "event_types": ["start", "end", "error"]},
      {"voice_name": "Amazon German (Marlene)", "lang": "de-DE", "gender": "female", "event_types": ["start", "end", "error"]},
      {"voice_name": "Amazon German (Vicki)", "lang": "de-DE", "gender": "female", "event_types": ["start", "end", "error"]},
      {"voice_name": "Amazon Icelandic (Dora)", "lang": "is-IS", "gender": "female", "event_types": ["start", "end", "error"]},
      {"voice_name": "Amazon Icelandic (Karl)", "lang": "is-IS", "gender": "male", "event_types": ["start", "end", "error"]},
      {"voice_name": "Amazon Indian English (Aditi)", "lang": "en-IN", "gender": "female", "event_types": ["start", "end", "error"]},
      {"voice_name": "Amazon Indian English (Raveena)", "lang": "en-IN", "gender": "female", "event_types": ["start", "end", "error"]},
      {"voice_name": "Amazon Italian (Carla)", "lang": "it-IT", "gender": "female", "event_types": ["start", "end", "error"]},
      {"voice_name": "Amazon Italian (Giorgio)", "lang": "it-IT", "gender": "male", "event_types": ["start", "end", "error"]},
      {"voice_name": "Amazon Japanese (Mizuki)", "lang": "ja-JP", "gender": "female", "event_types": ["start", "end", "error"]},
      {"voice_name": "Amazon Japanese (Takumi)", "lang": "ja-JP", "gender": "male", "event_types": ["start", "end", "error"]},
      {"voice_name": "Amazon Korean (Seoyeon)", "lang": "ko-KR", "gender": "female", "event_types": ["start", "end", "error"]},
      {"voice_name": "Amazon Norwegian (Liv)", "lang": "nb-NO", "gender": "female", "event_types": ["start", "end", "error"]},
      {"voice_name": "Amazon Polish (Ewa)", "lang": "pl-PL", "gender": "female", "event_types": ["start", "end", "error"]},
      {"voice_name": "Amazon Polish (Jacek)", "lang": "pl-PL", "gender": "male", "event_types": ["start", "end", "error"]},
      {"voice_name": "Amazon Polish (Jan)", "lang": "pl-PL", "gender": "male", "event_types": ["start", "end", "error"]},
      {"voice_name": "Amazon Polish (Maja)", "lang": "pl-PL", "gender": "female", "event_types": ["start", "end", "error"]},
      {"voice_name": "Amazon Portuguese (Cristiano)", "lang": "pt-PT", "gender": "male", "event_types": ["start", "end", "error"]},
      {"voice_name": "Amazon Portuguese (Ines)", "lang": "pt-PT", "gender": "female", "event_types": ["start", "end", "error"]},
      {"voice_name": "Amazon Romanian (Carmen)", "lang": "ro-RO", "gender": "female", "event_types": ["start", "end", "error"]},
      {"voice_name": "Amazon Russian (Maxim)", "lang": "ru-RU", "gender": "male", "event_types": ["start", "end", "error"]},
      {"voice_name": "Amazon Russian (Tatyana)", "lang": "ru-RU", "gender": "female", "event_types": ["start", "end", "error"]},
      {"voice_name": "Amazon Swedish (Astrid)", "lang": "sv-SE", "gender": "female", "event_types": ["start", "end", "error"]},
      {"voice_name": "Amazon Turkish (Filiz)", "lang": "tr-TR", "gender": "female", "event_types": ["start", "end", "error"]},
      {"voice_name": "Amazon US English (Ivy)", "lang": "en-US", "gender": "female", "event_types": ["start", "end", "error"]},
      {"voice_name": "Amazon US English (Joanna)", "lang": "en-US", "gender": "female", "event_types": ["start", "end", "error"]},
      {"voice_name": "Amazon US English (Joey)", "lang": "en-US", "gender": "male", "event_types": ["start", "end", "error"]},
      {"voice_name": "Amazon US English (Justin)", "lang": "en-US", "gender": "male", "event_types": ["start", "end", "error"]},
      {"voice_name": "Amazon US English (Kendra)", "lang": "en-US", "gender": "female", "event_types": ["start", "end", "error"]},
      {"voice_name": "Amazon US English (Kimberly)", "lang": "en-US", "gender": "female", "event_types": ["start", "end", "error"]},
      {"voice_name": "Amazon US English (Matthew)", "lang": "en-US", "gender": "male", "event_types": ["start", "end", "error"]},
      {"voice_name": "Amazon US English (Salli)", "lang": "en-US", "gender": "female", "event_types": ["start", "end", "error"]},
      {"voice_name": "Amazon US Spanish (Miguel)", "lang": "es-US", "gender": "male", "event_types": ["start", "end", "error"]},
      {"voice_name": "Amazon US Spanish (Penelope)", "lang": "es-US", "gender": "female", "event_types": ["start", "end", "error"]},
      {"voice_name": "Amazon Welsh (Gwyneth)", "lang": "cy-GB", "gender": "female", "event_types": ["start", "end", "error"]},
      {"voice_name": "Amazon Welsh English (Geraint)", "lang": "en-GB-WLS", "gender": "male", "event_types": ["start", "end", "error"]},

      {"voice_name": "Microsoft Australian English (Catherine)", "lang": "en-AU", "gender": "female", "event_types": ["start", "end", "error"]},
      {"voice_name": "Microsoft Australian English (James)", "lang": "en-AU", "gender": "male", "event_types": ["start", "end", "error"]},
      {"voice_name": "Microsoft Belgian Dutch (Bart)", "lang": "nl-BE", "gender": "male", "event_types": ["start", "end", "error"]},
      {"voice_name": "Microsoft Brazilian Portuguese (Daniel)", "lang": "pt-BR", "gender": "male", "event_types": ["start", "end", "error"]},
      {"voice_name": "Microsoft Brazilian Portuguese (Maria)", "lang": "pt-BR", "gender": "female", "event_types": ["start", "end", "error"]},
      {"voice_name": "Microsoft British English (George)", "lang": "en-GB", "gender": "male", "event_types": ["start", "end", "error"]},
      {"voice_name": "Microsoft British English (Hazel)", "lang": "en-GB", "gender": "female", "event_types": ["start", "end", "error"]},
      {"voice_name": "Microsoft British English (Susan)", "lang": "en-GB", "gender": "female", "event_types": ["start", "end", "error"]},
      {"voice_name": "Microsoft Canadian English (Linda)", "lang": "en-CA", "gender": "female", "event_types": ["start", "end", "error"]},
      {"voice_name": "Microsoft Canadian English (Richard)", "lang": "en-CA", "gender": "male", "event_types": ["start", "end", "error"]},
      {"voice_name": "Microsoft Canadian French (Caroline)", "lang": "fr-CA", "gender": "female", "event_types": ["start", "end", "error"]},
      {"voice_name": "Microsoft Canadian French (Claude)", "lang": "fr-CA", "gender": "male", "event_types": ["start", "end", "error"]},
      {"voice_name": "Microsoft Canadian French (Nathalie)", "lang": "fr-CA", "gender": "female", "event_types": ["start", "end", "error"]},
      {"voice_name": "Microsoft Catalan (Herena)", "lang": "ca-ES", "gender": "female", "event_types": ["start", "end", "error"]},
      {"voice_name": "Microsoft Chinese (Huihui)", "lang": "zh-CN", "gender": "female", "event_types": ["start", "end", "error"]},
      {"voice_name": "Microsoft Chinese (Kangkang)", "lang": "zh-CN", "gender": "male", "event_types": ["start", "end", "error"]},
      {"voice_name": "Microsoft Chinese (Yaoyao)", "lang": "zh-CN", "gender": "female", "event_types": ["start", "end", "error"]},
      {"voice_name": "Microsoft ChineseTW (Hanhan)", "lang": "zh-TW", "gender": "female", "event_types": ["start", "end", "error"]},
      {"voice_name": "Microsoft ChineseTW (Yating)", "lang": "zh-TW", "gender": "female", "event_types": ["start", "end", "error"]},
      {"voice_name": "Microsoft ChineseTW (Zhiwei)", "lang": "zh-TW", "gender": "male", "event_types": ["start", "end", "error"]},
      {"voice_name": "Microsoft Danish (Helle)", "lang": "da-DK", "gender": "female", "event_types": ["start", "end", "error"]},
      {"voice_name": "Microsoft Dutch (Frank)", "lang": "nl-NL", "gender": "male", "event_types": ["start", "end", "error"]},
      {"voice_name": "Microsoft Finnish (Heidi)", "lang": "fi-FI", "gender": "female", "event_types": ["start", "end", "error"]},
      {"voice_name": "Microsoft French (Hortense)", "lang": "fr-FR", "gender": "female", "event_types": ["start", "end", "error"]},
      {"voice_name": "Microsoft French (Julie)", "lang": "fr-FR", "gender": "female", "event_types": ["start", "end", "error"]},
      {"voice_name": "Microsoft French (Paul)", "lang": "fr-FR", "gender": "male", "event_types": ["start", "end", "error"]},
      {"voice_name": "Microsoft German (Hedda)", "lang": "de-DE", "gender": "female", "event_types": ["start", "end", "error"]},
      {"voice_name": "Microsoft German (Katja)", "lang": "de-DE", "gender": "female", "event_types": ["start", "end", "error"]},
      {"voice_name": "Microsoft German (Stefan)", "lang": "de-DE", "gender": "male", "event_types": ["start", "end", "error"]},
      {"voice_name": "Microsoft Indian English (Heera)", "lang": "en-IN", "gender": "female", "event_types": ["start", "end", "error"]},
      {"voice_name": "Microsoft Indian English (Ravi)", "lang": "en-IN", "gender": "male", "event_types": ["start", "end", "error"]},
      {"voice_name": "Microsoft Italian (Cosimo)", "lang": "it-IT", "gender": "male", "event_types": ["start", "end", "error"]},
      {"voice_name": "Microsoft Italian (Elsa)", "lang": "it-IT", "gender": "female", "event_types": ["start", "end", "error"]},
      {"voice_name": "Microsoft Japanese (Ayumi)", "lang": "ja-JP", "gender": "female", "event_types": ["start", "end", "error"]},
      {"voice_name": "Microsoft Japanese (Haruka)", "lang": "ja-JP", "gender": "female", "event_types": ["start", "end", "error"]},
      {"voice_name": "Microsoft Japanese (Ichiro)", "lang": "ja-JP", "gender": "male", "event_types": ["start", "end", "error"]},
      {"voice_name": "Microsoft Japanese (Sayaka)", "lang": "ja-JP", "gender": "female", "event_types": ["start", "end", "error"]},
      {"voice_name": "Microsoft Korean (Heami)", "lang": "ko-KR", "gender": "female", "event_types": ["start", "end", "error"]},
      {"voice_name": "Microsoft Mexican Spanish (Raul)", "lang": "es-MX", "gender": "male", "event_types": ["start", "end", "error"]},
      {"voice_name": "Microsoft Mexican Spanish (Sabina)", "lang": "es-MX", "gender": "female", "event_types": ["start", "end", "error"]},
      {"voice_name": "Microsoft Norwegian (Jon)", "lang": "nb-NO", "gender": "male", "event_types": ["start", "end", "error"]},
      {"voice_name": "Microsoft Polish (Adam)", "lang": "pl-PL", "gender": "male", "event_types": ["start", "end", "error"]},
      {"voice_name": "Microsoft Polish (Paulina)", "lang": "pl-PL", "gender": "female", "event_types": ["start", "end", "error"]},
      {"voice_name": "Microsoft Portuguese (Helia)", "lang": "pt-PT", "gender": "female", "event_types": ["start", "end", "error"]},
      {"voice_name": "Microsoft Russian (Irina)", "lang": "ru-RU", "gender": "female", "event_types": ["start", "end", "error"]},
      {"voice_name": "Microsoft Russian (Pavel)", "lang": "ru-RU", "gender": "male", "event_types": ["start", "end", "error"]},
      {"voice_name": "Microsoft Spanish (Helena)", "lang": "es-ES", "gender": "female", "event_types": ["start", "end", "error"]},
      {"voice_name": "Microsoft Spanish (Laura)", "lang": "es-ES", "gender": "female", "event_types": ["start", "end", "error"]},
      {"voice_name": "Microsoft Spanish (Pablo)", "lang": "es-ES", "gender": "male", "event_types": ["start", "end", "error"]},
      {"voice_name": "Microsoft Swedish (Bengt)", "lang": "sv-SE", "gender": "male", "event_types": ["start", "end", "error"]},
      {"voice_name": "Microsoft Turkish (Tolga)", "lang": "tr-TR", "gender": "male", "event_types": ["start", "end", "error"]},
      {"voice_name": "Microsoft US English (David)", "lang": "en-US", "gender": "male", "event_types": ["start", "end", "error"]},
      {"voice_name": "Microsoft US English (Mark)", "lang": "en-US", "gender": "male", "event_types": ["start", "end", "error"]},
      {"voice_name": "Microsoft US English (Zira)", "lang": "en-US", "gender": "female", "event_types": ["start", "end", "error"]},
      {"voice_name": "Microsoft Vietnamese (An)", "lang": "vi-VI", "gender": "male", "event_types": ["start", "end", "error"]}
    ]
  }
}
var brapi = (typeof chrome != 'undefined') ? chrome : (typeof browser != 'undefined' ? browser : {});

var config = {
  serviceUrl: "https://support.lsdsoftware.com",
  entityMap: {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;',
    '/': '&#x2F;',
    '`': '&#x60;',
    '=': '&#x3D;'
  },
}

var defaults = {
  rate: 1.0,
  pitch: 1.0,
  volume: 1.0,
  showHighlighting: 0,
};

var browserTtsEngine = brapi.tts ? new BrowserTtsEngine() : (typeof speechSynthesis != 'undefined' ? new WebSpeechEngine() : new DummyTtsEngine());
var remoteTtsEngine = new RemoteTtsEngine(config.serviceUrl, (typeof readAloudManifest != 'undefined') ? readAloudManifest : brapi.runtime.getManifest());


function getQueryString() {
  var queryString = {};
  if (location.search) location.search.substr(1).replace(/\+/g, '%20').split('&').forEach(function(tuple) {
    var tokens = tuple.split('=');
    queryString[decodeURIComponent(tokens[0])] = tokens[1] && decodeURIComponent(tokens[1]);
  })
  return queryString;
}

function getSettings(names) {
  return new Promise(function(fulfill) {
    brapi.storage.local.get(names || ["voiceName", "rate", "pitch", "volume", "showHighlighting", "languages"], fulfill);
  });
}

function updateSettings(items) {
  return new Promise(function(fulfill) {
    brapi.storage.local.set(items, fulfill);
  });
}

function clearSettings(names) {
  return new Promise(function(fulfill) {
    brapi.storage.local.remove(names || ["voiceName", "rate", "pitch", "volume", "showHighlighting", "languages"], fulfill);
  });
}

function getState(key) {
  return new Promise(function(fulfill) {
    brapi.storage.local.get(key, function(items) {
      fulfill(items[key]);
    });
  });
}

function setState(key, value) {
  var items = {};
  items[key] = value;
  return new Promise(function(fulfill) {
    brapi.storage.local.set(items, fulfill);
  });
}

function getVoices() {
  return browserTtsEngine.getVoices()
    .then(function(voices) {
      //add the remote voices if browser didn't return them (i.e. because it doesn't support the ttsEngine declaration in the manifest)
      var remoteVoices = remoteTtsEngine.getVoices();
      if (!voices.some(function(voice) {return voice.voiceName == remoteVoices[0].voiceName})) voices = voices.concat(remoteVoices);
      return voices;
    })
}

function isGoogleNative(voiceName) {
  return /^Google\s/.test(voiceName);
}

function isGoogleTranslate(voiceName) {
  return /^GoogleTranslate /.test(voiceName);
}

function isAmazonPolly(voiceName) {
  return /^Amazon /.test(voiceName);
}

function isMicrosoftCloud(voiceName) {
  return /^Microsoft /.test(voiceName) && voiceName.indexOf(' - ') == -1;
}

function isRemoteVoice(voiceName) {
  return remoteTtsEngine.hasVoice(voiceName);
}

function isPremiumVoice(voiceName) {
  return isAmazonPolly(voiceName) || isMicrosoftCloud(voiceName);
}

function executeFile(file) {
  return new Promise(function(fulfill, reject) {
    brapi.tabs.executeScript({file: file}, function(result) {
      if (brapi.runtime.lastError) reject(new Error(brapi.runtime.lastError.message));
      else fulfill(result);
    });
  });
}

function executeScript(code) {
  return new Promise(function(fulfill, reject) {
    brapi.tabs.executeScript({code: code}, function(result) {
      if (brapi.runtime.lastError) reject(new Error(brapi.runtime.lastError.message));
      else fulfill(result);
    });
  });
}

function insertCSS(file) {
  return new Promise(function(fulfill, reject) {
    brapi.tabs.insertCSS({file: file}, function(result) {
      if (brapi.runtime.lastError) reject(new Error(brapi.runtime.lastError.message));
      else fulfill(result);
    })
  });
}

function getBackgroundPage() {
  return new Promise(function(fulfill) {
    brapi.runtime.getBackgroundPage(fulfill);
  });
}

function spread(f, self) {
  return function(args) {
    return f.apply(self, args);
  };
}

function extraAction(action) {
  return function(data) {
    return Promise.resolve(action(data))
      .then(function() {return data})
  }
}

function inSequence(tasks) {
  return tasks.reduce(function(p, task) {return p.then(task)}, Promise.resolve());
}

function callMethod(name, args) {
  return function(obj) {
    return obj[name].apply(obj, args);
  };
}

function waitMillis(millis) {
  return new Promise(function(fulfill) {
    setTimeout(fulfill, millis);
  });
}

function parseLang(lang) {
  var tokens = lang.toLowerCase().replace(/_/g, '-').split(/-/, 2);
  return {
    lang: tokens[0],
    rest: tokens[1]
  };
}

function formatError(err) {
  var message = brapi.i18n.getMessage(err.code);
  if (message) message = message.replace(/{(\w+)}/g, function(m, p1) {return err[p1]});
  return message;
}

function urlEncode(oData) {
  if (oData == null) return null;
  var parts = [];
  for (var key in oData) parts.push(encodeURIComponent(key) + "=" + encodeURIComponent(oData[key]));
  return parts.join("&");
}

function ajaxGet(sUrl) {
  return new Promise(ajaxGetCb.bind(null, sUrl));
}

function ajaxGetCb(sUrl, fulfill, reject) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", sUrl, true);
    xhr.onreadystatechange = function() {
      if (xhr.readyState == XMLHttpRequest.DONE) {
        if (xhr.status == 200) fulfill(xhr.responseText);
        else reject && reject(new Error(xhr.responseText));
      }
    };
    xhr.send(null);
}

function ajaxPost(sUrl, oData, sType) {
  return new Promise(function(fulfill, reject) {
    var xhr = new XMLHttpRequest();
    xhr.open("POST", sUrl, true);
    xhr.setRequestHeader("Content-type", sType == "json" ? "application/json" : "application/x-www-form-urlencoded");
    xhr.onreadystatechange = function() {
      if (xhr.readyState == XMLHttpRequest.DONE) {
        if (xhr.status == 200) fulfill(xhr.responseText);
        else reject(new Error(xhr.responseText));
      }
    };
    xhr.send(sType == "json" ? JSON.stringify(oData) : urlEncode(oData));
  })
}

function objectAssign(target, varArgs) { // .length of function is 2
  'use strict';
  if (target == null) throw new TypeError('Cannot convert undefined or null to object');
  var to = Object(target);
  for (var index = 1; index < arguments.length; index++) {
    var nextSource = arguments[index];
    if (nextSource != null) { // Skip over if undefined or null
      for (var nextKey in nextSource) {
        // Avoid bugs when hasOwnProperty is shadowed
        if (Object.prototype.hasOwnProperty.call(nextSource, nextKey)) {
          to[nextKey] = nextSource[nextKey];
        }
      }
    }
  }
  return to;
}

if (typeof Object.assign != 'function') {
  // Must be writable: true, enumerable: false, configurable: true
  Object.defineProperty(Object, "assign", {
    value: objectAssign,
    writable: true,
    configurable: true
  });
}

if (!String.prototype.startsWith) {
  String.prototype.startsWith = function(search, pos) {
  return this.substr(!pos || pos < 0 ? 0 : +pos, search.length) === search;
  };
}

function domReady() {
  return new Promise(function(fulfill) {
    $(fulfill);
  })
}

function setI18nText() {
  $("[data-i18n]").each(function() {
    var key = $(this).data("i18n");
    var text = brapi.i18n.getMessage(key);
    if ($(this).is("input")) $(this).val(text);
    else $(this).text(text);
  })
}

function escapeHtml(text) {
  return text.replace(/[&<>"'`=\/]/g, function(s) {
    return config.entityMap[s];
  })
}

function getBrowser() {
  if (/Opera|OPR\//.test(navigator.userAgent)) return 'opera';
  if (/firefox/i.test(navigator.userAgent)) return 'firefox';
  return 'chrome';
}

function getHotkeySettingsUrl() {
  switch (getBrowser()) {
    case 'opera': return 'opera://settings/configureCommands';
    case 'chrome': return 'chrome://extensions/configureCommands';
    default: return brapi.runtime.getURL("shortcuts.html");
  }
}

function BrowserTtsEngine() {
  this.speak = function(text, options, onEvent) {
    brapi.tts.speak(text, {
      voiceName: options.voice.voiceName,
      lang: options.lang,
      rate: options.rate,
      pitch: options.pitch,
      volume: options.volume,
      requiredEventTypes: ["start", "end"],
      desiredEventTypes: ["start", "end", "error"],
      onEvent: onEvent
    })
  }
  this.stop = brapi.tts.stop;
  this.pause = brapi.tts.pause;
  this.resume = brapi.tts.resume;
  this.isSpeaking = brapi.tts.isSpeaking;
  this.getVoices = function() {
    return new Promise(function(fulfill) {
      brapi.tts.getVoices(fulfill);
    })
  }
}

function WebSpeechEngine() {
  var utter;
  this.speak = function(text, options, onEvent) {
    utter = new SpeechSynthesisUtterance();
    utter.text = text;
    utter.voice = options.voice;
    if (options.lang) utter.lang = options.lang;
    if (options.pitch) utter.pitch = options.pitch;
    if (options.rate) utter.rate = options.rate;
    if (options.volume) utter.volume = options.volume;
    utter.onstart = onEvent.bind(null, {type: 'start', charIndex: 0});
    utter.onend = onEvent.bind(null, {type: 'end', charIndex: text.length});
    utter.onerror = function(event) {
      onEvent({type: 'error', errorMessage: event.error});
    };
    speechSynthesis.speak(utter);
  }
  this.stop = function() {
    if (utter) utter.onend = null;
    speechSynthesis.cancel();
  }
  this.pause = function() {
    speechSynthesis.pause();
  }
  this.resume = function() {
    speechSynthesis.resume();
  }
  this.isSpeaking = function(callback) {
    callback(speechSynthesis.speaking);
  }
  this.getVoices = function() {
    return new Promise(function(fulfill) {
      var voices = speechSynthesis.getVoices();
      if (voices.length) fulfill(voices);
      else speechSynthesis.onvoiceschanged = function() {
        fulfill(speechSynthesis.getVoices());
      }
    })
    .then(function(voices) {
      for (var i=0; i<voices.length; i++) voices[i].voiceName = voices[i].name;
      return voices;
    })
  }
}

function DummyTtsEngine() {
  this.getVoices = function() {
    return Promise.resolve([]);
  }
}

function RemoteTtsEngine(serviceUrl, manifest) {
  var iOS = !!navigator.platform && /iPad|iPhone|iPod/.test(navigator.platform);
  var audio = document.createElement("AUDIO");
  var prefetchAudio = document.createElement("AUDIO");
  var isSpeaking = false;
  var nextStartTime = 0;
  var waitTimer;
  var voices = manifest.tts_engine.voices.map(function(voice) {
    return {voiceName: voice.voice_name, lang: voice.lang};
  })
  var voiceMap = {};
  for (var i=0; i<voices.length; i++) voiceMap[voices[i].voiceName] = voices[i];

  this.speak = function(utterance, options, onEvent) {
    if (!options.volume) options.volume = 1;
    if (!options.rate) options.rate = 1;
    audio.pause();
    if (!iOS) {
      audio.volume = options.volume;
      audio.defaultPlaybackRate = options.rate;
    }
    audio.src = getAudioUrl(utterance, options.lang, options.voice.voiceName);
    audio.oncanplay = function() {
      var waitTime = nextStartTime - new Date().getTime();
      if (waitTime > 0) waitTimer = setTimeout(audio.play.bind(audio), waitTime);
      else audio.play();
      isSpeaking = true;
    };
    audio.onplay = onEvent.bind(null, {type: 'start', charIndex: 0});
    audio.onended = function() {
      onEvent({type: 'end', charIndex: utterance.length});
      isSpeaking = false;
    };
    audio.onerror = function() {
      onEvent({type: "error", errorMessage: audio.error.message});
      isSpeaking = false;
    };
    audio.load();
  }
  this.isSpeaking = function(callback) {
    callback(isSpeaking);
  }
  this.pause =
  this.stop = function() {
    clearTimeout(waitTimer);
    audio.pause();
  }
  this.resume = function() {
    audio.play();
  }
  this.prefetch = function(utterance, options) {
    if (!iOS) {
      prefetchAudio.src = getAudioUrl(utterance, options.lang, options.voice.voiceName);
      prefetchAudio.load();
    }
  }
  this.setNextStartTime = function(time, options) {
    if (!iOS)
      nextStartTime = time || 0;
  }
  this.getVoices = function() {
    return voices;
  }
  this.hasVoice = function(voiceName) {
    return voiceMap[voiceName] != null;
  }
  function getAudioUrl(utterance, lang, voiceName) {
    return serviceUrl + "/read-aloud/speak/" + lang + "/" + encodeURIComponent(voiceName) + "?q=" + encodeURIComponent(utterance);
  }
}
(function() {
  var brapi = (typeof chrome != 'undefined') ? chrome : (typeof browser != 'undefined' ? browser : {});
  var paragraphSplitter = /(?:\s*\r?\n\s*){2,}/;

  $.ajaxSetup({cache: true});

  window.connect = connect;
  window.HtmlDoc = HtmlDoc;

function connect(name) {
  if (!window.docReady) window.docReady = makeDoc();
  window.docReady.then(function(doc) {startService(name, doc)});
}


function startService(name, doc) {
  var port = brapi.runtime.connect({name: name});
  port.onMessage.addListener(dispatch.bind(null, {
    raGetInfo: getInfo,
    raGetCurrentIndex: getCurrentIndex,
    raGetTexts: getTexts,
  }))

  function dispatch(handlers, message) {
    var request = message.request;
    if (handlers[request.method]) {
      var result = handlers[request.method](request);
      Promise.resolve(result).then(function(response) {
        port.postMessage({id: message.id, response: response});
      });
    }
  }

  function getInfo(request) {
    var lang = document.documentElement.lang || $("html").attr("xml:lang");
    if (lang) lang = lang.split(",",1)[0].replace(/_/g, '-');
    if (lang == "en" || lang == "en-US") lang = null;    //foreign language pages often erronenously declare lang="en"
    return {
      url: location.href,
      title: document.title,
      lang: lang,
      requireJs: doc.requireJs
    }
  }

  function getCurrentIndex(request) {
    if (getSelectedText()) return -100;
    else return doc.getCurrentIndex();
  }

  function getTexts(request) {
    if (request.index < 0) {
      if (request.index == -100) return getSelectedText().split(paragraphSplitter);
      else return null;
    }
    else {
      return Promise.resolve(doc.getTexts(request.index, request.quietly))
        .then(function(texts) {
          if (texts) {
            texts = texts.map(removeLinks);
            if (!request.quietly) console.log(texts.join("\n\n"));
          }
          return texts;
        })
    }
  }

  function getSelectedText() {
    return window.getSelection().toString().trim();
  }

  function removeLinks(text) {
    return text.replace(/https?:\/\/\S+/g, "this URL.");
  }
}


function makeDoc() {
  return domReady()
    .then(createDoc)
    .then(function(doc) {
      return Promise.resolve(doc.ready).then(function() {return doc});
    })

  function domReady() {
    return new Promise(function(fulfill) {
      $(fulfill);
    })
  }

  function createDoc() {
    if (location.hostname == "docs.google.com") {
      if ($(".kix-appview-editor").length) return new GoogleDoc();
      else if ($(".drive-viewer-paginated-scrollable").length) return new GDriveDoc();
      else return new HtmlDoc();
    }
    else if (location.hostname == "drive.google.com") return new GDriveDoc();
    else if (/^read\.amazon\./.test(location.hostname)) return new KindleBook();
    else if (location.hostname == "www.khanacademy.org") return new KhanAcademy();
    else if (location.pathname.match(/\.pdf$/)) return new PdfDoc(location.href);
    else if ($("embed[type='application/pdf']").length) return new PdfDoc($("embed[type='application/pdf']").attr("src"));
    else return new HtmlDoc();
  }
}


function GoogleDoc() {
  var viewport = $(".kix-appview-editor").get(0);
  var pages = $(".kix-page");
  var selectionState;

  this.requireJs = ["js/googleDocsUtil.js"];

  this.getCurrentIndex = function() {
    if (getSelectedText()) return 9999;

    for (var i=0; i<pages.length; i++) if (pages.eq(i).position().top > viewport.scrollTop+$(viewport).height()/2) break;
    return i-1;
  }

  this.getTexts = function(index, quietly) {
    if (index == 9999) return [getSelectedText()];

    var page = pages.get(index);
    if (page) {
      var oldScrollTop = viewport.scrollTop;
      viewport.scrollTop = $(page).position().top;
      return tryGetTexts(getTexts.bind(page), 2000)
        .then(function(result) {
          if (quietly) viewport.scrollTop = oldScrollTop;
          return result;
        })
    }
    else return null;
  }

  function getTexts() {
    return $(".kix-paragraphrenderer", this).get()
      .map(getInnerText)
      .filter(isNotEmpty);
  }

  function getSelectedText() {
    var doc = googleDocsUtil.getGoogleDocument();
    //first time
    if (!selectionState) selectionState = {caret: doc.caret.index, prev: [], text: doc.selectedText};
    //if caret has not moved, assume selection state hasn't changed
    //if caret has moved, update selection state
    if (selectionState.caret != doc.caret.index) {
      selectionState.caret = doc.caret.index;
      selectionState.prev.push(selectionState.text);
      selectionState.text = doc.selectedText;
      selectionState.prev = selectionState.prev.filter(function(text) {
        var index = selectionState.text.indexOf(text);
        if (index != -1) selectionState.text = selectionState.text.slice(0,index) + selectionState.text.slice(index+text.length);
        return index != -1;
      })
    }
    return selectionState.text;
  }
}


function GDriveDoc() {
  var viewport = $(".drive-viewer-paginated-scrollable").get(0);
  var pages = $(".drive-viewer-paginated-page");

  this.getCurrentIndex = function() {
    for (var i=0; i<pages.length; i++) if (pages.eq(i).position().top > viewport.scrollTop+$(viewport).height()/2) break;
    return i-1;
  }

  this.getTexts = function(index, quietly) {
    var page = pages.get(index);
    if (page) {
      var oldScrollTop = viewport.scrollTop;
      viewport.scrollTop = $(page).position().top;
      return tryGetTexts(getTexts.bind(page), 3000)
        .then(function(result) {
          if (quietly) viewport.scrollTop = oldScrollTop;
          return result;
        })
    }
    else return null;
  }

  function getTexts() {
    var texts = $("p", this).get()
      .map(getInnerText)
      .filter(isNotEmpty);
    return fixParagraphs(texts);
  }
}


function KindleBook() {
  var mainDoc = document.getElementById("KindleReaderIFrame").contentDocument;
  var btnNext = mainDoc.getElementById("kindleReader_pageTurnAreaRight");
  var btnPrev = mainDoc.getElementById("kindleReader_pageTurnAreaLeft");
  var contentFrames = [
    mainDoc.getElementById("column_0_frame_0"),
    mainDoc.getElementById("column_0_frame_1"),
    mainDoc.getElementById("column_1_frame_0"),
    mainDoc.getElementById("column_1_frame_1")
  ];
  var currentIndex = 0;
  var lastText;

  this.getCurrentIndex = function() {
    return currentIndex = 0;
  }

  this.getTexts = function(index) {
    for (; currentIndex<index; currentIndex++) $(btnNext).click();
    for (; currentIndex>index; currentIndex--) $(btnPrev).click();
    return tryGetTexts(getTexts, 4000);
  }

  function getTexts() {
    var texts = [];
    contentFrames.filter(function(frame) {
      return frame != null && frame.style.visibility != "hidden";
    })
    .forEach(function(frame) {
      var frameHeight = $(frame).height();
      $("h1, h2, h3, h4, h5, h6, .was-a-p", frame.contentDocument).each(function() {
        var top = $(this).offset().top;
        var bottom = top + $(this).height();
        if (top >= 0 && top < frameHeight) texts.push($(this).text());
      })
    })
    var out = [];
    for (var i=0; i<texts.length; i++) {
      if (texts[i] != (out.length ? out[out.length-1] : lastText)) out.push(texts[i]);
    }
    lastText = out[out.length-1];
    return out;
  }
}


function PdfDoc(url) {
  var queue = new EventQueue("PdfDoc");

  this.ready = new Promise(function(fulfill) {
    queue.once("pageScriptLoaded", function() {
      queue.trigger("loadDocument", url);
    })
    queue.once("documentLoaded", fulfill);
    loadPageScript("https://assets.lsdsoftware.com/read-aloud/page-scripts/pdf-viewer.js");
  })

  this.getCurrentIndex = function() {
    return new Promise(function(fulfill) {
      queue.once("currentIndexGot", fulfill).trigger("getCurrentIndex");
    })
  }

  this.getTexts = function(index, quietly) {
    return new Promise(function(fulfill) {
      queue.once("textsGot", fulfill).trigger("getTexts", index, quietly);
    })
  }
}


function KhanAcademy() {
  this.getCurrentIndex = function() {
    return 0;
  }

  this.getTexts = function(index) {
    if (index == 0) return parse();
    else return null;
  }

  function parse() {
    return $("h1:first")
      .add($("> :not(ul, ol), > ul > li, > ol > li", ".paragraph:not(.paragraph .paragraph)"))
      .get()
      .map(function(elem) {
        var text = getInnerText(elem);
        if ($(elem).is("li")) return ($(elem).index() + 1) + ". " + text;
        else return text;
      })
  }
}


function HtmlDoc() {
  var ignoreTags = "select, textarea, button, label, audio, video, dialog, embed, menu, nav, noframes, noscript, object, script, style, svg, aside, footer, #footer, .no-read-aloud";

  this.getCurrentIndex = function() {
    return 0;
  }

  this.getTexts = function(index) {
    if (index == 0) return parse();
    else return null;
  }

  function parse() {
    //find blocks containing text
    var start = new Date();
    var textBlocks = findTextBlocks(100);
    var countChars = textBlocks.reduce(function(sum, elem) {return sum + getInnerText(elem).length}, 0);
    console.log("Found", textBlocks.length, "blocks", countChars, "chars in", new Date()-start, "ms");

    if (countChars < 1000) {
      textBlocks = findTextBlocks(3);
      var texts = textBlocks.map(getInnerText);
      console.log("Using lower threshold, found", textBlocks.length, "blocks", texts.join("").length, "chars");

      //trim the head and the tail
      var head, tail;
      for (var i=3; i<texts.length && !head; i++) {
        var dist = getGaussian(texts, 0, i);
        if (texts[i].length > dist.mean + 2*dist.stdev) head = i;
      }
      for (var i=texts.length-4; i>=0 && !tail; i--) {
        var dist = getGaussian(texts, i+1, texts.length);
        if (texts[i].length > dist.mean + 2*dist.stdev) tail = i+1;
      }
      if (head||tail) {
        textBlocks = textBlocks.slice(head||0, tail);
        console.log("Trimmed", head, tail);
      }
    }

    //mark the elements to be read
    var toRead = [];
    for (var i=0; i<textBlocks.length; i++) {
      toRead.push.apply(toRead, findHeadingsFor(textBlocks[i], textBlocks[i-1]));
      toRead.push(textBlocks[i]);
    }
    $(toRead).addClass("read-aloud");   //for debugging only

    //extract texts
    var texts = toRead.map(getTexts);
    return flatten(texts).filter(isNotEmpty);
  }

  function findTextBlocks(threshold) {
    var skipTags = "h1, h2, h3, h4, h5, h6, p, a[href], " + ignoreTags;
    var isTextNode = function(node) {
      return node.nodeType == 3 && node.nodeValue.trim().length >= 3;
    };
    var isParagraph = function(node) {
      return node.nodeType == 1 && $(node).is("p") && getInnerText(node).length >= threshold;
    };
    var hasTextNodes = function(elem) {
      return someChildNodes(elem, isTextNode) && getInnerText(elem).length >= threshold;
    };
    var hasParagraphs = function(elem) {
      return someChildNodes(elem, isParagraph);
    };
    var containsTextBlocks = function(elem) {
      var childElems = $(elem).children(":not(" + skipTags + ")").get();
      return childElems.some(hasTextNodes) || childElems.some(hasParagraphs) || childElems.some(containsTextBlocks);
    };
    var addBlock = function(elem, multi) {
      if (multi) $(elem).data("read-aloud-multi-block", true);
      textBlocks.push(elem);
    };
    var walk = function() {
      if ($(this).is("frame, iframe")) try {walk.call(this.contentDocument.body)} catch(err) {}
      else if ($(this).is("dl")) addBlock(this);
      else if ($(this).is("ol, ul")) {
        var items = $(this).children().get();
        if (items.some(hasTextNodes)) addBlock(this);
        else if (items.some(hasParagraphs)) addBlock(this, true);
        else if (items.some(containsTextBlocks)) addBlock(this, true);
      }
      else if ($(this).is("tbody")) {
        var rows = $(this).children();
        if (rows.length > 3 || rows.eq(0).children().length > 3) {
          if (rows.get().some(containsTextBlocks)) addBlock(this, true);
        }
        else rows.each(walk);
      }
      else {
        if (hasTextNodes(this)) addBlock(this);
        else if (hasParagraphs(this)) addBlock(this, true);
        else $(this).children(":not(" + skipTags + ")").each(walk);
      }
    };
    var textBlocks = [];
    walk.call(document.body);
    return textBlocks.filter(function(elem) {
      return $(elem).is(":visible") && $(elem).offset().left >= 0;
    })
  }

  function getGaussian(texts, start, end) {
    if (start == undefined) start = 0;
    if (end == undefined) end = texts.length;
    var sum = 0;
    for (var i=start; i<end; i++) sum += texts[i].length;
    var mean = sum / (end-start);
    var variance = 0;
    for (var i=start; i<end; i++) variance += (texts[i].length-mean)*(texts[i].length-mean);
    return {mean: mean, stdev: Math.sqrt(variance)};
  }

  function getTexts(elem) {
    var toHide = $(elem).find(":visible").filter(dontRead).hide();
    $(elem).find("ol, ul").addBack("ol, ul").each(addNumbering);
    var texts = $(elem).data("read-aloud-multi-block")
      ? $(elem).children(":visible").get().map(getText)
      : getText(elem).split(paragraphSplitter);
    $(elem).find(".read-aloud-numbering").remove();
    toHide.show();
    return texts;
  }

  function addNumbering() {
    var children = $(this).children();
    var text = children.length ? getInnerText(children.get(0)) : null;
    if (text && !text.match(/^[(]?(\d|[a-zA-Z][).])/))
      children.each(function(index) {
        $("<span>").addClass("read-aloud-numbering").text((index +1) + ". ").prependTo(this);
      })
  }

  function dontRead() {
    var float = $(this).css("float");
    var position = $(this).css("position");
    return $(this).is(ignoreTags) || $(this).is("sup") || float == "right" || position == "fixed";
  }

  function getText(elem) {
    return addMissingPunctuation(elem.innerText).trim();
  }

  function addMissingPunctuation(text) {
    return text.replace(/(\w)(\s*?\r?\n)/g, "$1.$2");
  }

  function findHeadingsFor(block, prevBlock) {
    var result = [];
    var firstInnerElem = $(block).find("h1, h2, h3, h4, h5, h6, p").filter(":visible").get(0);
    var currentLevel = getHeadingLevel(firstInnerElem);
    var node = previousNode(block, true);
    while (node && node != prevBlock) {
      var ignore = $(node).is(ignoreTags);
      if (!ignore && node.nodeType == 1 && $(node).is(":visible")) {
        var level = getHeadingLevel(node);
        if (level < currentLevel) {
          result.push(node);
          currentLevel = level;
        }
      }
      node = previousNode(node, ignore);
    }
    return result.reverse();
  }

  function getHeadingLevel(elem) {
    var matches = elem && /^H(\d)$/i.exec(elem.tagName);
    return matches ? Number(matches[1]) : 100;
  }

  function previousNode(node, skipChildren) {
    if ($(node).is('body')) return null;
    if (node.nodeType == 1 && !skipChildren && node.lastChild) return node.lastChild;
    if (node.previousSibling) return node.previousSibling;
    return previousNode(node.parentNode, true);
  }

  function someChildNodes(elem, test) {
    var child = elem.firstChild;
    while (child) {
      if (test(child)) return true;
      child = child.nextSibling;
    }
    return false;
  }

  function flatten(array) {
    return [].concat.apply([], array);
  }
}


//helpers --------------------------

function getInnerText(elem) {
  var text = elem.innerText;
  return text ? text.trim() : "";
}

function isNotEmpty(text) {
  return text;
}

function fixParagraphs(texts) {
  var out = [];
  var para = "";
  for (var i=0; i<texts.length; i++) {
    if (!texts[i]) {
      if (para) {
        out.push(para);
        para = "";
      }
      continue;
    }
    if (para) {
      if (/-$/.test(para)) para = para.substr(0, para.length-1);
      else para += " ";
    }
    para += texts[i].replace(/-\r?\n/g, "");
    if (texts[i].match(/[.!?:)"'\u2019\u201d]$/)) {
      out.push(para);
      para = "";
    }
  }
  if (para) out.push(para);
  return out;
}

function tryGetTexts(getTexts, millis) {
  return waitMillis(500)
    .then(getTexts)
    .then(function(texts) {
      if (texts && !texts.length && millis-500 > 0) return tryGetTexts(getTexts, millis-500);
      else return texts;
    })

  function waitMillis(millis) {
    return new Promise(function(fulfill) {
      setTimeout(fulfill, millis);
    });
  }
}

function loadPageScript(url) {
  if (!$("head").length) $("<head>").prependTo("html");
  $.getScript(url);
}

function EventQueue(prefix) {
  this.on = function(eventType, callback) {
    document.addEventListener(prefix+eventType, function(event) {
      callback.apply(null, JSON.parse(event.detail));
    })
    return this;
  }

  this.once = function(eventType, callback) {
    var handler = function(event) {
      document.removeEventListener(prefix+eventType, handler);
      callback.apply(null, JSON.parse(event.detail));
    };
    document.addEventListener(prefix+eventType, handler);
    return this;
  }

  this.trigger = function(eventType) {
    var args = Array.prototype.slice.call(arguments, 1);
    document.dispatchEvent(new CustomEvent(prefix+eventType, {detail: JSON.stringify(args)}));
    return this;
  }
}

})();

function Speech(texts, options) {
  options.rate = (options.rate || 1) * (isGoogleNative(options.voice.voiceName) ? 0.9 : (isGoogleTranslate(options.voice.voiceName) ? 1.1 : 1));

  for (var i=0; i<texts.length; i++) if (/\w$/.test(texts[i])) texts[i] += '.';
  if (texts.length) texts = getChunks(texts.join("\n\n"));

  var engine = options.engine || pickEngine();
  var pauseDuration = isGoogleTranslate(options.voice.voiceName) ? 0 : (650/options.rate);
  var state = "IDLE";
  var index = 0;
  var delayedPlayTimer;

  this.options = options;
  this.play = play;
  this.pause = pause;
  this.stop = stop;
  this.getState = getState;
  this.getPosition = getPosition;
  this.forward = forward;
  this.rewind = rewind;
  this.gotoEnd = gotoEnd;

  function pickEngine() {
    if (isRemoteVoice(options.voice.voiceName)) return remoteTtsEngine;
    if (isGoogleNative(options.voice.voiceName)) return new TimeoutTtsEngine(browserTtsEngine, 16*1000);
    return browserTtsEngine;
  }

  function getChunks(text) {
    var isEA = /^zh|ko|ja/.test(options.lang);
    var punctuator = isEA ? new EastAsianPunctuator() : new LatinPunctuator();
    if (isGoogleNative(options.voice.voiceName)) {
      var wordLimit = (/^(de|ru)/.test(options.lang) ? 32 : 36) * (isEA ? 2 : 1) * options.rate;
      return new WordBreaker(wordLimit, punctuator).breakText(text);
    }
    else {
      if (isGoogleTranslate(options.voice.voiceName)) return new CharBreaker(200, punctuator).breakText(text);
      else return new CharBreaker(500, punctuator, 200).breakText(text);
    }
  }

  function getState() {
    return new Promise(function(fulfill) {
      engine.isSpeaking(function(isSpeaking) {
        if (state == "PLAYING") fulfill(isSpeaking ? "PLAYING" : "LOADING");
        else fulfill("PAUSED");
      })
    })
  }

  function getPosition() {
    return {
      index: index,
      texts: texts,
    }
  }

  function play() {
    if (index >= texts.length) {
      state = "IDLE";
      if (options.onEnd) options.onEnd();
      return Promise.resolve();
    }
    else if (state == "PAUSED") {
      state = "PLAYING";
      engine.resume();
      return Promise.resolve();
    }
    else {
      state = new String("PLAYING");
      state.startTime = new Date().getTime();
      return speak(texts[index],
        function() {
          state = "IDLE";
          if (engine.setNextStartTime) engine.setNextStartTime(new Date().getTime() + pauseDuration, options);
          index++;
          play();
        },
        function(err) {
          state = "IDLE";
          if (options.onEnd) options.onEnd(err);
        })
        .then(function() {
          if (texts[index+1] && engine.prefetch) engine.prefetch(texts[index+1], options);
        })
    }
  }

  function delayedPlay() {
    clearTimeout(delayedPlayTimer);
    delayedPlayTimer = setTimeout(play, 750);
    return Promise.resolve();
  }

  function pause() {
    if (engine.pause) {
      engine.pause();
      state = "PAUSED";
      return Promise.resolve();
    }
    else return stop();
  }

  function stop() {
    engine.stop();
    state = "IDLE";
    return Promise.resolve();
  }

  function forward() {
    if (index+1 < texts.length) {
      index++;
      return delayedPlay();
    }
    else return Promise.reject(new Error("Can't forward, at end"));
  }

  function rewind() {
    if (state == "PLAYING" && new Date().getTime()-state.startTime > 3*1000) {
      return play();
    }
    else if (index > 0) {
      index--;
      return play();
    }
    else return Promise.reject(new Error("Can't rewind, at beginning"));
  }

  function gotoEnd() {
    index = texts.length && texts.length-1;
  }

  function speak(text, onEnd, onError) {
    return new Promise(function(fulfill) {
      engine.speak(text, options, function(event) {
        if (event.type == "start") fulfill();
        else if (event.type == "end") onEnd();
        else if (event.type == "error") onError(new Error(event.errorMessage || "Unknown TTS error"));
      })
    })
  }


//text breakers

function WordBreaker(wordLimit, punctuator) {
  this.breakText = breakText;
  function breakText(text) {
    return merge(punctuator.getParagraphs(text), breakParagraph);
  }
  function breakParagraph(text) {
    return merge(punctuator.getSentences(text), breakSentence);
  }
  function breakSentence(sentence) {
    return merge(punctuator.getPhrases(sentence), breakPhrase);
  }
  function breakPhrase(phrase) {
    var words = punctuator.getWords(phrase);
    var splitPoint = Math.min(Math.ceil(words.length/2), wordLimit);
    var result = [];
    while (words.length) {
      result.push(words.slice(0, splitPoint).join(""));
      words = words.slice(splitPoint);
    }
    return result;
  }
  function merge(parts, breakPart) {
    var result = [];
    var group = {parts: [], wordCount: 0};
    var flush = function() {
      if (group.parts.length) {
        result.push(group.parts.join(""));
        group = {parts: [], wordCount: 0};
      }
    };
    parts.forEach(function(part) {
      var wordCount = punctuator.getWords(part).length;
      if (wordCount > wordLimit) {
        flush();
        var subParts = breakPart(part);
        for (var i=0; i<subParts.length; i++) result.push(subParts[i]);
      }
      else {
        if (group.wordCount + wordCount > wordLimit) flush();
        group.parts.push(part);
        group.wordCount += wordCount;
      }
    });
    flush();
    return result;
  }
}

function CharBreaker(charLimit, punctuator, paragraphCombineThreshold) {
  this.breakText = breakText;
  function breakText(text) {
    return merge(punctuator.getParagraphs(text), breakParagraph, paragraphCombineThreshold);
  }
  function breakParagraph(text) {
    return merge(punctuator.getSentences(text), breakSentence);
  }
  function breakSentence(sentence) {
    return merge(punctuator.getPhrases(sentence), breakPhrase);
  }
  function breakPhrase(phrase) {
    return merge(punctuator.getWords(phrase), breakWord);
  }
  function breakWord(word) {
    var result = [];
    while (word) {
      result.push(word.slice(0, charLimit));
      word = word.slice(charLimit);
    }
    return result;
  }
  function merge(parts, breakPart, combineThreshold) {
    var result = [];
    var group = {parts: [], charCount: 0};
    var flush = function() {
      if (group.parts.length) {
        result.push(group.parts.join(""));
        group = {parts: [], charCount: 0};
      }
    };
    parts.forEach(function(part) {
      var charCount = part.length;
      if (charCount > charLimit) {
        flush();
        var subParts = breakPart(part);
        for (var i=0; i<subParts.length; i++) result.push(subParts[i]);
      }
      else {
        if (group.charCount + charCount > (combineThreshold || charLimit)) flush();
        group.parts.push(part);
        group.charCount += charCount;
      }
    });
    flush();
    return result;
  }
}

//punctuators

function LatinPunctuator() {
  this.getParagraphs = function(text) {
    return recombine(text.split(/((?:\r?\n\s*){2,})/));
  }
  this.getSentences = function(text) {
    return recombine(text.split(/([.!?]+[\s\u200b]+)/));
  }
  this.getPhrases = function(sentence) {
    return recombine(sentence.split(/([,;:]\s+|\s-+\s+|—\s*)/));
  }
  this.getWords = function(sentence) {
    var tokens = sentence.trim().split(/([~@#%^*_+=<>]|[\s\-—/]+|\.(?=\w{2,})|,(?=[0-9]))/);
    var result = [];
    for (var i=0; i<tokens.length; i+=2) {
      if (tokens[i]) result.push(tokens[i]);
      if (i+1 < tokens.length) {
        if (/^[~@#%^*_+=<>]$/.test(tokens[i+1])) result.push(tokens[i+1]);
        else if (result.length) result[result.length-1] += tokens[i+1];
      }
    }
    return result;
  }
  function recombine(tokens) {
    var result = [];
    for (var i=0; i<tokens.length; i+=2) {
      if (i+1 < tokens.length) result.push(tokens[i] + tokens[i+1]);
      else if (tokens[i]) result.push(tokens[i]);
    }
    return result;
  }
}

function EastAsianPunctuator() {
  this.getParagraphs = function(text) {
    return recombine(text.split(/((?:\r?\n\s*){2,})/));
  }
  this.getSentences = function(text) {
    return recombine(text.split(/([.!?]+[\s\u200b]+|[\u3002\uff01]+)/));
  }
  this.getPhrases = function(sentence) {
    return recombine(sentence.split(/([,;:]\s+|[\u2025\u2026\u3000\u3001\uff0c\uff1b]+)/));
  }
  this.getWords = function(sentence) {
    return sentence.replace(/\s+/g, "").split("");
  }
  function recombine(tokens) {
    var result = [];
    for (var i=0; i<tokens.length; i+=2) {
      if (i+1 < tokens.length) result.push(tokens[i] + tokens[i+1]);
      else if (tokens[i]) result.push(tokens[i]);
    }
    return result;
  }
}

  function TimeoutTtsEngine(baseEngine, timeoutMillis) {
    var timer;
    this.speak = function(text, options, onEvent) {
      clearTimeout(timer);
      timer = setTimeout(function() {
        baseEngine.stop();
        onEvent({type: "end", charIndex: text.length});
      },
      timeoutMillis);
      baseEngine.speak(text, options, function(event) {
          if (event.type == "end" || event.type == "error") clearTimeout(timer);
          onEvent(event);
      })
    }
    this.stop = function() {
      clearTimeout(timer);
      baseEngine.stop();
    }
    this.isSpeaking = baseEngine.isSpeaking;
  }
}

var readAloud = new function() {
  var pauseBtn = document.querySelector(".ra-pause");
  if (pauseBtn) pauseBtn.style.display = "none";

  if (typeof Promise == 'undefined') ajaxGetCb("https://cdn.jsdelivr.net/npm/es6-promise@4/dist/es6-promise.auto.min.js", eval);

  var speech;
  var voiceProvider = new VoiceProvider();
  var attribution = new Attribution();

  this.play = function(options) {
    return ready()
      .then(function() {
        return speech ? speech.play() : speak(new HtmlDoc().getTexts(0), options);
      })
      .then(updateButtons)
  };
  this.speak = function(text, options) {
    return ready()
      .then(speak.bind(this, text, options))
      .then(updateButtons)
  };
  this.pause = function() {
    return speech ? speech.pause().then(updateButtons) : Promise.resolve();
  };
  this.isPlaying = isPlaying;

  function ready() {
    if (window.jQuery) {
      if (!window.$) window.$ = window.jQuery;
      else if (window.$ != window.jQuery) console.warn("WARNING: TalkToMe embed script may not work because $ != jQuery.");
      return Promise.resolve();
    }
    else return ajaxGet("https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js").then(eval);
  }

  function speak(texts, options) {
    return voiceProvider.getVoice(options.lang).then(function(voice) {
      if (!voice) {
        alert("Language not supported '" + options.lang + "'");
        return;
      }
      options.voice = voice;
      options.onEnd = function() {speech = null; updateButtons()};
      if (speech) speech.stop();
      speech = new Speech(texts, options);
      return speech.play();
    })
  }

  function updateButtons() {
    return isPlaying()
      .then(function(playing) {
        $(".ra-play").toggle(!playing);
        $(".ra-pause").toggle(playing);
        attribution.toggle(playing && isGoogleTranslate(speech.options.voice.voiceName));
      })
  }

  function isPlaying() {
    if (speech) return speech.getState().then(function(state) {return state != "PAUSED"});
    else return Promise.resolve(false);
  }

  //voice provider
  function VoiceProvider() {
    this.getVoice = function(lang) {
      return getVoices().then(function(voices) {
        return findVoiceByLang(voices.filter(function(voice) {return !isRemoteVoice(voice.voiceName)}), lang)
          || findVoiceByLang(voices.filter(function(voice) {return isMicrosoftCloud(voice.voiceName)}), lang)
          || findVoiceByLang(voices, lang);
      })
    }

    //from document.js
    function findVoiceByLang(voices, lang) {
      var speechLang = parseLang(lang);
      var match = {};
      voices.forEach(function(voice) {
        if (voice.lang) {
          var voiceLang = parseLang(voice.lang);
          if (voiceLang.lang == speechLang.lang) {
            if (voiceLang.rest == speechLang.rest) {
              if (voice.gender == "female") match.first = match.first || voice;
              else match.second = match.second || voice;
            }
            else if (!voiceLang.rest) match.third = match.third || voice;
            else {
              if (voiceLang.lang == 'en' && voiceLang.rest == 'us') match.fourth = voice;
              else match.fourth = match.fourth || voice;
            }
          }
        }
      });
      return match.first || match.second || match.third || match.fourth;
    }
  }

  //google translate attribution
  function Attribution() {
    var elem;

    function create() {
      elem = $("<div/>").appendTo(document.body);
    $("<div>powered&nbsp;by</div>").css({color: "#888", "margin-bottom": "3px"}).appendTo(elem);
    $("<span>G</span>").css("color", "#4885ed").appendTo(elem);
    $("<span>o</span>").css("color", "#db3236").appendTo(elem);
    $("<span>o</span>").css("color", "#f4c20d").appendTo(elem);
    $("<span>g</span>").css("color", "#4885ed").appendTo(elem);
    $("<span>l</span>").css("color", "#3cba54").appendTo(elem);
    $("<span>e</span>").css("color", "#db3236").appendTo(elem);
    $("<span>&nbsp;Translate</span>").css("color", "#888").appendTo(elem);

    elem.css({
      display: "none",
      position: "absolute",
      padding: "6px",
      color: "black",
      "background-color": "white",
      "border-radius": "3px",
      "box-shadow": "1px 1px 3px gray",
      "font-family": "Arial, Helvetica, sans-serif",
      "font-size": "small",
      "text-align": "center",
      cursor: "pointer"
    })
    .click(function() {
      window.open("https://translate.google.com/", "_blank");
    });
    }

    this.toggle = function(b) {
      if (b) {
        if (!elem) create();
        var offset = $(".ra-pause").offset();
        if (offset) {
          offset.left = Math.max(0, offset.left + $(".ra-pause").outerWidth() / 2 - elem.outerWidth() / 2);
          offset.top += $(".ra-pause").height() + 5;
          elem.css(offset).show();
        }
      }
      else elem && elem.hide();
    }
  }
}
"use strict";var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};
//! annyang
//! version : 2.6.1
//! author  : Tal Ater @TalAter
//! license : MIT
//! https://www.TalAter.com/annyang/
//! annyang
//! version : 2.6.1
//! author  : Tal Ater @TalAter
//! license : MIT
//! https://www.TalAter.com/annyang/
!function(e,n){"function"==typeof define&&define.amd?define([],function(){return e.annyang=n(e)}):"object"===("undefined"==typeof module?"undefined":_typeof(module))&&module.exports?module.exports=n(e):e.annyang=n(e)}("undefined"!=typeof window?window:void 0,function(r,i){var t,o=r.SpeechRecognition||r.webkitSpeechRecognition||r.mozSpeechRecognition||r.msSpeechRecognition||r.oSpeechRecognition;if(!o)return null;var a,c,s=[],u={start:[],error:[],end:[],soundstart:[],result:[],resultMatch:[],resultNoMatch:[],errorNetwork:[],errorPermissionBlocked:[],errorPermissionDenied:[]},f=0,l=0,d=!1,p="font-weight: bold; color: #00f;",g=!1,m=!1,h=/\s*\((.*?)\)\s*/g,y=/(\(\?:[^)]+\))\?/g,b=/(\(\?)?:\w+/g,v=/\*\w+/g,w=/[\-{}\[\]+?.,\\\^$|#]/g,S=function(e){for(var n=arguments.length,t=Array(1<n?n-1:0),o=1;o<n;o++)t[o-1]=arguments[o];e.forEach(function(e){e.callback.apply(e.context,t)})},e=function(){return a!==i},k=function(e,n){-1!==e.indexOf("%c")||n?console.log(e,n||p):console.log(e)},x=function(){e()||t.init({},!1)},R=function(e,n,t){s.push({command:e,callback:n,originalPhrase:t}),d&&k("Command successfully loaded: %c"+t,p)},P=function(e){var n;S(u.result,e);for(var t=0;t<e.length;t++){n=e[t].trim(),d&&k("Speech recognized: %c"+n,p);for(var o=0,r=s.length;o<r;o++){var i=s[o],a=i.command.exec(n);if(a){var c=a.slice(1);return d&&(k("command matched: %c"+i.originalPhrase,p),c.length&&k("with parameters",c)),i.callback.apply(this,c),void S(u.resultMatch,n,i.originalPhrase,e)}}}S(u.resultNoMatch,e)};return t={init:function(e){var n=!(1<arguments.length&&arguments[1]!==i)||arguments[1];a&&a.abort&&a.abort(),(a=new o).maxAlternatives=5,a.continuous="http:"===r.location.protocol,a.lang="en-US",a.onstart=function(){m=!0,S(u.start)},a.onsoundstart=function(){S(u.soundstart)},a.onerror=function(e){switch(S(u.error,e),e.error){case"network":S(u.errorNetwork,e);break;case"not-allowed":case"service-not-allowed":c=!1,(new Date).getTime()-f<200?S(u.errorPermissionBlocked,e):S(u.errorPermissionDenied,e)}},a.onend=function(){if(m=!1,S(u.end),c){var e=(new Date).getTime()-f;(l+=1)%10==0&&d&&k("Speech Recognition is repeatedly stopping and starting. See http://is.gd/annyang_restarts for tips."),e<1e3?setTimeout(function(){t.start({paused:g})},1e3-e):t.start({paused:g})}},a.onresult=function(e){if(g)return d&&k("Speech heard, but annyang is paused"),!1;for(var n=e.results[e.resultIndex],t=[],o=0;o<n.length;o++)t[o]=n[o].transcript;P(t)},n&&(s=[]),e.length&&this.addCommands(e)},start:function(e){x(),g=(e=e||{}).paused!==i&&!!e.paused,c=e.autoRestart===i||!!e.autoRestart,e.continuous!==i&&(a.continuous=!!e.continuous),f=(new Date).getTime();try{a.start()}catch(e){d&&k(e.message)}},abort:function(){c=!1,l=0,e()&&a.abort()},pause:function(){g=!0},resume:function(){t.start()},debug:function(){var e=!(0<arguments.length&&arguments[0]!==i)||arguments[0];d=!!e},setLanguage:function(e){x(),a.lang=e},addCommands:function(e){var n,t;for(var o in x(),e)if(e.hasOwnProperty(o))if("function"==typeof(n=r[e[o]]||e[o]))R((t=(t=o).replace(w,"\\$&").replace(h,"(?:$1)?").replace(b,function(e,n){return n?e:"([^\\s]+)"}).replace(v,"(.*?)").replace(y,"\\s*$1?\\s*"),new RegExp("^"+t+"$","i")),n,o);else{if(!("object"===(void 0===n?"undefined":_typeof(n))&&n.regexp instanceof RegExp)){d&&k("Can not register command: %c"+o,p);continue}R(new RegExp(n.regexp.source,"i"),n.callback,o)}},removeCommands:function(t){t===i?s=[]:(t=Array.isArray(t)?t:[t],s=s.filter(function(e){for(var n=0;n<t.length;n++)if(t[n]===e.originalPhrase)return!1;return!0}))},addCallback:function(e,n,t){var o=r[n]||n;"function"==typeof o&&u[e]!==i&&u[e].push({callback:o,context:t||this})},removeCallback:function(e,n){var t=function(e){return e.callback!==n};for(var o in u)u.hasOwnProperty(o)&&(e!==i&&e!==o||(u[o]=n===i?[]:u[o].filter(t)))},isListening:function(){return m&&!g},getSpeechRecognizer:function(){return a},trigger:function(e){t.isListening()?(Array.isArray(e)||(e=[e]),P(e)):d&&k(m?"Speech heard, but annyang is paused":"Cannot trigger while annyang is aborted")}}});


// TODO: Add speech based command telling
if (annyang) {
    navigator.mediaDevices.getUserMedia({audio: true})
    // // Let's define a command.
    // var commands = {
    //   'hello': function() { console.log(
    //       "Hello World!!"
    //   ); },
    //   'open *website': function(website){
    //       console.log(website);
    //       chrome.tabs.create({
    //           url: website,
    //           selected: true
    //       })
    //   }
    // };
  
    // // Add our commands to annyang
    // annyang.addCommands(commands);
  
    // // Start listening.
    // annyang.start();

    // console.log(annyang.isListening());
    
    if(!annyang.isListening()){
        //Mic permission not present
        chrome.tabs.create({
			url: chrome.extension.getURL("options.html"),
			selected: true
		});
    }
}
// TODO: Add speech based command telling

"use strict";var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};

//! annyang
//! version : 2.6.1
//! author  : Tal Ater @TalAter
//! license : MIT
//! https://www.TalAter.com/annyang/
//! annyang
//! version : 2.6.1
//! author  : Tal Ater @TalAter
//! license : MIT
//! https://www.TalAter.com/annyang/

!function(e,n){"function"==typeof define&&define.amd?define([],function(){return e.annyang=n(e)}):"object"===("undefined"==typeof module?"undefined":_typeof(module))&&module.exports?module.exports=n(e):e.annyang=n(e)}("undefined"!=typeof window?window:void 0,function(r,i){var t,o=r.SpeechRecognition||r.webkitSpeechRecognition||r.mozSpeechRecognition||r.msSpeechRecognition||r.oSpeechRecognition;if(!o)return null;var a,c,s=[],u={start:[],error:[],end:[],soundstart:[],result:[],resultMatch:[],resultNoMatch:[],errorNetwork:[],errorPermissionBlocked:[],errorPermissionDenied:[]},f=0,l=0,d=!1,p="font-weight: bold; color: #00f;",g=!1,m=!1,h=/\s*\((.*?)\)\s*/g,y=/(\(\?:[^)]+\))\?/g,b=/(\(\?)?:\w+/g,v=/\*\w+/g,w=/[\-{}\[\]+?.,\\\^$|#]/g,S=function(e){for(var n=arguments.length,t=Array(1<n?n-1:0),o=1;o<n;o++)t[o-1]=arguments[o];e.forEach(function(e){e.callback.apply(e.context,t)})},e=function(){return a!==i},k=function(e,n){-1!==e.indexOf("%c")||n?console.log(e,n||p):console.log(e)},x=function(){e()||t.init({},!1)},R=function(e,n,t){s.push({command:e,callback:n,originalPhrase:t}),d&&k("Command successfully loaded: %c"+t,p)},P=function(e){var n;S(u.result,e);for(var t=0;t<e.length;t++){n=e[t].trim(),d&&k("Speech recognized: %c"+n,p);for(var o=0,r=s.length;o<r;o++){var i=s[o],a=i.command.exec(n);if(a){var c=a.slice(1);return d&&(k("command matched: %c"+i.originalPhrase,p),c.length&&k("with parameters",c)),i.callback.apply(this,c),void S(u.resultMatch,n,i.originalPhrase,e)}}}S(u.resultNoMatch,e)};return t={init:function(e){var n=!(1<arguments.length&&arguments[1]!==i)||arguments[1];a&&a.abort&&a.abort(),(a=new o).maxAlternatives=5,a.continuous="http:"===r.location.protocol,a.lang="en-US",a.onstart=function(){m=!0,S(u.start)},a.onsoundstart=function(){S(u.soundstart)},a.onerror=function(e){switch(S(u.error,e),e.error){case"network":S(u.errorNetwork,e);break;case"not-allowed":case"service-not-allowed":c=!1,(new Date).getTime()-f<200?S(u.errorPermissionBlocked,e):S(u.errorPermissionDenied,e)}},a.onend=function(){if(m=!1,S(u.end),c){var e=(new Date).getTime()-f;(l+=1)%10==0&&d&&k("Speech Recognition is repeatedly stopping and starting. See http://is.gd/annyang_restarts for tips."),e<1e3?setTimeout(function(){t.start({paused:g})},1e3-e):t.start({paused:g})}},a.onresult=function(e){if(g)return d&&k("Speech heard, but annyang is paused"),!1;for(var n=e.results[e.resultIndex],t=[],o=0;o<n.length;o++)t[o]=n[o].transcript;P(t)},n&&(s=[]),e.length&&this.addCommands(e)},start:function(e){x(),g=(e=e||{}).paused!==i&&!!e.paused,c=e.autoRestart===i||!!e.autoRestart,e.continuous!==i&&(a.continuous=!!e.continuous),f=(new Date).getTime();try{a.start()}catch(e){d&&k(e.message)}},abort:function(){c=!1,l=0,e()&&a.abort()},pause:function(){g=!0},resume:function(){t.start()},debug:function(){var e=!(0<arguments.length&&arguments[0]!==i)||arguments[0];d=!!e},setLanguage:function(e){x(),a.lang=e},addCommands:function(e){var n,t;for(var o in x(),e)if(e.hasOwnProperty(o))if("function"==typeof(n=r[e[o]]||e[o]))R((t=(t=o).replace(w,"\\$&").replace(h,"(?:$1)?").replace(b,function(e,n){return n?e:"([^\\s]+)"}).replace(v,"(.*?)").replace(y,"\\s*$1?\\s*"),new RegExp("^"+t+"$","i")),n,o);else{if(!("object"===(void 0===n?"undefined":_typeof(n))&&n.regexp instanceof RegExp)){d&&k("Can not register command: %c"+o,p);continue}R(new RegExp(n.regexp.source,"i"),n.callback,o)}},removeCommands:function(t){t===i?s=[]:(t=Array.isArray(t)?t:[t],s=s.filter(function(e){for(var n=0;n<t.length;n++)if(t[n]===e.originalPhrase)return!1;return!0}))},addCallback:function(e,n,t){var o=r[n]||n;"function"==typeof o&&u[e]!==i&&u[e].push({callback:o,context:t||this})},removeCallback:function(e,n){var t=function(e){return e.callback!==n};for(var o in u)u.hasOwnProperty(o)&&(e!==i&&e!==o||(u[o]=n===i?[]:u[o].filter(t)))},isListening:function(){return m&&!g},getSpeechRecognizer:function(){return a},trigger:function(e){t.isListening()?(Array.isArray(e)||(e=[e]),P(e)):d&&k(m?"Speech heard, but annyang is paused":"Cannot trigger while annyang is aborted")}}});


var page_contents = {
    sideBarContent: {
      tags: ["aside"],
      value: new Set(),
      class: [
        "nav",
        "breadcrumb-item",
        "tab-content",
        "page-link",
        "navigation"
      ]
    },
    navigationContent: { tags: ["a"], value: new Set(), class: [] },
    headers: { tags: ["h1", "h2", "h3", "h4", "h5", "h6"], value: new Set(), class: [] },
    paragraphContent: { tags: ["p"], value: new Set(), class: ["content", "main"] }, // What <p> has class of "content"? Solution: use a set
    lists: { tags: ["li"], value: new Set(), class: ["list-group-item"] },
    tableContent: { tags: ["th", "td"], value: new Set(), class: [] },
    imageAlt: { tags: [], value: new Set(), class: [] },
    blockQuotes: { tags: [], value: new Set(), class: ["blockquote"] },
    footers: { tags: ["footer"], value: new Set(), class: ["footer"] },
    buttons: { tags: ["button"], value: new Set(), class: ["button", "btn"] },
    cards: { tags: ["card"], value: new Set(), class: ["card", "cards"] },
    carouselContent: {
      tags: [],
      value: new Set(),
      class: ["carousel-caption", "carousel"]
    }
  };

  function addToContent(tag) {
    var count = document.getElementsByTagName(tag).length;
    content = [];
    for (var i = 0; i < count; i++) {
      content.push(document.getElementsByTagName(tag)[i].innerHTML);
    }
    return content;
  }

  function addToContentWithClass(htmlclass) {
    var count = document.getElementsByClassName(htmlclass).length;
    var content = [];
    for (var i = 0; i < count; i++) {
      content.push(document.getElementsByClassName(htmlclass)[i].innerHTML);
    }
    return content;
  }

  for (var key in page_contents) {
    for (var i = 0; i < page_contents[key].tags.length; ++i) {
    	var content = addToContent(page_contents[key].tags[i]);
    	var count = content.length;
    	for (var j = 0; j < count; j++) {
    		page_contents[key].value.add(content[j]);
    	}
    }
    for (var i = 0; i < page_contents[key].class.length; ++i) {
    	var content = addToContent(page_contents[key].class[i]);
   		var count = content.length;
    	for (var j = 0; j < count; j++) {
    		page_contents[key].value.add(content[j]);
    	}
    }
  }

  //console.log(page_contents["paragraphContent"].value);
  var count = document.getElementsByTagName("img").length;
  for (var i = 0; i < count; i++) {
    page_contents["imageAlt"].value +=
      document.getElementsByTagName("img")[i].getAttribute("alt") + " ";
  }

function getSpeech(texts) {
  return getSettings()
    .then(function(settings) {
      var options = {
        rate: settings.rate || defaults.rate,
        pitch: settings.pitch || defaults.pitch,
        volume: settings.volume || defaults.volume,
        lang: 'en'
      }
      return getSpeechVoice(settings.voiceName, options.lang)
        .then(function(voice) {
          if (!voice) throw new Error(JSON.stringify({code: "error_no_voice", lang: options.lang}));
          options.voice = voice;
          return new Speech(texts, options);
        })
    })
}

function getSpeechVoice(voiceName, lang) {
  return getVoices()
    .then(function(voices) {
      if (voiceName) return findVoiceByName(voices, voiceName);
      else if (lang) {
        return findVoiceByLang(voices.filter(function(voice) {return isGoogleNative(voice.voiceName)}), lang)
          || findVoiceByLang(voices.filter(function(voice) {return !isRemoteVoice(voice.voiceName)}), lang)
          || findVoiceByLang(voices.filter(function(voice) {return !isPremiumVoice(voice.voiceName)}), lang)
          || findVoiceByLang(voices, lang);
      }
      else return null;
    })
}

function findVoiceByName(voices, name) {
  for (var i=0; i<voices.length; i++) if (voices[i].voiceName == name) return voices[i];
  return null;
}

function findVoiceByLang(voices, lang) {
  var speechLang = parseLang(lang);
  var match = {};
  voices.forEach(function(voice) {
    if (voice.lang) {
      var voiceLang = parseLang(voice.lang);
      if (voiceLang.lang == speechLang.lang) {
        if (voiceLang.rest == speechLang.rest) {
          if (voice.gender == "female") match.first = match.first || voice;
          else match.second = match.second || voice;
        }
        else if (!voiceLang.rest) match.third = match.third || voice;
        else {
          if (voiceLang.lang == 'en' && voiceLang.rest == 'us') match.fourth = voice;
          else match.fourth = match.fourth || voice;
        }
      }
    }
  });
  return match.first || match.second || match.third || match.fourth;
}


//Wrapper function for all of the TTS code, pass an array of strings
function speechWrapper(texts){
  return getSpeech(texts)
  .then(
    function(result){
      console.log(result);
      return result.play();
    }
  );
}

if (annyang) {
    // navigator.mediaDevices.getUserMedia({audio: true})
    // Let's define a command.
    var commands = {
      'hello': function() { console.log(
          "Hello World!!"
      ); },
    'show me *website': function(website){
      console.log(website);
        chrome.tabs.create({
          url: "https://"+website+".com",
          selected: true
        });
        speechWrapper(["Opening..", website]);
      },
      'bring me to *website': function(website){
        console.log(website);
        chrome.tabs.create({
          url: "https://"+website+".com",
          selected: true
        });
        speechWrapper(["Opening..", website]);
      },
      'take me to *website': function(website){
          console.log(website);
          chrome.tabs.create({
            url: "https://"+website+".com",
            selected: true
          });
          speechWrapper(["Opening..", website]);
      },
      'open *website': function(website){
          console.log(website);
          chrome.tabs.create({
            url: "https://"+website+".com",
            selected: true
          });
          speechWrapper(["Opening..", website]);
      },
      'navigate to *website': function(website){
        console.log(website);
        chrome.tabs.create({
          url: "https://"+website+".com",
          selected: true
        });
        speechWrapper(["Opening..", website]);
      },
      'search *item': function(item) {
        console.log(item);
        chrome.tabs.create({
          url: "https://www.google.com/search?q=" + item,
          selected: true
        });
        speechWrapper(["Searching for..", item]);
      },
      'tell me what you can do': function {
        console.log("explaining features");
        speechWrapper(["To read the entire webpage, say "Read everything". To read categorized webpage content,\
        say "read" followed by a category such as paragraph content, navigation, headers, lists, tables, images, quotes, footers,\
        buttons, cards, and carousel content. I can also open new webpages and perform Google searches for you."]);
      },
      'read *item': function(item){
        console.log(item);
        getBackgroundPage()
          .then(function(master) {
            return master.play(function(err) {
                if (err) $("#status").text(err.message).show();
              })
              .then(updateButtons)
              .then(master.getDocInfo)
              .then(function(docInfo) {return setState("lastUrl", docInfo && docInfo.url)})
              .catch(function(err) {
                if (err.stack) {
                  master.reportIssue(null, err.stack.startsWith(err.name) ? err.stack : (err.name + ": " + err.message + "\n" + err.stack));
                }
                if (/^{/.test(err.message)) $("#status").text(formatError(JSON.parse(err.message)) || err.message).show();
                else $("#status").text(err.message).show();
              });
          });
        if (item == "content") {
          speechWrapper(Array.from(page_contents['paragraphContent'].value));
        } else if (item == "navigation") {
          speechWrapper(Array.from(page_contents['navigationContent'].value));
        } else if (item == "headers") {
          speechWrapper(Array.from(page_contents['headers'].value));
        } else if (item == "lists") {
          speechWrapper(Array.from(page_contents['lists'].value));
        } else if (item == "tables") {
          speechWrapper(Array.from(page_contents['tableContent'].value));
        } else if (item == "images") {
          speechWrapper(Array.from(page_contents['imageAlt'].value));
        } else if (item == "quotes") {
          speechWrapper(Array.from(page_contents['blockQuotes'].value));
        } else if (item == "footers") {
          speechWrapper(Array.from(page_contents['footers'].value));
        } else if (item == "buttons") {
          speechWrapper(Array.from(page_contents['buttons'].value));
        } else if (item == "cards") {
          speechWrapper(Array.from(page_contents['cards'].value));
        } else if (item == "carousel") {
          speechWrapper(Array.from(page_contents['carouselContent'].value));
        } else if (item == "everything") {
          master.play(function(err) {
            if (err) $("#status").text(err.message).show();
          });
        }
      }
    };

    annyang.addCallback('resultNoMatch', function(userSaid, commandText, phrases) {
        console.log(userSaid); // sample output: 'hello'
        console.log(commandText); // sample output: 'hello (there)'
        console.log(phrases); // sample output: ['hello', 'halo', 'yellow', 'polo', 'hello kitty']
    });

    // Add our commands to annyang
    annyang.addCommands(commands);

    // Start listening.
    annyang.start();

    console.log(annyang.isListening());

    // read everything
    function updateButtons() {
      return getBackgroundPage().then(function(master) {
        return Promise.all([
          getSettings(),
          master.getPlaybackState(),
          master.getActiveSpeech()
        ])
      })
      .then(spread(function(settings, state, speech) {
        $("#imgLoading").toggle(state == "LOADING");
        $("#btnSettings").toggle(state == "STOPPED");
        $("#btnPlay").toggle(state == "PAUSED" || state == "STOPPED");
        $("#btnPause").toggle(state == "PLAYING");
        $("#btnStop").toggle(state == "PAUSED" || state == "PLAYING" || state == "LOADING");
        $("#btnForward, #btnRewind").toggle(state == "PLAYING");
        $("#attribution").toggle(Boolean(speech && isGoogleTranslate(speech.options.voice.voiceName)));
        $("#highlight, #resize").toggle(Boolean(settings.showHighlighting != null ? settings.showHighlighting : defaults.showHighlighting) && (state == "PAUSED" || state == "PLAYING"));

        if (settings.showHighlighting && speech) {
          var pos = speech.getPosition();
          var elem = $("#highlight");
          if (elem.data("texts") != pos.texts) {
            elem.data({texts: pos.texts, index: -1});
            elem.empty();
            for (var i=0; i<pos.texts.length; i++) {
              var html = escapeHtml(pos.texts[i]).replace(/\r?\n/g, "<br/>");
              $("<span>").html(html).appendTo(elem);
            }
          }
          if (elem.data("index") != pos.index) {
            elem.data("index", pos.index);
            elem.children(".active").removeClass("active");
            var child = elem.children().eq(pos.index).addClass("active");
            if (child.length) {
            var childTop = child.position().top;
            var childBottom = childTop + child.outerHeight();
            if (childTop < 0 || childBottom >= elem.height()) elem.animate({scrollTop: elem[0].scrollTop + childTop - 10});
            }
          }
        }
      }));
    }
}
