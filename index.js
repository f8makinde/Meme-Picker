   import { catsData } from "/data.js";
  const emotionRadios = document.getElementById('emotion-radios')

 function getEmotionArray(cats){
    let emotionArray = [];
     for(let cat of cats){
       for(let emotion of cat.emotionTags){
        if(emotionArray.includes(emotion)){
            emotion = "";
        }
        else{
        emotionArray.push(emotion);
        }
         }
       }
      return emotionArray;
   }
  getEmotionArray(catsData);

  function renderEmotionsRadios(cats){
       let radio = "";
       const emotions = getEmotionArray(cats);
       for(let emotion of emotions){
          radio += `<div class="radio">
            <label for="${emotion}">${emotion}</label>
            <input type="radio" value = ${emotion} id=${emotion} name = "emotion">
          </div>
          `
       }
       return emotionRadios.innerHTML = radio;
  }
  renderEmotionsRadios(catsData);