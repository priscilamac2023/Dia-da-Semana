let nome = prompt('Qual seu nome?');
alert('Boas vindas, ' +  nome + ' ao nosso site!');

var diaDaSemana = prompt('Qual o dia da semana que você está?').toLowerCase();

if (diaDaSemana === 'sábado' || diaDaSemana === 'sabado') {
    alert('Bom final de semana!');
} else if (diaDaSemana === 'domingo') {
    alert('Bom final de semana!');
} else {
    alert('Boa semana!');
}