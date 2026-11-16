function scrollToMemories() {
    document.getElementById("memories")
        .scrollIntoView({ behavior: "smooth" });
}

function openImage(src) {
    document.getElementById("expandedImage").src = src;
    document.getElementById("imagePopup").style.display = "flex";
}

function closeImage() {
    document.getElementById("imagePopup").style.display = "none";
}

function cutCake() {
    const cake = document.querySelector(".cake");

    cake.classList.remove("cut");
    void cake.offsetWidth;
    cake.classList.add("cut");

    document.getElementById("cakeMessage").innerHTML =
        "Happy Birthday Mubina! 🎉 Make a wish! ❤️";

    celebrate();
}

function celebrate() {
    const symbols = ["🎉", "💗", "✨", "🌸", "🎀"];

    for (let i = 0; i < 45; i++) {
        const confetti = document.createElement("div");

        confetti.className = "confetti";
        confetti.innerHTML =
            symbols[Math.floor(Math.random() * symbols.length)];

        confetti.style.left = Math.random() * 100 + "vw";
        confetti.style.animationDuration =
            (2 + Math.random() * 3) + "s";

        document.body.appendChild(confetti);

        setTimeout(() => {
            confetti.remove();
        }, 5000);
    }
}

function openLetter() {
    document.getElementById("letterPopup").style.display = "flex";
}

function closeLetter() {
    document.getElementById("letterPopup").style.display = "none";
}

function closeLetterOutside(event) {
    if (event.target.id === "letterPopup") {
        closeLetter();
    }
}

document.addEventListener("keydown", function(event) {
    if (event.key === "Escape") {
        closeLetter();
        closeImage();
    }
});