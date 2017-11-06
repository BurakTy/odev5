(function(window){
 var byeSpeaker = {};//byeSpeaker adında nesne oluşturuldu

var speakWord = "Good Bye";// Good Bye kelimesi direk speakWord olarak çekilecek

byeSpeaker.speak=function speak(name) { // ByeSpeaker.speak adında fonksiyon tanımlandı ve kodlandı
  console.log(speakWord + " " + name);
  
}

window.byeSpeaker=byeSpeaker;
})(window);
