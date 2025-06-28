let heroi = "Carlinhos mata frango"
let xp = 100001
let nivel = ''

if (xp <= 1000) {
    nivel= "Ferro"  
    console.log("Você é um herói de nível " +nivel )  
}
else if (xp > 1000 && xp <= 2000)  {
    nivel = "Bronze"
    console.log("Você é um herói de nível" +nivel)
}   

else if (xp > 2000 && xp <= 5000) {
    nivel = "Prata"
    console.log("Você é um heroi de nivel" + nivel)
}
else if (xp > 5000 && xp <= 7000) {
    nivel = "Ouro"
    console.log("Você é um heroi de nivel" + nivel)
}

else if (xp > 7000 && xp <= 8000){
    nivel = "Platina"
    console.log("Você é um heroi de nivel" + nivel)
}

else if (xp > 8000 && xp <= 9000){
    nivel = "Ascendente"
    console.log("Você é um heroi de nivel" + nivel)
}

else if (xp > 9000 && xp <= 1000){
    nivel = "Imortal"
    console.log("Você é um heroi de nivel" + nivel)
}

else if(xp > 10000) {
    nivel = ("Radiante")
    console.log("Você é um heroi de nivel" + nivel)
}

console.log("O Herói de nome" +heroi, "está no nível de " +nivel)

//Objetivo

// Crie uma variável para armazenar o nome e a quantidade de experiência (XP) de um herói, depois utilize uma estrutura de decisão para apresentar alguma das mensagens 
// Se XP for menor do que 1.000 = Ferro
// Se XP for entre 1.001 e 2.000 = Bronze
// Se XP for entre 2.001 e 5.000 = Prata
// Se XP for entre 5.001 e 7.000 = Ouro
// Se XP for entre 7.001 e 8.000 = Platina
// Se XP for entre 8.001 e 9.000 = Ascendente
// Se XP for entre 9.001 e 10.000= Imortal
// Se XP for maior ou igual a 10.001 = Radiante

// ## Saída

// Ao final deve se exibir uma "O Herói de nome **{nome}** está no nível de **{nivel}**"

 


