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


var pokemonGifs = {
    venusaur: {
        male: "src/imagens/1 gen/3-front-n-m.gif",
        female: "src/imagens/1 gen/3-front-n-f.gif"
    },
    butterfree: {
        male: "src/imagens/1 gen/12-front-n-m.gif",
        female: "src/imagens/1 gen/12-front-n-f.gif"
    },
    rattata: {
        male: "src/imagens/1 gen/19-front-n-m.gif",
        female: "src/imagens/1 gen/19-front-n-f.gif"
    },
    raticate: {
        male: "src/imagens/1 gen/20-front-n-m.gif",
        female: "src/imagens/1 gen/20-front-n-f.gif"
    },
    pikachu: {
        male: "src/imagens/1 gen/25-front-n-m.gif",
        female: "src/imagens/1 gen/25-front-n-f.gif"
    },
    raichu: {
        male: "src/imagens/1 gen/26-front-n-m.gif",
        female: "src/imagens/1 gen/26-front-n-f.gif"
    },
    zubat: {
        male: "src/imagens/1 gen/41-front-n-m.gif",
        female: "src/imagens/1 gen/41-front-n-f.gif"
    },
    golbat: {
        male: "src/imagens/1 gen/42-front-n-m.gif",
        female: "src/imagens/1 gen/42-front-n-f.gif"
    },
    gloom: {
        male: "src/imagens/1 gen/44-front-n-m.gif",
        female: "src/imagens/1 gen/44-front-n-f.gif"
    },
    vileplume: {
        male: "src/imagens/1 gen/45-front-n-m.gif",
        female: "src/imagens/1 gen/45-front-n-f.gif"
    },
    kadabra: {
        male: "src/imagens/1 gen/64-front-n-m.gif",
        female: "src/imagens/1 gen/64-front-n-f.gif"
    },
    alakazam: {
        male: "src/imagens/1 gen/65-front-n-m.gif",
        female: "src/imagens/1 gen/65-front-n-f.gif"
    },
    doduo: {
        male: "src/imagens/1 gen/84-front-n-m.gif",
        female: "src/imagens/1 gen/84-front-n-f.gif"
    },
    dodrio: {
        male: "src/imagens/1 gen/85-front-n-m.gif",
        female: "src/imagens/1 gen/85-front-n-f.gif"
    },
    hypno: {
        male: "src/imagens/1 gen/97-front-n-m.gif",
        female: "src/imagens/1 gen/97-front-n-f.gif"
    },
    rhyhorn: {
        male: "src/imagens/1 gen/111-front-n-m.gif",
        female: "src/imagens/1 gen/111-front-n-f.gif"
    },
    rhydon: {
        male: "src/imagens/1 gen/112-front-n-m.gif",
        female: "src/imagens/1 gen/112-front-n-f.gif"
    },
    goldeen: {
        male: "src/imagens/1 gen/118-front-n-m.gif",
        female: "src/imagens/1 gen/118-front-n-f.gif"
    },
    seaking: {
        male: "src/imagens/1 gen/119-front-n-m.gif",
        female: "src/imagens/1 gen/119-front-n-f.gif"
    },
    scyther: {
        male: "src/imagens/1 gen/123-front-n-m.gif",
        female: "src/imagens/1 gen/123-front-n-f.gif"
    },
    magikarp: {
        male: "src/imagens/1 gen/129-front-n-m.gif",
        female: "src/imagens/1 gen/129-front-n-f.gif"
    },
    gyarados: {
        male: "src/imagens/1 gen/130-front-n-m.gif",
        female: "src/imagens/1 gen/130-front-n-f.gif"
    },
};

venusaur.addEventListener("click", clicar);
butterfree.addEventListener("click", clicar);
rattata.addEventListener("click", clicar);
raticate.addEventListener("click", clicar);
pikachu.addEventListener("click", clicar);
raichu.addEventListener("click", clicar);
zubat.addEventListener("click", clicar);
golbat.addEventListener("click", clicar);
gloom.addEventListener("click", clicar);
vileplume.addEventListener("click", clicar);
kadabra.addEventListener("click", clicar);
alakazam.addEventListener("click", clicar);
doduo.addEventListener("click", clicar);
dodrio.addEventListener("click", clicar);
hypno.addEventListener("click", clicar);
rhyhorn.addEventListener("click", clicar);
rhydon.addEventListener("click", clicar);
goldeen.addEventListener("click", clicar);
seaking.addEventListener("click", clicar);
scyther.addEventListener("click", clicar);
magikarp.addEventListener("click", clicar);
gyarados.addEventListener("click", clicar);


