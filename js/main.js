const revealElements =
document.querySelectorAll(".reveal");

function revealOnScroll(){
    revealElements.forEach(item=>{
        const top = item.getBoundingClientRect().top;
        const screenHeight = window.innerHeight;
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

// Form


const form = document.getElementById('form');
const result = document.getElementById('result');

form.addEventListener('submit', function(e) {
  e.preventDefault();
  const formData = new FormData(form);
  const object = Object.fromEntries(formData);
  const json = JSON.stringify(object);
  result.innerHTML = "Please wait..."

    fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: json
        })
        .then(async (response) => {
            let json = await response.json();
            if (response.status == 200) {
                result.innerHTML = json.message;
            } else {
                console.log(response);
                result.innerHTML = json.message;
            }
        })
        .catch(error => {
            console.log(error);
            result.innerHTML = "Something went wrong!";
        })
        .then(function() {
            form.reset();
            setTimeout(() => {
                result.style.display = "none";
            }, 3000);
        });
});

// Typewriter
const text = document.getElementById("typing-txt");
const words = [
    "Passionate Frontend Developer",
    "Creative UI/UX Designer",
    "JavaScript Enthusiast",
    "Tech Enthusiast",
    "Web Developer"
];
let wordIndex = 0;
let letterIndex = 0;
let isDelete = false;
function type(){
    const presentWord = words[wordIndex];
    if(isDelete){
        text.textContent = presentWord.substring(0, letterIndex--);
    } else {
        text.textContent = presentWord.substring(0, letterIndex++);
    }

    let speed = isDelete ? 50 : 100;
    if(!isDelete && letterIndex > presentWord.length){
        isDelete = true;
        speed = 1800;
    }

    if(isDelete && letterIndex < 0){
        isDelete = false;
        wordIndex = (wordIndex + 1) % words.length;
        speed = 300;
    }
    setTimeout(type, speed);
}
type()