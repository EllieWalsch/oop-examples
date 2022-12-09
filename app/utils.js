export const isInRange = ({ num, min, max }) => (num - min) * (num - max) <= 0;
// Use an object and it doesn't matter the order of the arguments
// example of call: isInRange({ num: 4, min: 0, max: 5 });
