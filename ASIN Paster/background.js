'use strict';

// Clipboard functionality taken from
// https://gist.github.com/srsudar/e9a41228f06f32f272a2 


/**
 * Retrieve the current content of the system clipboard.
 */
function getContentFromClipboard() {
    var result = '';
    var sandbox = document.getElementById('sandbox');
    sandbox.value = '';
    sandbox.select();
    if (document.execCommand('paste')) {
        result = sandbox.value;
    }
    sandbox.value = '';
    return result;
}


chrome.commands.onCommand.addListener(function(command) {

  chrome.storage.sync.get({
    Slot1: "https://www.amazon.de/dp/",
    Slot2: "https://www.amazon.fr/dp/",
    Slot3: "https://www.amazon.it/dp/",
    Slot4: "https://www.amazon.co.uk/dp/",
    Slot5: "https://www.amazon.es/dp/",
    Slot6: "https://www.amazon.com/dp/",
    Slot7: "https://www.amazon.nl/dp/",
    Slot8: "https://www.amazon.pl/dp/"    
  }, function(items) {
    
    var Slot1content = items.Slot1;
    var Slot2content = items.Slot2;
    var Slot3content = items.Slot3;
    var Slot4content = items.Slot4;
    var Slot5content = items.Slot5;
    var Slot6content = items.Slot6;
    var Slot7content = items.Slot7;
    var Slot8content = items.Slot8;

    var clipboardContent = getContentFromClipboard();
    var re = new RegExp("([X|B]{1}0[A-Z0-9]{8})");
    var regmatch = clipboardContent.match(re);
    var asin_url = ""

    if (regmatch !== null) {

      switch(command) {
        case 'Slot1':
          asin_url = Slot1content + regmatch[0];
          chrome.tabs.create({url: asin_url});          
          break;
        case 'Slot2':
          asin_url = Slot2content + regmatch[0];
          chrome.tabs.create({url: asin_url});          
          break;
        case 'Slot3':
          asin_url = Slot3content + regmatch[0];
          chrome.tabs.create({url: asin_url});          
          break;          
        case 'Slot4':
          asin_url = Slot4content + regmatch[0];
          chrome.tabs.create({url: asin_url});          
          break;
        case 'Slot5':
          asin_url = Slot5content + regmatch[0];
          chrome.tabs.create({url: asin_url});          
          break;
        case 'Slot6':
          asin_url = Slot6content + regmatch[0];
          chrome.tabs.create({url: asin_url});          
          break;
        case 'Slot7':
          asin_url = Slot7content + regmatch[0];
          chrome.tabs.create({url: asin_url});          
          break;          
        case 'Slot8':
          asin_url = Slot8content + regmatch[0];
          chrome.tabs.create({url: asin_url});          
          break;          

      }

    }


  }); // end of get

});


