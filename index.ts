import express, { Request, Response } from 'express';
import dotenv from 'dotenv';

// Инициализация dotenv
dotenv.config();

// Получение порта из переменных окружения
const PORT = process.env.PORT || 3000;

// Создание приложения Express
const app = express();

// Middleware для работы с JSON
app.use(express.json());

// Маршрут GET-запроса
app.get('/', (req: Request, res: Response) => {
  res.status(200).json({ message: 'Это вместо второй лабы' });
});

// Типизация POST-запроса
interface PostData {
  last_name: string;
  value: number;
}

// Маршрут POST-запроса
app.post('/data', (req: Request<{}, {}, PostData>, res: Response) => {
  const { last_name, value } = req.body;

  if (!last_name || !value) {
    return res.status(400).json({ error: 'Пожалуйста, укажите фамилию и оценку.' });
  }

  res.status(200).json({ message: `Привет у ${last_name} стоит ${value}!` });
});

// Запуск сервера
app.listen(PORT, () => {
  console.log(`Сервер запущен на порту ${PORT}`);
});
