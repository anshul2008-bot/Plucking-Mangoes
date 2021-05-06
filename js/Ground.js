class Ground {
    constructor(x, y, width, height) {
        var options = {
            isStatic: true,
            restitution: 0.9,
            friction: 1
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.height = height;
        this.width = width;
        World.add(world, this.body);
    }
    display() {
        var pos = this.body.position;
        rectMode(CENTER);
        fill("black");
        rect(pos.x, pos.y, this.width, this.height);
    }
}