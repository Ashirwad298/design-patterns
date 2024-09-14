class ShoeBuilder {
  
  setColor (color) {
    this.color = color;
    return this;
  }

  setMaterial (material) {
    this.material = material;
    return this;
  }

  setType( type) {
    this.type = type;
    return this;
  }

  showShoes(){
    console.log(this.color + ' ' + this.type + ' ' + this.material) ;
    return this;
  }

}

let shoe = new ShoeBuilder();
shoe
.setColor('black')
.setMaterial('eva')
.setType('sports')
.showShoes();

