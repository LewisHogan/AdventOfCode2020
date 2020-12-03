const loadPuzzle = require('../common/loadPuzzleInput');

/**
 * Steps through each position on the map, checking if it lands on a tree.
 * @param {TreeMap} map a grid of strings that represent trees with the '#' character and free spaces with '.'
 * @param {Delta} move the distance to step each tick.
 * @returns The number of times we land on a tree before moving off the grid.
 */
function countTreesHit(map, move) {
    let pos = { x: 0, y: 0};

    const rowWidth = map[0].length;
    let treesHit = 0;
    
    while (pos.y < map.length) {
        if (map[pos.y][pos.x % rowWidth] === '#') treesHit++;

        pos = { x: pos.x + move.x, y: pos.y + move.y };
    }

    return treesHit;
}

function partOne(map) {
    return countTreesHit(map, { x: 3, y: 1});
}

function partTwo(map, move) {
    const slopes = [
        { x: 1, y: 1 },
        { x: 3, y: 1 },
        { x: 5, y: 1 },
        { x: 7, y: 1 },
        { x: 1, y: 2 },
    ];

    return slopes.map(s => countTreesHit(map, s)).reduce((total, value) => total *= value);
}

async function main() {
    const map = loadPuzzle('./03-toboggan-trajectory/input.txt');

    console.log(`Part One: ${partOne(map)}`);
    console.log(`Part Two: ${partTwo(map)}`);
}

main();