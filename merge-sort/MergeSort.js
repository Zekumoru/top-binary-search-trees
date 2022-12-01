module.exports = class MergeSort {
  static sort(array) {
    if (array.length <= 1) return array;

    const middleIndex = Math.floor(array.length / 2);
    const leftPart = MergeSort.sort(array.slice(0, middleIndex));
    const rightPart = MergeSort.sort(array.slice(middleIndex, array.length));

    let leftPointer = 0;
    let rightPointer = 0;
    while (leftPointer < leftPart.length || rightPointer < rightPart.length) {
      const index = leftPointer + rightPointer;

      if (
        leftPart[leftPointer] < rightPart[rightPointer] ||
        rightPointer >= rightPart.length
      ) {
        array[index] = leftPart[leftPointer];
        leftPointer++;
      }
      else {
        array[index] = rightPart[rightPointer];
        rightPointer++;
      }
    }

    return array;
  }
};
