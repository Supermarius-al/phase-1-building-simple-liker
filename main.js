// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = "♡";
const FULL_HEART = "♥";

// Your JavaScript code goes here!
let modalMessage = document.getElementById("modal-message");
let likeBtns = document.querySelectorAll(".like-glyph");

let modalToggle =  (modal) => {
modal = document.getElementById("modal")
modal.classList.toggle('hidden')
modalMessage.innerHTML = "Random server error, try again"
}
modal.classList.add("hidden");



let heartToggle = function (btn) {
  if (btn.innerHTML != FULL_HEART){
    btn.innerText = FULL_HEART
    btn.classList.toggle('activated-heart')
  } else {
    btn.innerText = EMPTY_HEART
    btn.classList.toggle('activated-heart')
};}



document.addEventListener("DOMContentLoaded", (event) => {
  let likeBtns = document.querySelectorAll(".like-glyph");
  likeBtns.forEach((btn) =>
    btn.addEventListener("click", () => {
      mimicServerCall()
        .then(() =>
          heartToggle(btn))
        .catch(() =>
          modalToggle(setTimeout(modalToggle, 3000))
          )}))
        })
          
  
  




/*for (let like in likeBtn) {
  like.addEventListener("click", console.log(`liked`));
}*/

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url = "http://mimicServer.example.com", config = {}) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      let isRandomFailure = Math.random() < 0.2;
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
