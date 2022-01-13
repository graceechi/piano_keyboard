let myKeys = document.querySelectorAll('.key');

 // Can repeat this 8 times
    // myKeys[0].addEventListener('click', function(){
    //     let sound = new Audio('doremi/do.mp3');
    //     sound.play();
    // });


for (let x = 0; x < myKeys.length; x++) {
    myKeys[x].addEventListener('click', function (){
        // alert("button " + myKeys[x].innerHTML + " has been clicked");
        // let sound = new Audio('doremi/do.mp3');
        // sound.play();
        playSound(myKeys[x].innerHTML);
    });
}

document.addEventListener('keydown', function (btn){
    // console.log(btn.key);
    playSound(btn.key);  
    let pressed_key = btn.key;

//to produce glowing effect with keyboard buttons
    for (var x =0; x < myKeys.length; x++){
        myKeys[x].classList.remove('activated');
    }

    for (var x =0; x < myKeys.length; x++){
        if (pressed_key == myKeys[x].innerHTML) {
            myKeys[x].classList.add('activated');
        }
    }
});


function playSound(key){
    switch(key) {
        case 'C':
            var sound = new Audio('doremi/do.mp3');
            sound.play();
            break;
        case 'D':
            var sound = new Audio('doremi/re.mp3');
            sound.play();
            break;
        case 'E':
            var sound = new Audio('doremi/mi.mp3');
            sound.play();
            break;
        case 'F':
            var sound = new Audio('doremi/fa.mp3');
            sound.play();
            break;
        case 'G':
            var sound = new Audio('doremi/sol.mp3');
            sound.play();
            break;
        case 'A':
            var sound = new Audio('doremi/la.mp3');
            sound.play();
            break;
        case 'B':
            var sound = new Audio('doremi/ti.mp3');
            sound.play();
            break;
        case 'K':
            var sound = new Audio('doremi/doh.mp3');
            sound.play();
            break;
        default:
            console.log(key);
    }
}
