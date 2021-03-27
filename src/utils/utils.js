export const splitText = (text, splitter) => {
  return text.split(splitter);
};

export const trimQoutesAndSpaces = (word) => {
  if (word && word.length && word[0] === '"' && word[word.length - 1] === '"') {
    return word.substring(1, word.length - 1);
  }
  
  else return word.trim();
};

export const extarctClickedWord = (cursorPos, splitter, text) => {
  const beforeSplitterPos = text.lastIndexOf(
    splitter,
    cursorPos > 0 ? cursorPos - 1 : 0
  );
  // the length of splitter OR is 2 while of comma is 1 so we add 1 to normal position here
  const addingORPosition = splitter === "OR" ? 1 : 0;

  // getting the poistion of splitter after clicked word
  const afterSplitterPos = text.indexOf(splitter, cursorPos);

  const startOfClickedWord =
    beforeSplitterPos === -1 ? 0 : beforeSplitterPos + 1 + addingORPosition;

  const endOfClickedWord =
    afterSplitterPos === -1 ? text.length : afterSplitterPos;

  const currentClickedWord = text.substring(
    startOfClickedWord,
    endOfClickedWord
  );

  return currentClickedWord;
};


export const getAdjacentWords = (clickedWord, text, splitter) => {
  console.log(clickedWord)
  // if (clickedWord.indexOf('OR') !== -1) return []; // if he click on OR separator

  const arr = splitText(text, splitter);
  // find the position of the word in the array
  const postionOfWord = arr.indexOf(clickedWord);
  let res = [];
  if (postionOfWord === 0) {
    for (let i = 0; i < arr.length && i < 3; ++i) {
      res.push(trimQoutesAndSpaces(arr[i]));
    }
  } else if (postionOfWord === arr.length - 1) {
    for (let i = arr.length - 1; i >= 0 && i >= arr.length - 3; --i) {
      res.push(trimQoutesAndSpaces(arr[i]));
    }
  } else {
    res.push(trimQoutesAndSpaces(arr[postionOfWord]));
    res.push(trimQoutesAndSpaces(arr[postionOfWord + 1]));
    res.push(trimQoutesAndSpaces(arr[postionOfWord - 1]));
  }
  console.log("res",res);
  return res;
};
