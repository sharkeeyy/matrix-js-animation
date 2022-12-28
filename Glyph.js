class Glyph {
  constructor(x, y, fontSize, canvasHeight) {
    this.characters = `アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ`;
    this.x = x;
    this.y = y;
    this.fontSize = fontSize;
    this.text = '';
    this.canvasHeight = canvasHeight;
  }

  draw(context) {
    const index = Math.floor(Math.random() * this.characters.length);
    this.text = this.characters[index];
    context.fillStyle = '#0aff0a';
    context.fillText(this.text, this.x * this.fontSize, this.y * this.fontSize);

    const isReachedScreenBottom = this.y * this.fontSize > this.canvasHeight;
    const isReturning = Math.random() > 0.98;

    if (isReachedScreenBottom && isReturning) {
      this.y = 0;
    } else {
      this.y += 1;
    }
  }
}