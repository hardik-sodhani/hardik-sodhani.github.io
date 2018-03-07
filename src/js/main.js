// function to toggle class for card flip
var bookCards = document.getElementsByClassName('card-flip');

for (var i = 0; i < bookCards.length; i++) {
    bookCards[i].addEventListener("click", function() {
        this.classList.toggle("flip");
    })
}
