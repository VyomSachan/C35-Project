class Food{
  constructor(){
    this.foodStock = 0;
    this.lastFed;
    this.image = loadImage("Milk.png");
  }

  display(){
    var x = 40, y = 40;
      
    imageMode(CENTER);
    
    if(this.foodStock != 0){
      for(var i = 0; i < this.foodStock; i++){
        if(i % 10 == 0){
          x = 40;
          y = y + 50;
        }
        
        image(this.image, x, y, 50, 50);
        x = x + 50;
      }
    }
  }

  getFoodStock(){
    return this.foodStock;
  }

  updateFoodStock(foodStock){
    this.foodStock = foodStock;
  }

  deductFood(){
    if(this.foodStock>0){
     this.foodStock = this.foodStock - 1;
    }
  }

  getFedTime(lastFed){
    this.lastFed = lastFed;
  }
}