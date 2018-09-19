var findMin = nums => {
  // if no element than return
  if (nums.length === 0) return 0;
  // if noly one element than return it
  if (nums.length === 1) return nums[0];

  let left = 0;
  let right = nums.length - 1;

  // if no rotated than return
  if (nums[left] < nums[right]) return nums[left];

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    // mid's previous number should smaller than mid otherwise it's inflection point
    if (nums[mid - 1] > nums[mid]) {
      return nums[mid];
    }

    // mid's right number should bigger than mid otherwise it's inflection point
    if (nums[mid + 1] < nums[mid]) {
      return nums[mid + 1];
    }

    if (nums[left] <= nums[mid]) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
};
