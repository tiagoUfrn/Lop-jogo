var nivel = 1;
var escolhaFase = 0;
var pontos = 0;

var corDaFonte = '#615fff';
var corDasBordas = '#9E4299'

var deslocamentoBotaoMenu = 70
var xMinBotao = 155
var larguraBotao = 135
var xMaxBotao = xMinBotao + larguraBotao
var alturaBotao = 60

var yMinBotao3 = 160 
var yMaxBotao3 = yMinBotao3 + alturaBotao

var yMinBotao4 = 396    
var yMaxBotao4 = yMinBotao4 + alturaBotao + larguraBotao 



var yMinBotao1 = yMinBotao3 + deslocamentoBotaoMenu
var yMaxBotao1 = yMinBotao1 + alturaBotao

var yMinBotao2 = yMinBotao3 + 2 * deslocamentoBotaoMenu
var yMaxBotao2 = yMinBotao2 + alturaBotao

//imagem dos menus
var imgcred,imgmenu,imginst,imf, gameo;

var fundoMenu;

var fontDanc;

var tela = 0;
function acabouJogo() {
    background(gameo);

    textAlign(LEFT);
    text("Game Over!!", 160, 199);
    textAlign(CENTER);
    menuBotao("voltar", yMinBotao4, yMaxBotao4, -0);
    
}

function mouseClicked() {
    if (tela == 3 && nivel == 1) {
        if (escolhaFase == 1 || escolhaFase == 2) {
            tela = 4;
        }
        if (escolhaFase == 3) {
            nivel = 2;
        }
    }
    else {
        if (tela == 3 && nivel == 2) {
            if (escolhaFase == 2 || escolhaFase == 3) {
                tela = 4;
            }
            if (escolhaFase == 1) {
                nivel = 3;
            }
        }
    }

}

function opcaoBotao(xMin, yMin, largura, altura, opcao) {
    // Botão 2 
    yMax = yMin + altura
    xMax = xMin + largura
    if (mouseX > xMin && mouseX < xMax && mouseY > yMin && mouseY < yMax) {
        fill(250);
        escolhaFase = opcao;

    }
    else {
        noFill();
    }
    stroke(corDasBordas);
    rect(xMin, yMin, largura, altura, 15);
    textSize(26);
    fill(0);

}

function triangulo(x, y, largura, altura, cor, posicaoNormal = true) {

    noStroke();
    fill(cor)
    if (posicaoNormal) {
        triangle(x, y + altura, x + largura / 2, y, x + largura, y + altura)
    }
    else {
        triangle(x, y, x + largura / 2, y + altura, x + largura, y)
    }

}

function fase3() {
    background(gameo);
    textSize(28);
    fill(10);
    textAlign(LEFT);
    text("Fase 3", 190, 199);
    textSize(20);
    text("Ainda em desenvolvimento ...", 120, 233);
    textAlign(CENTER);
    menuBotao("voltar", yMinBotao4, yMaxBotao4, 1);


}

function fase2() {
    background(imf);
    textSize(28);
    fill(10);
    textAlign(LEFT);
    text("", 20, 50);

    textSize(44);
    fill(50);
    text('40', 40, 150);

    text('37', 140, 150);

    text('34', 240, 150);

    text('?', 340, 150);

    escolhaFase = 0;
    opcaoBotao(100, 250, 80, 80, 1);
    textSize(44);
    text('31', 115, 305);

    opcaoBotao(200, 250, 80, 80, 2);
    textSize(44);
    text('19', 215, 305);

    opcaoBotao(300, 250, 80, 80, 3);
    textSize(44);
    text('17', 315, 305);

}



function fase1() {
    background(imf);
    textSize(28);
    fill(10);
    textAlign(LEFT);
    text("", 20, 50);

    var alturaTriangulo = 50;
    var larguraTriangulo = 50;
    var xTriangulo = 40;
    var yTriangulo = 100;
    var corAuzul = '#0A9'
    var corRosa = '#C09'
    var corLaranja = '#FA9'
    noStroke();
    fill(corAuzul)
    triangle(xTriangulo, yTriangulo, xTriangulo + larguraTriangulo / 2, yTriangulo + alturaTriangulo, xTriangulo + larguraTriangulo, yTriangulo)
    fill(corLaranja)
    ellipse(yTriangulo + 35, 125, 50, 50)
    var xTriangulo2 = yTriangulo + 80;
    fill(10);
    triangle(xTriangulo2, yTriangulo + alturaTriangulo, xTriangulo2 + larguraTriangulo / 2, yTriangulo, xTriangulo2 + larguraTriangulo, yTriangulo + alturaTriangulo)
    fill(corRosa)
    ellipse(xTriangulo + 230, 125, 50, 50)

    xTriangulo = 40;
    yTriangulo = 100;

    triangulo(310, yTriangulo, larguraTriangulo, alturaTriangulo, '#0A9', false)

    fill(10);
    escolhaFase = 0;
    opcaoBotao(100, 250, 80, 80, 1)
    triangulo(115, 265, larguraTriangulo, alturaTriangulo, 10)

    opcaoBotao(200, 250, 80, 80, 2)
    fill(corRosa)
    ellipse(240, 290, 50, 50)

    opcaoBotao(300, 250, 80, 80, 3)
    fill(corLaranja)
    ellipse(340, 290, 50, 50)


}

function menuBotao(texto, yMin, yMax, opcao) {

    if (mouseX > xMinBotao && mouseX < xMaxBotao && mouseY > yMin && mouseY < yMax) {
        fill('#fff0f3');
        if (mouseIsPressed) {
            tela = opcao;
        }
    }
    else {
        fill('#FEC5E5');
    }
    stroke(corDasBordas);
    rect(xMinBotao, yMin, larguraBotao, alturaBotao, 15);
    noStroke();
    textSize(26);
    fill(corDaFonte);
    text(texto, xMinBotao, yMin + 20, larguraBotao);
}

function telaMenu() {
    background(imgmenu);

    textSize(32);
    fill(corDaFonte);
    textFont(fontDanc)
    textAlign(CENTER);
    text("", 100, 50, 300);

    textFont('cursive');
    menuBotao("Jogar", yMinBotao3, yMaxBotao3, 3);
    menuBotao("Instruções", yMinBotao1, yMaxBotao1, 1);
    menuBotao("Créditos", yMinBotao2, yMaxBotao2, 2);
}

function telaInstrucoes() {
    background(imginst);
    textAlign(CENTER);
    menuBotao("voltar", yMinBotao4, yMaxBotao4, -0);

 
}

function telaCreditos() {
    background(imgcred);
    menuBotao("voltar", yMinBotao4, yMaxBotao4, 1);
}
function setup() {
  // put setup code here
  createCanvas(500, 500);
}
function preload() {

    imginst= loadImage("tela instru.png");
    imgmenu = loadImage("menu.png");
    imf = loadImage("tfin.png");
    gameo = loadImage("gameo.png");
    imgcred = loadImage("tela creditos.png");
    fontDanc = loadFont("DancingScript-VariableFont_wght.ttf")
    
}
function draw() {
  // put drawing code here
  background(imgmenu);
if (tela == 0) {
        telaMenu();
    }
    if (tela == 1) {
        telaInstrucoes();
    }
    if (tela == 2) {
        telaCreditos();
    }
    if (tela == 3) {
        if (nivel == 1) {
            fase1();
        }
        if (nivel == 2) {
            fase2();
        }
        if (nivel == 3) {
            fase3();
        }
    }
    if (tela == 4) {
        acabouJogo()
    }
}

