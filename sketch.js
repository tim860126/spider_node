let nodes = [];
let astro;
function setup() {
  createCanvas(3000, 3000);
  // noCursor();
  astro = new Astro(width/2, height/2)
  
  for(let i = 0; i < 10000; i++){
    nodes.push(new Node(random(width), random(height)))
  }
  
}

function draw() {
  background(51);
  
  astro.update()
  astro.show()
  
  for(let i = 0; i < nodes.length; i++){
    nodes[i].update();
    nodes[i].show();

  }
  
  // print(sin(nodes[0].angle) * 10)
  
  // noLoop()
  
}