// difeneProperty e Properties -> verboso, mas torna mais seguro as mudanças

//Constructor Function
function Produto(nome, preco, estoque) {
    
    Object.defineProperty(this, 'estoque', {
        enumerable: true, // mostra a chave 
        value: estoque, // valor (pode ser qualquer coisa, inclusive uma função)
        writable: false, //controla de pode ou não ser alterável
        configurable: false // pode ou não apagar, ou reconfigurar
    });

    Object.defineProperties(this, {
        nome: {
            enumerable: true, 
            value: nome, 
            writable: true, 
            configurable: false 
        },
        preco: {
            enumerable: true, 
            value: preco, 
            writable: false, 
            configurable: false 
        },
    });
}

const p1 = new Produto('Camiseta', 20, 3);
p1.estoque = 5000; // writable não deixa
delete p1.estoque; // não vai pq configurable não deixa
console.log(Object.keys(p1));

for (let chave in p1) {
    console.log(chave);
}

