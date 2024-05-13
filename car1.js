// "use strict";
// let trackData;
// let tileSize = 25; // Size of each tile
// let carPosition;
// let carSize = 20; // Size of the car

// function preload() {
//     console.log("Loading track data...");
//     trackData = loadStrings('./track.txt', () => console.log("Track data loaded successfully"));
// }

// function setup() {
//     createCanvas(800, 600);
//     preload(); // Call preload function to load track data
//     drawTrack(); // Call drawTrack function to draw the track
//     setCarStartPosition(); // Call setCarStartPosition function to set initial car position
// }

// function drawTrack() {
//     for (let y = 0; y < trackData.length; y++) {
//         for (let x = 0; x < trackData[y].length; x++) {
//             let tile = trackData[y][x];
//             let xPos = x * tileSize;
//             let yPos = y * tileSize;

//             if (tile === '0') {
//                 // Grass tile
//                 fill('green');
//             } else if (tile === '1') {
//                 // Road tile
//                 fill(0);
//             } else if (tile === '2') {
//                 // Start/Finish line tile
//                 fill(255, 255, 0); // Yellow for finish line (placeholder)
//             }
//             rect(xPos, yPos, tileSize, tileSize); // Draw the tile
//         }
//     }
// }

// function setCarStartPosition() {
//     // Find the start position for the car
//     for (let y = 0; y < trackData.length; y++) {
//         for (let x = 0; x < trackData[y].length; x++) {
//             if (trackData[y][x] === '2') {
//                 carPosition = createVector(x * tileSize + tileSize / 2, y * tileSize + tileSize / 2);
//                 return; // Exit the loop once car position is found
//             }
//         }
//     }
// }

// function draw() {
//     background(255);
//     drawTrack();

//     // Draw the car
//     fill(255, 0, 0); // Red color for the car
//     rect(carPosition.x - carSize / 2, carPosition.y - carSize / 2, carSize, carSize);
// }

// function keyPressed() {
//     // Handle player movement
//     if (keyCode === UP_ARROW) {
//         carPosition.y -= 2;
//     } else if (keyCode === DOWN_ARROW) {
//         carPosition.y += 2;
//     } else if (keyCode === LEFT_ARROW) {
//         carPosition.x -= 2;
//     } else if (keyCode === RIGHT_ARROW) {
//         carPosition.x += 2;
//     }

//     // Check for collisions with track boundaries
//     checkCollisions();
// }

// function checkCollisions() {
//     // Check if player car is outside the track boundaries
//     if (carPosition.x < 0 || carPosition.x > width ||
//         carPosition.y < 0 || carPosition.y > height) {
//         // Reset player car position to the start position
//         setCarStartPosition();
//     }
// }

// // Call setup function to initialize the canvas and start the game
// setup();


































// "use strict";

// let trackData;
// let tileSize = 25; // Size of each tile
// let carPosition;
// let carSize = 20; // Size of the car
// let finishLineReached = false; // Flag to check if the finish line is reached
// let lapsCompleted = 0; // Number of laps completed by the car

// let roadImg, grassImg, carImg, finishLineImg;

// function preload() {
//     console.log("Loading track data...");
//     trackData = loadStrings('./track.txt', () => {
//         console.log("Track data loaded successfully");
//         setCarStartPosition();
//     });

//     roadImg = loadImage('./images/road.jpeg');
//     grassImg = loadImage('./images/grass.jpeg');
//     carImg = loadImage('./images/car.jpeg');
//     finishLineImg = loadImage('./images/finish.jpeg');
// }

// function setup() {
//     createCanvas(800, 600);
//     preload();
// }

// function draw() {
//     background(255);
//     drawTrack();
//     handleCar();
// }

// function drawTrack() {
//     for (let y = 0; y < trackData.length; y++) {
//         for (let x = 0; x < trackData[y].length; x++) {
//             let tile = trackData[y][x];
//             let xPos = x * tileSize;
//             let yPos = y * tileSize;

