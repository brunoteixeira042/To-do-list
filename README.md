
# **Lista de Tarefas - Node.js**

## **Descrição**
Este projeto implementa uma aplicação simples de lista de tarefas usando **Node.js**. Ele permite adicionar, listar, concluir e remover tarefas, com as informações sendo armazenadas em um arquivo JSON. Também contém testes automatizados utilizando **Jest**.

---

## **Requisitos**
Antes de começar, verifique se você tem o seguinte instalado:

- **Node.js** (v14 ou superior)
- **npm** (gerenciador de pacotes do Node.js)
- **Jest** (para testes automatizados)

---

## **Instalação**

1. **Clone o repositório**:
   ```bash
   git clone <url-do-repositorio>
   cd <diretorio-do-repositorio>
   ```

2. **Instale as dependências**:
   No diretório do projeto, execute:
   ```bash
   npm install
   ```

---

## **Funcionalidades**

### **Adicionar uma tarefa**
Para adicionar uma nova tarefa à lista, use o comando:

```bash
node tarefas.js add "Descrição da tarefa"
```

**Exemplo**:
```bash
node tarefas.js add "Estudar Node.js"
```

### **Listar tarefas**
Para listar todas as tarefas, execute o comando:

```bash
node tarefas.js list
```

**Exemplo**:
```bash
node tarefas.js list
```

### **Marcar uma tarefa como concluída**
Para marcar uma tarefa como concluída, use o comando:

```bash
node tarefas.js done <id-da-tarefa>
```

**Exemplo**:
```bash
node tarefas.js done 1
```

### **Remover uma tarefa**
Para remover uma tarefa, use o comando:

```bash
node tarefas.js remove <id-da-tarefa>
```

**Exemplo**:
```bash
node tarefas.js remove 1
```

---

## **Testes**

Este projeto utiliza **Jest** para testes automatizados. Para rodar os testes, execute o seguinte comando:

```bash
npm test
```

### **Comandos de Testes**
Os testes verificam as seguintes funcionalidades:

- **Adicionar uma tarefa**: Confirma que a tarefa foi adicionada corretamente ao arquivo JSON.
- **Listar tarefas**: Verifica se todas as tarefas são listadas corretamente.
- **Concluir uma tarefa**: Marca a tarefa como concluída e atualiza o estado.
- **Remover uma tarefa**: Remove uma tarefa da lista com base no ID fornecido.

---

## **Estrutura do Projeto**

A estrutura do diretório é a seguinte:

```
/tarefas
  |- tarefas.js         # Lógica principal da lista de tarefas
  |- tarefas.test.js    # Testes automatizados com Jest
  |- tarefas.json       # Arquivo de armazenamento das tarefas (para testes: tarefas_test.json)
  |- app.js             # Script de interface para comandos no terminal
  |- package.json       # Dependências do projeto e configuração do Jest
```

---

## **Exemplo de Fluxo de Trabalho**

### **Adicionar Tarefas**
1. Adicione uma tarefa:
   ```bash
   node tarefas.js add "Estudar Node.js"
   ```

2. Verifique a lista de tarefas:
   ```bash
   node tarefas.js list
   ```

### **Concluir Tarefas**
1. Conclua uma tarefa:
   ```bash
   node tarefas.js done 1
   ```

2. Liste novamente as tarefas para verificar a conclusão:
   ```bash
   node tarefas.js list
   ```

### **Remover Tarefas**
1. Remova uma tarefa:
   ```bash
   node tarefas.js remove 1
   ```

2. Verifique a lista de tarefas:
   ```bash
   node tarefas.js list
   ```

---

