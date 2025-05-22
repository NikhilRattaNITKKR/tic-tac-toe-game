# Tic-Tac-Toe Game

A basic two-player Tic-Tac-Toe game with some basic animations.

## Project Structure

The project consists of the following files:

-   `a.html`: This is the main HTML file that creates the structure of the game board and includes the necessary CSS and JavaScript files.
-   `a.css`: This file contains all the CSS rules for styling the game, including the layout of the board, cell appearance, and animations.
-   `a.js`: This file implements the core game logic, including handling player moves, checking for winning conditions, and updating the display.

## JavaScript Logic

The `a.js` file contains the following key functions:

-   `display(value)`:
    -   This function is called when a player clicks on a cell of the Tic-Tac-Toe board.
    -   It takes the `value` (0-8) of the clicked cell as an argument.
    -   It updates the cell with the current player's mark ('X' or 'O').
    -   It keeps track of the current player's turn.
    -   It calls the `check()` function to see if the current move results in a win.
    -   If a player wins, it triggers animations and displays a winning message.
-   `check(val)`:
    -   This function is called by `display()` after each move.
    -   It takes the current player's mark (`val`, which is 'X' or 'O') as an argument.
    -   It checks all possible winning combinations on the board (rows, columns, and diagonals).
    -   It returns `1` if the current player has won, and `-1` otherwise.

## How to Play

1.  Open the `a.html` file in a web browser.
2.  The game board will be displayed.
3.  Player X starts the game. Click on an empty cell to place your 'X'.
4.  Player O takes the next turn. Click on an empty cell to place your 'O'.
5.  Players continue taking turns until one player gets three of their marks in a row (horizontally, vertically, or diagonally) or until all cells are filled (resulting in a draw).
6.  The game will announce the winner and display animations.

## Future Enhancements (Optional)

-   Implement a draw condition.
-   Add a reset button to start a new game.
-   Improve the visual design and animations.
-   Allow players to choose their marks (X or O).
