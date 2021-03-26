export const splitText = (text) => {
  return text.split(",");
};
export const extarctClickedWord = (cursorPos, searchBy, text) => {
  const beforeCommaPos = text.lastIndexOf(
    searchBy,
    cursorPos > 0 ? cursorPos - 1 : 0
  );
  const afterCommaPos = text.indexOf(searchBy, cursorPos);
  const startOfClickedWord = beforeCommaPos === -1 ? 0 : beforeCommaPos + 1;
  const endOfClickedWord = afterCommaPos === -1 ? text.length : afterCommaPos;

  const currentClickedWord = text.substring(
    startOfClickedWord,
    endOfClickedWord
  );
  return currentClickedWord;
};
export const trimQoutes = (word) => {
  if (word[0] === '"' && word[word.length - 1] === '"' && word.length > 1) {
    return word.substring(1, word.length - 1);
  } else return word;
};
export const getAdjacentWords = (clickedWord, text) => {
  const arr = splitText(text);
  // find the position of the word in the array
  const postionOfWord = arr.indexOf(clickedWord);
  let res = [];
  if (postionOfWord === 0) {
    for (let i = 0; i < arr.length && i < 3; ++i) {
      res.push(arr[i]);
    }
  } else if (postionOfWord === arr.length - 1) {
    for (let i = arr.length - 1; i >= 0 && i >= arr.length - 3; --i) {
      res.push(arr[i]);
    }
  } else {
    res.push(trimQoutes(arr[postionOfWord]));
    res.push(trimQoutes(arr[postionOfWord + 1]));
    res.push(trimQoutes(arr[postionOfWord - 1]));
  }
  return res;
};
