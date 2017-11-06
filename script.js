/*
Hello Yaakov
Good Bye John
Good Bye Jen
Good Bye Jason
Hello Paul
Hello Frank
Hello Larry
Hello Paula
Hello Laura
Good Bye Jim
*/
(function(){
var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"]; //isimlerin bulunduğu dizi

for (var i = 0; i < names.length; i++) {  //for döngüsüyle names dizisini, içindeki eleman sayısı kadar döndürüyor

  var firstLetter = names[i].charAt(0);//gelen kelimenin ilk harfini firstLetter 'a gönderiyoruz
  if (firstLetter == 'j' || firstLetter == 'J') {//J , j harfiyle başlayan kelimeleri seçen if else koşulu
	  byeSpeaker.speak(names[i]);
  } else {
	  helloSpeaker.speak(names[i]);
	  
  }
}
})();
