const tareasDB = [];

function guardarTarea(tarea) {
    tareasDB.push(tarea);
    return `Tarea guardada: ${tarea}`;
}

module.exports = { guardarTarea };
