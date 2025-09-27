package com.JoaoVitor.AnalisadorPrecos.dao;

import com.JoaoVitor.AnalisadorPrecos.model.RegistroGasNatural;
import com.JoaoVitor.AnalisadorPrecos.util.ConnectionFactory;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.sql.Types;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.List;

public class PrecoDAO {

    public void salvar(RegistroGasNatural registro) throws SQLException {
        String sql = "INSERT INTO registro_gas_natural (ano, mes, tipo_mercado, regiao_agregada, preco_reais_mmbtu, volume_mil_m3_dia) VALUES (?, ?, ?, ?, ?, ?)";

        try (Connection conn = ConnectionFactory.getConnection();
             PreparedStatement stmt = conn.prepareStatement(sql)) {

            stmt.setInt(1, registro.getAno());
            stmt.setInt(2, registro.getMes());
            stmt.setString(3, registro.getTipoMercado());
            stmt.setString(4, registro.getRegiaoAgregada());

            // Lógica para lidar com NULL
            if (registro.getPrecoEmReaisPorMMBtu() != null) {
                stmt.setDouble(5, registro.getPrecoEmReaisPorMMBtu());
            } else {
                stmt.setNull(5, Types.DECIMAL);
            }

            if (registro.getVolumeEmMilMetrosCubicosDia() != null) {
                stmt.setInt(6, registro.getVolumeEmMilMetrosCubicosDia());
            } else {
                stmt.setNull(6, Types.INTEGER);
            }

            stmt.executeUpdate();
        }
    }
    /**
     * Calcula o preço médio de todos os registros válidos no banco de dados.
     * @return o preço médio, ou 0.0 em caso de erro.
     */
    public double calcularPrecoMedioGeral() {
        // A query SQL para calcular a média da coluna de preço
        // Adicionamos WHERE para ignorar os valores 0 que inserimos para os "NA"
        String sql = "SELECT AVG(preco_reais_mmbtu) FROM registro_gas_natural WHERE preco_reais_mmbtu > 0";

        double media = 0.0;

        // Conecta ao banco e prepara a declaração
        try (Connection conn = ConnectionFactory.getConnection();
             PreparedStatement stmt = conn.prepareStatement(sql)) {

            // ResultSet é o objeto que recebe os resultados de uma consulta SELECT
            ResultSet rs = stmt.executeQuery();

            // Verifica se a consulta retornou algum resultado
            if (rs.next()) {
                // Pega o valor da primeira coluna do resultado
                media = rs.getDouble(1);
            }

        } catch (SQLException e) {
            System.err.println("Erro ao calcular a média de preços: " + e.getMessage());
            // Em um caso real, um tratamento de erro mais robusto seria ideal
        }

        return media;
    }
    /**
     * Busca no banco de dados os N registros com o menor preço para um determinado produto.
     * @param produto O nome do produto a ser pesquisado (ex: "Térmico").
     * @param limite A quantidade de registros a serem retornados (ex: 10).
     * @return Uma lista de objetos RegistroGasNatural.
     */
    public List<RegistroGasNatural> encontrarMaisBaratosPorProduto(String produto, int limite) {
        String sql = "SELECT * FROM registro_gas_natural WHERE tipo_mercado = ? AND preco_reais_mmbtu > 0 ORDER BY preco_reais_mmbtu ASC LIMIT ?";

        List<RegistroGasNatural> registros = new ArrayList<>();

        try (Connection conn = ConnectionFactory.getConnection();
             PreparedStatement stmt = conn.prepareStatement(sql)) {

            stmt.setString(1, produto);
            stmt.setInt(2, limite);

            ResultSet rs = stmt.executeQuery();

            // Loop para percorrer todos os resultados retornados pela query
            while (rs.next()) {
                // Para cada linha do resultado, cria um objeto RegistroGasNatural
                int ano = rs.getInt("ano");
                int mes = rs.getInt("mes");
                String tipoMercado = rs.getString("tipo_mercado");
                String regiaoAgregada = rs.getString("regiao_agregada");
                Double preco = rs.getDouble("preco_reais_mmbtu");
                Integer volume = rs.getInt("volume_mil_m3_dia");

                RegistroGasNatural registro = new RegistroGasNatural(ano, mes, tipoMercado, regiaoAgregada, preco, volume);

                // Adiciona o objeto criado à lista
                registros.add(registro);
            }

        } catch (SQLException e) {
            System.err.println("Erro ao buscar os registros mais baratos: " + e.getMessage());
        }

        return registros;
    }
}