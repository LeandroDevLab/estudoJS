/* 
Object.values -> returna o valor
Object.entries -> returna chaves e valores em arrays separados
Object.assign(des, any)✅ -> copiar um objeto
Object.getOwnPropertyDescriptor(o, 'prop')✅
...(spread) -> espalha os valores do objeto em outro objeto

//Já vimos
Object.keys -> retorna as chaves
Object.freeze -> congela o objeto
Object.defineProperty e Properties -> definir propriedades
*/
const produto = { nome: 'caneca', preco: 1.8 };
//forma 1 -> esse é mais intuitivo
const outraCoisa = {
  ...produto, // espalhando obj produto em outraCoisa, acessos distintos
  material: 'porcelana', // atribuindo mais informações
};

//forma 2 -> precisa saber que existe
const caneca = Object.assign({}, produto, { material: 'porcelana' });
const nomeDoProduto = { nome: produto.nome }; //pegando só um atribudo do objeto
nomeDoProduto.nome = 'outro nome';

caneca.nome = 'outra coisa';
caneca.preco = 2.5;
//console.log(produto);
//console.log(caneca);
//console.log(nomeDoProduto);
Object.defineProperty(produto, 'nome', {
  value: 'borracha',
  writable: false,
  enumerable: true,
  configurable: false,
});
console.log(Object.getOwnPropertyDescriptor(produto, 'nome'));

console.log(Object.keys(produto));
console.log(Object.values(produto));
console.log(Object.entries(produto));

for (let valor of Object.entries(produto)) {
  console.log(valor);
}

//fazendo Destructor, já visto em aulas passadas
for (let valor of Object.entries(produto)) {
  console.log(valor[0], valor[1]);
}
for (let [chave, valor] of Object.entries(produto)) {
  console.log(chave, valor);
}
