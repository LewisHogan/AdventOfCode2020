const loadPuzzle = require('../common/loadPuzzleInput');

/**
 * Given a record string, converts it into an object of it's core components
 * @param {string} record A string of the format: min-max char: password
 */
function parseRecord(record) {

    let [range, character, password] = record.split(' ');
    character = character.slice(0, 1);

    const [min, max] = range.split('-').map(n => parseInt(n));

    return {
        min,
        max,
        character,
        password
    };
}

/**
 * Counts the number of valid password records (a record is valid if the password
 * contains at least min number of the specified character and no more then max)
 * @param {record[]} records An array of records.
 */
function partOne(records) {
    return records.filter(({ min, max, password, character }) => {
        const n = password.split('').filter(c => c === character).length;
        return n >= min && n <= max;
    }).length;
}

/**
 * Counts the number of valid password records where the character is present at either
 * character min or character max but not both or neither (using a 1 based index)
 * @param {record[]} records An array of records.
 */
function partTwo(records) {
    return records.filter(({ min, max, character, password }) => {
        const isInFirstIndex = password[min - 1] === character;
        const isInSecondIndex = password[max - 1] === character;

        return isInFirstIndex != isInSecondIndex;
    }).length;
}


async function main() {
    const records = loadPuzzle('./02-password-philosophy/input.txt').map(parseRecord);
    console.log(`Part One: ${partOne(records)}`);
    console.log(`Part Two: ${partTwo(records)}`);
}

main();