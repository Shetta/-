var mohammed;
var i = 0;

function setup()
{
    createCanvas(600, 400);
}

function draw(){
    
    background(0);
}

while (i<10) {
    var eid = parseFloat(window.prompt("Wa7ed esmo mohammed we wa7ed esmo Eid, mohammed mat yetba2a meen?",""));
    
    if (eid >= 0 && (eid % 3 == 0 || eid % 5 == 0)) 
    {
        mohammed += eid;
        i++;
    }
}      
document.write(mohammed);
