import { bubbleSort } from "./sorting";
import { generateNewArray } from "./arrays";

describe("sorting functions", () => {
  describe("BubbleSort", () => {
    it("should return a sorted array", () => {
      const unsortedArr = generateNewArray(200, 1, 200);
      const sorted = [...unsortedArr].sort((a, b) => a - b);
      expect(bubbleSort(unsortedArr).sortedArray).toEqual(sorted);
    });
    it("should not mutate the input array", () => {
      const unsortedArr = generateNewArray(200, 1, 200);
      const unsortedArrCopy = [...unsortedArr];
      bubbleSort(unsortedArr);
      expect(unsortedArr).toEqual(unsortedArrCopy);
    });
    it("should return a list of comparison animations for an already sorted array", () => {
      const unsortedArr = [1, 2, 3, 4];
      const expAnim = [
        [0, 1, "comp"],
        [1, 2, "comp"],
        [2, 3, "comp"],
      ];
      expect(bubbleSort(unsortedArr).animations).toEqual(expAnim);
    });
    it("should return a list of comparison and swap animations when required", () => {
      const unsortedArr = [1, 2, 4, 3];
      const expAnim = [
        [0, 1, "comp"],
        [1, 2, "comp"],
        [2, 3, "comp"],
        [2, 3, "swap"],
        [0, 1, "comp"],
        [1, 2, "comp"],
      ];
      expect(bubbleSort(unsortedArr).animations).toEqual(expAnim);
    });
  });
});