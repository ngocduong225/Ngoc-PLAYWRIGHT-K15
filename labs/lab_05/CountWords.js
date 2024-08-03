const readline = require('readline-sync');

const givenString = readline.question("Please enter a sentence: ");

const wordCount = groupWords(givenString)
console.log(wordCount);

function groupWords(sentence) {
    let words = sentence.replace(/,/gi,"").split(" ");
    let wordCounts = {};
    words.forEach(word => {
        word = word.toLowerCase(); 
        if (wordCounts[word]) {
            wordCounts[word]++;
        } else {
            wordCounts[word] = 1;
        }
    });
    return wordCounts;
}