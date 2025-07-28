const rand = (min, max) =>  Math.floor(Math.random() * (max-min) + min);
const geraMaiuscula = () => String.fromCharCode(rand(65, 91));
const geraMinuscula = () => String.fromCharCode(rand(97, 123));
const geraNumero = () => String.fromCharCode(rand(48, 58));
const simbolos = ',.;~^[]{}_!@#$%&*()+=-';
const geraSimbolo = () => simbolos[rand(0, simbolos.length)];

export default function geraSenha(qtd, maiusculas, minusculas, numeros, simbolos) {
    const senhaArray = [];
    qtd = Number(qtd);
    for(let i = 0; i < qtd; i++) {
        //fazendo com a gambiarra de testagem(operador lógico, avaliação de 
        // curto circuito), mas poderia ser com IF
        maiusculas && senhaArray.push(geraMaiuscula());
        minusculas && senhaArray.push(geraMinuscula());
        numeros && senhaArray.push(geraNumero());
        simbolos && senhaArray.push(geraSimbolo());
    }

    function embaralhaLetras(texto) {
        const letras = [...texto]; // ou texto.split('')
        for (let i = letras.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [letras[i], letras[j]] = [letras[j], letras[i]]; // troca as posições
        }
        return letras;
    }

    const senhaSequencia = senhaArray.join('').slice(0, qtd);
    const senhaMisturada = embaralhaLetras(senhaSequencia);
    //console.log(senhaSequencia);
    //console.log(senhaSequenciaArray);
    //console.log(senhaMisturada);

    return senhaMisturada.join('');
}

