// JavaScript: Tips of the Day 8



/**
 * 
 * 
 * 
 * 
 * const tips_dig = (obj, target) =>
  target in obj
    ? obj[target]
    : Object.values(obj).reduce((acc, val) => {
      if (acc !== undefined) return acc;
      if (typeof val === 'object') return tips_dig(val, target);
    }, undefined);

const data = {
  level1: {
    level2: {
      level3: 'JavaScript'
    }
  }
};
console.log(tips_dig(data, 'level3'));
console.log(tips_dig(data, 'level4'));



 */