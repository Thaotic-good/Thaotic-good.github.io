let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName (){
    const myName = prompt("Please enter your name: ");
    if (!myName){
        myHeading.textContent = `Hello, welcome to my personal page!`;
    } else {
        localStorage.setItem("name", myName);
        myHeading.textContent = `Hello ${myName}, welcome to my personal page!`;
    }
}

/*initialization*/
if (!localStorage.getItem("name")){
    setUserName();
} else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Hello ${storedName}, welcome to my personal page!`;
}

/* action for the button*/
myButton.onclick = () => {
    setUserName();
};