const revealElements =
document.querySelectorAll(".reveal");

function revealOnScroll(){

    revealElements.forEach(item=>{

        const top =
        item.getBoundingClientRect().top;

        const screenHeight =
        window.innerHeight;

        if(top < screenHeight - 100){
            item.classList.add("active");
        }

    });

}

window.addEventListener(
"scroll",
revealOnScroll
);

revealOnScroll();

const glow =
document.querySelector(".glow");

document.addEventListener(
"mousemove",
e => {

    if(glow){

        glow.style.left =
        e.clientX + "px";

        glow.style.top =
        e.clientY + "px";

    }

});

const textarea = document.querySelector("textarea");

const texts = [
    "Tell me about your project...",
    "Need a frontend developer?",
    "Let's build something amazing...",
    "Ask me anything..."
];

let i = 0;

setInterval(()=>{
    textarea.placeholder = texts[i];
    i = (i + 1) % texts.length;
},3000);