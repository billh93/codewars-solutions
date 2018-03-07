/********* Start of 'Multiply' *********/
    multiply = (a, b) => a * b; // Arrow Function is being used
/********* End of 'Multiply' *********/

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
    doTurn = () => [rollDice, move, combat, getCoins, buyHealth, printStatus].forEach(e => e());
/********* End of 'Grasshopper - Terminal Game Turn Function' *********/

/********* Start of 'Sentence Smash' *********/
    let smash = words => words.join(" ");
/********* End of 'Sentence Smash' *********/

/********* Start of 'Remove String Spaces' *********/
    let noSpace = x => x.split(" ").join("");
/********* End of 'Remove String Spaces' *********/
