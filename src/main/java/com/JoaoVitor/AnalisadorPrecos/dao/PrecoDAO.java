package com.JoaoVitor.AnalisadorPrecos.dao;

import com.JoaoVitor.AnalisadorPrecos.model.RegistroGasNatural;
import com.JoaoVitor.AnalisadorPrecos.util.ConnectionFactory;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.sql.Types;
import java.sql.ResultSet;

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
}