const fs = require('fs');

/**
 * Loads the puzzle input from a provided file path.
 * Exits program on error.
 * @param {string} path The pathway to the file to load
 */
function loadInput(path) {
    try {
        return fs.readFileSync(path, 'utf-8').split('\n');
    } catch (err) {
        console.error(`Unable to read input file: ${err}`); 
        process.exit(1);
    }
}

module.exports = loadInput;