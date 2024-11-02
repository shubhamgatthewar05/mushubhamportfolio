// htmlcss progress circular bar 
let htmlProgress = document.querySelector(".html-css"),
  htmlValue = document.querySelector(".html-progress");

let htmlStartValue = 0,
  htmlEndValue = 90,
  htmlspeed = 30;

let progresshtml = setInterval(() => {
  htmlStartValue++;

  htmlValue.textContent = `${htmlStartValue}%`;
  htmlProgress.style.background = `conic-gradient(#fca61f ${
    htmlStartValue * 3.6
  }deg, #ededed 0deg)`;

  if (htmlStartValue == htmlEndValue) {
    clearInterval(progresshtml);
  }
}, htmlspeed);

// javasript progress circular bar 
let javascriptProgress = document.querySelector(".javascript"),
  javascriptValue = document.querySelector(".javascript-progress");

let javascriptStartValue = 0,
  javascriptEndValue = 75,
  jsspeed = 30;

let progressjs = setInterval(() => {
  javascriptStartValue++;

  javascriptValue.textContent = `${javascriptStartValue}%`;
  javascriptProgress.style.background = `conic-gradient(#7d2ae8 ${
    javascriptStartValue * 3.6
  }deg, #ededed 0deg)`;

  if (javascriptStartValue == javascriptEndValue) {
    clearInterval(progressjs);
  }
}, jsspeed);

// php progress circular bar 
let phpProgress = document.querySelector(".php"),
  phpValue = document.querySelector(".php-progress");

let phpStartValue = 0,
  phpEndValue = 50,
  phpspeed = 30;

let progressphp = setInterval(() => {
  phpStartValue++;

  phpValue.textContent = `${phpStartValue}%`;
  phpProgress.style.background = `conic-gradient(#20c997 ${
    phpStartValue * 3.6
  }deg, #ededed 0deg)`;

  if (phpStartValue == phpEndValue) {
    clearInterval(progressphp);
  }
}, phpspeed);

// reactjs progress circular bar 
let reactProgress = document.querySelector(".reactjs"),
  reactValue = document.querySelector(".reactjs-progress");

let reactStartValue = 0,
  reactEndValue = 90,
  rjsspeed = 30;

let progressreact = setInterval(() => {
  reactStartValue++;

  reactValue.textContent = `${reactStartValue}%`;
  reactProgress.style.background = `conic-gradient(#3f396d ${
    reactStartValue * 3.6
  }deg, #ededed 0deg)`;

  if (reactStartValue == reactEndValue) {
    clearInterval(progressreact);
  }
}, rjsspeed);

// Python Progress Circular Bar
let pythonProgress = document.querySelector(".python"),
  pythonValue = document.querySelector(".python-progress");

let pythonStartValue = 0,
  pythonEndValue = 85,
  pythonspeed = 25;

let progressPython = setInterval(() => {
  pythonStartValue++;

  pythonValue.textContent = `${pythonStartValue}%`;
  pythonProgress.style.background = `conic-gradient(#FFD43B ${pythonStartValue * 3.6
    }deg, #ededed 0deg)`;

  if (pythonStartValue == pythonEndValue) {
    clearInterval(progressPython);
  }
}, pythonspeed);

// Flask Progress Circular Bar
let flaskProgress = document.querySelector(".flask"),
  flaskValue = document.querySelector(".flask-progress");

let flaskStartValue = 0,
  flaskEndValue = 70,
  flaskspeed = 40;

let progressFlask = setInterval(() => {
  flaskStartValue++;

  flaskValue.textContent = `${flaskStartValue}%`;
  flaskProgress.style.background = `conic-gradient(#9b59b6 ${flaskStartValue * 3.6
    }deg, #ededed 0deg)`;

  if (flaskStartValue == flaskEndValue) {
    clearInterval(progressFlask);
  }
}, flaskspeed);

// NLP Progress Circular Bar
let nlpProgress = document.querySelector(".nlp"),
  nlpValue = document.querySelector(".nlp-progress");

let nlpStartValue = 0,
  nlpEndValue = 85,
  nlpspeed = 35;

let progressNLP = setInterval(() => {
  nlpStartValue++;

  nlpValue.textContent = `${nlpStartValue}%`;
  nlpProgress.style.background = `conic-gradient(#FF6F61 ${nlpStartValue * 3.6
    }deg, #ededed 0deg)`;

  if (nlpStartValue == nlpEndValue) {
    clearInterval(progressNLP);
  }
}, nlpspeed);

// SQL Progress Circular Bar
let sqlProgress = document.querySelector(".nlp"), // Target the SQL circular progress element
  sqlValue = document.querySelector(".sql-progress"); // Target the SQL progress value text

let sqlStartValue = 0, // Start value for the progress animation
  sqlEndValue = 85, // End value for the progress animation
  sqlSpeed = 35; // Speed of the animation

let progressSQL = setInterval(() => {
  sqlStartValue++; // Increment the start value

  sqlValue.textContent = `${sqlStartValue}%`; // Update the progress value text
  sqlProgress.style.background = `conic-gradient(#FF6F61 ${sqlStartValue * 3.6}deg, #ededed 0deg)`; // Update the background gradient to match progress

  if (sqlStartValue === sqlEndValue) { // Stop animation when end value is reached
    clearInterval(progressSQL);
  }
}, sqlSpeed);



// Machine Learning (ML) Progress Circular Bar
let mlProgress = document.querySelector(".ml"),
  mlValue = document.querySelector(".ml-progress");

let mlStartValue = 0,
  mlEndValue = 80,
  mlspeed = 30;

let progressML = setInterval(() => {
  mlStartValue++;

  mlValue.textContent = `${mlStartValue}%`;
  mlProgress.style.background = `conic-gradient(#4CAF50 ${mlStartValue * 3.6
    }deg, #ededed 0deg)`;

  if (mlStartValue == mlEndValue) {
    clearInterval(progressML);
  }
}, mlspeed);

// filter using javascript
$(document).ready(function () {
  $(".filter-item").click(function () {
    const value = $(this).attr("data-filter");
    if (value == "all") {
      $(".post").show("1000");
    } else {
      $(".post")
        .not("." + value)
        .hide("1000");
      $(".post")
        .filter("." + value)
        .show("1000");
    }
  });
});


// javascript for sticky navbar even if u scroll the navbar will be fixed
document.addEventListener("DOMContentLoaded", function(){
  window.addEventListener('scroll', function() {
      if (window.scrollY > 50) {
        document.getElementById('navbar-top').classList.add('fixed-top');
        // add padding top to show content behind navbar
        navbar_height = document.querySelector('.navbar').offsetHeight;
        document.body.style.paddingTop = navbar_height + 'px';
      } else {
        document.getElementById('navbar-top').classList.remove('fixed-top');
         // remove padding top from body
        document.body.style.paddingTop = '0';
      } 
  });
}); 


// adding funtionality to back to top button 

//Get the button
let mybutton = document.getElementById("btn-back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};
function scrollFunction() {
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click",function(){
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});