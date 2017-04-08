##Endless Runner Notes

##Game-01.js
Initialises the game and loads a background either from a color or an image

##Game-02.js
Adds a tilemap. It is worth looking into how this is coded!
NOTE also that we need to uncomment the platform.js file in index.html

##Game-03.js
Adds a moveable player from a sprite
Things to look at: gravity, movement, sprite object

##Game-04.js
Added constants for SCREENWIDTH and SCREENHEIGHT
Added constants for RIGHT, LEFT, NONE
Changed playerSprite to ninja character
Changed background
Added A LOT of code for player events such as KeyDown, KeyUp, CheckJumping, NewDirection, LandedOnGround

##Game-05.js
Added a bunch of global variables plus the full STATE object
Introduces the concept of events
Added a reset() method
Added the display of text
Added audio
Added boundaries to stop player moving off screen
Added code for the EnterFrame event - ie. the animation loop

##Game-06.js
NOTE - You must uncomment walker.js in index.html
Adds the spawnWalker() function

##Game-07.js
Add Collision detection with platforms

##Game-08.js
Handles the death of the player better by utilising events EVENT_PLAYER_DIE and EVENT_PLAYER_HIT_WALKER
Add .onHit event to the Walker

##Game-09.js
Quite a lot of updates in this one! Mostly everything in this change is about levels!!
Added the concept of levels, __STATE.levelComplete = false and EVENT_LEVEL_COMPLETE
Some updates to the tileMap
Removed loading of walker sprites
Add checking if level is complete
Added gameover when time left < 0

##Game-10.js
Added a dynamic background shade
Added the 2nd level
