class Calculadora {
    constructor(n1, n2){
        this.n1 = n1,
        this.n2 = n2,
        this.somar = () => this.n1 + this.n2
        this.subtracao = () => this.n1 - this.n2
        this.divisao = () => this.n1 / this.n2
        this.multi = () => this.n1 * this.n2
    }
}

let valores = new Calculadora (6, 5)
console.log(valores.multi())