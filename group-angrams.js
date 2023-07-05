// Given an array of strings strs, group the anagrams together. You can return the answer in any order.

//An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

// solution :

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  let map = new Map();

  strs.forEach((str) => {
    let sorted = str.split("").sort().join("");

    if (map.has(sorted)) {
      map.set(sorted, [...map.get(sorted), str]);
    } else {
      map.set(sorted, [str]);
    }
  });

  return [...map.values()];
};
