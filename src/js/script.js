const habilidades = [
  { nome: "JavaScript", imagem: "js" },
  { nome: "Node.Js", imagem: "nodejs" },
  { nome: "Express.Js", imagem: "express" },
  { nome: "APIs REST", imagem: "APIs REST" },
  { nome: "MongoDB", imagem: "mongo" },
  { nome: "HTML5", imagem: "html" },
  { nome: "CSS3", imagem: "css" },
  { nome: "Canva", imagem: "canva" },
  { nome: "Trello", imagem: "trello" }
];


function apresentarHabilidades() {
  
  for(let i = 0;i < habilidades.length; i++) {
    const skillDiv = document.createElement("div");
    skillDiv.classList.add("skill");

    const img = document.createElement("img");
    img.src = `./src/imagens/${habilidades[i].imagem}.png`;
    img.alt = `Skill ${habilidades[i].nome}`;

    const h2 = document.createElement("h2");
    h2.textContent = habilidades[i].nome;

    skillDiv.appendChild(img);
    skillDiv.appendChild(h2);

    document.getElementById("habilidades-itens").appendChild(skillDiv);

    console.log("Habilidades geradas com sucesso!");
  }
}
document.addEventListener("DOMContentLoaded", function () {
  apresentarHabilidades();
});