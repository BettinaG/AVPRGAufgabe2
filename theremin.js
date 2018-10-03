
// MAUSBEWEGUNG

var rect = document.getElementById("container").getBoundingClientRect();


document.getElementById("container").addEventListener('mousemove', function(e){
    console.log("X: "+e.clientX);
    console.log(e.clientY);

    console.log(window.innerWidth);
    console.log(window.innerHeight);

    makeSound(e.clientX, e.clientY);

    console.log("Top: "+rect.top, "Right: "+ rect.right, "Bottom: "+ rect.bottom, "Left: " + rect.left);
    
});

//GERÄUSCHE

var context = new AudioContext();
    oscillatorNode = context.createOscillator();
    gainNode = context.createGain();

    oscillatorNode.connect(gainNode);
    gainNode.connect(context.destination);

function makeSound(x,y) {
    gainNode.gain.value = y / rect.bottom;
    oscillatorNode.frequency.value = x;

    oscillatorNode.start(context.currentTime);
    oscillatorNode.stop(currentTime+1);
}
    