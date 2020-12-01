// Your code here
class Polygon {
    constructor(sides) {
        this.sides = sides  
    }
    get countSides() {
        return this.sides.length
    }

    get perimeter() {
        let sum = 0
        for(const side of this.sides) {
            sum += side
        }
        return sum
    }
}

class Triangle extends Polygon {
    get isValid() {
        if (this.countSides === 3) {
            let triSides = []
            for(const side of this.sides) {
                triSides.push(side)
            }

            return ( (triSides[0] + triSides[1] > triSides[2]) && (triSides[1] + triSides[2] > triSides[0]) && (triSides[2] + triSides[0] > triSides[1]))
        }
    }
}

class Square extends Polygon {
    get isValid() {
        if (this.countSides === 4) {
            let edges = []
            for(const side of this.sides) {
                edges.push(side)
            }

            return ((edges[0] === edges[1]) && (edges[1] === edges[2]) && (edges[2] === edges[3]))
        }
    }

    get area() {
        return this.sides[0] * this.sides[0]
    }
}