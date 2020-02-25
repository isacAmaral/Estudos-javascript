var dragMe = document.getElementById("drag_me");
 
dragMe.addEventListener("mousedown" , mouseDown);

dragMe.addEventListener("mouseup" , mouseUp);

dragOfX = 0,
/* o y inicial do drag */
dragOfY = 0;

function mouseDown(e){
    dragOfX = e.pageX - dragMe.offsetLeft;
    /* define o y inicial do drag */
    dragOfY = e.pageY - dragMe.offsetTop;
    console.log('Mouse Down');

        this.addEventListener("mousemove" , mouseMove);
    
     }
    
      


function mouseUp(){

    this.removeEventListener("mousemove", mouseMove);
    console.log("mouse UP");
}


function mouseMove(e){
    e.preventDefault();
    dragMe.style.left = (e.pageX - dragOfX) + 'px';
    dragMe.style.top = (e.pageY - dragOfY) + 'px';
    console.log('Mouse move');
}

