const { adicionarTarefa, listarTarefas, concluirTarefa, removerTarefa } = require("./tarefas");
const [action, ...args] = process.argv.slice(2);

switch (action) {
  case "add":
    console.log(adicionarTarefa(args.join(" ")));
    break;
  case "list":
    console.log(listarTarefas());
    break;
  case "done":
    console.log(concluirTarefa(parseInt(args[0])));
    break;
  case "remove":
    console.log(removerTarefa(parseInt(args[0])));
    break;
  default:
    console.log("Comandos disponíveis:");
    console.log("add <tarefa>  - Adicionar uma nova tarefa");
    console.log("list          - Listar todas as tarefas");
    console.log("done <id>     - Marcar uma tarefa como concluída");
    console.log("remove <id>   - Remover uma tarefa");
    break;
}
