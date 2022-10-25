var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };
  
  const emojiSearch = document.getElementById('myEmojiInput');
  const searchButton = document.getElementById('button1');
  // const emojiView = document.getElementById('emojiImgP');
   
  
  
  fetch("https://emojihub.herokuapp.com/api/all/group_face_positive", requestOptions)
      .then(response => response.json())
      .then(result => {
          console.log(result);
          
  
  
          
          function convertStringToUnicode(str){
            let unicode = str;
            let newString = "";
            for(let x = 2; x < unicode.length; x++){
                newString += unicode[x];
            }
            return newString;
          }
  
          let form = document.createElement('form');
          let b = document.createElement('b');
          let select = document.createElement('select');
  
          for(let d = 0; d < result.length; d++){
            let option = document.createElement('option');
            option.innerText = result[d].name;
            unicodeOriginal = result[d].unicode[0];
            function ChangeEmoji(originalUnicode){
  
              let startUnicode = originalUnicode;
              let intermittentUnicodeString = convertStringToUnicode(startUnicode);
              let finalUnicode = String.fromCodePoint(parseInt (intermittentUnicodeString, 16));
              document.getElementById('emojiImgP').innerText = finalUnicode;
              document.getElementById('nameLabel').innerText= result[d].name;
  
            };
            option.addEventListener('click', ChangeEmoji(unicodeOriginal));
           
            
            
            select.appendChild(option);
  
          
        }
        b.appendChild(select);
        form.appendChild(b);
        document.getElementById('emojiInput').appendChild(form);
          
          
  
            
           /* 
  <form>  
  <b> Select you favourite tutorial site using dropdown list </b>  
  <select id = "myList" onchange = "favTutorial()" >  
  <option> ---Choose tutorial--- </option>  
  <option> w3schools </option>  
  <option> Javatpoint </option>  
  <option> tutorialspoint </option>  
  <option> geeksforgeeks </option>  
  </select>  
  <p> Your selected tutorial site is:   
  <input type = "text" id = "favourite" size = "20" </p>  
  </form>  */
  
       
  
  
          searchButton.addEventListener("click", function(event){
              
              let someMatch = false;
              let exactmatch = false;
              
              let longString = "The following is a list of emojis in our database with similarities to your search. Those emojis whose names are repeated, have multiple word matches to your query, in their names. You can copy and paste one of the emoji names listed and enter it into the input/search: ";
            for(let i = 0; i < result.length; i++){
              let string = result[i].name;
              let strUnicode = result[i].unicode[0];
              
              //console.log(typeof result[i].name);
              if(emojiSearch.value.toLowerCase() == string.toLowerCase() && exactmatch == false){
                console.log("success!");
  
                let finalUnicodeString = convertStringToUnicode(strUnicode);
                let realUnicode = String.fromCodePoint(parseInt (finalUnicodeString, 16));
  
                document.getElementById('emojiImgP').innerText = realUnicode;
                document.getElementById('nameLabel').innerText= "          " + result[i].name;
                alert("You've found the emoji you're looking for!");
                someMatch = true;
                exactmatch = true;
                
              }else {
  
                
                    
  
  
                
              
                if(exactmatch == false && i == result.length-1){
                  alert("no match found. You may use the select / drop-down menu below to pick an emoji or continue to search on your own.")
      
                  }
              
            }
            
            
          }})
      })
       
      .catch(error => console.log('error', error)
      
        )
  
  