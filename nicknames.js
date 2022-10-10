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
  "Fecal",
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
];

export default function getRandomNickName() {
  const randomIndex = (length) => {
    return Math.trunc(Math.random() * length);
  };

  return `${first[randomIndex(first.length)]} ${
    last[randomIndex(last.length)]
  }`;
}
