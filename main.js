function _(selector){
    return document.querySelector(selector);
}

function setup() {
    let canvas = createCanvas(650, 600);
    canvas.parent("canvas-wrapper");
    background(255);
}

function mouseDragged() {
    let type = _("#pen-pencil").checked?"pencil":"brush";
    let size = parentInt(_("#pen-size").value);
    let color
}