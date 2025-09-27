package com.JoaoVitor.AnalisadorPrecos.app;

import com.JoaoVitor.AnalisadorPrecos.service.AnalisadorService;
import java.util.Scanner;
import com.JoaoVitor.AnalisadorPrecos.model.RegistroGasNatural;
import java.util.List;

public class AnalisadorApp {

    public static void main(String[] args) {
        // Cria uma instância do Scanner para ler a entrada do usuário
        Scanner scanner = new Scanner(System.in);
        // Cria uma instância do nosso Serviço, que contém a lógica de negócio
        AnalisadorService service = new AnalisadorService();

        // Loop infinito para manter o menu ativo até o usuário decidir sair
        while (true) {
            System.out.println("\n===== Análise de Preços de Gás Natural =====");
            System.out.println("1 - Calcular Preço Médio Geral");
            System.out.println("2 - Ver os 10 mais baratos");
            System.out.println("0 - Sair");
            System.out.print("Escolha uma opção: ");

            // Tenta ler a opção do usuário
            int opcao = -1; // Valor padrão em caso de entrada inválida
            try {
                opcao = Integer.parseInt(scanner.nextLine());
            } catch (NumberFormatException e) {
                System.out.println("Erro: Por favor, digite um número válido.");
                continue; // Volta para o início do loop
            }

            // Estrutura switch para lidar com a opção escolhida
            switch (opcao) {
                case 1:
                    // Chama o serviço para calcular a média
                    double media = service.getPrecoMedioGeral();
                    // Imprime o resultado formatado com 2 casas decimais
                    System.out.printf("O preço médio geral é: R$ %.2f por MMBtu%n", media);
                    break;
                case 2:
                    System.out.println("\n--- Escolha o Tipo de Mercado ---");
                    System.out.println("1 - Térmico");
                    System.out.println("2 - Não Térmico");
                    System.out.print("Digite sua escolha: ");

                    String tipoEscolhido;
                    try {
                        int escolhaMercado = Integer.parseInt(scanner.nextLine());
                        if (escolhaMercado == 1) {
                            tipoEscolhido = "Térmico";
                        } else if (escolhaMercado == 2) {
                            tipoEscolhido = "Não Térmico";
                        } else {
                            System.out.println("Opção inválida. Voltando ao menu principal.");
                            continue; // Pula o resto e volta para o início do loop while
                        }
                    } catch (NumberFormatException e) {
                        System.out.println("Entrada inválida. Voltando ao menu principal.");
                        continue; // Pula o resto e volta para o início do loop while
                    }

                    // Agora, usamos a variável 'tipoEscolhido' para fazer a busca
                    List<RegistroGasNatural> maisBaratos = service.getMaisBaratosPorProduto(tipoEscolhido, 10);

                    System.out.printf("\n--- Top 10 Preços Mais Baratos para Gás (%s) ---%n", tipoEscolhido);
                    // Loop para imprimir cada registro da lista
                    for (RegistroGasNatural registro : maisBaratos) {
                        System.out.printf("Região: %-30s | Preço: R$ %.2f | Data: %d/%d%n",
                                registro.getRegiaoAgregada(),
                                registro.getPrecoEmReaisPorMMBtu(),
                                registro.getMes(),
                                registro.getAno());
                    }
                    break;
                case 0:
                    // Encerra o programa
                    System.out.println("Encerrando a aplicação. Até logo!");
                    scanner.close(); // Fecha o scanner antes de sair
                    return; // Sai do método main e, consequentemente, do programa
                default:
                    // Mensagem para opções inválidas
                    System.out.println("Opção inválida. Por favor, tente novamente.");
                    break;
            }
        }
    }
}