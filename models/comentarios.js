module.exports = (sequelize, Sequelize) => {
  const Comentarios = sequelize.define('comentarios', {
    id: {
      type: Sequelize.BIGINT,
      primaryKey: true,
      autoIncrement: true
    },
    bookId: {
      type: Sequelize.STRING,
      allowNull: false,
      allowEmpty: false
    },
    username: {

      type: Sequelize.STRING,
      allowNull: false,
      allowEmpty: false
    },
    texto: {
        type: Sequelize.STRING,
        allowNull: false,
        allowEmpty: false
    }
  });

  return Comentarios;
};
