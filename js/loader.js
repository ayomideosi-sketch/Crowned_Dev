window.addEventListener("load", () =>{
    const loader = document.getElementById("loader");
    const percentage = document.getElementById("percentage");
    const progressBar = document.querySelector(".progress");
    const loadingTxt = document.getElementById("tag");

    let count = 0;
    const loadingInterval = setInterval(() => {
        count++;
        progressBar.style.width = count + "%";
        percentage.textContent = count + "%";
        
        if (count < 15){
            loadingTxt.textContent = "Booting Portfolio...";
        }else if(count < 30){
            loadingTxt.textContent = "Loading Core Modules...";
        }else if(count < 50){
            loadingTxt.textContent = "Compiling Components...";
        }else if(count < 70){
            loadingTxt.textContent = "Optimizing Assets...";
        }else if(count < 90){
            loadingTxt.textContent = "Rendering Interface...";
        }else if(count < 100){
            loadingTxt.textContent = "Finalizing Experience...";
        }else{
            loadingTxt.textContent = "Launching Interface...";

            clearInterval(loadingInterval);
            setTimeout(() => {
                loader.classList.add("loader-hide");
            }, 1000)
        }
    }, 50)
});