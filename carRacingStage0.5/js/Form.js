class Form {
  constructor() {
    
  }

  display(){
    var title = createElement('h2')
    title.html("Car Racing Game");
    title.position(130, 0);
    
    var textbox = createInput("Name");
    var button = createButton('Play');
    
    textbox.position(130, 160);
    button.position(250, 200);

  button.mousePressed(function(){
    textbox.hide();    //hiding the textbox and button once the button is clicked
    button.hide();

    var name = textbox.value(); //storing the value of textbox in variable name
    
    playerCount+=1;
    player.update(name)
    player.updateCount(playerCount);
    var greeting = createElement('h3');
    greeting.html("Hello " + name )
    greeting.position(130, 160)
  });

  }
}