//             if (tile === '0') {
//                 image(grassImg, xPos, yPos, tileSize, tileSize); // Grass tile
//             } else if (tile === '1') {
//                 image(roadImg, xPos, yPos, tileSize, tileSize); // Road tile
//             } else if (tile === '2') {
//                 image(finishLineImg, xPos, yPos, tileSize, tileSize); // Start/Finish line tile
//             }
//         }
//     }
// }
// function handleCar() {
//     if (!finishLineReached) {
//         drawCar();
//         moveCar();
//         checkCollisions();
//     } else {
//         textSize(32);
//         fill(255, 0, 0);
//         text("Congratulations! You reached the finish line after " + lapsCompleted + " laps!", 50, height / 2);
//     }
// }

// function drawCar() {
//     image(carImg, carPosition.x - carSize / 2, carPosition.y - carSize / 2, carSize, carSize); // Draw the car
// }

// // Other functions remain the same

// function moveCar() {
//     if (keyIsDown(UP_ARROW)) {
//         carPosition.y -= 2;
//     }
//     if (keyIsDown(DOWN_ARROW)) {
//         carPosition.y += 2;
//     }
//     if (keyIsDown(LEFT_ARROW)) {
//         carPosition.x -= 2;
//     }
//     if (keyIsDown(RIGHT_ARROW)) {
//         carPosition.x += 2;
//     }
// }

// function checkCollisions() {
//     let currentTile = trackData[Math.floor(carPosition.y / tileSize)][Math.floor(carPosition.x / tileSize)];

//     if (currentTile === '0') {
//         // Car hits the grass, reset to start position
//         setCarStartPosition();
//     } else if (currentTile === '2') {
//         lapsCompleted++;
//         if (lapsCompleted > 1) {
//             finishLineReached = true;
//         } else {
//             setCarStartPosition();
//         }
//     }
// }
// function setCarStartPosition() {
//     for (let y = 0; y < trackData.length; y++) {
//         for (let x = 0; x < trackData[y].length; x++) {
//             if (trackData[y][x] === '2') {
//                 let direction = random(0, 2 * PI); // Random direction in front of the finish line
//                 let offset = tileSize * 2; // Distance in front of the finish line
//                 carPosition = createVector(x * tileSize + offset * cos(direction), y * tileSize + offset * sin(direction));
//                 return;
//             }
//         }
//     }
// }

// setup();





















































































// "use strict";

// let trackData;
// let tileSize = 25; // Size of each tile
// let carPosition;
// let carSize = 15; // Reduced size of the car for smoother movement
// let finishLineReached = false; // Flag to check if the finish line is reached
// let lapsCompleted = 0; // Number of laps completed by the car

// let roadImg, grassImg, carImg, finishLineImg;

// function preload() {
//     console.log("Loading track data...");
//     trackData = loadStrings('./track.txt', () => {
//         console.log("Track data loaded successfully");
//         // Process the track data to remove spaces
//         trackData = trackData.map(line => line.replace(/\s+/g, ''));
//         setCarStartPosition();
//     });

//     roadImg = loadImage('./images/road.jpeg');
//     grassImg = loadImage('./images/grass.jpeg');
//     carImg = loadImage('./images/car.jpeg');
//     finishLineImg = loadImage('./images/finish.jpeg');
// }

// function setup() {
//     createCanvas(800, 600);
//     preload();
// }

// function draw() {
//     background(255);
//     drawTrack();
//     handleCar();
// }
// function drawTrack() {
//     // Draw the tiles based on trackData
//     for (let y = 0; y < trackData.length; y++) {
//         for (let x = 0; x < trackData[y].length; x++) {
//             let tile = trackData[y][x];
//             let xPos = x * tileSize;
//             let yPos = y * tileSize;

//             // Draw grass everywhere
//             image(grassImg, xPos, yPos, tileSize, tileSize);

//             // Draw road tile if '1' is found in trackData
//             if (tile === '1') {
//                 image(roadImg, xPos, yPos, tileSize, tileSize);
//             }
//             // Draw finish line tile if '2' is found in trackData
//             else if (tile === '2') {
//                 image(finishLineImg, xPos, yPos, tileSize, tileSize);
//             }
//         }
//     }
// }
// function handleCar() {
//     if (!finishLineReached) {
//         drawCar();
//         moveCar();
//         checkCollisions();
//     } else {
//         textSize(32);
//         fill(255, 0, 0);
//         text("Congratulations! You reached the finish line after " + lapsCompleted + " laps!", 50, height / 2);
//     }
// }

// function drawCar() {
//     image(carImg, carPosition.x - carSize / 2, carPosition.y - carSize / 2, carSize, carSize); // Draw the car
// }

