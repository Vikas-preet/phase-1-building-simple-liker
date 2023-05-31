// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = "♡";
const FULL_HEART = "♥";

// Your JavaScript code goes here!
// const hiddenClass = document.createElement("hidden");
// errorModal.append(hiddenClass);

// // When a user clicks on an empty heart

const like = document.getElementsByClassName("like-glyph");

for (const item of like) {
  item.addEventListener("click", likeHeartClick);
}

function likeHeartClick(e) {
  const likeHeart = e.target;

  mimicServerCall("http://mimicServer.example.com")
    .then(() => {
      if (likeHeart.textContent === EMPTY_HEART) {
        console.log("success");
        likeHeart.textContent = FULL_HEART;
        return (likeHeart.className = "activated-heart");
      } else {
        likeHeart.textContent = EMPTY_HEART;
        return (likeHeart.className = "");
      }
    })
    .catch((err) => {
      const errorModal = document.getElementById("modal");
      errorModal.className = "";
      errorModal.textContent = err;

      setTimeout(() => {
        errorModal.className = "hidden";
      }, 3000);
    });
}

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
