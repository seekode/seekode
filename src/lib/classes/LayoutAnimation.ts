export class LayoutAnimation {
	#canvas: HTMLCanvasElement;
	#drawArea: CanvasRenderingContext2D;
	#tid?: number;
	#width: number;
	#height: number;

	#particles: Particle[] = [];

	constructor(canvas: HTMLCanvasElement) {
		this.#canvas = canvas;
		this.#drawArea = this.#canvas.getContext('2d')!;
		window.addEventListener('resize', this.#deBouncer);

		this.#width = this.#canvas.width = window.innerWidth;
		this.#height = this.#canvas.height = window.innerHeight;
		const particleAmount = (this.#width * this.#height) / 30000;
		Particle.opts.particleAmount = particleAmount < 20 ? 20 : particleAmount;

		for (let i = 0; i < Particle.opts.particleAmount; i++) {
			this.#particles.push(new Particle(this.#drawArea, this.#width, this.#height));
		}
		this.#loop();
	}

	#deBouncer = () => {
		clearTimeout(this.#tid);
		this.#tid = setTimeout(() => {
			this.#resizeReset();
		}, 200);
	};

	#resizeReset = () => {
		this.#width = this.#canvas.width = window.innerWidth;
		this.#height = this.#canvas.height = window.innerHeight;
	};

	#loop = () => {
		this.#drawArea.clearRect(0, 0, this.#width, this.#height);
		for (let i = 0; i < this.#particles.length; i++) {
			this.#particles[i].update();
			this.#particles[i].draw();
		}
		for (let i = 0; i < this.#particles.length; i++) {
			this.#linkPoints(this.#particles[i], this.#particles);
		}
		window.requestAnimationFrame(this.#loop);
	};

	#linkPoints = (point1: Particle, hubs: Particle[]) => {
		const rgb = Particle.opts.rgb;
		for (let i = 0; i < hubs.length; i++) {
			const distance = this.#checkDistance(point1.x, point1.y, hubs[i].x, hubs[i].y);
			const opacity = 1 - distance / Particle.opts.linkRadius;
			if (opacity > 0) {
				this.#drawArea.lineWidth = 0.5;
				this.#drawArea.strokeStyle = `rgba(${rgb[0]}, ${rgb[1]}, ${rgb[2]}, ${opacity})`;
				this.#drawArea.beginPath();
				this.#drawArea.moveTo(point1.x, point1.y);
				this.#drawArea.lineTo(hubs[i].x, hubs[i].y);
				this.#drawArea.closePath();
				this.#drawArea.stroke();
			}
		}
	};

	#checkDistance = (x1: number, y1: number, x2: number, y2: number) => {
		return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
	};
}

export class Particle {
	static opts = {
		particleColor: '#22a791',
		lineColor: 'rgb(200,200,200)',
		rgb: [200, 200, 200],
		particleAmount: 50,
		defaultSpeed: 0.1,
		variantSpeed: 0.1,
		defaultRadius: 2,
		variantRadius: 2.5,
		linkRadius: 200
	};

	#drawArea: CanvasRenderingContext2D;
	#width: number;
	#height: number;

	x: number;
	y: number;
	#speed: number;
	#directionAngle: number;
	#color: string;
	#radius: number;
	#vector: { x: number; y: number };

	constructor(drawArea: CanvasRenderingContext2D, width: number, height: number) {
		this.#drawArea = drawArea;
		this.#width = width;
		this.#height = height;

		this.x = Math.random() * width;
		this.y = Math.random() * height;
		this.#speed = Particle.opts.defaultSpeed + Math.random() * Particle.opts.variantSpeed;
		this.#directionAngle = Math.floor(Math.random() * 360);
		this.#color = Particle.opts.particleColor;
		this.#radius = Particle.opts.defaultRadius + Math.random() * Particle.opts.variantRadius;
		this.#vector = {
			x: Math.cos(this.#directionAngle) * this.#speed,
			y: Math.sin(this.#directionAngle) * this.#speed
		};
	}

	draw() {
		this.#drawArea.beginPath();
		this.#drawArea.arc(this.x, this.y, this.#radius, 0, Math.PI * 2);
		this.#drawArea.closePath();
		this.#drawArea.fillStyle = this.#color;
		this.#drawArea.fill();
	}

	update() {
		this.#border();
		this.x += this.#vector.x;
		this.y += this.#vector.y;
	}

	#border() {
		if (this.x >= this.#width || this.x <= 0) {
			this.#vector.x *= -1;
		}
		if (this.y >= this.#height || this.y <= 0) {
			this.#vector.y *= -1;
		}
		if (this.x > this.#width) this.x = this.#width;
		if (this.y > this.#height) this.y = this.#height;
		if (this.x < 0) this.x = 0;
		if (this.y < 0) this.y = 0;
	}
}

export default { LayoutAnimation, Particle };
