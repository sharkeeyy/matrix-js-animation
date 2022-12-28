class Screen {
  constructor(canvasWidth, canvasHeight, fontSize) {
    this.canvasWidth = canvasWidth;
    this.canvasHeight = canvasHeight;
    this.fontSize = fontSize;
    this.columns = this.canvasWidth / this.fontSize;
    this.symbols = [];
    this.#initialize();
  }

  #initialize() {
    for (let i = 0; i < this.columns; i++) {
      this.symbols[i] = new Glyph(i, 0, this.fontSize, this.canvasHeight);
    }
  }

  resize(width, height) {
    this.canvasWidth = width;
    this.canvasHeight = height;
    this.columns = this.canvasWidth / this.fontSize;
    this.symbols = [];
    this.#initialize();
  }
}