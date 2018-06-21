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
