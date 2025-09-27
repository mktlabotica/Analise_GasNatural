package com.JoaoVitor.AnalisadorPrecos.dao;

import com.JoaoVitor.AnalisadorPrecos.model.RegistroGasNatural;
import com.JoaoVitor.AnalisadorPrecos.util.ConnectionFactory;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.sql.Types; // Novo import

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
}