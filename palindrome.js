/*
A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Given a string s, return true if it is a palindrome, or false otherwise. */

//solution :

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  const re = /[^A-Za-z0-9]/g;
  const replaced = s.toLowerCase().replace(re, "");
  const reversed = replaced.split("").reverse().join("");

  if (replaced == reversed) return true;
  return false;
};
