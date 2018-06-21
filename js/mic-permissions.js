// TODO: Add speech based command telling
if (annyang) {
    navigator.mediaDevices.getUserMedia({audio: true})
    // Let's define a command.
    var commands = {
      'hello': function() { console.log(
          "Hello World!!"
      ); },
      'open *website': function(website){
          console.log(website);
          chrome.tabs.create({
              url: website,
              selected: true
          })
      }
    };
  
    // Add our commands to annyang
    annyang.addCommands(commands);
  
    // Start listening.
    annyang.start();

    console.log(annyang.isListening());
    if(!annyang.isListening()){
        //Mic permission not present
        chrome.tabs.create({
			url: chrome.extension.getURL("options.html"),
			selected: true
		});
    }
}