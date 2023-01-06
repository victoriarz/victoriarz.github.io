// const myImage = document.querySelector("img");
// myImage.onclick = () => {
//   const mySrc = myImage.getAttribute("src");
//   if (mySrc === "images/lemon-tree.jpeg") {
//     myImage.setAttribute("src", "images/sunflower.png");
//   } else {
//     myImage.setAttribute("src", "images/lemon-tree.jpeg");
//   }
// };
let myButton = document.querySelector(".user-id");
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
    myHeading.textContent = `Explore, ${storedName}`;
  }
  myHeading.onclick = () => {
    setUserName();
  };
  
