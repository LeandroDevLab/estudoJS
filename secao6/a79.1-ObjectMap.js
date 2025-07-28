const pessoas = [
  { id: 3, nome: 'Luiz' },
  { id: 2, nome: 'Maria' },
  { id: 1, nome: 'Helena' },
];

/* criando uma variável com os novos objetos */
// com o new Map() e setando no novasPessoas.set
// isso mantem a ordem da atribuição dos objetos no
// novo array  a
const novasPessoas = new Map();

for (let pessoa of pessoas) {
  const { id } = pessoa;
  novasPessoas.set(id, { ...pessoa });
}

console.log(novasPessoas.get(2)); //solicitar com get()

console.log('============destructuring==============');

/* praticando destructuring */
for (let [identifier, { id, nome }] of novasPessoas) {
  console.log(identifier, id, nome);
}

console.log('=============for.keys()=============');

for (let pessoas of novasPessoas.keys()) {
  console.log(pessoas);
}

console.log('============for.values()==============');

for (let pessoas of novasPessoas.values()) {
  console.log(pessoas);
}

console.log('=============Após delete(2)=============');

/* fazendo parte de CRUD */
novasPessoas.delete(2);
console.log(novasPessoas);

//🔴🔴🔴OBSERVAÇÕES IMPORTANTES🔴🔴🔴

/* com Destruction direto */
// for(let {id, nome} of pessoas) {
//    novasPessoas[id] = { id, nome };
// }

// 🟡COMO A GENTE TEM TRABALHADO🟡
// for (let pessoa of pessoas) {
//   const { id } = pessoa;
//   novasPessoas[id] = { ...pessoa };
// }

// console.log(novasPessoas);
