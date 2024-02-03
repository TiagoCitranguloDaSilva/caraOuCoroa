
var container = document.getElementById('moedaContainer');
var escolha
startCoin()

function startCoin(){
    escolherMoeda()
    container.style.backgroundImage = "url('imgs/moedaCoroa.png')";
    let interval = 10
    let angulo = 0
    let mudanca = 100
    let finalizacao = false
    let resultado = false

    let intervalo = setInterval(() => {

        angulo += mudanca
        if(mudanca > 0 && !finalizacao){
            mudanca -= 0.2
        }
        if(mudanca <= 0 || finalizacao){
            mudanca = 1
            angulo = parseInt(angulo)
            finalizacao = true
           

            
            if(angulo % 90 == 0 && !angulo % 180 == 0){
                if(!resultado){
                    mudanca = 0
                    finalizacao = false
                    resultado = true
                }else if((parseInt(parseInt(angulo) / 180)) % 2 == 0 && resultado){
                   clearInterval(intervalo)
                   return
                }
                
            }

        }
        if((parseInt(parseInt(angulo + 90) / 180)) % 2 == 0 && !resultado){
            container.style.backgroundImage = "url('imgs/moedaCara.png')";
        }else if(!resultado){
            container.style.backgroundImage = "url('imgs/moedaCoroa.png')";
        }else{
            if(escolha == 'cara'){
                container.style.backgroundImage = "url('imgs/moedaCara.png')";
            }else{
                container.style.backgroundImage = "url('imgs/moedaCoroa.png')";

            }
        }
        container.style.transform = "rotate3d(0, 1, 0, " + angulo +"deg";

    }, interval);
}

function escolherMoeda(){
    let valor = ((Math.random() * 100) * (Math.random() * 1000)).toString().substring(1, 2).replace('.', '0')
    if(parseInt(valor) <= 5){
        escolha = "cara"
    }else{
        escolha = "coroa"
    }
}