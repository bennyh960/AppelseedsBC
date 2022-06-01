// const text = document.querySelector(".texts");

// window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

// const recognition = new window.SpeechRecognitionAlternative();

// recognition.interimResults = true;

// let p = document.createElement("p");

// recognition.addEventListner("result", (e) => {
//   console.log(e);
// });

// recognition.start();

if ("webkitSpeechRecognition" in window) {
  // Speech Recognition Stuff goes here
  let speechRecognition = new webkitSpeechRecognition();
  speechRecognition.continuous = true;
  speechRecognition.interimResults = true;
  //   speechRecognition.lang = document.querySelector("#select_dialect").value;
} else {
  console.log("Speech Recognition Not Available");
}
