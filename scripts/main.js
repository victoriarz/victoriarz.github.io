// const myHeading = document.querySelector("h1");
// myHeading.textContent = "Hello world!";
// document.querySelector("html").addEventListener("click", function () {
//     alert("Ouch! Stop poking me!");
//   });
const myImage = document.querySelector("img");
myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/lemon-tree.jpeg") {
    myImage.setAttribute("src", "images/sunflower.png");
  } else {
    myImage.setAttribute("src", "images/lemon-tree.jpeg");
  }
};
let myButton = document.querySelector(".userid");
let myHeading = document.querySelector("h1");

function setUserName() {
    const myName = prompt("Please enter your name.");
    if (!myName) {
      setUserName();
    } else {
      localStorage.setItem("name", myName);
      myHeading.textContent = `Hello, ${myName}`;
    }
  }
  
  if (!localStorage.getItem("name")) {
    setUserName();
  } else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Welcome, ${storedName}`;
  }
  myButton.onclick = () => {
    setUserName();
  };
  

  /**
   * 
   * 
   * 
   * example on how to select the <li> and highlight, based on URL location
   */

  //  url = url = window.location.href;
  //  if (url.includes('index.html')) {
  //      link = document.querySelector('body > div > ul > li:nth-child(2) > a');
  //      link.style.color = '#a5cdbb';
  //  }