const calcular1 = document.querySelector('#calcular1');

const calcular2 = document.querySelector('#calcular2');

const btn = document.querySelector('#calculo');

const resultado = document.querySelector('#resultado');

btn.addEventListener('click', btnOnClick);

function btnOnClick(){
   const suma  = parseInt(calcular1.value) + parseInt(calcular2.value);
    resultado.innerText = "El resultado es: " + suma;
}