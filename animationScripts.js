
function orderWalk()
{
      /* jeśli kot siedzi i chce wykonać animacje chodzenia to musi najpierw wstać*/
     if( document.querySelector(".cat").className == "cat" || document.querySelector(".cat").className == "cat catSittingDown")
     {
         orderGetUpAndWalk();
     }
     else
     {  
        if(document.querySelector(".cat").className = "cat catWalking")
        {
            document.querySelector(".cat").className = "cat catStanding";
        }
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
        requestAnimationFrame((time) => {
            requestAnimationFrame((time) => {
                document.querySelector(".cat").className = "cat catSittingDown";
            });
        });  
    }
 
}

function orderGetUpAndWalk()
{
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
        requestAnimationFrame((time) => {
            requestAnimationFrame((time) => {
                document.querySelector(".cat").className = "cat catRunning";
            });
        });  
    }
}


function orderGetUpAndRun()
{
    requestAnimationFrame((time) => {
        requestAnimationFrame((time) => {
            document.querySelector(".cat").className = "cat catGettingUpAndRunning";
        });
    });  
}