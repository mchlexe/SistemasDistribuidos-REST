const db = require('../config/db.config');
const Comentarios = db.comentarios;

// Listar comentários de um livro
exports.comentariosList = async(req, res) => {
  try {
    const comentarios = await Comentarios.findAll({
      where: {
        bookId: req.params.bookId
      }
    });
    res.json({ comentarios: comentarios });
  } catch(err) {
    res.send({ message: err.message });
  }
};

// Criar um comentário
exports.comentarioCreate = async(req, res) => {
  try {
    const comentario = await Comentarios.create(req.body);
    res.status(201).json({ comentario: comentario });
  } catch(err) {
    res.send({ message: err.message });
  }
};

// Apagar um contato
exports.comentarioDelete = async(req, res) => {
  try {
    const comentario = await Comentarios.destroy({
      where: {
        id: req.params.id
      }
    });
    res.status(204).send();
  } catch(err) {
    res.send({ message: err.message });
  }
};

