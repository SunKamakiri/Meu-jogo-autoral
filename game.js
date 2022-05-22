class Game{
    constructor(){
        this.fraseHistoria = createElement("h4");  
        this.buttonHistoria = createButton("Começar a aventura!")
       
    }

    start(){
        login = new Login();
        login.display();

        this.buttonHistoria.hide();
        player = new Player();

        spritePlayer =  createSprite(565,515,20,50);
    }

    historia(){
        login.hide();
        this.fraseHistoria.position(width/2 -90, height/2 -20)
        var conteudoFrase = `O Elfo ${login.input.value()}, 
        sempre sonhou em se tornar um mago, </br>
        com anos de pesquisa ele descobriu que para isso ele deve ir </br>
         até o Guardião das Terras-Mágicas que o concede a “licença” </br>
         para ser um mago apenas se ele for derrotado!`
         this.fraseHistoria.html(conteudoFrase);
        this.buttonHistoria.show();
        this.buttonHistoria.position(width/2 -90, height/2 + 80)
        this.handleMousePressedHistoria();
    }

    handleMousePressedHistoria(){
        this.buttonHistoria.mousePressed(()=>{
            this.buttonHistoria.hide();
            this.fraseHistoria.hide();
            gameState = 2;
        })
    }

    play(){

        this.handlePlayerControls();
    }

    handlePlayerControls(){
        
    }
}