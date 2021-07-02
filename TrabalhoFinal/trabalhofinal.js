function verificaData(){
    var data_dd = document.querySelector("input[name='Data_dd']").value;
    if(data_dd.length != 10){
        alert("Data inválida");
        return false;
    }
}
function Salvar()
{
alert("Registro Salvo!!!");
}

function funcao1()
{
alert("Eu sou um alert!");
}

function Checkfiles(){
    var fup = document.getElementById('filename');
    var fileName = fup.value;
    var ext = fileName.substring(fileName.lastIndexOf('.') + 1);

    if(ext =="jpeg" || ext=="png"){
        return true;
    }
    else{
        return false;
    }
}