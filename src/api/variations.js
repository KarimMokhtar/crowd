import axios from "axios";
export const fetchDataAPI = async (arr) => {
  let resultVariations = [];
  let promises = [];
  arr.forEach((word) => {
    if (word.length) {
      promises.push(
        axios.get(`http://localhost:5000/words?word=${word}`).then((res) => {
          if (res.data.length) resultVariations.push(res.data[0]);
        })
      );
    }
  });
  await Promise.all(promises).then(() => {});
  return resultVariations;
};
