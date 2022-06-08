var currentNumberWrapper = document.getElementById('currentNumber');
var currentNumber = 0;
var button = document.getElementById('button')
var button2 = document.getElementById('button2')

function increment(){
    currentNumber = currentNumber + 1;

    if(currentNumber >= 1){
        // console.log("Azul")
        document.getElementById('currentNumber').style.color = "blue"
    } 

    currentNumberWrapper.innerHTML = currentNumber

}
function decrement(){
    currentNumber = currentNumber - 1;

    if(currentNumber <= -1){
        // console.log("Vermelho")
        document.getElementById('currentNumber').style.color = "red"
    }

    currentNumberWrapper.innerHTML = currentNumber
}

button.addEventListener('mouseover', brilhar);
button.addEventListener('mouseout', nenhum);


function brilhar(){
    button.style = 'filter: brightness(110%); transition: 0.5s;'
}
function nenhum(){
    button.style = 'filter: brightness(100%); transition: 0.5s;'
}
button2.addEventListener('mouseover', brilhar2);
button2.addEventListener('mouseout', nenhum2);

function brilhar2(){
    button2.style = 'filter: brightness(110%); transition: 0.5s;'
}
function nenhum2(){
    button2.style = 'filter: brightness(100%); transition: 0.5s;'
}

