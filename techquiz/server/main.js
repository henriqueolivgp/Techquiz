const baseAPI = 'http://localhost:1400/api';

const Register = 'http://localhost:1400/api/register';

const tipoquiz = 'http://localhost:1400/api/tipo-quiz';


const gettipoquiz = () => {
	$.get(tipoquiz, result => {
		document.getElementById('nome').innerHTML = '<b>Nome: </b>' + result.data[0].nome;
		document.getElementById('descricao').innerHTML = '<b>Email: </b>' + result.data[0].descricao;
	});
};

window.onload = () => {
	gettipoquiz();
};