const testes = ["roma", "kaiak", "radar", "lil", "natan", "jpqqpj", "aaa", "ggaggy"];

const ignoreSpaces = str => str.split(' ').join('');

const checkPalindrome = str => ignoreSpaces(str) === 
ignoreSpaces(str.split('').reverse().join(''));

const resultados = testes.map(checkPalindrome);

console.log(resultados);
