const title = document.querySelector('#title')
const description = document.querySelector('#description')

// luffy 
const luffy = document.querySelector('#luffy')

luffy.addEventListener('click', function() {
    title.innerHTML = 'Monkey D. Luffy'
    description.innerHTML = 'Luffy do Chapéu de Palha", como ficou conhecido, é o protagonista do anime, e o fundador e capitão dos cada vez mais infames e poderosos Piratas do Chapéu de Palha, bem como o mais poderoso de seus melhores lutadores. Desde muito jovem, tem como seu maior sonho um dia encontrar o lendário tesouro de Gol D. Roger, para se tornar o novo Rei dos Piratas.'
    
})

// zoro 
const zoro = document.querySelector('#zoro')

zoro.addEventListener('click', function() {
    title.innerHTML = 'Roronoa Zoro'
    description.innerHTML = 'Primeiro pirata (segundo membro se contarmos com Luffy) a se juntar à tripulação de Piratas do Chapéu de Palha, Zoro aceitou o convite de Luffy após o capitão salvar sua vida. Ele é um dos quatro melhores lutadores da tripulação, ao lado de Luffy, Sanji e Jinbe, e seu sonho é se tornar o maior espadachim do mundo. Zoro também é considerado como um dos doze piratas que são referidos como "A Pior Geração". Ele atualmente tem uma recompensa de 1.111.000.000 de berys.'
})

// nami

const nami = document.querySelector('#nami')

nami.addEventListener('click', function() {
    title.innerHTML = '"Gata Ladra" Nami'
    description.innerHTML = 'Uma órfã de guerra, ainda criança Nami foi adotada por Bell-mère, uma mulher da Marinha. Enquanto crescia ao lado de sua irmã adotiva Nojiko, Nami já demonstrava sua paixão por desenhar mapas, sonhando em um dia fazer o mapa de todo o mundo. Ela atualmente tem uma recompensa de 366.000.000 de berys. Nami é considerada pela marinha uma dos comandantes do Luffy, seguindo a lógica da sua recompensa a 8° Comandante.'
})

// chopper

const chopper = document.querySelector('#chopper')

chopper.addEventListener('click', function() {
    title.innerHTML = 'Tony Tony Chopper'
    description.innerHTML = 'Esta pequena rena ganhou a habilidade de mudar sua forma e de pensar como humanos após comer a fruta Hito Hito no Mi. Chopper é um valioso membro da tripulação dos Piratas do Chapéu de Palha, atuando como médico da tripulação. Por ter sido confundido como mascote, a recompensa atual de sua captura é de apenas de 1000 de berys. mesmo sendo considerado "Mascote" pela marinha, ele foi nomeado um dos comandantes do Luffy, sendo assim seguindo a lógica da sua recompensa o 9° Comandante.'
})

// sanji 

const sanji = document.querySelector('#sanji')

sanji.addEventListener('click', function() {
    title.innerHTML = 'Vinsmoke Sanji'
    description.innerHTML = 'Também conhecido como "Perna Negra" Sanji, este pirata foi o quinto a integrar a tripulação de Luffy. Suas ações como pirata lhe renderam a quarta maior recompensa entre os membros do Chapéu de Palha, além de atuar como cozinheiro oficial do grupo. Ele é um dos quatro melhores lutadores da tripulação, ao lado de Luffy, Zoro e Jinbe. Seu sonho é encontrar o paraíso dos chefes, All Blue. Sua recompensa atual é de 1.032.000.000 de berys.'
})