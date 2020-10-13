// Variables
let name = prompt('Welkom! wat is je naam?');
let welcome = alert('Hey ' + name);
let maxCount = 5;
let startNumber = prompt('Om het spel te kunnen beginnen moet je aangeven tussen welke nummers je wilt raden. Wat is het kleinste nummer?');
let endNumber = prompt('Wat is het grootste nummer waartussen je wilt raden?');
let randomNumber = Math.floor(Math.random() * (+endNumber + 1 - +startNumber) + +startNumber);

// function with welcome message
const welcomeMessage = () => {
    name;
    welcome;
}
welcomeMessage();

const numberRange = () => {
    startNumber;
    endNumber;
    alert('Oke je gaat nu een getal raden tussen ' + startNumber + ' en ' + endNumber);
}
numberRange();

const compareGuess = () => {
    humanGuess = prompt('Vul nu het nummer in wat je denkt dat het is')
    if (randomNumber == humanGuess) {
        alert('Gefeliciteerd je hebt gewonnen');
        alert('Dag ' + name + ' tot de volgende keer!');
    } else {
        alert('Dat is niet correct');
        if (--maxCount > 0) {
            alert('Je hebt nog ' + maxCount + ' pogingen over');
            compareGuess();

        } else if (maxCount == 0) {
            alert('GAME OVER!');
        }
    }
}
compareGuess();