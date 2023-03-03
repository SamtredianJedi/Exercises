// JavaScript: Tips of the Day




/**
 * 
 * 
 * 
 * Performs left-to-right function composition for asynchronous functions

Example:

const pipeAsyncFunctions = (...fns) => arg => fns.reduce((p, f) => p.then(f), Promise.resolve(arg));
const sum = pipeAsyncFunctions(
  a => a + 1,
  a => new Promise(resolve => setTimeout(() => resolve(a + 2), 1000)),
  a => a + 3,
  async a => (await a) + 4
);
(async () => {
  console.log(await sum(5)); 
})();


 */