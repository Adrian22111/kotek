function requestAnimation(stringClassName,element)
{
    requestAnimationFrame((time) => {
        requestAnimationFrame((time) => {
            document.querySelector(element).className = stringClassName;
            
        });
    });
}

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
        requestAnimation("container containerWalk",".container");
        /* dodanie animacji do kota */
        requestAnimation("cat catWalking",".cat")
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
        requestAnimation("cat catGettingUp",".cat");

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
        requestAnimation("cat catSittingDown",".cat");
    }
 
}

function orderGetUpAndWalk()
{
    if(document.querySelector(".container").className = "container containerWalk")/* Jeśli kot wcześniej chodził  to resetuje tło do pozycji wyjściowej*/ 
    {
        document.querySelector(".container").className = "container";
    }
    /* "dodanie animacji" do tła, jeśli jest sama klasa container to nie ma ona animacji a dzięki jej resetowaniu powyżej można ją wykonywać wielokrotnie bez konieczności odświerzania */
    requestAnimation("container containerGetUpAndWalk",".container");
    requestAnimation("cat catGettingUpAndWalking",".cat");
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
        requestAnimation("container containerRun",".container");
        if(document.querySelector(".cat").className == "cat catRunning" ||document.querySelector(".cat").className == "cat catGettingUpAndRunning")
        {
            document.querySelector(".cat").className = "cat catStanding" 
        }
        requestAnimation("cat catRunning",".cat");
    
    }
}


function orderGetUpAndRun()
{
    if(document.querySelector(".container").className = "container containerRun")/* Jeśli kot wcześniej chodził  to resetuje tło do pozycji wyjściowej*/ 
    {
        document.querySelector(".container").className = "container";
    }
    /* "dodanie animacji" do tła, jeśli jest sama klasa container to nie ma ona animacji a dzięki jej resetowaniu powyżej można ją wykonywać wielokrotnie bez konieczności odświerzania */
    requestAnimation("container containerGetUpAndRun",".container");
    requestAnimation("cat catGettingUpAndRunning",".cat");
}