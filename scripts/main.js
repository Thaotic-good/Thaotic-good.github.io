/* how to make img change by clicking
variable holding the first occurrence of “img” element in my document
variable now has event listener attached for listening to clicking in the “img” and will execute an arrow function
the function gets the attribute, more specifically the source attribute of the “img” element tag
if the source equals to path to img A, it will update the source attribute of img B
now the myImage holds the current img B so mySrc attribute does not meet the condition so the function sets the
attribute of the current img in variable myImg to the original img A, so it is reset to default */


// const myImage = document.querySelector("img");
//
// myImage.onmouseover = () => {
//     const mySrc = myImage.getAttribute("src");
//     if (mySrc === "images/expectationsFinal.jpg"){
//         myImage.setAttribute("src", "images/reality.jpg");
//     }
//     else{
//         myImage.setAttribute("src", "images/expectationsFinal.jpg");
//     }
// };

/* make the second picture reveal itself when hovering over it
1. in the HTML I have the source for the default picture
2. in main.js I should define the action, but pseudo-class is from CSS*/

/*customizable greeting
define the function
ask for the name
* store pair in localStorage
put the name into a greeting
*/
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