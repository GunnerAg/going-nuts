Im I going Nuts?

## Description
The game is based on a monkey that jumps between palm trees with coconuts on the top.
The monkey moves down by default and you can use the arrow up key to climb up the plam tree, he jumps automatically once he reaches the left end of the screen.
The monkey has to avoid at all cost hitting the ground or the coconuts.


## MVP (DOM - CANVAS)

START SCREEN:

Background .
Moving game name logo.
Start game button.

GAME SCREEN:

Related to palm tree:
Palm tree has a fixed position and size.


Related to the monkey:
Can climb up and down the palm tree.

Related to the coconut:
Spawn from the right side of the screen at a random 'Y' value.
When hit by the monkey, gameover.

Related to the banana:
Spawn from the right side of the screen at a random 'Y' value.
when hit by the monkey, score adds up by 1.


REPLAY SCREEN:

Has the same Background as Start screen.
Has a ” You went nuts! Replay ?”  lettering
Has a replay button.


## Backlog

GENERAL:
ADD SOUND

START SCREEN:
ADD SCORE BOARD WITH TOP SCORES
ADD ENTER PLAYER NAME INPUT.

GAME SCREEN:
ADD CURRENT SCORE.
ADD FLYING SEAGULLS & BOAT BACKGROUND

REPLAY SCREEN:
SCORE BOARD



## Data structure


# game.js

drawMonkey(){}
monkeyMovement(){}
colisionCheck(){}
printScore(){}
drawBanana(){}
drawNut(){}
drawPalmTree(){}
drawBoat()
drawSeagull()



## States y States Transitions
Definition of the different states and their transition (transition functions)

- startScreen
- gameScreen
- replayScreen


## Task
Build loading screen
Build gamescreen with all the assets
Code the logic of the MVP game screen
-Monkey movement.
-Banana movement.
-Coconut movement.
Build the gameover/replay screen.
Add transitions between the 3 screens.
Add backgrounds and styles to all the screens.
Add a boat to gamescreen.
Add a seagull to gamescreen.
Add music background to the game.



## Links


### Trello
[Link url](https://trello.com/b/1qoJ04Q2/amigoingnuts)


### Git
URls for the project repo and deploy
[Link Repo](https://github.com/GunnerAg/going-nuts)
[Link Deploy](http://github.com)


### Slides
URls for the project presentation (slides)
[Link Slides.com](https://slides.com/gunnerandersen/deck)
