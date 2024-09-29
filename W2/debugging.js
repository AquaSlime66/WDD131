const pi = 3.14;
let radius = 3;
let area = 0;
area = areaOfCircle(radius);
radius = 4;
area = radius * radius * pi;

function areaOfCircle(r) {
    return r * r * pi;
}

area = areaOfCircle(3);
console.log(area);