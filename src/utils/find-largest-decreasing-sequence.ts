export const findLargestDecreasingSequence = (array: number[]): number[] => {
  let currentSequence: number[] = [];
  let largestSequence: number[] = [];

  for (let i = 0; i < array.length; i++) {
    if (
      currentSequence.length === 0 ||
      array[i] < currentSequence[currentSequence.length - 1]
    ) {
      currentSequence.push(array[i]);
    } else {
      if (currentSequence.length > largestSequence.length) {
        largestSequence = currentSequence.slice();
      }
      currentSequence = [array[i]];
    }
  }

  if (currentSequence.length > largestSequence.length) {
    largestSequence = currentSequence;
  }

  return largestSequence;
};
