/* Laço de Repetição For
Laços oferecem um jeito facil e rapido de executar uma ação
repetidas vezes.
*/

const carros = ["Gol", "Fusca", "brasília", "Del Rey", "Chevette"];
var tamanho = carros.length;

for(let i=0; i<tamanho; i++){
    document.getElementById("teste").innerHTML +=carros[i]; + " - ";
}
