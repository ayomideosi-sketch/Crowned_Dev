document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener( "click", function(e){
            e.preventDefault();
            const target = document.querySelector(this.getAttribute("href"));
            if(target){
                target.scrollIntoView({
                    behavior:"smooth"
                });
            }
        }
    );
});

// ========================== 
// ==========================

const progressBar = document.createElement("div");
progressBar.className = "scroll-progress";
document.body.appendChild(progressBar);
window.addEventListener("scroll", () => {
        const winScroll = document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;
        progressBar.style.width = scrolled + "%";
    }
);

// ==========================
// SCROLL TO TOP BUTTON
// ==========================

const topButton = document.createElement("button");
topButton.className = "scroll-top";
topButton.innerHTML = "↑";
document.body.appendChild(topButton);
window.addEventListener("scroll", () => {
        if(window.scrollY > 50){
            topButton.classList.add("show-top");
        }
        else{
            topButton.classList.remove("show-top");
        }
    }
);

topButton.addEventListener("click", () => {
        window.scrollTo({
            top:0,
            behavior:"smooth"
        });
    }
);

// ==========================
// NAVBAR FLOAT EFFECT
// ==========================

const header =
document.querySelector("header");
window.addEventListener("scroll", () => {
        if(window.scrollY > 50){
            header.classList.add("floating-header");
        }
        else{
            header.classList.remove("floating-header");
        }
    }
);


// ==========================
// PARALLAX HERO
// ==========================

const hero =
document.querySelector(
    "#hero"
);

window.addEventListener(

    "scroll",

    () => {

        let value =
        window.scrollY;

        hero.style.transform =
        `translateY(${value*0.15}px)`;

    }

);


// ==========================
// ACTIVE SECTION
// ==========================

const sections =
document.querySelectorAll(
    "section"
);

const activeLinks =
document.querySelectorAll(
    "nav a"
);
window.addEventListener("scroll", () => {
        let current = "";
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 200;
            if(
                scrollY >= sectionTop
            ){
                current = section.getAttribute("id");
            }
        });
        activeLinks.forEach(link => {

            link.classList.remove(
                "active"
            );

            if(

                link.getAttribute(
                    "href"
                ) === "#" + current

            ){

                link.classList.add(
                    "active"
                );

            }

        });

    }

);