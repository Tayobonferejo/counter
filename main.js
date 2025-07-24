 window.addEventListener("load", interval);

    const years = document.getElementById("years");
    const website = document.getElementById("website");
    const app = document.getElementById("app");

    function interval(){
        alert("hello world");
        const numYear = 200;
        let increase1 = 0;
        let increase2 = 0;
        let increase3 = 0;
        const interval = setInterval(() => {
            years.innerText = `${increase1}`;
            increase1++;
            if(increase1 > numYear) {
                clearInterval(interval);
            }
        }, 20);

        const interval2 = setInterval(() => {
            website.innerText = `${increase2}`;
            increase2++;
            if(increase2 > 240){
                clearInterval(interval2);
            }
        }, 20);

        const interval3 = setInterval(() => {
            app.innerText = `${increase3}`;
            increase3++;
            if(increase3 > 50){
                clearInterval(interval3);
            }
        }, 50);


    }