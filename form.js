class Form{
    constructor(){
        this.input =createInput("Name")
        this. button=createButton("play")
        this. greeting=createElement("h3")
    }
    hide(){
        this.input.hide();
        this.button.hide();
        this.greeting.hide();
    }
    display(){
        var title=createElement("h2")
        title.html("Car Racing Game")
        title.position(150,10)
       
        this.input.position(150,100)
       
       this. button.position(250,150)
        
      this.  button.mousePressed(()=>{
           this. input.hide()
         this.   button.hide()
            player. name=this.input.value()
            playerCount=playerCount+1;
            player.index=playerCount;
            player.update()
            player.updateCount(playerCount)
         this.   greeting.html("hello!"+player.name)
          this.  greeting.position(200,100)
        })

        
    }
}