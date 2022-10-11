const first = [
  "Sex",
  "Green",
  "The Massive",
  "Alabama",
  "Rex",
  "Lucy",
  "Lance",
  "The Masked",
  "El",
  "Thunder",
  "Greesed",
  "Tits",
  "Cheeks",
  "Sweaty",
  "The Sweaty",
  "Stinky",
  "Little",
  "The Itchy",
  "John Fecal",
  "John Henry",
  "Fecal",
  "Big",
  "Incest",
  "The Professional",
  "Sigma",
];

const last = [
  "Penis",
  "Balls",
  "Smith",
  "Cock",
  "Anus",
  "Wilkes Booth",
  "Harvey Oswald",
  "Al Queso",
  "Fart Sniffer",
  "Fucker",
  "Sigma",
  "Smegma Enjoyer",
  "Two-Balls",
  "Dingus",
  "Gamer",
  "McGee",
  "Try Hard",
  "Pickle Penis",
];

export default function getRandomNickName() {
  const randomIndex = (length) => {
    return Math.trunc(Math.random() * length);
  };

  return `${first[randomIndex(first.length)]} ${
    last[randomIndex(last.length)]
  }`;
}
