window.onload = () => {

    //validação campo obrigatório
    const validar = () => {
        
        const nome = document.getElementById('nome');
        const validacaoNome = document.getElementById('validacaoNome');

        let validacaoOk = true;
        
        if(nome.value.length === 0) {
            validacaoOk = false;
            validacaoNome.innerHTML = 'Este campo é obrigatório';
        }       
    };
       
    //botão enviar
    const enviar = (idBotao) => {        
        const botao = document.getElementById(idBotao);
        botao.addEventListener('click', validar);
    };
   enviar('botao');
};