import assert from "assert";
import { Problem } from "../types/problem-types";

export const topKFrequentElementsHandler = (
  fn: (nums: number[], k: number) => number[]
) => {
  try {
    const tests = [
      { nums: [1, 1, 1, 2, 2, 3], k: 2 },
      { nums: [1], k: 1 },
    ];
    const answers = [[1, 2], [1]];
    for (let i = 0; i < tests.length; i++) {
      const result = fn(tests[i].nums, tests[i].k);
      assert.deepEqual(result, answers[i]);
    }
    return true;
  } catch (error: any) {
    console.error("Error from topKFrequentElementsHandler: ", error);
    throw new Error(error);
  }
};

const starterCodeTopKFrequentElementsTS = `function topKFrequent(nums: number[], k: number): number[] {
  // Write your code here
};`;

export const topKFrequentElements: Problem = {
  id: "top-k-frequent-elements",
  title: "347. Top K Frequent Elements",
  problemStatement: `<p class='mt-3'>Given an integer array <code>nums</code> and an integer <code>k</code>, return the <code>k</code> most frequent elements. You may return the answer in any order.</p>`,
  examples: [
    {
      id: 0,
      inputText: "nums = [1,1,1,2,2,3], k = 2",
      outputText: "[1,2]",
    },
    {
      id: 1,
      inputText: "nums = [1], k = 1",
      outputText: "[1]",
    },
  ],
  constraints: `<li class='mt-2'><code>1 <= nums.length <= 10<sup>5</sup></code></li>
<li class='mt-2'><code>-10<sup>4</sup> <= nums[i] <= 10<sup>4</sup></code></li>
<li class='mt-2'><code>k</code> is in the range <code>[1, the number of unique elements in the array]</code>.</li>
<li class='mt-2'>It is guaranteed that the answer is unique.</li>`,
  handlerFunction: topKFrequentElementsHandler,
  starterCode: starterCodeTopKFrequentElementsTS,
  starterFunctionName: "function topKFrequent(",
  order: 347,
  difficulty: "Medium",
};

export default topKFrequentElements;
