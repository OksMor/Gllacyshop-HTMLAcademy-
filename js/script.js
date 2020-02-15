var linkFeedback = document.querySelector(".feedback");
var feedback = document.querySelector(".modal-content-feedback");
var closeFeedback = feedback.querySelector(".modal-content-feedback__close");

var overlay = document.querySelector(".modal-overlay");

linkFeedback.addEventListener('click', function(event) {
  event.preventDefault();
  feedback.classList.add("modal-content-feedback--show");
  overlay.classList.add("modal-overlay--go");
});

closeFeedback.addEventListener('click', function(event) {
  event.preventDefault();
  feedback.classList.remove("modal-content-feedback--show");
  overlay.classList.remove("modal-overlay--go");
});

window.addEventListener('keydown', function(event) {
  if (feedback.classList.contains("modal-content-feedback--show")) {
    if (event.keyCode === 27) {
      feedback.classList.remove("modal-content-feedback--show");
      overlay.classList.remove("modal-overlay--go");
    }
  }
});
