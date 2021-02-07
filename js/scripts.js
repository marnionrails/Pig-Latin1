function pigLatin(string) {
  if (string[0] === "a" || "e" || "i" || "o" || "u") {
    return string.concat("way")
  } else {
    return false;
  }
}


console.log(pigLatin("even"));
