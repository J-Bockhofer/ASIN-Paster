
function save_options() {
	var Slot1 = document.getElementById('Slot1').value;
	var Slot2 = document.getElementById('Slot2').value;
	var Slot3 = document.getElementById('Slot3').value;
  var Slot4 = document.getElementById('Slot4').value;
  var Slot5 = document.getElementById('Slot5').value;
  var Slot6 = document.getElementById('Slot6').value;
  var Slot7 = document.getElementById('Slot7').value;
  var Slot8 = document.getElementById('Slot8').value;

  chrome.storage.sync.set({
    Slot1: Slot1,
    Slot2: Slot2,
    Slot3: Slot3,
    Slot4: Slot4,
    Slot5: Slot5,
    Slot6: Slot6,
    Slot7: Slot7,
    Slot8: Slot8    
  }, function() {
    // Update status to let user know options were saved.
    var status = document.getElementById('status');
    status.textContent = 'Options saved.';
    setTimeout(function() {
      status.textContent = '';
    }, 750);
  });
}

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
function restore_options() {
  // Use default value color = 'red' and likesColor = true.
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
    document.getElementById('Slot1').value = items.Slot1;
    document.getElementById('Slot2').value = items.Slot2;
    document.getElementById('Slot3').value = items.Slot3;
    document.getElementById('Slot4').value = items.Slot4;
    document.getElementById('Slot5').value = items.Slot5;
    document.getElementById('Slot6').value = items.Slot6;
    document.getElementById('Slot7').value = items.Slot7;
    document.getElementById('Slot8').value = items.Slot8;    
  });
}
document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click',
    save_options);
