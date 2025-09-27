package com.JoaoVitor.AnalisadorPrecos.util;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class ConnectionFactory {

    // --- INFORMAÇÕES DE CONEXÃO COM O BANCO ---
    // Altere para o nome do seu banco de dados
    private static final String DATABASE_NAME = "ProjetoGas";
    // Altere para o seu usuário do MySQL (o padrão geralmente é "root")
    private static final String USER = "root";
    // Altere para a sua senha do MySQL
    private static final String PASSWORD = "QWERqwer132";

    // URL de conexão com o banco de dados
    private static final String URL = "jdbc:mysql://localhost:3306/" + DATABASE_NAME;

    /**
     * Obtém uma conexão com o banco de dados MySQL.
     * * @return um objeto Connection com a conexão estabelecida.
     * @throws SQLException se ocorrer um erro ao conectar.
     */
    public static Connection getConnection() throws SQLException {
        // Carrega o driver JDBC do MySQL.
        // O Class.forName é opcional nas versões mais recentes do JDBC,
        // mas é uma boa prática para garantir a compatibilidade.
        try {
            Class.forName("com.mysql.cj.jdbc.Driver");
        } catch (ClassNotFoundException e) {
            // Lança uma exceção mais clara se o driver não for encontrado
            throw new SQLException("Driver JDBC do MySQL não encontrado.", e);
        }

        // Tenta estabelecer a conexão e a retorna
        return DriverManager.getConnection(URL, USER, PASSWORD);
    }
}