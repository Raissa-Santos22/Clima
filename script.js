document.querySelector('.busca').addEventListener('submit', async (event) =>{
    event.preventDefault()
    // Vai guardar os dados na tela usando o listener para escutar quando o usuário clicar no botão

    let input = document.querySelector('#searchInput').value  // a variável input vai guardar o que o usuário digitar no campoo
    if(input !== ""){
        showWarning("Carregando ...") 

        let results = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=
        ${ encodeURI(input)}&appid=9066d9394303a3245ed0ecc466186c25&units=metrics&lang=pt_br`) // variável que vai guardar os dados da API
             let json = await results.json();

        if(json.cod ==200){
        showInfo({
            name:json.name,
            country:json.sys.country,
            temp:json.main.temp,
            tempIcon:json.weather[0].icon,
            windSpeed:json.wind.speed,
            windAngle:json.wind.deg,
        })

        }else{
             showWarning("Não encontramos essa localização...")
        }
    }else{

    }

})

function showWarning(msg){
    document.querySelector('.aviso').innerHTML = msg // vai exibir a mensagem carregando 
}

function showInfo(json){
    showWarning("")
    document.querySelector('.resultado').style.display = 'block' // vai mostrar o resultado com os dados da API
    document.querySelector ('.titulo').innerHTML = `${json.name}, ${json.country}`
    document.querySelector('.tempInfo').innerHTML = `${json.temp}<span>ºC</span>`
    document.querySelector('.ventoInfo').innerHTML = `${json.windSpeed} <span>Km/h</span>`
    document.querySelector('.temp img').setAttribute('src', `http://openweathermap.org/img/wn/${json.tempIcon}.10d@2x.png`)
    document.querySelector('.ventoPonto').style.transform = `rotate(${json.windAngle-90}deg)`
}
