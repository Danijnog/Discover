// 'argv' pega todos os processos q estão rodando no node
console.log(process.argv);
const myNickname = process.argv[2];
console.log(`meu nickname é: ${myNickname}`); //rodar no terminal 'node process danijnog'
