// A cache is used for dynamic programming.
let cache = {};

function isObject(object) {
    return object !== null && typeof object === 'object';
}

function getItemsKey(items) {
    return items.join(",");
}

function addToCache(items, size, permutations) {

    // Cache has gotten too large?
    if (Object.keys(cache).length > 10000) {
        cache = {};
    }

    let itemsKey = getItemsKey(items);
    if (!isObject(cache[itemsKey])) {
        cache[itemsKey] = {};
    }
    cache[itemsKey][size] = permutations;
}

function getFromCache(items, size) {
    let itemsString = getItemsKey(items);
    if (isObject(cache[itemsString]) && cache[itemsString][size]) {
        return cache[itemsString][size];
    }
    return null;
}


/**
 * @param {Array} items - Array of elements to permute (can be empty).
 * @param {number} size - The length of each permutation.
 * @returns {Array.<Array>} The permutations.
 */
function generatePermutations(items, size) {

    // Base case(s).
    if (size === 0) {
    	return [[]];
    }

    // Dynamic programming.
    let cachedSolution = getFromCache(items, size);
    if (cachedSolution) {
        return cachedSolution;
    }

    let perms = [];
    for (let i = 0; i < items.length; i++) {
       let x = items[i];

       // Generate all permutations that end with x.
        let arrayWithoutX = items.slice(0, i).concat(items.slice(i + 1));
        let permsWithoutX = generatePermutations(arrayWithoutX, size - 1);
        permsWithoutX.forEach(function (perm) {
            perm = perm.slice(); // Clone so cache doesn't override.
            perm.push(items[i]);
            perms.push(perm);
        });
    }

    addToCache(items, size, perms);
    return perms;
}


export { generatePermutations };
