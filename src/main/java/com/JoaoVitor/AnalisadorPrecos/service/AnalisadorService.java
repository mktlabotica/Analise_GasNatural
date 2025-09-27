package com.JoaoVitor.AnalisadorPrecos.service;

import com.JoaoVitor.AnalisadorPrecos.dao.PrecoDAO;
import com.JoaoVitor.AnalisadorPrecos.model.RegistroGasNatural;
import java.util.List;

public class AnalisadorService {

    // O serviço precisa de uma instância do DAO para poder pedir dados ao banco.
    private PrecoDAO precoDAO;

    /**
     * Construtor da classe.
     * Quando um AnalisadorService é criado, ele também cria a sua própria instância do PrecoDAO.
     */
    public AnalisadorService() {
        this.precoDAO = new PrecoDAO();
    }

    /**
     * Pede ao DAO para calcular o preço médio geral e retorna o valor.
     * Este método representa a lógica de negócio do nosso primeiro caso de uso.
     * @return o preço médio geral dos combustíveis.
     */
    public double getPrecoMedioGeral() {
        System.out.println("SERVIÇO: Recebida solicitação para calcular preço médio.");

        // O serviço simplesmente repassa a chamada para o DAO
        double media = precoDAO.calcularPrecoMedioGeral();

        System.out.println("SERVIÇO: Cálculo recebido do DAO. Retornando para a App.");

        // O serviço retorna o resultado que o DAO encontrou
        return media;
    }
    public List<RegistroGasNatural> getMaisBaratosPorProduto(String produto, int limite) {
        System.out.println("SERVIÇO: Recebida solicitação para buscar os " + limite + " mais baratos para o produto " + produto);
        return precoDAO.encontrarMaisBaratosPorProduto(produto, limite);
    }
}