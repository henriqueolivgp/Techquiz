const baseAPI = 'http://localhost:1400/api';

const Register = 'http://localhost:1400/api/register';

const utilizadores = 'http://localhost:1400/api/utilizadores';


const getutilizadores = () => {
	$.get(utilizadores, result => {
		document.getElementById('nome').innerHTML = '<b>Nome: </b>' + result.data[0].nome;
		document.getElementById('email').innerHTML = '<b>Email: </b>' + result.data[0].email;
		document.getElementById('password').innerHTML = '<b>Idade: </b>' + result.data[0].password;
	});
};

window.onload = () => {
	getutilizadores();
};