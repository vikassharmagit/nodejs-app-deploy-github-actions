import express from 'express';
const app = express();
const port = process.env.PORT ?? 8080;

app.get('/', (req, res) => {
  res.send('Hello, from the docker world! This is a demo project for GitHub Actions with Docker.');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});