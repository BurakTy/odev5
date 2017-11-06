(function (window){
var helloSpeaker ={}; //helloSpeaker adında nesne oluşturuldu
var speakWord = "Hello";// hello kelimesi direk speakWord olarak çekilecek


helloSpeaker.speak=function speak(name) { // helloSpeaker.speak adında fonksiyon tanımlandı ve kodlandı
  console.log(speakWord + " " + name);
  }
  
  window.helloSpeaker = helloSpeaker;
})(window);

