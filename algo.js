// Find Common Characters

// Given a string array words, return an array of all characters that show up in all strings within the words (including duplicates).
// You may return the answer in any order




/**
 * @param {string[]} words
 * @return {string[]}
 */
var commonChars = function(words) {
    // Initialize the frequency map using the first word
    let frequencyMap = {};
    for (let char of words[0]) {
        frequencyMap[char] = (frequencyMap[char] || 0) + 1;
    }

    // Update the frequency map with each subsequent word
    for (let i = 1; i < words.length; i++) {
        let currentMap = {};
        for (let char of words[i]) {
            currentMap[char] = (currentMap[char] || 0) + 1;
        }
        
        for (let char in frequencyMap) {
            if (char in currentMap) {
                frequencyMap[char] = Math.min(frequencyMap[char], currentMap[char]);
            } else {
                delete frequencyMap[char];
            }
        }
    }

    // Build the result array from the frequency map
    let result = [];
    for (let char in frequencyMap) {
        for (let i = 0; i < frequencyMap[char]; i++) {
            result.push(char);
        }
    }

    return result;
};