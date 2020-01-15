
/*
let mySubString = str.substring(
    str.lastIndexOf(":") + 1,
    str.lastIndexOf(";")
);
 */



document.getElementById("scanning").addEventListener("click", function () {
    let move= [];

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

            move = moodymyboy.moves;
            console.log(move);
            document.getElementById('list').innerHTML = move;


        });

});

function getSecondPart(str) {
    return str.split(':')[1];
}