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
    themeBtn.innerHTML = "☀️";
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
        themeBtn.innerHTML = "☀️"
    }else{
        localStorage.setItem(
            "theme",
            "dark"
        );
        themeBtn.innerHTML = "🌙"
    }
});
// function updateButton(){
//     if(body.classList.contains("light-mode")){
//         themeBtn.innerHTML = "☀️";
//         mobileToggle.innerHTML = "☀️ <span>Light Mode</span>";
//     }else{
//         themeBtn.innerHTML = "🌙";
//         mobileToggle.innerHTML = "🌙 <span>Dark Mode</span>";
//     }
// };
// if(
//     localStorage.getItem("theme") === "light"){
//     body.classList.add("light-mode");
//     // themeBtn.innerHTML = "🌙";
// };
// updateButton();
// function toggleTheme(){
//     body.classList.toggle("light-mode");
//     if(body.classList.contains("light-mode")){
//         localStorage.setItem("theme", "light");
//     }else{
//         localStorage.setItem("theme", "dark");
//     }
//     updateButton();
// }
// themeBtn.addEventListener("click", toggleTheme);
// mobileToggle.addEventListener("click", toggleTheme)
// themeBtn.addEventListener("click", () => {
//     body.classList.toggle("light-mode");
//     if(body.classList.contains("light-mode")){
//         localStorage.setItem("theme","light");
//         themeBtn.innerHTML = "☀️"
//     }else{
//         localStorage.setItem(
//             "theme",
//             "dark"
//         );
//         themeBtn.innerHTML = "🌙"
//     }
// });


const showBtn = document.getElementById("show_me");
const modal = document.getElementById("contactModal");
const card = document.getElementById("contactCard");
const closeBtn = document.querySelector(".close-btn");
const btnContact = document.getElementById("btnContact");

showBtn.addEventListener("click", () => {
    modal.classList.add("active");
});

btnContact.addEventListener("click", (e) => {
    e.preventDefault();
    modal.classList.add("active");
});

closeBtn.addEventListener("click", () => {
    modal.classList.remove("active");
});

modal.addEventListener("click", () => {
    modal.classList.remove("active");
});

card.addEventListener("click", (e) => {
    e.stopPropagation();
});
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
    localStorage.setItem("lastMessageTime", Date.now());
    countDown();
    setTimeout(() => {

        successScreen.classList.remove(
        "active"
        );

        form.reset();

    },5000);

});    

const sendBtn = document.getElementById("sendBtn");
const waitTime = 0.002 * 60 * 60 * 1000; //2hrs
function countDown(){
    const lastSent = localStorage.getItem("lastMessageTime");
    if(!lastSent){
        sendBtn.disabled = false;
        sendBtn.innerHTML = "<span>Send Message</span>";
        return;
    }
    const now = Date.now();
    const timeLeft = waitTime - (now - Number(lastSent));
    if(timeLeft <= 0){
        localStorage.removeItem("lastMessageTime");
        sendBtn.disabled = false;
        sendBtn.innerHTML = "<span>Send Messsage</span>";
        return;
    }
    sendBtn.disabled = true;
    const hours = Math.floor(timeLeft / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
    sendBtn.innerHTML = `<span>⏳ Send again ${hours}h ${minutes}m ${seconds}s</span>`
}
countDown();
setInterval(countDown, 1000);