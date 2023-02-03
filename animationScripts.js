
function orderWalk()
{
    document.querySelector(".cat").className = "cat";
    requestAnimationFrame((time) => {
        requestAnimationFrame((time) => {
            document.querySelector(".cat").className = "cat catWalking";
        });
    });

}
function orderSit()
{
    document.querySelector(".cat").className = "cat";
    requestAnimationFrame((time) => {
        requestAnimationFrame((time) => {
            document.querySelector(".cat").className = "cat catSitting";
        });
    });

}
