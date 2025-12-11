class Estudante {
    _nome = ""
    _nota1 = ""
    _nota2 = ""
    _nota3 = ""

    getNome() {
        return this._nome
    }
    setNome(nome_) {
        this._nome = nome_
    }

    getNota1() {
        return this._nota1
    }
    setNota1(nota1_) {
        this._nota1 = nota1_
    }

    getNota2() {
        return this._nota2
    }
    setNota2(nota2_) {
        this._nota2 = nota2_
    }

    getNota3() {
        return this._nota3
    }
    setNota3(nota3_) {
        this._nota3 = nota3_
    }
}

module.exports = Estudante
