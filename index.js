   import { catsData } from "/data.js";
  const emotionRadios = document.getElementById('emotion-radios');
  const getImageBtn = document.getElementById("get-image-btn");
  const checkbox = document.getElementById("gifs-only-option")
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

  emotionRadios.addEventListener('change', highlightCheckedOption)

  function highlightCheckedOption(e){
    const radios = document.getElementsByClassName("radio");
    for(let radio of radios){
        radio.classList.remove("highlight")
    }
   document.getElementById(e.target.id).parentElement.classList.add("highlight")
  }
  
 getImageBtn.addEventListener("click", getMatchingCatsArray);

 function getMatchingCatsArray(){
    if(document.querySelector("input[type='checkbox']:checked")){
        const isGif = checkbox.checked;
        console.log(isGif)
    }
    else{
      console.log(false)
    }

    if(document.querySelector("input[type= 'radio']:checked")){
        const btn = document.querySelector("input[type= 'radio']:checked").value;
        console.log(btn)
    }

 }