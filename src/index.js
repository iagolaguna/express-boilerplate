import app from './app';

app.listen(app.get('port'),() => console.log(`Servidor rodando na porta ${app.get('port')}`));
