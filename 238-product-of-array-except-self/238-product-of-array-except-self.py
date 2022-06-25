from typing import List


class Solution:
    def productExceptSelf(self, nums: List[int]) -> List[int]:
        result = [0]* len(nums)
        left = 1
        right = 1
        for i in range(len(nums)):
          result[i] = left
          left *= nums[i]
        for j in range(len(nums) - 1, -1, -1):
          result[j] *= right
          right *= nums[j]
        return result

# Test case: [1,2,3,4] => [24,12,8,6]
