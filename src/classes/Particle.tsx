export default class Particle {
  public x: number;
  public y: number;
  public speedX: number;
  public speedY: number;
  private radius: number = 12;
  private color: string = "white";

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
    this.speedX = Math.random() * 3 - 1;
    this.speedY = Math.random() * 3 - 1;
  }

  draw(context: CanvasRenderingContext2D) {
    context.fillStyle = this.color;
    context.beginPath();
    const radius = 4;
    context.arc(this.x, this.y, radius, 0, Math.PI * 2);
    context.fill();
  }

  /**
   * Updates the position of the particle
   * @param context Canvas rendering context
   */
  update(context: CanvasRenderingContext2D) {
    // Right boundary collision detection
    if (this.x + this.speedX >= context.canvas.width) {
      this.x = context.canvas.width - this.speedX;
      this.speedX = -1 * this.speedX;
    }
    // Left boundary collision detection
    if (this.x - this.radius <= 0) {
      this.x = this.radius;
      this.speedX = -1 * this.speedX;
    }
    // Bottom boundary collision detection
    if (this.y + this.radius >= context.canvas.height) {
      this.y = context.canvas.height - this.radius;
      this.speedY = -1 * this.speedY;
    }
    // Top boundary collision detection
    if (this.y - this.radius <= 0) {
      this.y = this.radius;
      this.speedY = -1 * this.speedY;
    }

    // After collision detection, update position
    this.x += this.speedX;
    this.y += this.speedY;
  }
}
