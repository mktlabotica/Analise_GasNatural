
# ⛽ Analisador de Preços de Gás Natural no Brasil

## 📖 Descrição do Projeto

Este é um projeto de **ETL (Extract, Transform, Load)** e análise de dados desenvolvido em **Java**, com foco em demonstrar conceitos de **Programação Orientada a Objetos (POO)** e manipulação de grandes volumes de dados.

A aplicação lê dados públicos da Agência Nacional do Petróleo (ANP) sobre os preços de gás natural, realiza um processo de limpeza e tratamento, carrega os dados em um banco de dados **MySQL** e, por fim, oferece um menu interativo de console para que o usuário possa realizar análises sobre as informações armazenadas.

Este projeto serve como um case prático de engenharia e análise de dados, mostrando um fluxo de trabalho completo desde o dado bruto até a geração de insights.

---

## ✨ Funcionalidades

- **ETL Robusto:** Lê arquivos `.csv` complexos, tratando problemas comuns como inconsistências de formato, valores nulos ("NA") e erros de codificação de caracteres.  
- **Persistência em Banco de Dados:** Armazena os dados limpos em um banco de dados relacional MySQL.  
- **Arquitetura em Camadas:** O código é organizado seguindo os padrões de mercado (Model, DAO, Service, App) para garantir a manutenibilidade e clareza.  
- **Análise de Dados Interativa:** Oferece um menu de console onde o usuário pode executar diferentes tipos de consultas, como:
  - Cálculo do preço médio geral.  
  - Busca dos 10 registros mais baratos por tipo de mercado.  
  - Visualização da evolução de preços ao longo do tempo.  

---

## 🛠️ Tecnologias Utilizadas

- **Linguagem:** Java 24  
- **Build & Dependências:** Maven  
- **Banco de Dados:** MySQL  
- **Conector:** MySQL Connector/J (via JDBC)  
- **Conceitos de POO:** Encapsulamento, Separação de Responsabilidades.  

---

## 🚀 Como Executar o Projeto

### Pré-requisitos

- Java JDK 24 (ou superior)  
- Apache Maven  
- Servidor MySQL  

---

### 1. Preparar o Banco de Dados

Conecte-se ao seu servidor MySQL e execute os seguintes comandos:

```sql
CREATE DATABASE projetogas;

USE projetogas;

CREATE TABLE registro_gas_natural (
    id INT AUTO_INCREMENT PRIMARY KEY,
    ano INT,
    mes INT,
    tipo_mercado VARCHAR(50),
    regiao_agregada VARCHAR(100),
    preco_reais_mmbtu DECIMAL(10, 2) NULL,
    volume_mil_m3_dia INT NULL
);
````

---

### 2. Configurar a Conexão

No arquivo:

```
src/main/java/com/JoaoVitor/AnalisadorPrecos/util/ConnectionFactory.java
```

Altere as credenciais para o seu banco de dados:

```java
private static final String DATABASE_NAME = "projetogas"; 
private static final String USER = "seu_usuario_aqui"; 
private static final String PASSWORD = "sua_senha_aqui";
```

---

### 3. Carregar os Dados (ETL)

* Baixe o arquivo `.csv` da ANP.
* No arquivo:

```
src/main/java/com/JoaoVitor/AnalisadorPrecos/app/CargaDadosApp.java
```

altere o `caminhoDoArquivo` para o local onde você salvou o `.csv`.

* Execute o método `main` da classe `CargaDadosApp.java`.
* Aguarde a mensagem **"Carga de dados finalizada!"**.

---

### 4. Executar a Aplicação de Análise

Com os dados no banco:

* Execute o método `main` da classe:

```
src/main/java/com/JoaoVitor/AnalisadorPrecos/app/AnalisadorApp.java
```

* O menu interativo aparecerá no console para você realizar as análises.

---

## 👨‍💻 Autor

**João Vitor Teixeira de Araújo**

🔗 [LinkedIn](#)
🔗 [GitHub](#)
