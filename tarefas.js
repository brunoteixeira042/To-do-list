const fs = require("fs");
const FILE_NAME = "tarefas_test.json"; // Arquivo separado para testes.

function carregarTarefas() {
  if (!fs.existsSync(FILE_NAME)) {
    return [];
  }
  const data = fs.readFileSync(FILE_NAME, "utf8");
  return JSON.parse(data || "[]");
}

function salvarTarefas(tarefas) {
  fs.writeFileSync(FILE_NAME, JSON.stringify(tarefas, null, 2));
}

function adicionarTarefa(tarefa) {
  const tarefas = carregarTarefas();
  const novaTarefa = { id: tarefas.length + 1, tarefa, concluida: false };
  tarefas.push(novaTarefa);
  salvarTarefas(tarefas);
  return novaTarefa;
}

function listarTarefas() {
  return carregarTarefas();
}

function concluirTarefa(id) {
  const tarefas = carregarTarefas();
  const tarefa = tarefas.find((t) => t.id === id);
  if (tarefa) {
    tarefa.concluida = true;
    salvarTarefas(tarefas);
    return tarefa;
  }
  return null;
}

function removerTarefa(id) {
  const tarefas = carregarTarefas();
  const novasTarefas = tarefas.filter((t) => t.id !== id);
  salvarTarefas(novasTarefas);
  return tarefas.length !== novasTarefas.length;
}

module.exports = {
  carregarTarefas,
  salvarTarefas,
  adicionarTarefa,
  listarTarefas,
  concluirTarefa,
  removerTarefa,
};
