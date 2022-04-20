let myImage = document.querySelector('img');

myImage.addEventListener('click', function() {
    let mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/firefox-icon.png') {
      myImage.setAttribute('src', 'images/firefox2.png');
    } else {
      myImage.setAttribute('src', 'images/firefox-icon.png');
    }
});

function setusername() {
let myName = prompt('Entre ton nom!');
localStorage.setItem('MonNom',myName)

myHeading = document.querySelector('h1');

myHeading.textContent = 'Mozilla est cool, ' + myName ;
}

let myButton = document.querySelector('button');
myButton.addEventListener('click', function() {setusername();
}
);