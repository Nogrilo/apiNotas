const mongoose = require('mongoose')

const Estudante = require('../models/Estudante')

class EstudanteDAO {

    static EstudanteSchema = new mongoose.Schema({
        nome: { type: String, required: true },
        nota1: { type: Number, required: true },
        nota2: { type: Number, required: true },
        nota3: { type: Number, required: true }
    })

    static EstudanteModel = mongoose.model('Estudante', EstudanteDAO.EstudanteSchema)
    static async cadastrar(req, res){
        try {
            var objetoEstudante = new Estudante();

            objetoEstudante.setNome(req.body.nome);
            objetoEstudante.setNota1(req.body.nota1);
            objetoEstudante.setNota2(req.body.nota2);
            objetoEstudante.setNota3(req.body.nota3);

            const documento = new EstudanteDAO.EstudanteModel({
                nome: objetoEstudante.getNome(),
                nota1: objetoEstudante.getNota1(),
                nota2: objetoEstudante.getNota2(),
                nota3: objetoEstudante.getNota3()
            })

            const resultado = await documento.save();
            res.status(201).json(resultado)
        }
        catch(error){
            res.status(400).json({error: "Erro ao cadastrar o estudante"});
        }
    }
    static async listar(req, res){
        try {
            const documento = await EstudanteDAO.EstudanteModel.find();
            res.json(documento);
        }
        catch(error){
            console.log(error)
        }
    }

    static async alterar(req,res){
        try {
            const nome_ = req.params.nome
            var objetoEstudante = new Estudante();

            objetoEstudante.setNome(req.body.nome),
            objetoEstudante.setNota1(req.body.nota1),
            objetoEstudante.setNota2(req.body.nota2),
            objetoEstudante.setNota3(req.body.nota3)

            const dadoatualizado = {
                nome: nome_,
                nota1:objetoEstudante.getnota1(),
                nota2:objetoEstudante.getnota2(),
                nota3:objetoEstudante.getnota3()
            }

            const resultado = await EstudanteDAO.EstudanteModel.findOneAndUpdate(
                {nome: nome_},
                dadoatualizado,
                {new: true}
            );
            if(resultado == null){
                return res.status(404),json({error: "Estudante nao encontrado"});
            }
            res.json(resultado)
        }
        catch(error) {
            console.log(error)
        }
    }
    static async excluir(req, res) {
        try{
            const nome_ = req.params.nome
            const resultado = await EstudanteDAO.EstudanteModel.findOneAndDelete({nome_});
            if(resultado == null){
                return res.status(404).json({error: "Estudante nao encontrado"})
            }
            res.json({mensagem: "Estudante excluido"})
        }
        catch(error){
            console.log(error)
            res.status(404).json({error: "Não foi possivel excluir"});

        }
    }
}

module.exports = EstudanteDAO;

