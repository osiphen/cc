class Game {
    
}
Game.scene = null

Game.username = 'test';

console.log(Game.username);

// fetch username
// fetch('/user').then((resp) => resp.json()) // Transform the data into json
// .then(function(data) {
   // Game.username = data['username'];
  // })

if(Game.username === null){
    console.log('error, no username selected');
}
