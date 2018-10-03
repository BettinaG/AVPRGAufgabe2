var context = new AudioContext();
    drumpads = document.getElementsByClassName("drumPad");
    soundBuffers = [];

for(let i=0; i<drumpads.length; i++) {
    soundBuffers[i] = new Audio("sounds/sound" + (i+1) + ".wav");
    var soundNode = context.createMediaElementSource(soundBuffers[i]);

    soundNode.connect(context.destination);

    drumpads[i].addEventListener("click", function (e){playSound(i)});

}

function playSound(i) {
    soundBuffers[i].play();
}
