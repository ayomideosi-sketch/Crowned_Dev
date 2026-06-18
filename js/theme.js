const themeBtn = document.getElementById("toggle");
const body = document.body;

if(
    localStorage.getItem(
        "theme"
    ) === "light"
){
    body.classList.add(
        "light-mode"
    );
    themeBtn.innerHTML = "🌙";
};
themeBtn.addEventListener("click", () => {
    body.classList.toggle(
        "light-mode"
    );
    if(
        body.classList.contains(
            "light-mode"
        )
    ){
        localStorage.setItem(
            "theme",
            "light"
        );
        themeBtn.innerHTML = "🌙"
    }else{
        localStorage.setItem(
            "theme",
            "dark"
        );
        themeBtn.innerHTML = "☀️"
    }
});


const form =
document.getElementById(
"contactForm"
);

const successScreen =
document.querySelector(
".success-screen"
);

form.addEventListener(

"submit",

e => {

    e.preventDefault();

    successScreen.classList.add(
    "active"
    );

    setTimeout(() => {

        successScreen.classList.remove(
        "active"
        );

        form.reset();

    },5000);

});    