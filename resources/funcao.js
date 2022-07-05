function verificarNumero(num1, num2) {
    if(parseInt(num1) > parseInt(num2)) {
        alert(num1);
    } else if(parseInt(num2) > parseInt(num1)){
        alert(num2);
    } else {
        alert("Os dois são iguais");
    }
}