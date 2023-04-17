export default function sortHeroes(arrayOfHeroes) {
  arrayOfHeroes.sort((h1, h2) => h2.health - h1.health);
}
