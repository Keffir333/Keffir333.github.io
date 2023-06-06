

// import kaboom lib
import kaboom from "https://unpkg.com/kaboom/dist/kaboom.mjs";

// initialize kaboom context
kaboom();

loadSprite("tło","tło.png")

loadSprite("gwiazdka","gwiazdka1.png")

loadSound("muzyka","Fortnite - Festive Lobby Music (Season 7).mp3")

add([
    sprite("tło")
])

const gwiazdka = add([
    sprite("gwiazdka"),
    pos(0,20)
])

let wprawo = true


gwiazdka.onUpdate(() => {

if(wprawo && gwiazdka.pos.x < 600)
gwiazdka.pos.x += 1

else if(!wprawo && gwiazdka.pos.x > 50)
gwiazdka.pos.x -= 1

else wprawo ^= true

})

onMouseRelease(()=>play("muzyka"))