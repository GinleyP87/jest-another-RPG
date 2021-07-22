function Potion(name) {
  // const this = {};
  this.types = ['strength', 'agility', 'health'];
  this.name = name || this.types[Math.floor(Math.random() * this.types.length)];

  if (this.name === 'health') {
    this.value = Math.floor(Math.random() * 10 + 30); //30-40
  } else {
    this.value = Math.floor(Math.random() * 5 + 7); //7-12
  }
}
  //return this;
module.exports = Potion;
