class CalcEngineering extends CalcStandart {

    constructor() {
        super();
    }
    sin() {
        console.log(1);
        if (this.expression == "undefined" || this.expression == "" || this.expression == null) {
            this.expression = this.expression;
        } else {
            this.expression = parseFloat(Math.sin(this.expression));
        }
        this.render();
    }
    cos() {
        if (this.expression == "undefined" || this.expression == 0 || this.expression == null) {
            this.expression = this.expression;
        } else {
            this.expression = parseFloat(Math.cos(this.expression));
        }
        this.render();
    }
    tan() {
        if (this.expression == "undefined" || this.expression == 0 || this.expression == null) {
            this.expression = this.expression;
        } else {
            this.expression = parseFloat(Math.tan(this.expression));
        }
        this.render();
    }
    ctan() {
        if (this.expression == "undefined" || this.expression == 0 || this.expression == null) {
            this.expression = this.expression;
        } else {
            this.expression = parseFloat(1 / Math.tan(this.expression));
        }
        this.render();
    }
    lg() {
        if (this.expression == "undefined" || this.expression == 0 || this.expression == null) {
            this.expression = this.expression;
        } else {
            this.expression = parseFloat(Math.log10(this.expression).toFixed(8));
        }
        this.render();
    }
    ln() {
        if (this.expression == "undefined" || this.expression == 0 || this.expression == null) {
            this.expression = this.expression;
        } else {
            this.expression = parseFloat(Math.log(this.expression).toFixed(8));
        }
        this.render();
    }
    sqrt() {
        if (this.expression == "undefined" || this.expression == 0 || this.expression == null) {
            this.expression = this.expression;
        } else {
            this.expression = parseFloat(Math.sqrt(this.expression));
        }
        this.render();
    }
    sqr() {
        if (this.expression == "undefined" || this.expression == 0 || this.expression == null) {
            this.expression = this.expression;
        } else {
            this.expression = parseFloat(Math.pow(this.expression, 2));
        }
        this.render();
    }
    minusOne() {
        if (this.expression == "undefined" || this.expression == 0 || this.expression == null) {
            this.expression = this.expression;
        } else {
            this.expression = parseFloat(Math.pow(this.expression, -1));
        }
        this.render();
    }
    pi() {
        this.expression += Math.PI.toFixed(8);
        this.render();
    }
    e() {
        this.expression += Math.E.toFixed(8);
        this.render();
    }
    lBracket() {
        this.expression += '(';
        this.render();
    }
    rBracket() {
        if (this.expression == "undefined" || this.expression == 0 || this.expression == null) {
            this.expression = this.expression;
        } else {
            this.expression += ')';
        }
        this.render();
    }
}
