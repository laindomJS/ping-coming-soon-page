// LISTENER DEL EVENTO DE CARGA
window.addEventListener('load', () => {

    // CREACIÓN DE LAS CONSTANTES NECESARIAS
    const input = document.querySelector('#email');
    const btn = document.querySelector('#btn');
    const regex = /^(([^<>()\[\]\\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/;
    const errorMsg = document.querySelector('.error');

    // ESCUCHA DEL EVENTO DE ENVIO
    btn.addEventListener('click', (e) => {

        e.preventDefault();

        // CONDICIONAL PARA VALIDAR EMAIL
        if(regex.test(input.value)) {
            alert('Thanks for subscribe!');
            errorMsg.classList.add('hidden');
            input.classList.remove('border-light-red');
        } else if(input.value === "") {
            input.classList.add('border-light-red');
            errorMsg.classList.remove('hidden');
        } else if(!regex.test(input.value)) {
            input.classList.add('border-light-red');
            errorMsg.classList.remove('hidden');
        };
           
    });

});