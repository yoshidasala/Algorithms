function romanToInteger(str) {
  const map = new Map([
    ['I', 1],
    ['V', 5],
    ['X', 10],
    ['L', 50],
    ['C', 100],
    ['D', 500],
    ['M', 1000],
  ]);
  let res = 0;

  for (let i = 0; i < str.length; i++) {
    const currValue = map.get(str[i]);
    const nextValue = i === str.length - 1 ? 0 : map.get(str[i + 1]);

    const sign = currValue >= nextValue ? 1 : -1;

    res += sign * currValue;
  }

  return res;
}

/* INT to ROMAN*/


function integerToRoman(num) {
  const map = {
    'M': 1000,
    'CM': 900,
    'D': 500,
    'CD': 400,
    'C': 100,
    'XC': 90,
    'L': 50,
    'XL': 40,
    'X': 10,
    'IX': 9,
    'V': 5,
    'IV': 4,
    'I': 1,
  };
  let str = '';

  for(const key in map) {
    const val = map[key];
    while(num >= val) {
      str += key;
      num -= val;
    }
  }

  return str;
}
console.log(integerToRoman(3420))
