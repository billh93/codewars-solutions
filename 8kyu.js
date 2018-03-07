/********* Start of 'Basic variable assignment' *********/
    let a = "code",
        b = "wa.rs",
        name = a + b;
/********* End of 'Basic variable assignment' *********/

/********* Start of 'Multiply' *********/
    const multiply = (a, b) => a * b; // Arrow Function is being used
/********* End of 'Multiply' *********/

/********* Start of 'Even or Odd' *********/
    const even_or_odd = (number) => number % 2 == 0 ? "Even" : "Odd";
/********* End of 'Even or Odd' *********/

/********* Start of 'Grasshopper - Summation' *********/
    const summation = n => n * (n+1) / 2;
/********* End of 'Grasshopper - Summation' *********/

/********* Start of 'You only need one - Beginner' *********/
    const check = (a,x) => a.includes(x);
/********* End of 'You only need one - Beginner' *********/

/********* Start of 'Grasshopper - Terminal Game #1' *********/
    class Hero {
      constructor(name) {
        this.name = name || 'Hero';
        this.position = '00';
        this.health = 100;
        this.damage = 5;
        this.experience = 0;
      }
    }
/********* End of 'Grasshopper - Terminal Game #1' *********/

/********* Start of 'Third Angle of a Triangle' *********/
    const otherAngle = (a, b) => 180 - a - b;
/********* End of 'Third Angle of a Triangle' *********/

/********* Start of 'Barking Made' *********/
    // ES6 is being used
    class Dog {
      constructor(breed){
        this.breed = breed;
      }

      bark() {
        return "Woof";
      }
    }

    let snoopy = new Dog("Beagle");
    let scoobydoo = new Dog("Great Dane");
/********* End of 'Barking Made' *********/

/********* Start of 'The 'if' function' *********/
    // We are using Arrow Function and Ternary Operator to solve this.
    const _if = (bool, func1, func2) => bool ? func1() : func2();
/********* End of 'The 'if' function' *********/

/********* Start of 'Name Shuffler' *********/
    // split() puts str values into array.
    // reverse() reverses order of array.
    // join() reverts array back to a string data type.
    const nameShuffler = (str) => str.split(" ").reverse().join(' ');
/********* End of 'Name Shuffler' *********/

/********* Start of 'Grasshopper - Terminal Game Turn Function' *********/
    const doTurn = () => [rollDice, move, combat, getCoins, buyHealth, printStatus].forEach(e => e());
/********* End of 'Grasshopper - Terminal Game Turn Function' *********/

/********* Start of 'Sentence Smash' *********/
    const smash = words => words.join(" ");
/********* End of 'Sentence Smash' *********/

/********* Start of 'Remove String Spaces' *********/
    const noSpace = x => x.split(" ").join("");
/********* End of 'Remove String Spaces' *********/

/********* Start of 'Calculate BMI' *********/
    const bmi = (w, h, bmi = w/h/h) =>  bmi <= 18.5 ? "Underweight" :
                                        bmi <= 25 ? "Normal" :
                                        bmi <= 30 ? "Overweight" : "Obese";
/********* End of 'Calculate BMI' *********/

/********* Start of 'Difference of Volumes of Cuboids' *********/
    const findDifference = ([a,b,c], [d,e,f]) => { return Math.abs(a*b*c-d*e*f); }
/********* End of 'Difference of Volumes of Cuboids' *********/
