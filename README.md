# Color Click Challenge

Welcome to the **Color Click Challenge**! This is a fun and interactive game where players must click on dancing colored circles to score points. The circles move around randomly, making it a challenging task to catch them!

## Features

- A dynamic and colorful interface with animated circles.
- The circles move around in a random pattern.
- The goal is to click the circles to score points.
- The score is displayed at the top of the screen.
- The game can be started using the **Start Game** button.

## How to Play

1. Click the **Start Game** button to begin the game.
2. As the game starts, colorful circles will begin to move around the screen.
3. Click on any circle to score points.
4. The score will increase with each click.

## Technologies Used

- HTML5
- CSS3 (for animations and styling)
- JavaScript (for game logic and functionality)

### File Descriptions
home.html
This file serves as the landing page for the Color Click Challenge game. It includes the initial setup and a button to start the game.

## HTML Structure:

A div with id gameArea to hold the animated circles.
A div with id scoreBoard to display the current score.
A button with id startBtn to start or restart the game.
CSS Styles:

Styles for the body, game area, circles, and animations.
Different colors and animation delays for each circle.
JavaScript:

Event listener for the DOMContentLoaded event to initialize the game.
Event listener for the startBtn to start or restart the game and redirect to nextPage.html.
nextPage.html
This file contains the main game interface where the actual gameplay happens.

### HTML Structure:

A div with id gameArea to hold the circles.
A div with id scoreBoard to display the current score.
A button with id startBtn to restart the game.
CSS Styles:

Styles for the body, game area, circles, and animations.
Different colors for each circle.
JavaScript:

The game.js script is included to handle the game logic.
## game.js
This file contains the game logic for the Color Click Challenge.

Variables:

startButton, scoreBoard, gameArea, circles: DOM elements.
score, targetColor, gameStarted, targetCircle: Game state variables.
Event Listeners:

DOMContentLoaded: Initializes the game.
startBtn: Starts or restarts the game.
Functions:

moveCircles(): Moves circles to random positions and sets a target color.
handleCircleClick(event): Handles circle click events, updates the score, and moves circles.
resetCircles(): Resets circles to their initial positions.

## Installation

To play the Color Click Challenge locally, follow these steps:

1. Clone the repository or download the source code.
   ```bash
   git clone https://github.com/yourusername/color-click-challenge.git
