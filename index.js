function chatBot() {

    let message = document.getElementById("message").value;
    let messagelo = message.toLowerCase()
    if (message == "") return;
    document.getElementById("chatBox").innerHTML += `
        <div class="user">
            <p>${message}</p>
        </div>
        `;
    setTimeout(function () {
        
const salam = [
    "salam","السلام علیکم","walaikumassalam","salaam","hi","hello","hey","assalamualaikum","assalamu alaikum","yo","haye","hai","good morning","good evening","gm","ge"
];
const dayQuestion = ["aj kiya din hai","aaj ka din kya hai","aaj ka din kya hai?","aj ka din kya hai","aj ka din kya hai?","aaj ka din batao","aaj ka din batao?","aaj day kya hai","aaj ki tareekh kya hai","aj ki tareekh kya hai","aaj ka day batao","what day is today","what day is it today","tell me the day today","which day is today","today what day is it","today's day","can you tell me what day it is"];
const condition = ["kia hal hai","kya haal hai","how are you","how r you","how are u","kya haal chaal hai","kya haal chal hai","how is it going","how's it going","salam","assalamualaikum","hello","hi"];



        if (salam.includes(messagelo)) {
            document.getElementById("chatBox").innerHTML += `
        <div class="bot">
            <p>walaikumassalam main ap ki kiya madad kar sakta hoon</p>
        </div>`;
        }
        else if (dayQuestion.includes(messagelo)) {
            document.getElementById("chatBox").innerHTML += `
        <div class="bot">
            <p>Aj friday hai</p>
        </div>`
        }
        else if (condition.includes(messagelo)) {
            document.getElementById("chatBox").innerHTML += `
        <div class="bot">
            <p>mein theek hoon tum batao kiya madad chhiya</p>
        </div>`
        }
        else {
            document.getElementById("chatBox").innerHTML += `
        <div class="bot">
            <p>mujhay samjh nahin aya ap kiya keh rahay hain</p>
        </div>`
        }

    }, 1000)
    document.getElementById("message").value = "";
}
