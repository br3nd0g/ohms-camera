let capture

// setup sketch
async function setup() {

    createCanvas(800, 500)

    capture = createCapture(VIDEO)
    capture.size(width, height)
    capture.hide()
}

function draw() {
    if (true) {
        capture.loadPixels()

        for (let i = 0; i < 500; i++) {
            const x = floor(random(0, width))
            const y = floor(random(0, height))

            const i = ((y * width) + x) * 4
            const r = capture.pixels[i]
            const g = capture.pixels[i + 1]
            const b = capture.pixels[i + 2]

            noStroke()
            fill(r, g, b)
            circle(x, y, random(2, 5))
        }
    }
}


// function setup(){
//     createCanvas(windowWidth-50, windowHeight-50);
//     // capture = createCapture(VIDEO)
//     // capture.size(width, height)
//     // capture.hide()
//     background(0)
// }

// function draw(){
//     noStroke()
//     fill("white")
//     // circle(width/2, height/2, 5)
//     circle(mouseX, mouseY, 5)
// }

function calcFits(){
    amountX = Math.floor(windowWidth / (tangleWidth + (marginX)));
    amountY = Math.floor(windowHeight / (tangleHeight + (marginY)));
}