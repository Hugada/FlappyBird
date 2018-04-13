var canvas = document.getElementById("mainGame");
var ctx = canvas.getContext('2d');


//classes
function Board(){
    this.x = 0;
    this.y = 0;
    this.width = canvas.width;
    this.height = canvas.height;
    this.img = new Image();
    this.img.src = "http://ellisonleao.github.io/clumsy-bird/data/img/bg.png"
    this.score = 0;

    this.img.onload = function(){
        this.draw();
    }.bind(this);

    this.move = function(){
        this.x--;
        if(this.x < -canvas.width) this.x = 0;
    }

    this.draw = function(){
        this.move();
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
        ctx.drawImage(this.img, this.x + canvas.width, this.y, this.width, this.height)
        ctx.font = "50px Avenir";
        ctx.fillStyle = "peru";
        ctx.fillText(this.score, this.width/2,this.y+40);
    }
}

function Flappy(){
    this.x = 150;
    this.y = 150;
    this.width = 50;
    this.height = 50;
    this.img = new Image();
    this.img.src = "https://apptractor.ru/wp-content/uploads/2014/05/tappy-Chiken.png"
    this.img.onload = function(){
        this.draw();
    }.bind(this)
    this.draw = function(){
        this.y += 1;
        ctx.drawImage(this.img,this.x,this.y,this.width,this.height);
    }
    this.move = function(){
        this.y -= 50;
    }

}

//declarations
var tablero = new Board();
var pajaro = new Flappy();
var intervalo;
var frames = 0;


//main functions
function update(){
    frames++;
    console.log(frames);
    ctx.clearRect(0,0, canvas.width, canvas.height);
    tablero.draw();
    pajaro.draw();

}
function start(){
    if(intervalo > 0) return;
    //extras que necesitemos inicializar
    intervalo = setInterval(function(){
        update();
    }, 1000/60);
}

function stop(){
    clearInterval(intervalo)
    intervalo = 0;
}



//listeners
//comienza el juego
document.getElementById('startButton').addEventListener("click", function(){
    start();
})
document.getElementById('pauseButton').addEventListener("click", function(){
    stop();
})
addEventListener('keydown', function(e){
    if(e.keyCode === 32){
        pajaro.move();
    }
});
