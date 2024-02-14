function stringChop(str, size) {
  if (str === null) return []; // If the input string is null, return an empty array
  const chunks = [];
  for (let i = 0; i < str.length; i += size) {
    chunks.push(str.substr(i, size)); // Push chunks of the string into the array
  }
  return chunks;
}

// Do not change the code below
const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size));
