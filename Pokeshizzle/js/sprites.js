let idOrName;
let allTheSprites= [];
/*
let mySubString = str.substring(
    str.lastIndexOf(":") + 1,
    str.lastIndexOf(";")
);
 */
let spriteLinks= [];


document.getElementById("scanning").addEventListener("click", function () {
    idOrName = document.getElementById("pokeSearch").value;

    fetch("https://pokeapi.co/api/v2/pokemon/" + idOrName)
        .then((response) => {
            return response.json();
        })
        .then(moodymyboy => {
            console.log(moodymyboy);
            //shows the data of the chosen pokemon.

            // to show all the sprite pics but still with extra string to be removed.

            //   for (let x = 0; x < moodymyboy.abilities.sprites.length; x++) {
            //     allTheSprites.push(moodymyboy.abilities.sprites[x]);
            // }
            allTheSprites = moodymyboy.sprites;

            console.log(allTheSprites);

            allTheSprites = getSecondPart(allTheSprites);
            console.log(allTheSprites);
            //       spriteLinks = allTheSprites.split(':').pop();


            //   document.getElementById("sprites").src = spriteLinks;
            console.log(spriteLinks);
        });

});

function getSecondPart(str) {
    return str.split(':')[1];
}
/*

function spriteToLinks(a) {
    spriteLinks = allTheSprites.match(tryout);
    return allTheSprites;
}

var str =“AAAid223.55.66idXX”
var regex = /id(.*)id/;
var matches = str.match(regex);
 */