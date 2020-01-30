(() => {
    // initialise vars
    let ImageIndex=0;
    let randomSprite = [];
    const data = []; // constant array to save/keep all the feched data in from the first fetch to reuse x-times in the site/document
    const keepImage=[]; // constant array to save/keep all the feched data in from the second fetch to reuse x-times in the site/document

    //fetch JSON
    async function getPokemon() {
     //   try {

        //fetch stream of data 151 pokemons, starting at 0
        const pokemonPlain = await fetch(`https://pokeapi.co/api/v2/pokemon/?offset=0&limit=151`);

        //convert to json
        const pObject = await pokemonPlain.json();
        //console.log(pObject); // testing in the console

            // push the fetched data in the constant array to reuse and keep so you do not need to fetch X-times anymore
            data.push(pObject);
            //console.log(data); // testing in the console

        // generate 4 random numbers to use as random id's to select 4 random pokemons
         for (let i = 1; i <= 4; i++) {
            randomSprite[i] = Math.floor(Math.random() * 151) + 1;     // returns a random integer from 1 to 151
             //console.log(randomSprite[i]); // this works fine
         }

         // select buttons to display 4 random pokemon names   ---this works!
         for (let y = 0; y < 4; y++) {
             //console.log(data[0].results[randomSprite[y + 1]].name);
             document.querySelectorAll(".guessButton")[y].innerHTML = data[0].results[randomSprite[y + 1]].name;
         }

         // to generate a random number between 0 and 4 to select the random id of the image we are going to show
        let randomGetal = Math.floor(Math.random() * 5); // this works fine!

        if (randomGetal==0){  // the randomnumber must be from 1 to 5, zero is not allowed because than you can't get a pokemon picture
             randomGetal=1;
         }
         ImageIndex = randomSprite[randomGetal]; // to select the random image to show from the four selected pokemons
         ImageIndex=ImageIndex+1;  //there is a difference between de index of the first get (the names/id and the second get: the images, by doing +1 this index-difference dissapears

           getPokemonImage(ImageIndex);

  //  } catch (error) {
       // console.log("error by fetching the name- and id-data");
  //  }
}
//--------------------------------------------end of asynchron function one ------------------------------------------------------------------------------------------
getPokemon(); // call the function

  //console.log(pObject); // testing in the console dus met ne return krijg ik de pObject data niet uit de functie ???!!! why?!!!

    async function getPokemonImage(name) {
      // try {
             //fetch stream of data to get the images
            const pokemonImage = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
            const pImage = await pokemonImage.json();

           //console.log(pImage.sprites.front_default);  // this works
           //console.log(pImage.name);  // testing
           //console.log(pImage.id);   // testing

           // fill a constant array to keep/save the data so you don't need to fetch x-times anymore, only one time a day
                keepImage.push(pImage);
               // console.log(keepImage[0].name);  // testing . . .
                let imageName=keepImage[0].name;

            // show the images corresponding to the name and id in the html
           document.getElementsByClassName("PokemonIcon")[0].src= keepImage[0].sprites.front_default;
           document.getElementsByClassName("PokemonIcon")[1].src= keepImage[0].sprites.front_default;
          // document.querySelector(".PokemonIcon").src = pImage.sprites.front_default;    // this works! but not for more then one!

        // Check browser support
        if (typeof(Storage) !== "undefined") {
            // Store
            sessionStorage.setItem("nameImage", imageName);
        } else {
           alert("Sorry, your browser does not support Web Storage...");
        }

           // return imageName; // via localmemory doorgeven aan het andere script?
  // } catch (error) {
      //    console.log("error by fetching the image-data or selecting the image out of the data to show it in the html");
    //   }
    }

    /* todo list
    // het vergelijken of er twee van die 4 randomwaarden hetzelfde zijn heb ik nog niet gedaan
    function same(randomSprite[i]) {
     return randomSprite[i] !== ImageValue; // zoiets


     // misschien nog aanpassen als je de constante arrays met data hebt gevuld dat je dan door de fetch geen foutmeldingen meer krijgt!
*/

})();