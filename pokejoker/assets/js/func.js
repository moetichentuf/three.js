(() => {

    let Name;

  for(let i=0;i<4 ;i++) {

      document.getElementsByClassName("guessButton")[i].addEventListener("click", function(){

        document.getElementById("lala").innerHTML="There is a wild pokemon rapidly coming towards you, wich one is it?";

        Name = document.getElementsByClassName("guessButton")[i].innerHTML;

      checkName(Name);
      });
      }

      function checkName(Name){

          // Retrieve data from session
          let ImageIndexName= sessionStorage.getItem("nameImage");

        if(Name == ImageIndexName) {
                // clear animated sentence
            document.getElementById("lala").innerHTML=" ";

            // hide screen 1
            document.querySelector(".guessPokemon").style.display="none";

            // show screen 2
            document.querySelector(".catchIt").style.display="block";
            // adjust name of pokemon in the second screen
            document.querySelector("#pokeId").innerHTML=Name;
            // hide weapons temporaly
            document.querySelector(".chooseItem").style.display="none";

            let weapon;

            function showWeapons() {
                weapon = setTimeout(weaponFunc, 10000);
            }
            function weaponFunc() {
                document.querySelector(".chooseItem").style.display="block";
                document.querySelector("#insultText").style.display="none";
            }
            showWeapons();

            document.querySelector("#secondPicture").addEventListener("click", function(){
                document.querySelector("#insultText").style.display="block";

            });
            // voor audio na knopklik af te spelen id moet nog aangepast worden
            //var x = document.getElementById("myAudio");
             //   x.play();


       }else{
            document.getElementById("lala").innerHTML="You can't see it clearly yet...";

            let myVar;

                 function myFunction() {
                      myVar = setTimeout(bannerFunc, 1000);
                 }
                    function bannerFunc() {
                        document.getElementById("lala").innerHTML="There is a wild pokemon rapidly coming towards you, wich one is it?";
                    }
                  myFunction();
             }
      }
})();