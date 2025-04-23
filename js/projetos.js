const projetos = [
  { 
      nome: "Lista de Tarefas", 
      descricao_breve: "Aplicação para gerenciar tarefas.",  
      descricao_completa: "Um app simples para adicionar, remover e marcar tarefas como concluídas, usando LocalStorage para salvar os dados.", 
      imagem: "link_para_imagem_todo.jpg", 
      linkSite: "https://seusite.com/todolist", 
      linkGithub: "https://github.com/seuusuario/todolist" 
  },
  { 
      nome: "Galeria de Imagens", 
      descricao_breve: "Galeria interativa com efeitos de animação.",  
      descricao_completa: "Uma galeria que exibe imagens em grade e permite visualização em tela cheia com animações suaves e efeitos CSS.", 
      imagem: "link_para_imagem_galeria.jpg", 
      linkSite: "https://seusite.com/galeria", 
      linkGithub: "https://github.com/seuusuario/galeria" 
  },
  { 
      nome: "Calculadora Simples", 
      descricao_breve: "Calculadora online básica.",  
      descricao_completa: "Uma calculadora funcional com operações básicas (+, -, *, /) e interface responsiva.", 
      imagem: "link_para_imagem_calculadora.jpg", 
      linkSite: "https://seusite.com/calculadora", 
      linkGithub: "https://github.com/seuusuario/calculadora" 
  },
  { 
      nome: "Pedra, Papel e Te", 
      descricao_breve: "Versão digital do clássico jogo.",  
      descricao_completa: "Um jogo simples onde o usuário escolhe entre pedra, papel ou tesoura e joga contra o computador, que faz escolhas aleatórias.", 
      imagem: "link_para_imagem_jogo.jpg", 
      linkSite: "https://seusite.com/jogo", 
      linkGithub: "https://github.com/seuusuario/jogo" 
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
      img.src = `././imagens/producao.png`;

      const h3 = document.createElement("h3");
      h3.classList.add("detalhes");
      h3.textContent = "Detalhes";
      h3.addEventListener("click", () => mostrarEmb(indexProjeto)); // Passa o índice correto ao clicar

      const p = document.createElement("p");
      p.textContent = projetos[indexProjeto].descricao_breve;

      itemProjeto.appendChild(h2);
      itemProjeto.appendChild(img);
      itemProjeto.appendChild(p)
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
  imagem.src = projetos[numero_projeto].imagem; 
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



