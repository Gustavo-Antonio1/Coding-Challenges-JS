class Calculator {
    Number1
    Number2

    Sum() {
        console.log(this.Number1 + this.Number2)
    }

    Subtraction() {
        console.log(this.Number1 - this.Number2)
    }

    Multiplication() {
        console.log(this.Number1 * this.Number2)
    }

    Division() {
        console.log(this.Number1 / this.Number2)
    }

    Exponenciation() {
        console.log(this.Number1 ** this.Number2)
    }




}

let calculator = new Calculator()
calculator.Number1 = 50
calculator.Number2 = 10

calculator.Sum()
calculator.Subtraction()
calculator.Multiplication()
calculator.Division()
calculator.Exponenciation()

