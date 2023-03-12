window.addEventListener('scroll', reaveal);
function reaveal()
{
    var reaveals=document.querySelectorAll('.reveal');

    for(var i=0;i<reaveals.length;i++)
    {
        var windowHeight=window.innerHeight;
        var revealTop=reaveals[i].getBoundingClientRect().top;
        var revealpoint=150;


        if(revealTop<windowHeight-revealpoint)
        {
            reaveals[i].classList.add('active');
        }
        else
        {
            reaveals[i].classList.remove('active');
        }
    }
}