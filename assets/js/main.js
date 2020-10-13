// Variables
let name = prompt('Welkom! wat is je naam?');
let welcome = alert('Hey ' + name);
let randomNumber = Math.floor(Math.random() * 25);
let maxCount = 5;

// function with welcome message
const welcomeMessage = () => {
    name;
    welcome;
}
welcomeMessage();

const compareGuess = () => {
    let humanGuess = prompt('Voer een nummer in van 0 tot 25 om te beginnen met raden...');
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