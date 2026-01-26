# Tic Tac Toe

A classic Tic Tac Toe game built with **React.js**. Play against another player on the same device.

## Overview

This is a simple yet interactive implementation of the traditional Tic Tac Toe game using modern React.js technology. The game features a responsive UI and game state management to track moves and determine the winner.

## Features

- ✨ Two-player gameplay
- 🎮 Interactive game board
- 🏆 Winner detection
- 🔄 Game reset functionality
- 📱 Responsive design
- ⚡ Built with React.js (v19)

## Tech Stack

- **React.js** v19.2.3
- **React DOM** v19.2.3
- **CSS3** for styling
- **Testing Library** for component testing

## Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Ankitarai27/Tic_Tac_Toe.git
   cd Tic_Tac_Toe
   ```

2. **Navigate to the project directory:**
   ```bash
   cd tic-tac-toe
   ```

3. **Install dependencies:**
   ```bash
   npm install
   ```

## Running the Application

### Start Development Server

```bash
npm start
```

The game will open in your default browser at `http://localhost:3000`

### Build for Production

```bash
npm run build
```

Creates an optimized production build in the `build` folder.

### Run Tests

```bash
npm test
```

Launches the test runner in interactive watch mode.

## How to Play

1. **Game Start:** The game starts with Player X
2. **Making Moves:** Click on any empty square to place your mark (X or O)
3. **Win Condition:** Be the first to get 3 of your marks in a row (horizontally, vertically, or diagonally)
4. **Draw:** If all 9 squares are filled with no winner, the game is a draw
5. **Reset:** After game ends, click the reset button to start a new game

## Project Structure

```
tic-tac-toe/
├── public/
│   ├── index.html
│   ├── manifest.json
│   └── robots.txt
├── src/
│   ├── components/
│   │   └── TicTacToe/
│   │       ├── Board.jsx      # Main game board component
│   │       └── Squares.jsx    # Individual square component
│   ├── App.js                 # Root application component
│   ├── App.css                # Application styling
│   ├── index.js               # React entry point
│   └── index.css              # Global styles
├── package.json
└── README.md
```

## Component Breakdown

- **App.js:** Main application component that renders the Tic Tac Toe board
- **Board.jsx:** Manages the game state, player turns, winner detection, and game logic
- **Squares.jsx:** Represents individual squares on the game board

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)

## Contributing

Contributions are welcome! Feel free to:
- Report bugs
- Suggest improvements
- Submit pull requests

## License

This project is open source and available under the MIT License.

## Author

[Ankitarai27](https://github.com/Ankitarai27) 
