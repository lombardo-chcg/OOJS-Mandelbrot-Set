// https://lombardo-chcg.github.io/languages/2017/06/11/the-Mandelbrot-set.html
var ComplexNumber = function(x, y) {
    this.a = x;
    this.b = y;
}

// param 'that' : instance of ComplexNumber
ComplexNumber.prototype.plus = function(that) {
    return new ComplexNumber(
        this.a + that.a,
        this.b + that.b
    );
}

// param 'that' : instance of ComplexNumber
ComplexNumber.prototype.times = function(that) {
    return new ComplexNumber(
        (this.a * that.a) - (this.b * that.b),
        (this.b * that.a) + (this.a * that.b)
    );
}

ComplexNumber.prototype.absoluteValue = function() {
    return Math.sqrt(
        (this.a ** this.a) + (this.b ** this.b)
    );
}


// source of formulas: https://en.wikipedia.org/wiki/Complex_number
