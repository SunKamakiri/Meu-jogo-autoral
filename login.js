class Login{
    constructor(){
        this.title = createElement("h1","Guardião das Terras-Mágicas");
        this.button = createButton("Jogar");
        this.input = createInput("").attribute("placeHolder","Digite o nome do seu elfo");
    }

    hide(){
        this.title.hide();
        this.button.hide();
        this.input.hide();
    }

    setElementsPos(){
        this.input.position(width/2 -110, height/2 -80);
        this.button.position(width/2 -90, height/2 -20);
        this.title.position(width/2 -90, height/2 -200);
    }

    setStyle(){

    }

    handleMousePressed(){
        this.button.mousePressed(()=>{
            this.button.hide();
            this.input.hide();
            player.name = this.input.value();
        })
    }

    display(){
        this.setElementsPos();
        this.handleMousePressed();
    }
}