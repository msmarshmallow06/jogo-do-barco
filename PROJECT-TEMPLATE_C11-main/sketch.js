 // Declaração de variáveis para o oceano e o navio
var sea, ship;

// Declaração de variáveis para as imagens do oceano e do navio
var seaImg, shipImg;

// Função preload() para carregar imagens antes do início do programa
function preload() {
  // Carrega a imagem do oceano
  seaImg = loadImage("sea.png");

  // Carrega a animação do navio com várias imagens
  shipImg1 = loadAnimation("ship-1.png", "ship-1.png", "ship-2.png", "ship-1.png");
}

// Função setup() é executada uma vez no início
function setup() {
  // Cria um canvas de 400x400 pixels
  createCanvas(400, 400);

  // Define a cor de fundo como azul
  background("blue");

  // Cria um sprite para o oceano
  sea = createSprite(400, 200);
  sea.addImage(seaImg); // Adiciona a imagem do oceano
  sea.velocityX = -5;   // Define a velocidade horizontal do oceano
  sea.scale = 0.3;      // Define a escala do oceano

  // Cria um sprite para o navio
  ship = createSprite(130, 200, 30, 30);
  ship.addAnimation("movingShip", shipImg1); // Adiciona a animação do navio
  ship.scale = 0.25;  // Define a escala do navio
}

// Função draw() é executada continuamente
function draw() {
  // Define o fundo como preto
  background(0);

  // Move o oceano para a esquerda (cria um efeito de movimento)
  sea.velocityX = -3;

  // Desenha os sprites na tela
  drawSprites();
}