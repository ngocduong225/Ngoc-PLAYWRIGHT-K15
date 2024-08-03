/** 
 * Given string: Hello ban, tui ten Teo, ban cung cung ten Teo luon ah
 * --> output:
 * Hello: 1
 * ban: 2
 * tui: 1
 * ten: 2
 * Teo: 2
 * ...
 */

const givenStr = 'Hello ban, tui ten Teo, ban cung cung ten Teo luon ah';
let individualWords = givenStr.replace(/,/gi,"").split(" ");
const groupWordMap = groupWord(individualWords)
console.log(groupWordMap);


function groupWord(individualWords) {
    let wordMap = new Map();
    /**
     * if has key(word) in the map -> increase value ++
     * else put into the map [word: 1]
     */
    for( const word of individualWords){
        if(!wordMap.has(word)){
            wordMap.set(word, 1);
        } else {
            wordMap.set(word, wordMap.get(word) + 1)
        }
    }
    return wordMap;
}
