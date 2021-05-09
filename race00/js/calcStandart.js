class CalcStandart extends Calc {
  constructor() {
    super();
  }
  clear() {
    if (this.expression) {
      this.expression = "";
    }

    this.render();
  }
  zero() {
      this.expression = 0
    this.render();
  }
  add() {}
}
