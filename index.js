import express from 'express';
const app = express();
const port = process.env.PORT ?? 8080;

app.get('/', (req, res) => {
  res.send('Hello, Vikas Sharma - We have pushed your changes to the server successfully! ');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
