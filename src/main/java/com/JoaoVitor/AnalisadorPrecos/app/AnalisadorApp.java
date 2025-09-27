package com.JoaoVitor.AnalisadorPrecos.app;

import com.JoaoVitor.AnalisadorPrecos.service.AnalisadorService;
import java.util.Scanner;

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
            // (Aqui você adicionará mais opções no futuro)
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