// Loop on Array.
// loop on Array in a Object
// From a Object, loop every presons Array that meets legal age limit.
// loop backward
// loop continue and break

// Pre-requisit instruction for monstere quest game.
/*
    i. first prompts to choose player.
    ii. after choosing player, prompt asks if the player want the monster to give low, mid or full damage. 
        will also show how many matches are being played
    iii. the monster has 1000 hp, on low damage, it looses 200 hp, on mid 500, on full damage the monster dies.
    iv. after monster dies, it gives some motivation quote as loot.
    v. after 1 match, have a clear session option in prompt.
*/
// Pseudo-code for the monster-quest game
/*
    declare a array with some motivation quote.
    1st prompt to, choose a player: Warrick, Kain, Marshall
    if any name matches with name the defined name the game will start,
    else, on wrong player name, empty will as again and again to input
*/
const playerName = prompt(`What player you are playing with? 
    -------------------------------------------------------------------
    Warrick             ||        Kain              ||         Marshall
    ------------------------------------------------------------------
    "Please type the character name"`)
