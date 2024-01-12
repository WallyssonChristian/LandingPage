document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');
    const mensagemSucesso = document.getElementById('mensagem-sucesso');

    form.addEventListener('submit', function (event) {
        // Validar o campo de nome
        const nome = form.querySelector('#nome').value;
        const nomeMinLength = 3; // Defina o comprimento mínimo permitido para o nome
        if (nome.trim().length < nomeMinLength) {
            alert('O campo de nome deve ter pelo menos ' + nomeMinLength + ' caracteres.');
            event.preventDefault(); // Impede o envio do formulário
            return;
        }

        // Validar o campo de e-mail
        const email = form.querySelector('#email').value;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Por favor, insira um endereço de e-mail válido.');
            event.preventDefault(); // Impede o envio do formulário
            return;
        }

        // Validar o campo de assunto
        const assunto = form.querySelector('#subject').value;
        if (assunto.trim() === '') {
            alert('Por favor, preencha o campo de assunto.');
            event.preventDefault(); // Impede o envio do formulário
            return;
        }

        // Validar o campo de mensagem
        const mensagem = form.querySelector('#message').value;
        const maxMensagemLength = 500; // Defina o comprimento máximo permitido
        if (mensagem.trim() === '' || mensagem.length > maxMensagemLength) {
            alert('A mensagem deve ser preenchida e ter no máximo ' + maxMensagemLength + ' caracteres.');
            event.preventDefault(); // Impede o envio do formulário
            return;
        }

        // Se todas as validações passarem, o formulário será enviado normalmente
        // Redirecionar para a página de sucesso
        mensagemSucesso.style.display = 'block';

        // Impede o envio automático do formulário
        event.preventDefault();
    });
});
