import express from 'express';
import cors from "cors";

const app = express();
export{ app }

app.use(cors())

app.use(express.static('public'));

app.listen(3000, () => {
  console.log('Servidor iniciado na porta 3000');
});
