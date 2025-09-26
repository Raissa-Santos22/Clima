document.querySelector('.busca').addEventListener('submit', (event) =>{
    event.preventDefault()

    let input = document.querySelector(`#searchInput`).value

    if(input !== ""){
        showWarning("Carregando ...")

        let results = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${encodeURI(input)}&appid=9066d9394303a3245ed0ecc466186c25 
        &units=metrics&lang=pt_br`);
        let json = await results.json();

        if(json.cod == 200){
    
        } else{
            showWarning("Não encontramos essa localização ");
        }
    }

})


function showWarning(msg){
    document.querySelector('.aviso').innerHTML = msg
}


