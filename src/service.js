import { User } from "./bd.js";
import { app } from "./router.js";
// Referência ao botão
const meuBotao = document.getElementById("botao");

// Adicionando um ouvinte de evento para o evento de clique
meuBotao.addEventListener("click", onClickCreate);

// Função para criar um usuário
async function createUser(nome, senha, email, idade) {
  app.post('/', async (req, res) => {
  const { nome, senha, email, idade } = req.body; // Obtenha os dados do corpo da requisição
  try {
    await User.create({ nome, senha, email, idade });
    console.log('Usuário criado com sucesso');
    res.status(201).send('Usuário criado com sucesso'); // Envie uma resposta de sucesso
  } catch (error) {
    console.error('Erro ao criar usuário:', error);
    res.status(500).send('Erro ao criar usuário'); // Envie uma resposta de erro
  }
  });
}

// Função para ser chamada quando o botão for clicado
function onClickCreate() {
  const nome = document.getElementById("nome").value;
  const senha = document.getElementById("senha").value;
  const idade = document.getElementById("idade").value;
  const email = document.getElementById("email").value;
  createUser(nome, senha, email, idade);
}
