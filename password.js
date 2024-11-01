function generatePassword() {
  const lowercase = "abcdefghijklmnopqrstuvwxyz";
  const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numbers = "0123456789";
  const symbols = '`~!@$%^&*()-_+={}[]|;:"<>,.?/';

  const options = {
    length: "12",
    lowercase: "on",
    uppercase: "on",
    numbers: "on",
    symbols: "on",
    excludeCharacters: "",
  };

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
    collection = collection.filter((character) => {
      return !options.excludeCharacters.includes(character);
    });
  }
}

generatePassword();
