const fs = require("fs");
const { adicionarTarefa, listarTarefas, concluirTarefa, removerTarefa } = require("./tarefas");

// Limpar o ambiente de teste antes e depois
beforeEach(() => {
  fs.writeFileSync("tarefas_test.json", JSON.stringify([]));
});

afterAll(() => {
  fs.unlinkSync("tarefas_test.json");
});

describe("Gerenciador de Tarefas", () => {
  test("Adiciona uma tarefa", () => {
    const tarefa = adicionarTarefa("Estudar Node.js");
    expect(tarefa).toEqual({ id: 1, tarefa: "Estudar Node.js", concluida: false });
    const tarefas = listarTarefas();
    expect(tarefas).toHaveLength(1);
  });

  test("Lista tarefas", () => {
    adicionarTarefa("Estudar Node.js");
    adicionarTarefa("Revisar projeto");
    const tarefas = listarTarefas();
    expect(tarefas).toHaveLength(2);
    expect(tarefas[0].tarefa).toBe("Estudar Node.js");
  });

  test("Conclui uma tarefa", () => {
    adicionarTarefa("Estudar Node.js");
    const tarefaConcluida = concluirTarefa(1);
    expect(tarefaConcluida.concluida).toBe(true);
    const tarefas = listarTarefas();
    expect(tarefas[0].concluida).toBe(true);
  });

  test("Remove uma tarefa", () => {
    adicionarTarefa("Estudar Node.js");
    adicionarTarefa("Revisar projeto");
    const resultado = removerTarefa(1);
    expect(resultado).toBe(true);
    const tarefas = listarTarefas();
    expect(tarefas).toHaveLength(1);
    expect(tarefas[0].id).toBe(2);
  });

  test("Remove uma tarefa inexistente", () => {
    adicionarTarefa("Estudar Node.js");
    const resultado = removerTarefa(99);
    expect(resultado).toBe(false);
    const tarefas = listarTarefas();
    expect(tarefas).toHaveLength(1);
  });
});
