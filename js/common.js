(function() {
    var contactus = document.getElementById("contactus");
    var hovercontbtn = document.querySelector(".jumbotron_button").classList;
    var hoversendbtn = document.querySelector(".form_button").classList;
    var elems = document.getElementsByClassName('hover_clients');
    var hovermenubtn = document.getElementsByClassName('header_btn');

    /*sticky header*/
    window.onscroll = function() { scrollFunction() };

    var navbar = document.querySelector(".header");
    var sticky = navbar.offsetTop;

    function scrollFunction() {
        if (window.pageYOffset || document.documentElement.scrollTop) {
            navbar.classList.add("sticky")
        } else {
            navbar.classList.remove("sticky");
        }
    };
    /*popup contact us*/
    document.querySelector(".button_contact").addEventListener("click", function(event) {
        event.preventDefault();
        contactus.style.display = "block";
    });
    document.querySelectorAll(".button_contact")[1].addEventListener("click", function(event) {
        event.preventDefault();
        contactus.style.display = "block";
    });

    document.querySelector(".form_close").addEventListener("click", function(event) {
        contactus.style.display = "none";
    });
    document.querySelector(".overlay_popup").addEventListener("click", function(event) {
        contactus.style.display = "none";
    });

    /*effects are disabled, if width is less 768px*/

    function myFunction(x) {
        if (x.matches) {
            hovercontbtn.remove('hvr_bounce_in');
            hoversendbtn.remove('hvr_push');
            for (var i = 0; i < elems.length; i++) {
                elems[i].classList.remove("hover_item");
            }
            for (var i = 0; i < hovermenubtn.length; i++) {
                hovermenubtn[i].classList.remove("nav_hover");
            }

        } else {
            hovercontbtn.add('hvr_bounce_in');
            hoversendbtn.add('hvr_push');
            for (var i = 0; i < elems.length; i++) {
                elems[i].classList.add("hover_item");
            }
            for (var i = 0; i < hovermenubtn.length; i++) {
                hovermenubtn[i].classList.add("nav_hover");
            }
        }
    }

    var x = window.matchMedia("(max-width: 768px)")
    myFunction(x) // Call listener function at run time
    x.addListener(myFunction)

    /*open burger menu*/
    var popup_burger = document.querySelector(".header_qian");
    var mob_menu = document.querySelector(".main-nav");

    popup_burger.addEventListener("click", function(event) {
        event.preventDefault();
        if (mob_menu.className === "main-nav") {
            mob_menu.className += " mob-nav";
        } else {
            mob_menu.className = "main-nav";
        }
    });


})();