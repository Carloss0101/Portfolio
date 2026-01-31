const projetos = [
  { 
    nome: "CineBlur", 
    descricao_breve: "Um jogo onde você tenta adivinhar o nome do filme a partir de uma imagem borrada.",  
    descricao_completa: "CineBlur é um jogo onde você tenta adivinhar o nome do filme a partir de uma imagem borrada. Quanto maior a dificuldade, mais borrada a imagem fica, tornando o jogo mais desafiador. A cada rodada, você pode pedir uma dica (sinopse do filme) e tem um botão de pular para avançar para a próxima rodada.", 
    imagem: "CineBlur.png",
    tecnologias: [
      { icon: "js.png" },
      { icon: "nodejs.png" },
      { icon: "express.png" },
      { icon: "APIs REST.png" },
      { icon: "html.png" },
      { icon: "css.png" }
    ],
    linkSite: "https://carloss0101.github.io/CineBlur/", 
    linkGithub: "https://github.com/Carloss0101/CineBlur" 
  },
  { 
    nome: "Organizador Faculdade", 
    descricao_breve: "Site para ajudar estudantes a organizar tarefas acadêmicas de forma simples e eficiente.",  
    descricao_completa: "O Organizador de Faculdade é um site que ajuda estudantes a gerenciar suas tarefas acadêmicas de forma prática e eficiente. Com este sistema, você pode adicionar trabalhos, provas e suas respectivas datas. O site organiza suas tarefas de maneira intuitiva, facilitando o acompanhamento das atividades.", 
    imagem: "OrgFaculdade.png", 
    tecnologias: [
      { icon: "js.png" },
      { icon: "nodejs.png" },
      { icon: "express.png" },
      { icon: "mongo.png" },
      { icon: "APIs REST.png" },
      { icon: "html.png" },
      { icon: "css.png" }
    ],
    linkSite: "https://www.linkedin.com/feed/update/urn:li:activity:7320219421271105536/", 
    linkGithub: "https://github.com/Carloss0101/Organizador-Faculdade" 
  },
  { 
    nome: "Site ATOS e AMOR", 
    descricao_breve: "Site institucional para ONG Atos e Amor, com informações sobre projetos e doações.",  
    descricao_completa: "O Site ATOS e AMOR é um site institucional para a ONG Atos e Amor, que oferece informações sobre seus projetos sociais e doações. O site apresenta os objetivos da ONG, detalhes dos projetos em andamento e formas de contribuir com a causa.", 
    imagem: "atoseamor.png", 
    tecnologias: [
    ],
    linkSite: "https://www.atoseamor.com/", 
    linkGithub: "https://www.atoseamor.com/" 
  },
  { 
    nome: "Gerador de Senhas", 
    descricao_breve: "Um gerador de senhas aleatórias com cópia automática e interface estilizada.",  
    descricao_completa: "Aplicativo que gera senhas aleatórias combinando letras, números e caracteres especiais para garantir segurança. Exibe a senha gerada no centro da tela e permite copiá-la facilmente com um clique. Conta com design moderno, interface responsiva e notificações animadas para melhor usabilidade.", 
    imagem: "GerSenhas.png",
    tecnologias: [
      { icon: "js.png" },
      { icon: "html.png" },
      { icon: "css.png" }
    ],
    linkSite: "https://carloss0101.github.io/Gerador-de-senhas/", 
    linkGithub: "https://github.com/Carloss0101/Gerador-de-senhas" 
  }
];

function apresentar_projetos() {
  const projetosItens = document.getElementById('projetos-itens');
  let principal = 0;
  let podeMover = true;

  function renderizarProjetos(direcao = 0) {
    projetosItens.innerHTML = '';

    const passar1 = document.createElement("h1");
    passar1.classList.add("passar");
    passar1.textContent = '<';
    passar1.onclick = () => moverCarrossel(-1);
    projetosItens.appendChild(passar1);

    for (let i = 0; i < 3; i++) {
      const itemProjeto = document.createElement("div");
      itemProjeto.classList.add("item-projeto", "resp-display");

      const indexProjeto = (principal + i) % projetos.length;

      if (i === 1) {
        itemProjeto.id = "item-principal";
        itemProjeto.classList.remove("resp-display");

        if (direcao === 1) itemProjeto.classList.add("anim-left");
        if (direcao === -1) itemProjeto.classList.add("anim-right");
      }

      const h2 = document.createElement("h2");
      h2.textContent = projetos[indexProjeto].nome;

      const img = document.createElement("img");
      img.src = `././src/imagens/${projetos[indexProjeto].imagem}`;

      const p = document.createElement("p");
      p.textContent = projetos[indexProjeto].descricao_breve;

      const icons = document.createElement("div");
      icons.id = "icons";

      projetos[indexProjeto].tecnologias.forEach(tech => {
        const iconImg = document.createElement("img");
        iconImg.src = `././src/imagens/${tech.icon}`;
        icons.appendChild(iconImg);
      });

      const h3 = document.createElement("h3");
      h3.classList.add("detalhes");
      h3.textContent = "Detalhes";
      h3.onclick = () => mostrarEmb(indexProjeto);

      itemProjeto.appendChild(h2);
      itemProjeto.appendChild(img);
      itemProjeto.appendChild(p);
      itemProjeto.appendChild(icons);
      itemProjeto.appendChild(h3);

      projetosItens.appendChild(itemProjeto);
    }

    const passar2 = document.createElement("h1");
    passar2.classList.add("passar");
    passar2.textContent = '>';
    passar2.onclick = () => moverCarrossel(1);
    projetosItens.appendChild(passar2);
  }

  function moverCarrossel(direcao) {
    if (!podeMover) return;

    podeMover = false;
    setTimeout(() => podeMover = true, 350);

    principal = (principal + direcao + projetos.length) % projetos.length;
    renderizarProjetos(direcao);
  }

  renderizarProjetos();
}

document.addEventListener("DOMContentLoaded", apresentar_projetos);

function mostrarEmb(numero_projeto) {
  const embad = document.createElement('div');
  embad.id = 'embad';

  const botaoSair = document.createElement('a');
  botaoSair.id = 'embad_sair';
  botaoSair.innerText = 'X';
  botaoSair.onclick = () => embad.remove();

  const titulo = document.createElement('h1');
  titulo.innerText = projetos[numero_projeto].nome;

  const imagem = document.createElement('img');
  imagem.src = `././src/imagens/${projetos[numero_projeto].imagem}`;

  const descricao = document.createElement('p');
  descricao.innerText = projetos[numero_projeto].descricao_completa;

  const link1 = document.createElement('a');
  link1.href = projetos[numero_projeto].linkSite;
  link1.target = "_blank";
  link1.innerText = 'Acesse o site';

  const link2 = document.createElement('a');
  link2.href = projetos[numero_projeto].linkGithub;
  link2.target = "_blank";
  link2.innerText = 'Acesse o GitHub';

  embad.appendChild(botaoSair);
  embad.appendChild(titulo);
  embad.appendChild(imagem);
  embad.appendChild(descricao);
  embad.appendChild(link1);
  embad.appendChild(link2);

  document.body.appendChild(embad);
}
