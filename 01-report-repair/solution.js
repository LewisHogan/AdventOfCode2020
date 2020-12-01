const fs = require('fs');

/**
 * Attempts to find the product of two entries which sum to 2020 in the list.
 * @param {number[]} entries A list of expense reports, two of which can be summed to 2020.
 * @returns The product of the two entries that sum to match 2020.
 */
function partOne(entries) {
    for (let i = 0; i < entries.length; i++) {
        for (let j = i + 1; j < entries.length; j++) {
            if ((entries[i] + entries[j]) === 2020) {
                return entries[i] * entries[j];
            }
        }
    }
}

/**
 * Attempts to find the product of three entries which sum to 2020 in the list.
 * @param {number[]} entries A list of expense reports, two of which can be summed to 2020.
 * @returns The product of the three entries that sum to match 2020.
 */
function partTwo(entries) {
    for (let i = 0; i < entries.length; i++) {
        for (let j = i + 1; j < entries.length; j++) {
            for (let k = j + 1; k < entries.length; k++) {
                if ((entries[i] + entries[j] + entries[k]) === 2020) {
                    return entries[i] * entries[j] * entries[k];
                }
            }
        }
    }
}


async function main() {
    fs.readFile('./01-report-repair/input.txt', 'utf-8', (err, input) => {
        if (err) {
            console.error('Unable to read input file.');
            process.exit(1);
        }

        const entries = input.split('\n').map(n => parseInt(n));
        console.log(partOne(entries));
        console.log(partTwo(entries));
    });
}

main();