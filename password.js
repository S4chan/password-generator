function random(collection) {
  let randomIndex = Math.floor(Math.random() * collection.length);
  return collection[randomIndex];
}

function generatePassword(options) {
  const lowercase = "abcdefghijklmnopqrstuvwxyz";
  const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numbers = "0123456789";
  const symbols = '`~!@$%^&*()-_+={}[]|;:"<>,.?/';

  let collection = [];

  if (options.lowercase === "on") {
    collection = collection.concat(lowercase.split(""));
  }

  if (options.uppercase === "on") {
    collection = collection.concat(uppercase.split(""));
  }

  if (options.numbers === "on") {
    collection = collection.concat(numbers.split(""));
  }

  if (options.symbols === "on") {
    collection = collection.concat(symbols.split(""));
  }

  if (options.excludeCharacters) {
    collection = collection.filter(
      (character) => !options.excludeCharacters.includes(character)
    );
  }

  if (collection.length === 0) {
    return "There is no valid characters in your selection.";
  }

  let password = "";
  for (let i = 1; i <= Number(options.length); i++) {
    password += random(collection);
  }

  return password;
}

module.exports = { generatePassword };
