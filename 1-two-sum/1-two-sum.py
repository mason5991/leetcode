# https://leetcode.com/problems/two-sum/submissions/

class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        mapping = {}
        for i, num in enumerate(nums):
            if target-num in mapping:
                return [mapping[target-num], i]
            else:
                mapping[num] = i
        