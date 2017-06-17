var canvas = document.createElement("canvas");

canvas.width = 600;
canvas.height = 600;

document.getElementById("canvas-container").appendChild(canvas);

var ctx = canvas.getContext("2d");

var magFactor = 200;
var panX = 2;
var panY = 1.5;
var maxIterations = 85;
var numIterations = 0;

makeSet();
document.getElementById('counter').innerHTML += 'total iterations: ' + numIterations;

function makeSet() {
  for(var x = 0; x < canvas.width; x++) {
    for(var y = 0; y < canvas.height; y++) {
      var belongsToSet = isMandelbrotNum(x/magFactor - panX, y/magFactor - panY);

      if (isAxisPoint(x, y)) {
        ctx.fillStyle = '#696969';
        ctx.fillRect(x,y, 1,1);
      }
      else if (belongsToSet === 0) {
        ctx.fillStyle = '#000';
        ctx.fillRect(x,y, 1,1);
      } else {
        ctx.fillStyle = 'hsl(293, 100%, ' + belongsToSet + '%)';
        ctx.fillRect(x,y, 1,1);
      }
    }
  }
}

function isMandelbrotNum(x, y) {
  var z = new ComplexNumber(0, 0);
  var c = new ComplexNumber(x, y);

  for (var i = 0; i < maxIterations; i++) {
    z = z.times(z).plus(c);

    if (z.absoluteValue() > 2) {
      numIterations += i;
      return i/maxIterations * 100;
    }
  }

  numIterations += maxIterations;

  return 0;
}

function isAxisPoint(x,y) {
    return x === canvas.width / 2 || y === canvas.height / 2;
}
