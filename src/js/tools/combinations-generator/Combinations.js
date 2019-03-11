// A cache is used for dynamic programming.
let cache = {};

function isObject(object) {
    return object !== null && typeof object === 'object';
}

function getItemsKey(items) {
    return items.join(",");
}

function addToCache(items, k, combinations) {

    // Cache has gotten too large?
    if (Object.keys(cache).length > 10000) {
        cache = {};
    }

    let itemsKey = getItemsKey(items);
    if (!isObject(cache[itemsKey])) {
        cache[itemsKey] = {};
    }
    cache[itemsKey][k] = combinations;
}

function getFromCache(items, k) {
    let itemsString = getItemsKey(items);
    if (isObject(cache[itemsString]) && cache[itemsString][k]) {
        return cache[itemsString][k];
    }
    return null;
}


/**
 * @param {Array} items
 * @param {number} k - The size of each combination.
 * @returns {Array<Array>}
 */
function generateCombinations(items, k) {

    // Base case(s).
    if (items.length < k || k < 0) {
        return [];
    }
    if (items.length === k) {
        return [items];
    }

    // Dynamic programming.
    let cachedSolution = getFromCache(items, k);
    if (cachedSolution) {
        return cachedSolution;
    }

    let allButFirst = items.slice(1),
        combsWithoutFirst = generateCombinations(allButFirst, k),
        combsWithFirst = generateCombinations(allButFirst, k - 1)
            .map(comb => [items[0]].concat(comb));

    let combinations = combsWithFirst.concat(combsWithoutFirst);
    addToCache(items, k, combinations);
    return combinations;
}


export { generateCombinations };
