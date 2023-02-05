/* wymuszenie odtworzenia animacji*/
function requestAnimation(stringClassName,element)
{
    requestAnimationFrame((time) => {
        requestAnimationFrame((time) => {
            document.querySelector(element).className = stringClassName;
            
        });
    });
}
/* funkcja wyłącza przyciski o określonym id na określony czas*/ 
function disableButtonsForTime(firstButton,secondButton,thirdButton,time)
{
    document.getElementById(firstButton).disabled = true;
    document.getElementById(secondButton).disabled = true;
    document.getElementById(thirdButton).disabled = true;
    setTimeout(() => {
        document.getElementById(firstButton).disabled = false;
        document.getElementById(secondButton).disabled = false;
        document.getElementById(thirdButton).disabled = false;
        }, time);
}
function closeWindow()
{
    document.getElementById("appDesc").style.opacity = 0;

    setTimeout(() => {
        document.getElementById("appDesc").style.display = "none";
        }, 1000);
}

/* funckja obsługująca odtwarzanie animacji spaceru */
function orderWalk()
{
      /* jeśli kot siedzi i chce wykonać animacje chodzenia to musi najpierw wstać*/
     if( document.querySelector(".cat").className == "cat" || document.querySelector(".cat").className == "cat catSittingDown")
     {
         orderGetUpAndWalk();
         
     }
     else
     {  
        disableButtonsForTime("orderWalk","orderRun","orderSitDown",10000);
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

/* funckja obsługująca odtwarzanie animacji wstawania */
function orderGetUp()
{
    document.getElementById("orderGetUp").disabled = true;
    document.getElementById("orderSitDown").disabled = false;
    // disableButtonsForTime("orderWalk","orderGetUp","orderRun","orderSitDown",500);

    /* Kotek może wstać tylko jeśli siedzi, jeżeli chodził albo już wstał to nie może wstać*/
    if(document.querySelector(".cat").className == "cat" || document.querySelector(".cat").className == "cat catSittingDown"  )
    {
        if(document.querySelector(".container").className = "container containerWalk")/* Jeśli kot wcześniej chodzi*/ 
        {
            document.querySelector(".container").className = "container";
        }
        requestAnimation("cat catGettingUp",".cat");
        
    }

}
/* funckja obsługująca odtwarzanie animacji siadania */
function orderSitDown()
{

    /* Jeżeli kotek siedzi to nie może usiąść jeszcze raz*/
    
    if(document.querySelector(".cat").className != "cat" || document.querySelector(".cat").className != "cat catSittingDown")
    {
        document.getElementById("orderSitDown").disabled = true;
        document.getElementById("orderGetUp").disabled = false;
        if(document.querySelector(".container").className = "container containerWalk")/* Jeśli kot wcześniej chodzi*/ 
        {
            document.querySelector(".container").className = "container";
        }
        requestAnimation("cat catSittingDown",".cat");
        
    }

}
/* funckja obsługująca odtwarzanie animacji wstawania i spaceru  */
function orderGetUpAndWalk()
{
    disableButtonsForTime("orderWalk","orderRun","orderSitDown",10500);
    document.getElementById("orderGetUp").disabled = true;
    /* Jeśli kot wcześniej chodził  to resetuje tło do pozycji wyjściowej*/ 
    if(document.querySelector(".container").className = "container containerWalk")
    {
        document.querySelector(".container").className = "container";
    }
    /* "dodanie animacji" do tła, jeśli jest sama klasa container to nie ma ona animacji a dzięki jej resetowaniu powyżej można ją wykonywać wielokrotnie bez konieczności odświerzania */
    requestAnimation("container containerGetUpAndWalk",".container");
    requestAnimation("cat catGettingUpAndWalking",".cat");
    
}

/* funckja obsługująca odtwarzanie animacji biegu */
function orderRun()
{
    /* Jeżeli kot siedzi to tak jak w przypadku chodzenia musi najpierw wstać żeby biec*/
    
    if(document.querySelector(".cat").className == "cat" || document.querySelector(".cat").className == "cat catSittingDown")
    {
        orderGetUpAndRun();
    }
    else
    {
        disableButtonsForTime("orderWalk","orderRun","orderSitDown",5000);
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

/* funckja obsługująca odtwarzanie animacji wstawania i biegu */
function orderGetUpAndRun()
{
    disableButtonsForTime("orderWalk","orderRun","orderSitDown",5500); 
    document.getElementById("orderGetUp").disabled = true;
    if(document.querySelector(".container").className = "container containerRun")/* Jeśli kot wcześniej chodził  to resetuje tło do pozycji wyjściowej*/ 
    {
        document.querySelector(".container").className = "container";
    }
    /* "dodanie animacji" do tła, jeśli jest sama klasa container to nie ma ona animacji a dzięki jej resetowaniu powyżej można ją wykonywać wielokrotnie bez konieczności odświerzania */
    requestAnimation("container containerGetUpAndRun",".container");
    requestAnimation("cat catGettingUpAndRunning",".cat");
    
}