// function moveCar() {
//     if (keyIsDown(UP_ARROW)) {
//         carPosition.y -= 1.15;
//     }
//     if (keyIsDown(DOWN_ARROW)) {
//         carPosition.y += 1.15;
//     }
//     if (keyIsDown(LEFT_ARROW)) {
//         carPosition.x -= 1.15;
//     }
//     if (keyIsDown(RIGHT_ARROW)) {
//         carPosition.x += 1.15;
//     }
// }

// function checkCollisions() {
//     let currentTile = trackData[Math.floor(carPosition.y / tileSize)][Math.floor(carPosition.x / tileSize)];

//     if (currentTile === '0') {
//         // Car hits the grass, reset to start position
//         setCarStartPosition();
//     } else if (currentTile === '2') {
//         lapsCompleted++;
//         finishLineReached = true; // Update to reach finish line on first attempt
//     }
// }

// function setCarStartPosition() {
//     for (let y = 0; y < trackData.length; y++) {
//         for (let x = 0; x < trackData[y].length; x++) {
//             if (trackData[y][x] === '2') {
//                 // Place the car just above the finish line
//                 carPosition = createVector(x * tileSize + tileSize / 2, (y - 1) * tileSize + tileSize / 2);
//                 return;
//             }
//         }
//     }
// }

// setup();


































































// "use strict";

// let trackData;
// let tileSize = 25; // Size of each tile
// let carPosition;
// let carSize = 15; // Reduced size of the car for smoother movement
// let finishLineReached = false; // Flag to check if the finish line is reached
// let lapsCompleted = 0; // Number of laps completed by the car

// let roadImg, grassImg, carImg, finishLineImg;

// function preload() {
//     console.log("Loading track data...");
//     trackData = loadStrings('./track.txt', () => {
//         console.log("Track data loaded successfully");
//         // Process the track data to remove spaces
//         trackData = trackData.map(line => line.replace(/\s+/g, ''));
//         setCarStartPosition();
//     });

//     roadImg = loadImage('./images/road.jpeg');
//     grassImg = loadImage('./images/grass.jpeg');
//     carImg = loadImage('./images/car.jpeg');
//     finishLineImg = loadImage('./images/finish.jpeg');
// }

// function setup() {
//     createCanvas(800, 600);
//     preload();
// }

// function draw() {
//     background(255);
//     drawTrack();
//     handleCar();
// }

// function drawTrack() {
//     // Draw the tiles based on trackData
//     for (let y = 0; y < trackData.length; y++) {
//         for (let x = 0; x < trackData[y].length; x++) {
//             let tile = trackData[y][x];
//             let xPos = x * tileSize;
//             let yPos = y * tileSize;

//             // Draw grass everywhere
//             image(grassImg, xPos, yPos, tileSize, tileSize);

//             // Draw road tile if '1' is found in trackData
//             if (tile === '1') {
//                 image(roadImg, xPos, yPos, tileSize, tileSize);
//             }
//             // Draw finish line tile if '2' is found in trackData
//             else if (tile === '2') {
//                 image(finishLineImg, xPos, yPos, tileSize, tileSize);
//             }
//         }
//     }
// }

// function handleCar() {
//     if (!finishLineReached) {
//         drawCar();
//         moveCar();
//         checkCollisions();
//     } else {
//         textSize(32);
//         fill(255, 0, 0);
//         textAlign(CENTER);
//         text("Congratulations! You reached the finish line after " + lapsCompleted + " laps!", width / 2, height / 2);
//     }
// }

// function drawCar() {
//     image(carImg, carPosition.x - carSize / 2, carPosition.y - carSize / 2, carSize, carSize); // Draw the car
// }

// function moveCar() {
//     let speed = 1.15; // Adjust the speed as needed
//     if (keyIsDown(UP_ARROW)) {
//         carPosition.y -= speed;
//     }
//     if (keyIsDown(DOWN_ARROW)) {
//         carPosition.y += speed;
//     }
//     if (keyIsDown(LEFT_ARROW)) {
//         carPosition.x -= speed;
//     }
//     if (keyIsDown(RIGHT_ARROW)) {
//         carPosition.x += speed;
//     }
// }

// function checkCollisions() {
//     let currentTile = trackData[Math.floor(carPosition.y / tileSize)][Math.floor(carPosition.x / tileSize)];

