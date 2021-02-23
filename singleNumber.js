//nums = [2,2,1]
nums = [4,1,2,1,2]

// time O(n)
// space O(n)
function singleNumber(nums) {
    const map = {};
    for (let n of nums) {
      if (map[n] == null) map[n] = 0;
      console.log(map);
      map[n]++;
      console.log(n);
    }
  
    for (let n in map) {
      if (map[n] === 1) return Number(n);
    }
}

singleNumber(nums);
//console.log(singleNumber(nums));