
var Stars = function(args) {
    if (args === undefined) args = {};
    var _scope = this;

    this.stars = [];
    this.vel = args.vel || 1;
    this.radius = args.radius || 1;
    this.alpha = 1;
    this.starsCounter = 100; // 1000 estrelas
    
    var container = document.getElementById("msg-principal");
    var canvas = document.getElementById("animation-canvas");
    var context = canvas.getContext("2d");

    var center = {
        x: container.offsetWidth / 2,
        y: container.offsetHeight / 2
    };

    var animationFrameId; // ID da animação para poder cancelar depois
    var startTime = Date.now(); // Tempo de início da animação

    this.init = function() {
        this.resize();
        this.start();
        window.addEventListener("resize", this.resize.bind(this));

        // Definir um timer para parar a animação e remover o canvas após 3 segundos
        setTimeout(() => {
            this.stopAnimation();
        }, 3000); // 3000 milissegundos = 3 segundos
    }

    this.start = function() {
        this.stars = [];
        for (var i = 0; i < this.starsCounter; i++) {
          setTimeout(function(){
            _scope.stars.push(new Star());
          }, i * 3); // Reduzi o intervalo para criar as estrelas mais rapidamente
        }
    }

    this.resize = function() {
        canvas.width = container.offsetWidth;
        canvas.height = container.offsetHeight;
        center.x = canvas.width / 2;
        center.y = canvas.height / 2;
    }

    this.animate = function() {
        animationFrameId = window.requestAnimationFrame(this.animate.bind(this));
        this.render();
    }

    this.render = function() {
        context.fillStyle = 'rgba(1, 4, 35, 0.8)';
        context.fillRect(0, 0, canvas.width, canvas.height);
        context.strokeStyle = "white";

        // Reduzir o número de estrelas ao longo do tempo
        var elapsedTime = Date.now() - startTime;
        if (elapsedTime > 1000) { // Começa a reduzir as estrelas após 1 segundo
            var progress = (elapsedTime - 1000) / 2000; // Progresso da redução (últimos 2 segundos)
            var targetStars = Math.max(0, Math.floor(this.starsCounter * (1 - progress)));
            while (this.stars.length > targetStars) {
                this.stars.pop();
            }
        }

        for (var i = 0; i < this.stars.length; i++) this.stars[i].update();
    }

    this.stopAnimation = function() {
        cancelAnimationFrame(animationFrameId); // Para a animação
        canvas.remove(); // Remove o canvas da tela
        console.log("Animação finalizada e canvas removido após 3 segundos.");
    }

    var Star = function() {
        this.x = center.x;
        this.y = center.y;
        this.init = function() {
            this.radius = Math.random() * _scope.radius;
            this.x = center.x;
            this.y = center.y;
            this.lineWidth = 0;
            this.vel = {
                x: Math.random() * 10 - 5,
                y: Math.random() * 10 - 5
            }
        }
        this.update = function() {
            this.vel.x *= 1.05;
            this.vel.y *= 1.05;
            this.lineWidth += 0.035;
            this.x0 = this.x;
            this.y0 = this.y;
            this.x += this.vel.x;
            this.y += this.vel.y;
            this.draw();
            if (this.isDead()) this.init();
        }
        this.draw = function() {
            context.beginPath();
            context.moveTo(this.x0, this.y0);
            context.lineTo(this.x, this.y);
            context.lineWidth = this.lineWidth;
            context.stroke();
        }
        this.isDead = function() {
            return (this.x < 0 || this.x > canvas.width || this.y < 0 || this.y > canvas.height);
        }
        this.init();
        return this;
    }

    this.init();
    this.animate(); // Inicia a animação
    return this;
}

// Executar apenas quando o DOM estiver pronto
document.addEventListener("DOMContentLoaded", function() {
    new Stars();
});

document.addEventListener('DOMContentLoaded', function() {
    const elemento = document.getElementById('animacao-digitacao');
    const texto = 'Engenheiro de Software';
    let indexLetra = 0;
    let apagando = false;

    function animacao_escrever() {
        if (apagando) {
            elemento.textContent = texto.substring(0, indexLetra--) + '|';
            if (indexLetra < 0) {
                apagando = false;
                setTimeout(animacao_escrever, 100); // Pausa antes de escrever de novo
                return;
            }
        } else {
            elemento.textContent = texto.substring(0, indexLetra++) + '|';
            if (indexLetra > texto.length) {
                apagando = true;
                setTimeout(animacao_escrever, 10000); // Espera 10 segundos antes de apagar
                return;
            }
        }

        setTimeout(animacao_escrever, apagando ? 50 : 100); // Velocidade de escrita e apagamento
    }

    animacao_escrever();
});

document.addEventListener("scroll", function () {
    const texto = document.querySelector(".texto-animado");
    const posicao = texto.getBoundingClientRect().top;
    const alturaTela = window.innerHeight;
  
    if (posicao < alturaTela * 0.8) {
      texto.classList.add("aparecer");
      document.removeEventListener("scroll", arguments.callee); // Remove o evento após a primeira animação
    }
});
  