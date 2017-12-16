// Initialize Firebase
var config = {
  apiKey: "AIzaSyBuqMufTJDR5I0fIvsSBOfJqqdsYlY1INE",
  authDomain: "rps-multiplayer-8b840.firebaseapp.com",
  databaseURL: "https://rps-multiplayer-8b840.firebaseio.com",
  projectId: "rps-multiplayer-8b840",
  storageBucket: "rps-multiplayer-8b840.appspot.com",
  messagingSenderId: "651502141698"
};
firebase.initializeApp(config);


// Only two users can play at the same time.
// Both players pick either rock, paper or scissors. After the players make their selection, the game will tell them whether a tie occurred or if one player defeated the other.
// The game will track each player's wins and losses.
// each player doesnt see what the other player chose
// resets after each round
// ties dont incriment score

// @1:45 chat functionality
// player variables
  // player 1
  // player 2
// RPS  variables
// functionality
  // if chose
    // this may can me optimized
    // see former solution
  // if tie
// win lose tracker

// firebase stores
  // players, RPS per player, win/loses per player

// game
  // players is parent
    // 1
      // choice
      // wins
      // losses
      // name
    // 2
      // etc.
  // turn - 1 or 2
