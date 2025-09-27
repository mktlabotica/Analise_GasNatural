package com.JoaoVitor.AnalisadorPrecos.app;

import com.JoaoVitor.AnalisadorPrecos.dao.PrecoDAO;
import com.JoaoVitor.AnalisadorPrecos.model.RegistroGasNatural;

import java.io.BufferedReader;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStreamReader;
import java.sql.SQLException;
import java.io.File;
import java.net.URI;
import java.net.URISyntaxException;
import java.net.URL;

public class CargaDadosApp {

    public static void main(String[] args) {
        PrecoDAO precoDAO = new PrecoDAO();
        String caminhoDoArquivo;
        int linhaAtual = 1;
        try {
            // Pede ao Java para encontrar o arquivo no diretório de recursos
            URL resourceUrl = CargaDadosApp.class.getClassLoader().getResource("distribuidoras-consumidores-livres.csv");

            if (resourceUrl == null) {
                System.err.println("ERRO FATAL: Não foi possível encontrar o arquivo CSV nos recursos do projeto.");
                System.err.println("Verifique se o arquivo está em 'src/main/resources'");
                return; // Encerra a aplicação
            }

            // Converte a localização do recurso em um caminho de arquivo que o FileReader entende
            URI resourceUri = resourceUrl.toURI();
            caminhoDoArquivo = new File(resourceUri).getAbsolutePath();

        } catch (URISyntaxException e) {
            System.err.println("ERRO FATAL: URL do arquivo CSV é inválida.");
            e.printStackTrace();
            return;
        }

        try (BufferedReader br = new BufferedReader(
                new InputStreamReader(new FileInputStream(caminhoDoArquivo), "UTF-16"))) {

            String linha;
            br.readLine(); // Pula o cabeçalho
            linhaAtual++;

            System.out.println("Iniciando a carga de dados...");

            while ((linha = br.readLine()) != null) {
                // ... (código para pular linha em branco e com poucas colunas continua o mesmo)
                if (linha.trim().isEmpty() || linha.split(";").length < 6) {
                    // ... (lógica de aviso continua a mesma)
                    linhaAtual++;
                    continue;
                }

                try {
                    String[] dados = linha.split(";");

                    // Limpeza dos dados
                    String anoStr = dados[0].replaceAll("[^0-9]", "");
                    String mesStr = dados[1].replaceAll("[^0-9]", "");
                    String tipoMercadoStr = dados[2].replace("\"", "").trim().replaceAll("\\s+", " ");
                    String regiaoAgregadaStr = dados[3].replace("\"", "").trim().replaceAll("\\s+", " ");
                    String precoStr = dados[4].replaceAll("[^0-9,]", "");
                    String volumeStr = dados[5].replaceAll("[^0-9]", "");

                    if (anoStr.isEmpty() || mesStr.isEmpty()) {
                        System.err.println("AVISO: Linha " + linhaAtual + " ignorada (ano/mês ausente): " + linha);
                        linhaAtual++;
                        continue;
                    }

                    // Conversão para os tipos corretos
                    int ano = Integer.parseInt(anoStr);
                    int mes = Integer.parseInt(mesStr);
                    String tipoMercado = tipoMercadoStr;
                    String regiaoAgregada = regiaoAgregadaStr;

                    // **MUDANÇA PRINCIPAL AQUI**
                    // Atribui null se o dado estiver ausente/inválido
                    Double preco = (precoStr.isEmpty() || precoStr.equalsIgnoreCase("NA"))
                            ? null : Double.parseDouble(precoStr.replace(",", "."));
                    Integer volume = (volumeStr.isEmpty() || volumeStr.equalsIgnoreCase("NA"))
                            ? null : Integer.parseInt(volumeStr);

                    RegistroGasNatural registro = new RegistroGasNatural(ano, mes, tipoMercado, regiaoAgregada, preco, volume);
                    precoDAO.salvar(registro);

                } catch (Exception e) {
                    System.err.println("AVISO: Linha " + linhaAtual + " ignorada (erro de formato inesperado): " + linha);
                    System.err.println("       > Erro: " + e.getMessage());
                }

                linhaAtual++;
            }

            System.out.println("Carga de dados finalizada!");

        } catch (IOException e) {
            System.err.println("ERRO FATAL: Não foi possível ler o arquivo: " + e.getMessage());
        }
    }
}