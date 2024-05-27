import { Sequelize, DataTypes } from 'sequelize';

const sequelize = new Sequelize("cadastrouser", "root", null, {
    host: "localhost",
    dialect: "mysql",
    port: 3307
});

sequelize.authenticate().then(function(){
  console.log("Conectado com sucesso!")
}).catch((e) => {
  console.log("Falha ao se conectar " + e)
})

const User = sequelize.define('User', {
  nome: {
    type: DataTypes.STRING,
    allowNull: false
  },
  senha: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  idade: {
    type: DataTypes.INTEGER,
    allowNull: false,
    unique: true
  }
});
User.sync()
.then(() => console.log('Modelo sincronizado com o banco de dados'))
.catch(error => console.error('Erro ao sincronizar modelo:', error));

export {
	User
}




