alert(`Alguns Pokémon tem diferenças entre macho e femea!
Essa diferença está sinalizada pelo ícone ao lado do Pokémon!`);
const botaoAlterarTema = document.getElementById("botao-alterar-tema");
const body = document.querySelector("body");
const imagemBotaoAlterarTema = document.querySelector(".imagem-botao");

botaoAlterarTema.addEventListener("click", () => {
    const modoEscuroAtivo = body.classList.contains("modo-escuro")
    body.classList.toggle("modo-escuro");

    if (modoEscuroAtivo) {
        imagemBotaoAlterarTema.setAttribute("src", "./src/imagens/sun.png");
    } else {
        imagemBotaoAlterarTema.setAttribute("src", "./src/imagens/moon.png");
    }
});

const pokemonGifs = [
    {
        nome:   "venusaur",
        male:   "src/imagens/1 gen/3-front-n-m.gif",
        female: "src/imagens/1 gen/3-front-n-f.gif"
    },
    {
        nome: "butterfree",
        male: "src/imagens/1 gen/12-front-n-m.gif",
        female: "src/imagens/1 gen/12-front-n-f.gif"
    },
    {
        nome: "rattata",
        male: "src/imagens/1 gen/19-front-n-m.gif",
        female: "src/imagens/1 gen/19-front-n-f.gif"
    },
    {
        nome: "raticate",
        male: "src/imagens/1 gen/20-front-n-m.gif",
        female: "src/imagens/1 gen/20-front-n-f.gif"
    },
    {
        nome: "pikachu",
        male: "src/imagens/1 gen/25-front-n-m.gif",
        female: "src/imagens/1 gen/25-front-n-f.gif"
    },
    {
        nome: "raichu",
        male: "src/imagens/1 gen/26-front-n-m.gif",
        female: "src/imagens/1 gen/26-front-n-f.gif"
    },
    {
        nome: "zubat",
        male: "src/imagens/1 gen/41-front-n-m.gif",
        female: "src/imagens/1 gen/41-front-n-f.gif"
    },
    {
        nome: "golbat",
        male: "src/imagens/1 gen/42-front-n-m.gif",
        female: "src/imagens/1 gen/42-front-n-f.gif"
    },
    {
        nome: "gloom",
        male: "src/imagens/1 gen/44-front-n-m.gif",
        female: "src/imagens/1 gen/44-front-n-f.gif"
    },
    {
        nome: "vileplume",
        male: "src/imagens/1 gen/45-front-n-m.gif",
        female: "src/imagens/1 gen/45-front-n-f.gif"
    },
    {
        nome: "kadabra",
        male: "src/imagens/1 gen/64-front-n-m.gif",
        female: "src/imagens/1 gen/64-front-n-f.gif"
    },
    {
        nome: "alakazam",
        male: "src/imagens/1 gen/65-front-n-m.gif",
        female: "src/imagens/1 gen/65-front-n-f.gif"
    },
    {
        nome: "doduo",
        male: "src/imagens/1 gen/84-front-n-m.gif",
        female: "src/imagens/1 gen/84-front-n-f.gif"
    },
    {
        nome: "dodrio",
        male: "src/imagens/1 gen/85-front-n-m.gif",
        female: "src/imagens/1 gen/85-front-n-f.gif"
    },
    {
        nome: "hypno",
        male: "src/imagens/1 gen/97-front-n-m.gif",
        female: "src/imagens/1 gen/97-front-n-f.gif"
    },
    {
        nome: "rhyhorn",
        male: "src/imagens/1 gen/111-front-n-m.gif",
        female: "src/imagens/1 gen/111-front-n-f.gif"
    },
    {
        nome: "rhydon",
        male: "src/imagens/1 gen/112-front-n-m.gif",
        female: "src/imagens/1 gen/112-front-n-f.gif"
    },
    {
        nome: "goldeen",
        male: "src/imagens/1 gen/118-front-n-m.gif",
        female: "src/imagens/1 gen/118-front-n-f.gif"
    },
    {
        nome: "seaking",
        male: "src/imagens/1 gen/119-front-n-m.gif",
        female: "src/imagens/1 gen/119-front-n-f.gif"
    },
    {
        nome: "scyther",
        male: "src/imagens/1 gen/123-front-n-m.gif",
        female: "src/imagens/1 gen/123-front-n-f.gif"
    },
    {
        nome: "magikarp",
        male: "src/imagens/1 gen/129-front-n-m.gif",
        female: "src/imagens/1 gen/129-front-n-f.gif"
    },
    {
        nome: "gyarados",
        male: "src/imagens/1 gen/130-front-n-m.gif",
        female: "src/imagens/1 gen/130-front-n-f.gif"
    },
];

let trocaGif = document.querySelectorAll(".poke");

let gifPoke = Array.from(trocaGif);

for (let i = 0; i < gifPoke.length; i++) {

    gifPoke[i].addEventListener("click", function(){
        if(gifPoke[i].id == pokemonGifs[i].nome){
            if(gifPoke[i].src.endsWith("m.gif")){
                trocaGif[i].setAttribute("src", pokemonGifs[i].female);
            }else{
                trocaGif[i].setAttribute("src", pokemonGifs[i].male);
            }
        }else{
            console.log('errou');
            console.log(pokemonGifs[i].nome);
        }
    });
}