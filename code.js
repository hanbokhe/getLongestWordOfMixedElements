function getLongestWordOfMixedElements(arr) {
  // your code here
  if (arr.length === 0)
  {
      return "";
  }
  var longestWord= '';
  for (var i = 0; i<arr.length; i++)
  {
      if (typeof arr[i] === "string")
      {
          if (longestWord === '')
          {
              longestWord = arr[i];
          }else if(arr[i].length > longestWord.length)
          {
              longestWord = arr[i];
          }
      }
  }
  return longestWord;
}
