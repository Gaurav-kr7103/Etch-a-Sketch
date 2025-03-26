# Etch-a-Sketch 🎨

## Overview

This is a simple Etch-a-Sketch web application that allows users to create a grid-based drawing board. Users can change the grid size dynamically and draw by hovering over the boxes.

## Features

Default 16×16 grid when the page loads.

Custom grid size: Users can set a new grid size (between 1 and 100) by clicking the "Input Grid" button.

Hover to Draw: The grid squares change color when the mouse hovers over them.

Responsive Design: The grid adjusts based on the user-defined size.

## Technologies Used

HTML: Structure of the web page

CSS: Styling and layout

JavaScript: Dynamic grid creation and hover effect

## How It Works

The page loads with a 16×16 grid.

The user clicks the "Input Grid" button and enters a number (1-100).

The grid is reset and updated based on the user input.

The user hovers over squares to change their color to black.

## Installation & Usage

Live Demo

You can open the index.html file in a browser to run the application.

## Local Setup

Clone the repository:

`git clone https://github.com/Gaurav-kr7103/Etch-a-Sketch.git`

Navigate to the project folder:

`cd Etch-a-Sketch`

Open index.html in a browser.

## Code Breakdown

JavaScript Logic (my-script.js)

createGrid(gridNumber)

Clears the existing grid.

Dynamically generates gridNumber × gridNumber boxes.

Each box resizes to fit the container.

Adds a hover effect to turn the box black.

Event Listeners

The "Input Grid" button prompts the user for grid size input and regenerates the grid.

Uses event delegation for efficient hover effect.

## Potential Improvements

Add color picker to allow users to choose different colors.

Implement eraser mode to remove colors from boxes.

Introduce a gradient or rainbow mode for more artistic effects.

## Contributing

Feel free to fork this project and submit pull requests! 🚀

