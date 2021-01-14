const wordSearch = (letters, word) => { 

    let vertical = [];
    for (let i = 0; i < letters[0].length; i++) {
        vertical.push([]);
    }
    for (let i = 0; i < letters.length; i++) { 
        for (let j = 0; j < vertical.length; j++) {
            vertical[j].push(letters[i][j]);
        }
    }

    const horizontalJoin = letters.map(ls => ls.join(''))
    for (l of horizontalJoin) {
        if (l.includes(word)){
            return true;
        }
    }

    const verticalJoin = vertical.map(ls => ls.join(''))
    for (l of verticalJoin) {
        if (l.includes(word)){
            return true;
        }
    }

    return false;

}

// const result = wordSearch([
//     ['AWCF, 'Q', 'U', 'A', 'L'],
//     ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
//     ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
//     ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
//     ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
//     ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
//     ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
//     ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
//     ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
//   ], 'FRANK')

// const result = wordSearch([
//     ['ASYHW', 'B', 'U', 'O', 'E'],
//   ], 'FRANK')

module.exports = wordSearch