class Form{
    constructor(){
        this.title=createElement('h1');
        this.input=createInput('').attribute('placeholder', 'enter your name');
        this.playButton=createButton('play');
        this.greeting=createElement('h2');
    }
    SetElementPosition(){
      this.title.position(120,160);
      this.input.position(width/2-110, height/2-80);
      this.playButton.position(width/2-80, height/2-20);
      this.greeting.position(width/2-300, height/2-100);
    }
    HandleMousePressed(){
        this.playButton.mousePressed(()=>{
            this.input.hide();
            this.playButton.hide();
            var message=`hello ${this.input.value()} </br> wait for another player to join...`
            this.greeting.html(message);
            player.name=this.input.value();
            player.index++
            player.addPlayer();
        })

    }
    display(){
        this.title.html('multiplayer car racing game');
        this.SetElementPosition();
        this.HandleMousePressed();
    }
}