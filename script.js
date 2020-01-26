const particles = [];

function setup() {
    // console.log('setup')
    createCanvas(window.innerWidth, window.innerHeight);
    const particlesLength = Math.floor(window.innerWidth / 3);

    for (let i = 0; i < particlesLength; i++) {
        particles.push(new Particle());
    }
}

function draw() {
    // // console.log('draw')
    // if (mouseIsPressed) {
    //     console.log(mouseX, mouseY)
    //     fill(0);
    // } else {
    //     fill(100);
    // }

    // circle(mouseX, mouseY, 80);
    background(255, 255, 255)
    particles.forEach((p, index) => {
        p.createPartical();
        p.updateParticalPosition();
        p.checkParticles(particles.slice(index));
    });
}

class Particle {
    constructor() {
        this.position = createVector(random(width), random(width));
        this.w = 7;
        this.h = 7;
        //Velocity
        this.vel = createVector(random(-5, 5), random(-5, 5))

    }
    //Draw Single Particle
    createPartical() {
        noStroke();
        fill('rgba(14, 230, 234, 0.5)');
        rect(this.position.x, this.position.y, this.w, this.h);
    }

    //Update partical movement by adding velocity
    updateParticalPosition() {
        this.position.add(this.vel)
        this.edges();
    }

    //Detect Edges
    edges() {
        if (this.position.x < 0 || this.position.x > width) {
            this.vel.x *= -1;
        }
        if (this.position.y < 0 || this.position.y > height) {
            this.vel.y *= -1;
        }
    }

    //Conncet Particles
    checkParticles(particles) {
        particles.forEach(particle => {
            const distance = dist(this.position.x, this.position.y, particle.position.x, particle.position.y);
            if (distance < 200) {
                stroke('rgba(107, 112, 112,0.1)');
                line(this.position.x, this.position.y, particle.position.x, particle.position.y);
            }
        })
    }




}