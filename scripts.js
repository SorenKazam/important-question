const yesBtn = document.getElementById("yesBtn")
const noBtn = document.getElementById("noBtn")
const question = document.getElementById("question")
const resultImg = document.getElementById("resultImg")
const bodyBackgroundImage = document.getElementById("body")

// Dialogs (portuguese is my native language / I'm testing multilanguage tecniques)
const texts = {
    pt: {
        title: "Pergunta importante",
        question: "Queres namorar comigo?",
        yes: "Sim",
        no: "Não",
        success: "Yay! Estamos a namorar!",
        noAlert: "Boa tentativa!"
    },
    en: {
        title: "Important question",
        question: "Do you want to date me?",
        yes: "Yes",
        no: "No",
        success: "Yay! We're dating!",
        noAlert: "Nice Try!"
    }
};

// Function to detect browser language
function getBrowserLanguage() {
    const lang = navigator.language || navigator.userLanguage;
    return lang.startsWith('pt') ? 'pt' : 'en';
}

// Define game language
const lang = getBrowserLanguage();
const text = texts[lang];
question.textContent = text.question;
yesBtn.textContent = text.yes;
noBtn.textContent = text.no;
document.title = text.title
counter = 0

// If "Yes" is clicked
yesBtn.addEventListener("click", () => {
    
    /* Backgroung Image */
    bodyBackgroundImage.style.backgroundImage = "url('./assets/background.jpeg')";

    question.textContent = text.success;
    yesBtn.style.display = "none";
    noBtn.style.display = "none";

    /* Gif config */
    resultImg.style.display = "block"
    resultImg.style.width = "100%"
    resultImg.alt="Cute white kitten with hearts"
    resultImg.src="/assets/kittenHearts.gif";
});

// If mouse comes nearby "No"
noBtn.addEventListener("mouseover", () => {
    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
});


// If mouse cliks "No"
noBtn.addEventListener("click", () => {
    counter++
    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
    if(counter === 3){
        window.alert(text.noAlert)
        location.reload()
    }
});