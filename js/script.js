function apresentar_habilidades() {
  const imagens = [
    "c",
    "js",
    "nodejs",
    "react",
    "APIs REST",
    "html",
    "css",
    "trello",
    "canva",
  ];
  const nomes = [
    "Linguagem C",
    "JavaScript",
    "Node.js",
    "React.js",
    "APIs REST",
    "HTML5",
    "CSS3",
    "Trello",
    "Canva",
  ];
  const div_habilidades = document.getElementById("habilidades-itens");

  for (let i = 0; i < imagens.length; i++) {
    const skillDiv = document.createElement("div");
    skillDiv.classList.add("skill");

    const img = document.createElement("img");
    img.src = `./imagens/${imagens[i]}.png`;
    img.alt = `Skill ${nomes[i]}`;

    const h2 = document.createElement("h2");
    h2.textContent = nomes[i];

    skillDiv.appendChild(img);
    skillDiv.appendChild(h2);

    div_habilidades.appendChild(skillDiv);

    console.log("Habilidades geradas com sucesso!");
  }
}

document.addEventListener("DOMContentLoaded", function () {
  apresentar_habilidades();
});

