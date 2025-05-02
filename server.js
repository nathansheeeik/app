import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import pedidoRoutes from './routes/pedidos.js';
import pagamentoRoutes from './routes/pagamento.js';

dotenv.config();
const app = express();

app.use(express.json());

app.use('/api/pedidos', pedidoRoutes);
app.use('/api/pagamento', pagamentoRoutes);

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  app.listen(PORT, () => console.log(`API rodando na porta ${PORT}`));
}).catch(err => console.error(err));