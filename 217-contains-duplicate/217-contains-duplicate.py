# https://leetcode.com/problems/contains-duplicate/

class Solution:
    def containsDuplicate(self, nums: List[int]) -> bool:
        mapping = set()
        for num in nums:
            if num in mapping:
                return True
            mapping.add(num)
        return False
