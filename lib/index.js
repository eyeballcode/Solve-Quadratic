var solve = function solve(quadraticEqn) {
    if (!/^(-?\d*)([a-zA-Z])\^2 *[+-] *(\d*)\2 *([+-] *\d+) *= *0$/.test(quadraticEqn)) throw new TypeError('Quadratic equation must be in the form ax^2 + bx + c = 0');
    var parts = quadraticEqn.match(/^(-?\d*)([a-zA-Z])\^2 *([+-] *\d*)\2 *([+-] *\d+) *= *0$/),
        powerCoefficient = parts[1],
        name = parts[2],
        xCoefficient = parts[3].replace(/ /g, ''),
        number = parseInt(parts[4].replace(/ /g, ''));
    if (powerCoefficient === '') powerCoefficient = 1;
    else if (powerCoefficient === '-') powerCoefficient = -1;
    if (xCoefficient === '') xCoefficient = 1;
    else if (xCoefficient === '-') xCoefficient = -1;
    var out = {};
    out[name + '1'] = ((-1 * xCoefficient) + Math.sqrt((xCoefficient * xCoefficient) - 4 * powerCoefficient * number)) / (2 * powerCoefficient);
    out[name + '2'] = ((-1 * xCoefficient) - Math.sqrt((xCoefficient * xCoefficient) - 4 * powerCoefficient * number)) / (2 * powerCoefficient);
    if (isNaN(out[name+'1']) || isNaN(out[name+'2']))
        throw new TypeError('Encountered imaginary numbers! *Dreams*');
    out.varName = name;
    return out;
};

module.exports = solve;