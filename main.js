const form = document.getElementById('form-exercicio');
const campoA = document.getElementById('campo-a');
const campoB = document.getElementById('campo-b');
let validaCampo = false;


function validar() {
    let valorA = Number(campoA.value);
    let valorB = Number(campoB.value);
    let validaCampo = valorB > valorA;
    return validaCampo;
}

form.addEventListener('submit', function(e){
    e.preventDefault();

    const mensagemSucesso = `Os valores dos campos são válidos já que <b>${campoB.value}</b> é maior que <b>${campoA.value}</b>! `

validaCampo = validar(campoB.value);
if (validaCampo){
        const containerMensagemSucesso = document.querySelector('.success-message');
        containerMensagemSucesso.innerHTML = mensagemSucesso;
        containerMensagemSucesso.style.display = 'block';

        campoA.value = ''
        campoB.value = ''

} else{
    document.querySelector('.error-message').style.display = 'block';
}

})

campoB.addEventListener('change', function(e){
        console.log(e.target.value);
        validaCampo = validar (e.target.value);
    
        if (!validaCampo) {
            campoB.classList.add('error')
            document.querySelector('.error-message').style.display = 'block';
            containerMensagemSucesso.remove('error')
        } else {
            campoB.classList.remove('error')
            document.querySelector('.error-message').style.display = 'none';
        }
    });