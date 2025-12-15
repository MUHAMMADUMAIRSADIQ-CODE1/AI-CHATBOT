function chatBot() {

    let message = document.getElementById("message").value;
    let messagelo = message.toLowerCase()
    if (message == "") return;
    document.getElementById("chatBox").innerHTML += `
        <div class="user">
            <p>${message}</p>
        </div>
        `;
        console.log(typeof message)
    if (message.includes("image")) {
        let typings = document.getElementById("chatBox");
        typings.innerHTML += `
         <div class="typing">
            <p>Processing....</p>
        </div>`
        let allTyping = document.getElementsByClassName("typing");
        let latestTyping = allTyping[allTyping.length - 1];

        setTimeout(function () {
            latestTyping.remove();
        }, 2000);
    }
    else{
       let typings = document.getElementById("chatBox");
        typings.innerHTML += `
         <div class="typing">
            <p>Typing....</p>
        </div>`
        let allTyping = document.getElementsByClassName("typing");
        let latestTyping = allTyping[allTyping.length - 1];

        setTimeout(function () {
            latestTyping.remove();
        }, 2000);  
    }

    setTimeout(function () {

        const salam = [
            "salam", "السلام علیکم", "walaikumassalam", "salaam", "hi", "hello", "hey", "assalamualaikum", "assalamu alaikum", "yo", "haye", "hai", "good morning", "good evening", "gm", "ge"
        ];
        const dayQuestion = ["aj kiya din hai", "aj kya din hai", "aaj ka din kya hai", "aaj ka din kya hai?", "aj ka din kya hai", "aj ka din kya hai?", "aaj ka din batao", "aaj ka din batao?", "aaj day kya hai", "aaj ki tareekh kya hai", "aj ki tareekh kya hai", "aaj ka day batao", "what day is today", "what day is it today", "tell me the day today", "which day is today", "today what day is it", "today's day", "can you tell me what day it is"];
        const condition = ["kia hal hai", "kiya hal hai", "kya haal hai", "how are you", "how r you", "how are u", "kya haal chaal hai", "kya haal chal hai", "how is it going", "how's it going", "salam", "assalamualaikum", "hello", "hi"];
        const web = ["mujhay web development kay baray main batao", "mujhay web development kay baray mein batao", "mujhe web development ke bare mein batao", "web development kiya hai", "web development kya hai", "web dev kya hai", "web dev kiya hai", "web development kya hota hai", "web development ka matlab kya hai", "mujhay webdevelopment kay baray main batao", "mujhay webdevelopment kay baray mein batao", "webdevelopment kiya hai", "webdevelopment kya hai", "what is web development", "what is webdevelopment", "tell me about web development", "guide me about web development", "guide me about webdevelopment", "explain web development", "can you explain web development", "web development explain karo", "web development seekhna hai", "how to learn web development", "web development ka scope kya hai", "web development career", "web developer kya karta hai"];
        const webDetails = ["is kay baray main batao", "mujhay is kay baray main batao", "mein yeh kaise seekh sakta hoon", "mein yai kaisay seekh sakta hoon", "mujhay yeh kaise seekhna chahiye", "mujhe web development kaise seekhna chahiye", "web development kaise seekhein", "web development kaise seekhi jati hai", "web dev kaise seekhein", "web dev seekhne ka tareeqa", "how can i learn this", "how can i learn web development", "how to learn web development", "how should i learn web development", "best way to learn web development", "guide me how to learn web development", "web development seekhne ka roadmap", "web development kaise start karun"];
        const image = ["laptop image","mujhay laptop images do"]
        if (salam.includes(messagelo)) {
            document.getElementById("chatBox").innerHTML += `
        <div class="bot">
            <p>walaikumassalam main ap ki kiya madad kar sakta hoon</p>
        </div>`;
        }
        else if (dayQuestion.includes(messagelo)) {
            let today = new Date().toLocaleDateString("en-US", { weekday: "long" });
            const dayReplies = [
                `Aj ${today} hai`,
                `Aaj ka din ${today} hai`,
                `Today is ${today}`,
                `${today} hai aaj`,
                `Aaj ${today} ka din hai`
            ];
            document.getElementById("chatBox").innerHTML += `
        <div class="bot">
            <p>${dayReplies[Math.floor(Math.random() * dayReplies.length)]}</p>
        </div>`
        }
        else if (condition.includes(messagelo)) {
            document.getElementById("chatBox").innerHTML += `
        <div class="bot">
            <p>mein theek hoon tum batao kiya madad chhiya</p>
        </div>`
        }
        else if (web.includes(messagelo)) {
            document.getElementById("chatBox").innerHTML += `
        <div class="bot">
            <p>🌐 Web Development Web development websites aur web applications banane ka process hota hai, jisme front‑end (jo user dekhta hai) aur back‑end (jo server par hota hai) dono shamil hote hain. Isme HTML, CSS, JavaScript jaise tools se design aur interaction banaya jata hai, jabke Python, PHP, aur databases se data handle kiya jata hai. Web development ka maqsad fast, secure, aur user‑friendly websites banana hota hai jo businesses ko online presence aur growth provide karti hain</p>
        </div>`
        }
        else if (webDetails.includes(messagelo)) {
            document.getElementById("chatBox").innerHTML += `
        <div class="bot">
        <p>🚀 How to Learn Web Development (Simple Roadmap) </br>
         ✅ 1. Start with the Basics HTML – structure of a webpage CSS – styling, layout, colors JavaScript – interaction, logic, dynamic behavior Yeh teen cheezein web development ka foundation hain. </br>
         ✅ 2. Practice Small Projects — Tumhari style ke hisaab se, theory se zyada practice kaam aati hai. Start with: Simple landing page, Login form, Portfolio section, Navigation bar. Har chhota project tumhari skills ko double speed se improve karega. <br>
         ✅ 3. Follow Video Tutorials — Tum video-based learning prefer karte ho, so: Short, focused tutorials, Step-by-step JavaScript lessons, Practical examples. Main chaaho to tumhare liye custom playlist bhi bana sakta hoon. <br>
         ✅ 4. Learn Modern JavaScript — Jab basics clear ho jayein: ES6 concepts, Functions, arrays, objects, DOM manipulation, API calls. Yeh sab tumhari development speed ko next level pe le jayega. <br>
         ✅ 5. Build a Portfolio — Tum already portfolio pe kaam kar rahe ho — perfect. Isme add karo: Clean UI, Smooth navigation, Custom backgrounds (jaisa tum pasand karte ho), Projects with descriptions. <br>
         ✅ 6. Keep Improving — Daily 1 hour practice, New UI ideas try karo, GitHub pe code upload karo, Freelance projects pick karo. If you want, I can also create a step-by-step daily learning plan for you — 7 days, 30 days, ya 60 days — jo tumhari speed aur goals ke hisaab se ho. <br>
         </p>
        </div>`
        }
        else if (image.includes(messagelo)) {
            let a = ["https://tse2.mm.bing.net/th/id/OIP.30y29wUXqS17aMfWTdQ7rQHaE8?cb=ucfimg2&ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3", "https://img.freepik.com/premium-photo/open-silver-laptop-wooden-table_392895-23667.jpg", "https://tse2.mm.bing.net/th/id/OIP.dMTX675UkcJ27ZZLVWmSpwHaFQ?cb=ucfimg2&ucfimg=1&w=728&h=517&rs=1&pid=ImgDetMain&o=7&rm=3", "https://media.istockphoto.com/photos/blank-slim-laptop-3d-render-picture-id481104973?k=6&m=481104973&s=612x612&w=0&h=CTbRd59Hk7fXBMzdrEAK9D_3WQ0yWyWOj2DSkGS3C4s=", "https://cdn.pixabay.com/photo/2020/10/21/18/07/laptop-5673901_1280.jpg", "https://img.freepik.com/premium-photo/purple-laptop-3d-illustration-black-desk-laptop-computer-with-color-pink-purple-light-display_37129-951.jpg?w=900", "https://images.freeimages.com/images/large-previews/c00/laptop-mockup-design-0410-5709187.jpg?fmt=webp&w=500", "https://images.squarespace-cdn.com/content/v1/5e5526c686f8153e0ce85e33/1591283822405-HFOYNCFRRKT1ZMWBZY72/942_72dpi.jpg", "https://creazilla-store.fra1.digitaloceanspaces.com/icons/3507374/black-laptop-icon-md.png", "https://cdn4.vectorstock.com/i/1000x1000/66/23/laptop-vector-38586623.jpg"]

            document.getElementById("chatBox").innerHTML += `
        <div class="bot">
           <img src="${a[Math.floor(Math.random() * a.length)]}" alt="">
        </div>`
        }






        else {
            document.getElementById("chatBox").innerHTML += `
        <div class="bot">
            <p>mujhay samjh nahin aya ap kiya keh rahay hain</p>
        </div>`
        }

    }, 2000)
    document.getElementById("message").value = "";
}
