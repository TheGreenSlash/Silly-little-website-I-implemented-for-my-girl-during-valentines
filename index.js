document.getElementById("animatedDiv").addEventListener("click", function() {
    document.getElementById("upper-final-box").style.opacity = 1;
    document.getElementById("upper-final-box").style.animation = "moveUp 0.5s ease-in-out"
    document.getElementById("upper-final-box").addEventListener('animationend', () =>{
        this.style.animation = "moveDownFade 1s ease-in-out forwards";
        document.getElementById("nonAnimatedDiv").style.opacity = 1;
        
        document.getElementById("yes-button").style.opacity = 1;
        document.getElementById("no-button").style.opacity = 1;
        document.getElementById("nonAnimatedDiv").style.background =  "rgb(255, 182, 193)";
        
        
    })
    //this.style.animation = "moveDownFade 1s ease-in-out forwards";

    // Disable interactions after animation ends 
    setTimeout(() => {
        this.style.pointerEvents = "none";
        document.getElementById("animatedDiv").style.zIndex = 0;
        document.getElementById("nonAnimatedDiv").style.zIndex = 1;
        
        
        
    }, 1000); // 2s = animation duration
});
const yesButton = document.getElementById("yesButton");
const container = document.getElementById("nonAnimatedDiv")
var click_count = 0;
function noButtonClick() {
    if(click_count >= 3){
        document.getElementById("noButton").style.pointerEvents = "none";
        document.getElementById("noButton").style.opacity = 0;
    }
    click_count++;
    const containerWidth = container.clientWidth;
    const containerHeight = container.clientHeight;

    for(i=1; i <= 2 *click_count; i++){
        const randomX = Math.floor(Math.random() * (containerWidth - 50)); 
        const randomY = Math.floor(Math.random() * (containerHeight - 30));
        const newButton = yesButton.cloneNode(true);
        newButton.classList.add("yesButton");
        newButton.style.left = `${randomX}px`;
        newButton.style.top = `${randomY}px`;
        newButton.style.zIndex = 1;
        newButton.style.position = "absolute";
        container.appendChild(newButton);
    }

}
function yesButtonClick() {
    //window.alert("its clicking");
    const buttons= document.querySelectorAll("#nonAnimatedDiv button");

    buttons.forEach(button =>{
        button.style.opacity = "0";
        button.pointerEvents = "none;"

    })

    document.getElementById("filler-div").style.opacity = 1;
    document.getElementById("upper-final-box").style.opacity = 0;
    document.getElementById("yes-button").style.opacity = 0;
    document.getElementById("no-button").style.opacity = 0;
    document.getElementById("filler-div").style.top = "20vh";
    document.getElementById("filler-div").style.flexDirection = "column";
    document.getElementById("filler-div").style.animation = "moveUpFadeIn 0.5s ease-in"
    
}