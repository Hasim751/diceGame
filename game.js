class Dice {
  constructor() {}
  roll() {
    return Math.floor(Math.random() * 6) + 1;
  }
}

class CandyDice {
  dice;
  constructor() {
    this.dice = new Dice();
  }
  play() {
    const steps = ["1", "2", "3", "4", "5", "6"];
    const instances = ["A", "B", "C"];
    const map = [];

    instances.forEach((instance) => {
      steps.forEach((step) => {
        map.push({ intance: instance, step: step, position: false });
      });
    });
    console.log(map);

    const roll1 = this.dice.roll();
    const roll2 = this.dice.roll();
    console.log(roll1); // 3
    console.log(roll2); // 2
    if ((roll1 == roll2)) {
      // Move postion (next intance)
    }
    if (roll1 > roll2) {
      // move postion to higher
    }
  }
}

const play = new CandyDice();

play.play();