function clicar(){
    
    if(venusaur.src.endsWith("3-front-n-m.gif")){
        venusaur.src = pokemonGifs.venusaur.female;
    }else {
        venusaur.src = pokemonGifs.venusaur.male;
    }

    if(butterfree.src.endsWith("12-front-n-m.gif")){
        butterfree.src = pokemonGifs.butterfree.female;
    }else {
        butterfree.src = pokemonGifs.butterfree.male;
    }

    if(rattata.src.endsWith("19-front-n-m.gif")){
        rattata.src = pokemonGifs.rattata.female;
    }else {
        rattata.src = pokemonGifs.rattata.male;
    }

    if(raticate.src.endsWith("20-front-n-m.gif")){
        raticate.src = pokemonGifs.raticate.female;
    }else {
        raticate.src = pokemonGifs.raticate.male;
    }

    if(pikachu.src.endsWith("25-front-n-m.gif")){
        pikachu.src = pokemonGifs.pikachu.female;
    }else {
        pikachu.src = pokemonGifs.pikachu.male;
    }

    if(raichu.src.endsWith("26-front-n-m.gif")){
        raichu.src = pokemonGifs.raichu.female;
    }else {
        raichu.src = pokemonGifs.raichu.male;
    }

    if(zubat.src.endsWith("41-front-n-m.gif")){
        zubat.src = pokemonGifs.zubat.female;
    }else {
        zubat.src = pokemonGifs.zubat.male;
    }

    if(golbat.src.endsWith("42-front-n-m.gif")){
        golbat.src = pokemonGifs.golbat.female;
    }else {
        golbat.src = pokemonGifs.golbat.male;
    }

    if(gloom.src.endsWith("44-front-n-m.gif")){
        gloom.src = pokemonGifs.gloom.female;
    }else {
        gloom.src = pokemonGifs.gloom.male;
    }

    if(vileplume.src.endsWith("45-front-n-m.gif")){
        vileplume.src = pokemonGifs.vileplume.female;
    }else {
        vileplume.src = pokemonGifs.vileplume.male;
    }

    if(kadabra.src.endsWith("64-front-n-m.gif")){
        kadabra.src = pokemonGifs.kadabra.female;
    }else {
        kadabra.src = pokemonGifs.kadabra.male;
    }

    if(alakazam.src.endsWith("65-front-n-m.gif")){
        alakazam.src = pokemonGifs.alakazam.female;
    }else {
        alakazam.src = pokemonGifs.alakazam.male;
    }

    if(doduo.src.endsWith("84-front-n-m.gif")){
        doduo.src = pokemonGifs.doduo.female;
    }else {
        doduo.src = pokemonGifs.doduo.male;
    }

    if(dodrio.src.endsWith("85-front-n-m.gif")){
        dodrio.src = pokemonGifs.dodrio.female;
    }else {
        dodrio.src = pokemonGifs.dodrio.male;
    }

    if(hypno.src.endsWith("97-front-n-m.gif")){
        hypno.src = pokemonGifs.hypno.female;
    }else {
        hypno.src = pokemonGifs.hypno.male;
    }

    if(rhyhorn.src.endsWith("111-front-n-m.gif")){
        rhyhorn.src = pokemonGifs.rhyhorn.female;
    }else {
        rhyhorn.src = pokemonGifs.rhyhorn.male;
    }

    if(rhydon.src.endsWith("112-front-n-m.gif")){
        rhydon.src = pokemonGifs.rhydon.female;
    }else {
        rhydon.src = pokemonGifs.rhydon.male;
    }

    if(goldeen.src.endsWith("118-front-n-m.gif")){
        goldeen.src = pokemonGifs.goldeen.female;
    }else {
        goldeen.src = pokemonGifs.goldeen.male;
    }

    if(seaking.src.endsWith("119-front-n-m.gif")){
        seaking.src = pokemonGifs.seaking.female;
    }else {
        seaking.src = pokemonGifs.seaking.male;
    }

    if(scyther.src.endsWith("123-front-n-m.gif")){
        scyther.src = pokemonGifs.scyther.female;
    }else {
        scyther.src = pokemonGifs.scyther.male;
    }
    
    if(magikarp.src.endsWith("129-front-n-m.gif")){
        magikarp.src = pokemonGifs.magikarp.female;
    }else {
        magikarp.src = pokemonGifs.magikarp.male;
    }

    if(gyarados.src.endsWith("130-front-n-m.gif")){
        gyarados.src = pokemonGifs.gyarados.female;
    }else {
        gyarados.src = pokemonGifs.gyarados.male;
    }
}

