<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Fetch API complexo</title>
</head>
<body>

    <h1> Fetch API</h1>
<form>
    <div> CEP: <input name="cep" value="01001000"/> </div>
    <div> Cidade: <input name="cidade" disabled/> </div>
</form>
<script>
    const $campoCEP = document.querySelector('[name="cep"]')
    const $campoCidade = document.querySelector('[name="cidade"]')
    $campoCEP.addEventListener("blur", infoEvento =>{
        console.log(infoEvento)
        const cep = infoEvento.target.value
        $campoCidade.value=""

        fetch(`https://viacep.com.br/ws/${cep}/json/`)
        .then(function(resposta){
            return resposta.json()
        })
        .then(function(dadosCEP){
            console.log(dadosCEP)
            $campoCidade.value= dadosCEP.localidade
        })
    })
</script>
</body>
</html>