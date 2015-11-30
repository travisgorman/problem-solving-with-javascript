function Palindrome(str) {
  var fwd = str.replace(/\W/ig,"");

  return ((fwd.split("")
    .reverse()
      .join("")) === fwd);
}
