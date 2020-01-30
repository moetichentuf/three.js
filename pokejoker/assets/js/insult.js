

async function insults(lala) {
    //fetch stream of data
    const pokemonImage = await fetch(`https://amused.api.stdlib.com/insult@1.0.0/`);
    const pImage = await pokemonImage.json();

    document.querySelector("p.text").innerHTML =pImage;



}

insults();
