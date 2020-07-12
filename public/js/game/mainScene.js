class Main extends Phaser.Scene {

    constructor ()
    {
        super('GameScene');
        Game.scene = this

        this.zoom = true // if want to set an ability later to lock zoom
    }
    preload ()
    {   
        document.addEventListener('contextmenu', event => event.preventDefault());

        // set-up our background
        this.cameras.main.setBackgroundColor('#000')
        this.load.image('map', '../../../assets/game/map.jpg');
        
        // set the boundaries of the map
        this.physics.world.setBounds(0, 0, 5400, 2700, true, true, true, true);
        this.cameras.main.setBounds(0, 0, 5400, 2700);

        // load our assets
        this.load.image('colony', '../../../assets/game/colony.png');
        
    }
    
    create(){
        // add our map
        this.add.image(0, 0, 'map').setOrigin(0,0);

        // listen for mouse wheel interaction to allow zoom functionality
        window.addEventListener('wheel', (e) => {
            const dir = Math.sign(e.deltaY)
            if(this.zoom){
                let curZoom = this.cameras.main.zoom - dir / 10
                if(curZoom > 2.5) curZoom = 2.5
                if(curZoom < 0.35) curZoom = 0.35
                this.cameras.main.zoom = curZoom

            }else{
                // if no zoom

            }
        })
        this.camera = this.cameras.main

    }

    update(){
        this.scale.resize(window.outerWidth, window.innerHeight)

        // click and drag across the map
        if (this.game.input.activePointer.isDown) {
            if (this.game.origDragPoint) {
              // move the camera by the amount the mouse has moved since last update
              this.cameras.main.scrollX +=
                this.game.origDragPoint.x - this.game.input.activePointer.position.x;
              this.cameras.main.scrollY +=
                this.game.origDragPoint.y - this.game.input.activePointer.position.y;
            } // set new drag origin to current position
            this.game.origDragPoint = this.game.input.activePointer.position.clone();
          } else {
            this.game.origDragPoint = null;
          }

          // add block on touch
          this.input.on('pointerdown', function(pointer){
            var touchX = pointer.x;
            var touchY = pointer.y;

            
         });
    }
}
