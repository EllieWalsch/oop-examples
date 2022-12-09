import { isInRange } from "./utils.js";

export class Student {
  constructor({ first, last, age }) {
    this.first = first;
    this.last = last;
    this.age = age;
  }

  // polymorphic method, can either send in a number or a string
  displayGrade(grade) {
    const input = grade;
    if (!input) {
      throw new Error("no grade provided");
    }

    // Return a letter grade if a number grade was passed
    // Ex. 95 => 'A'
    if (typeof input === "number") {
      if (isInRange({ num: input, min: 90, max: 100 })) {
        return "A";
      }

      if (isInRange({ num: input, min: 80, max: 89 })) {
        return "B";
      }

      if (isInRange({ num: input, min: 70, max: 79 })) {
        return "C";
      }

      if (isInRange({ num: input, min: 60, max: 69 })) {
        return "D";
      }

      if (input < 60) {
        return "F";
      }
    }

    // Return a range if a letter grade was passed
    // Ex. 'A' => '90 - 100'
    // switch/case is alternative to "else if"
    // "is it the case that the input is equal to A?...B?..."
    // as soon as there's a match "BREAK" out of the line, stop
    if (typeof input === "string") {
      switch (input) {
        case "A":
          return "90 - 100";
        case "B":
          return "80 - 89";
        case "C":
          return "70 - 79";
        case "D":
          return "60 - 69";
        case "F":
          return "0 - 59";
        default:
          return "0";
      }
    }
  }
}
