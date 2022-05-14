let Links = document.querySelectorAll('[data-goto]');
if(Links.length>0){
    Links.forEach(Link => {
        Link.addEventListener("click", onMenuLinkClick);
    });
    function onMenuLinkClick(e){
        const Link = e.target;
            const gotoBlock = document.querySelector(Link.dataset.goto);
            const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset ;

            header_burger = document.querySelector('.header_burger');
            header_menu = document.querySelector('.header_menu');
            if (header_burger.classList.contains ('active')) {
                document.body.classList.remove('lock');
                header_burger.classList.remove('active');
                header_menu.classList.remove('active');
            }

            window.scrollTo({
                top: gotoBlockValue,
                behavior: "smooth"
            });
        };
    };