let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

let myImage = document.querySelector('img');

function changeImage() {
    if(myImage.getAttribute('src') === 'images/dog.jpg') {
        myImage.setAttribute ('src','images/beaker.jpg');
    } else {
        myImage.setAttribute ('src','images/dog.jpg');
    }
}

myImage.onclick = changeImage;

function setUserName() {
    let myName = prompt('Please enter your name.');
    if (myName == null) {
    } else if (!myName) {
        setUserName();
    } else {
        localStorage.setItem('name', myName);
        myHeading.innerHTML = 'Check out these pictures , ' + myName;
    }
  }

if(!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Check out these pictures ' + storedName;
}

myButton.onclick = function() {
    setUserName();
  }