//     if (currentTile === '0') {
//         // Car hits the grass, reset to start position
//         setCarStartPosition();
//     } else if (currentTile === '2') {
//         lapsCompleted++;
//         finishLineReached = true; // Update to reach finish line on first attempt
//     }
// }

// function setCarStartPosition() {
//     for (let y = 0; y < trackData.length; y++) {
//         for (let x = 0; x < trackData[y].length; x++) {
//             if (trackData[y][x] === '2') {
//                 // Place the car just above the finish line
//                 carPosition = createVector(x * tileSize + tileSize / 2, (y - 1) * tileSize + tileSize / 2);
//                 return;
//             }
//         }
//     }
// }

// setup();











































"use strict";

let trackData;
let tileSize = 25; // Size of each tile
let carPosition;
let carSize = 15; // Reduced size of the car for smoother movement
let finishLineReached = false; // Flag to check if the finish line is reached
let lapsCompleted = 0; // Number of laps completed by the car

let roadImg, grassImg, carImg, finishLineImg;

function preload() {
    console.log("Loading track data...");
    trackData = loadStrings('./track.txt', () => {
        console.log("Track data loaded successfully");
        // Process the track data to remove spaces
        trackData = trackData.map(line => line.replace(/\s+/g, ''));
        setCarStartPosition();
    });

    roadImg = loadImage('./images/road.jpeg');
    grassImg = loadImage('./images/grass.jpeg');
    carImg = loadImage('./images/car.jpeg');
    finishLineImg = loadImage('./images/finish.jpeg');
}

function setup() {
    createCanvas(800, 600);
    preload();
}

function draw() {
    background(255);
    drawTrack();
    handleCar();

    // Display output text below the game
    textSize(24);
    fill(0);
    textAlign(CENTER);
    text("Congratulations! You reached the finish line after " + lapsCompleted + " laps!", width / 2, height + 50);
}

function drawTrack() {
    // Draw the tiles based on trackData
    for (let y = 0; y < trackData.length; y++) {
        for (let x = 0; x < trackData[y].length; x++) {
            let tile = trackData[y][x];
            let xPos = x * tileSize;
            let yPos = y * tileSize;

            // Draw grass everywhere
            image(grassImg, xPos, yPos, tileSize, tileSize);

            // Draw road tile if '1' is found in trackData
            if (tile === '1') {
                image(roadImg, xPos, yPos, tileSize, tileSize);
            }
            // Draw finish line tile if '2' is found in trackData
            else if (tile === '2') {
                image(finishLineImg, xPos, yPos, tileSize, tileSize);
            }
        }
    }
}

function handleCar() {
    if (!finishLineReached) {
        drawCar();
        moveCar();
        checkCollisions();
    } else {
        textSize(32);
        fill(255, 0, 0);
        textAlign(CENTER);
        text("Congratulations! You reached the finish line after " + lapsCompleted + " laps!", width / 2, height / 2);
    }
}

function drawCar() {
    image(carImg, carPosition.x - carSize / 2, carPosition.y - carSize / 2, carSize, carSize); // Draw the car
}

function moveCar() {
    let speed = 1.15; // Adjust the speed as needed
    if (keyIsDown(UP_ARROW)) {
        carPosition.y -= speed;
    }
    if (keyIsDown(DOWN_ARROW)) {
        carPosition.y += speed;
    }
    if (keyIsDown(LEFT_ARROW)) {
        carPosition.x -= speed;
    }
    if (keyIsDown(RIGHT_ARROW)) {
        carPosition.x += speed;
    }
}

function checkCollisions() {
    let currentTile = trackData[Math.floor(carPosition.y / tileSize)][Math.floor(carPosition.x / tileSize)];

    if (currentTile === '0') {
        // Car hits the grass, reset to start position
        setCarStartPosition();
    } else if (currentTile === '2') {
        lapsCompleted++;
        finishLineReached = true; // Update to reach finish line on first attempt
    }
}

function setCarStartPosition() {
    for (let y = 0; y < trackData.length; y++) {
        for (let x = 0; x < trackData[y].length; x++) {
            if (trackData[y][x] === '2') {
                // Place the car just above the finish line
                carPosition = createVector(x * tileSize + tileSize / 2, (y - 1) * tileSize + tileSize / 2);
                return;
            }
        }
    }
}

setup();