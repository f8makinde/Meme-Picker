   import { catsData } from "/data.js";


  const emotionRadios = document.getElementById('emotion-radios');
  const getImageBtn = document.getElementById("get-image-btn");
  const checkbox = document.getElementById("gifs-only-option");
  const memeModalInner = document.getElementById('meme-modal-inner')
  const memeModal = document.getElementById('meme-modal');
  const closeModal = document.getElementById("meme-modal-close-btn");
  
  emotionRadios.addEventListener('change', highlightCheckedOption);

  closeModal.addEventListener("click", closeModalBtn)

  getImageBtn.addEventListener("click", renderCat);


  function highlightCheckedOption(e){
    const radios = document.getElementsByClassName("radio");
    for(let radio of radios){
        radio.classList.remove("highlight")
    }
   document.getElementById(e.target.id).parentElement.classList.add("highlight")
  }


  function closeModalBtn(){
    memeModal.style.display = "none";
    }

  function renderCat(){
    const catObject = getSingleCatObject()
      
    memeModalInner.innerHTML = `
    <img 
    class="cat-img" 
    src="./images/${catObject.image}"
    alt="${catObject.alt}"
    >
    `
    memeModal.style.display = 'flex';
  
  }


  function getSingleCatObject(){
    
    const catsArray = getMatchingCatsArray()
      
    if (catsArray.length === 1){
        return catsArray[0]
    }
    else {
        const randomNumber = Math.floor(Math.random() * catsArray.length)
        return catsArray[randomNumber]
    }
  }

 function getMatchingCatsArray(){

    if(document.querySelector("input[type= 'radio']:checked")){
        const selectedEmotion = document.querySelector("input[type= 'radio']:checked").value;
        const isGif = checkbox.checked;
        
        const matchingCatsArray = catsData.filter(function(cat){
          if(isGif){
            return cat.emotionTags.includes(selectedEmotion) && cat.isGif;
          }
          else{
          return cat.emotionTags.includes(selectedEmotion);
          }
        })
      return matchingCatsArray;
    }

 }

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
// getEmotionArray(catsData);



 function renderEmotionsRadios(cats){
  let radio = "";
  const emotions = getEmotionArray(cats);
  for(let emotion of emotions){
     radio += `<div class="radio">
       <label for="${emotion}" id="emotion">${emotion}</label>
       <input type="radio" value = ${emotion} id=${emotion} name = "emotion" class="radio-btn">
     </div>
     `
  }
   emotionRadios.innerHTML = radio;
}
renderEmotionsRadios(catsData);