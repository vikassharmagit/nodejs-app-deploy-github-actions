import express from 'express';
const app = express();
const port = process.env.PORT ?? 8080;

app.get('/', (req, res) => {
  res.send('Hello, Vikas Sharma - CI/CD deployment validated');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
