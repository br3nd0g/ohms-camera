let bg, palette
let capture

// setup sketch
async function setup() {

    createCanvas(800, 500)

    capture = createCapture(VIDEO)
    capture.size(width, height)
    capture.hide()

    closestColor(100, 100, 100)
}

function draw() {
    if (bg && palette) {
        capture.loadPixels()

        for (let i = 0; i < 100; i++) {
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