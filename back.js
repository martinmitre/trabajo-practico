const express = require('express');
const cors = require('cors');
const { guardarTarea } = require('./database.JS');

const app = express();
app.use(express.json());
app.use(cors());

app.post('/agregar-tarea', (req, res) => {
    const { tarea } = req.body;
    if (!tarea || tarea.trim() === '') {
        return res.status(400).json({ mensaje: 'La tarea no puede estar vacía' });
    }
    const mensaje = guardarTarea(tarea);
    res.json({ mensaje });
});

app.listen(3000, () => console.log('Backend corriendo en http://localhost:3000'));
