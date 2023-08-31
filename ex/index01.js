// Test 를 하고자 하는 함수
const multi = (num) => {
  if (num % 3 == 0) return true;
  else return false;
};

// TestCase
const nums = [48, 84, 12, 72, 48, 24, 66, 66, 48];

// TestCode
for (let i = 0; i < 100; i++) {
  const result = multi(nums[i]);
  if (result) console.log(`${nums[i]} 는 3의 정수`);
}
