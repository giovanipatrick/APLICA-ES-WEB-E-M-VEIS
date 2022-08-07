/**
 * Monta a mensagem de retorno
 * @param {String} title 
 * @param {String} icone 
 * @param {String} body
 * @returns {Mixed}
 */
const alertMessage = (title,icone,body) => {
    Swal.fire({
        title:title,
        icon:icone,
        html:body
    });
}

/**
 * Verifica se o nome foi preenchido
 * @param {Object} formObject 
 * @returns {Boolean}
 */
const validaNome = (formObject) => {
    
    if(!formObject.nome)
    {
        return false;
    }

    if(formObject.nome.trim().length <= 0)
    {
        return false;
    }

    return true;

}

/**
 * Verifica se o email foi preenchido
 * @param {Object} formObject 
 * @returns {Boolean}
 */
const validaEmail = (formObject) => {
    
    if(!formObject.email)
    {
        return false;
    }

    if(formObject.email.trim().length <= 0)
    {
        return false;
    }

    return true;

}

/**
 * Verifica se o descrição foi preenchido
 * @param {Object} formObject 
 * @returns {Boolean}
 */
const validaDescricao = (formObject) => {

    if(!formObject.descricao)
    {
        return false;
    }

    if(formObject.descricao.trim().length <= 0)
    {
        return false;
    }

    return true;

}

/**
 * Executa as funções que verificam os campos do formulário
 * Caso a exigência não seja atendida, é retornado um Swal
 */
const validaFormulario = (formObject) => 
{
    
    if(validaNome(formObject)){

        if(validaEmail(formObject)){

            if(validaDescricao(formObject)){

                alertMessage('Mensagem Enviada','success','A sua mensagem foi encaminhada!');

                setTimeout(()=>{

                    window.location.reload();

                },1200);

            }else{
                alertMessage('Atenção','info','A descrição não foi informada!');
            }

        }else{
            alertMessage('Atenção','info','O email não foi informado!');
        }

    }else{
        alertMessage('Atenção','info','O nome não foi informado!');
    }

}

/** 
 * Executa após o carregamento total do DOM
 */
document.addEventListener("DOMContentLoaded", () => {
    
    /**
     * Coleta os elementos utilizados no formulário
     */
    const btn_send = document.querySelector("#btn_send");

    /** 
     * Caso o botão de enviar e-mail seja acionado
     */
    btn_send.addEventListener("click", () => {

        let inputNome = document.querySelector("#inputNome").value;
        let inputEmail = document.querySelector("#inputEmail").value;
        let txtDescricao = document.querySelector("#txtDescricao").value;

        /**
         * Monta um objeto com os Inputs / Textarea values
         */
        let formObject = {
            nome:inputNome,
            email:inputEmail,
            descricao:txtDescricao
        } 

        validaFormulario(formObject);
    });

});