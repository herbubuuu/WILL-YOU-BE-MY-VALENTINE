const messages = [
    "Hawwww besharam",
    "Aisa krega mere sath???",
    "U sure??",
    "Sachme sure??",
    "Moteee aisa krega me sad ho jaunga",
    "Bohottt saddd",
    "Bohottt bohoottt bohottt saddd",
    "okkk mat kar ha hmph katti",
    "Ok fine, I will stop asking...",
    "Just kidding, say yes please! ❤️"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}