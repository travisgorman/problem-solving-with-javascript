function LetterCapitalize(str) {
  return str.replace
    ( /(^|\s)[a-z]/gi, (m => m.toUpperCase() ));
}
