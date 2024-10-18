function calculateWordsInString(string) {
  let words = 0;
  for (let i = 0; i < string.length; i++) {
    if (string[i] == " ") {
      console;
      words++;
      for (let k = i; k < string.length; k++) {
        console.log[k];
        if (string[k + 1] != " ") {
          i = k + 1;
          console.log[k];
          break;
        }
      }
    }
  }
  console.log(words + 1);
}
calculateWordsInString("Some?  string, with a triple   space");
