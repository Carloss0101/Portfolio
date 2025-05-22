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
  let projetosItens = document.getElementById('projetos-itens');
  let principal = 0;
  let podeMover = true;

  function renderizarProjetos() {
    projetosItens.innerHTML = '';

    let passar1 = document.createElement("h1");
    passar1.classList.add("passar");
    passar1.textContent = '<';
    passar1.addEventListener("click", () => moverCarrossel(-1));

    projetosItens.appendChild(passar1);

    for (let i = 0; i < 3; i++) {
      const itemProjeto = document.createElement("div");
      itemProjeto.classList.add("item-projeto");
      itemProjeto.classList.add("resp-display");

      const indexProjeto = (principal + i) % projetos.length; // Índice correto para cada projeto

      if (i === 1) {
        itemProjeto.id = "item-principal";
        itemProjeto.classList.remove("resp-display");
      }

      const h2 = document.createElement("h2");
      h2.textContent = projetos[indexProjeto].nome;

      const img = document.createElement("img");
      img.src = `././src/imagens/${projetos[indexProjeto].imagem}`;

      const h3 = document.createElement("h3");
      h3.classList.add("detalhes");
      h3.textContent = "Detalhes";
      h3.addEventListener("click", () => mostrarEmb(indexProjeto)); // Passa o índice correto ao clicar

      const p = document.createElement("p");
      p.textContent = projetos[indexProjeto].descricao_breve;

      const icons = document.createElement("div");
      icons.id = "icons";
      
      for(let i = 0; i < projetos[indexProjeto].tecnologias.length; i++) {
        const iconImg = document.createElement('img');
        iconImg.src = `././src/imagens/${projetos[indexProjeto].tecnologias[i].icon}`;

        icons.appendChild(iconImg);
      }

      itemProjeto.appendChild(h2);
      itemProjeto.appendChild(img);
      itemProjeto.appendChild(p);
      itemProjeto.appendChild(icons);
      itemProjeto.appendChild(h3);

      projetosItens.appendChild(itemProjeto);
    }

    let passar2 = document.createElement("h1");
    passar2.classList.add("passar");
    passar2.textContent = '>';
    passar2.addEventListener("click", () => moverCarrossel(1));

    projetosItens.appendChild(passar2);
  }

  function moverCarrossel(direcao) {
    if (!podeMover) return;

    podeMover = false;
    setTimeout(() => (podeMover = true), 300);

    principal = (principal + direcao + projetos.length) % projetos.length;
    renderizarProjetos();
  }


  renderizarProjetos();
}


document.addEventListener("DOMContentLoaded", function () {
  apresentar_projetos();
});



function mostrarEmb(numero_projeto) {

  const embad = document.createElement('div');
  embad.id = 'embad';

  const botaoSair = document.createElement('a');
  botaoSair.innerText = 'X';
  botaoSair.id = 'embad_sair'
  botaoSair.onclick = function() {
    embad.remove();
  };
  embad.appendChild(botaoSair);

  const titulo = document.createElement('h1');
  titulo.innerText = projetos[numero_projeto].nome;
  embad.appendChild(titulo);


  const imagem = document.createElement('img');
  imagem.src = `././src/imagens/${projetos[numero_projeto].imagem}`; 
  imagem.class = 'embadImg'
  embad.appendChild(imagem);


  const descricao = document.createElement('p');
  descricao.innerText = projetos[numero_projeto].descricao_completa;
  embad.appendChild(descricao);


  const link1 = document.createElement('a');
  link1.href = projetos[numero_projeto].linkSite;
  link1.innerText = 'Acesso o site';

  const link2 = document.createElement('a');
  link2.href = projetos[numero_projeto].linkGithub;
  link2.innerText = 'Acesse o github';

  embad.appendChild(link1);
  embad.appendChild(link2);


  document.body.appendChild(embad);
}



