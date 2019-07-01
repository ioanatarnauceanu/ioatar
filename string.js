function truncate(str, num) {
  if (str.length > num && num > 3) {
    return str.slice(0, num) + "...";
  } else {
    return str;
  }
}
console.log(truncate("Abcdef", 4));
console.log(truncate("Abcdef", 8));

function split() {
var str = "Ana are mere.";
var res = str.split(" ", 3);
return res;
}

console.log(split());