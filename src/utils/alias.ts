const ALIAS_KEY = 'checkonme-alias';

const ADJECTIVES = [
  'Quiet', 'Calm', 'Mindful', 'Brave', 'Kind', 'Gentle', 'Bold', 'Peaceful'
];

const ANIMALS = [
  'Otter', 'Swan', 'Panther', 'Fox', 'Koala', 'Raven', 'Deer', 'Sparrow'
];

function generateAlias(): string {
  const adjective = ADJECTIVES[Math.floor(Math.random() * ADJECTIVES.length)];
  const animal = ANIMALS[Math.floor(Math.random() * ANIMALS.length)];
  const number = Math.floor(Math.random() * 100);
  return `${adjective}${animal}${number}`;
}

export function getAlias(): string {
  let alias = localStorage.getItem(ALIAS_KEY);
  if (!alias) {
    alias = generateAlias();
    localStorage.setItem(ALIAS_KEY, alias);
  }
  return alias;
}
