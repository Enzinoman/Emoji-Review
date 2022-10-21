   //console.log(emoji.innerText);
            
          

   var stringToHTML = function (str) {
    var parser = new DOMParser();
    var doc = parser.parseFromString(str, 'text/html');
    return doc.body;
  };



  // toEmoji(String.fromCodePoint(parseInt (unicodeConverter(result[i].unicode[0]), 16)));


 /*  var map = {
    "<3": "\u2764\uFE0F",
    "</3": "\uD83D\uDC94",
    ":D": "\uD83D\uDE00",
    ":)": "\uD83D\uDE03",
    ";)": "\uD83D\uDE09",
    ":(": "\uD83D\uDE12",
    ":p": "\uD83D\uDE1B",
    ";p": "\uD83D\uDE1C",
    ":'(": "\uD83D\uDE22"
  };
 
 
  function toEmoji(emoji){
      return  map[emoji];
  }
  
 console.log(toEmoji(":)"));
 console.log(toEmoji(":'(")); */


 //console.log( String.fromCodePoint(parseInt (unicodeConverter(result[i].unicode[0]), 16)));
           
  function unicodeConverter(unicodeNumber){
    var newString = "";
    for(let i = 0; i < unicodeNumber.length; i++){
        if(i > 1){
            newString += unicodeNumber[i];
        }
        
    }
    return newString;
}

