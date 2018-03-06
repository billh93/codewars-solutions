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
