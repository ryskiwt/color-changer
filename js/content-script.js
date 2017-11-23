chrome.runtime.onMessage.addListener(function(msg, sender, sendResponse){

  var textarea = document.activeElement;

  var sentence = textarea.value;
  var len      = sentence.length;
  var start    = textarea.selectionStart;
  var end      = textarea.selectionEnd;

  var before = sentence.substr(0, start);
  var target = sentence.substr(start, end-start);
  var after  = sentence.substr(end, len-end);

  textarea.value = before + "<font color=\"" + msg.color + "\">" + target + "</font>" + after;

});
