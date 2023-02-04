
function orderWalk()
{
      /* jeśli kot siedzi i chce wykonać animacje chodzenia to musi najpierw wstać*/
     if( document.querySelector(".cat").className == "cat" || document.querySelector(".cat").className == "cat catSittingDown")
     {
         orderGetUpAndWalk();
     }
     else
     {  
        if(document.querySelector(".cat").className = "cat catWalking") /* Jeśli kot wcześniej chodził to resetuje grafike kota do pozycji stojącej */ 
        {
            document.querySelector(".cat").className = "cat catStanding";
        }
        if(document.querySelector(".container").className = "container containerWalk")/* Jeśli kot wcześniej chodził  to resetuje tło do pozycji wyjściowej*/ 
        {
            document.querySelector(".container").className = "container";
        }
        /* "dodanie animacji" do tła, jeśli jest sama klasa container to nie ma ona animacji a dzięki jej resetowaniu powyżej można ją wykonywać wielokrotnie bez konieczności odświerzania */
        requestAnimationFrame((time) => {
            requestAnimationFrame((time) => {
                document.querySelector(".container").className = "container containerWalk";
                
            });
        });
        /* dodanie animacji do kota */
        requestAnimationFrame((time) => {
            requestAnimationFrame((time) => {
                document.querySelector(".cat").className = "cat catWalking";
                
            });
        });
     }


}

function orderGetUp()
{
    /* Kotek może wstać tylko jeśli siedzi, jeżeli chodził albo już wstał to nie może wstać*/
    if(document.querySelector(".cat").className == "cat" || document.querySelector(".cat").className == "cat catSittingDown"  )
    {
        if(document.querySelector(".container").className = "container containerWalk")/* Jeśli kot wcześniej chodzi*/ 
        {
            document.querySelector(".container").className = "container";
        }
        requestAnimationFrame((time) => {
            requestAnimationFrame((time) => {
                document.querySelector(".cat").className = "cat catGettingUp";
            });
        });
    }
    else
    {
        
    }


    
}
function orderSitDown()
{
    /* Jeżeli kotek siedzi to nie może usiąść jeszcze raz*/
    if(document.querySelector(".cat").className == "cat" || document.querySelector(".cat").className == "cat catSittingDown")
    {

    }
    else
    {
        if(document.querySelector(".container").className = "container containerWalk")/* Jeśli kot wcześniej chodzi*/ 
        {
            document.querySelector(".container").className = "container";
        }
        requestAnimationFrame((time) => {
            requestAnimationFrame((time) => {
                document.querySelector(".cat").className = "cat catSittingDown";
            });
        });  
    }
 
}

function orderGetUpAndWalk()
{
    if(document.querySelector(".container").className = "container containerWalk")/* Jeśli kot wcześniej chodził  to resetuje tło do pozycji wyjściowej*/ 
    {
        document.querySelector(".container").className = "container";
    }
    /* "dodanie animacji" do tła, jeśli jest sama klasa container to nie ma ona animacji a dzięki jej resetowaniu powyżej można ją wykonywać wielokrotnie bez konieczności odświerzania */
    requestAnimationFrame((time) => {
        requestAnimationFrame((time) => {
            document.querySelector(".container").className = "container containerGetUpAndWalk";
            
        });
    });
    requestAnimationFrame((time) => {
        requestAnimationFrame((time) => {
            document.querySelector(".cat").className = "cat catGettingUpAndWalking";
        });
    });  
}


function orderRun()
{
    /* Jeżeli kot siedzi to tak jak w przypadku chodzenia musi najpierw wstać żeby biec*/
    if(document.querySelector(".cat").className == "cat" || document.querySelector(".cat").className == "cat catSittingDown")
    {
        orderGetUpAndRun();
    }
    else
    {
        if(document.querySelector(".container").className = "container containerRun")
        {
            document.querySelector(".container").className = "container";
        }
        requestAnimationFrame((time) => {
            requestAnimationFrame((time) => {
                document.querySelector(".container").className = "container containerRun";
                
            });
        });
        if(document.querySelector(".cat").className == "cat catRunning" )
        {
            document.querySelector(".cat").className = "cat catStanding" 
        }


            requestAnimationFrame((time) => {
                requestAnimationFrame((time) => {
                    document.querySelector(".cat").className = "cat catRunning";
                });
            }); 
        
 
    }
}


function orderGetUpAndRun()
{
    if(document.querySelector(".container").className = "container containerRun")/* Jeśli kot wcześniej chodził  to resetuje tło do pozycji wyjściowej*/ 
    {
        document.querySelector(".container").className = "container";
    }
    /* "dodanie animacji" do tła, jeśli jest sama klasa container to nie ma ona animacji a dzięki jej resetowaniu powyżej można ją wykonywać wielokrotnie bez konieczności odświerzania */
    requestAnimationFrame((time) => {
        requestAnimationFrame((time) => {
            document.querySelector(".container").className = "container containerGetUpAndRun";
            
        });
    });
    requestAnimationFrame((time) => {
        requestAnimationFrame((time) => {
            document.querySelector(".cat").className = "cat catGettingUpAndRunning";
        });
    });  
}