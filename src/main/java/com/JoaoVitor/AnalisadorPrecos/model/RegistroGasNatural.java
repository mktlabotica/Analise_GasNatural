package com.JoaoVitor.AnalisadorPrecos.model;

public class RegistroGasNatural {
    private int ano;
    private int mes;
    private String tipoMercado;
    private String regiaoAgregada;
    private Double precoEmReaisPorMMBtu; // Alterado para Double
    private Integer volumeEmMilMetrosCubicosDia; // Alterado para Integer

    public RegistroGasNatural(int ano, int mes, String tipoMercado, String regiaoAgregada, Double precoEmReaisPorMMBtu, Integer volumeEmMilMetrosCubicosDia) {
        this.ano = ano;
        this.mes = mes;
        this.tipoMercado = tipoMercado;
        this.regiaoAgregada = regiaoAgregada;
        this.precoEmReaisPorMMBtu = precoEmReaisPorMMBtu;
        this.volumeEmMilMetrosCubicosDia = volumeEmMilMetrosCubicosDia;
    }

    // Getters e Setters atualizados para os novos tipos
    public int getAno() { return ano; }
    public void setAno(int ano) { this.ano = ano; }
    public int getMes() { return mes; }
    public void setMes(int mes) { this.mes = mes; }
    public String getTipoMercado() { return tipoMercado; }
    public void setTipoMercado(String tipoMercado) { this.tipoMercado = tipoMercado; }
    public String getRegiaoAgregada() { return regiaoAgregada; }
    public void setRegiaoAgregada(String regiaoAgregada) { this.regiaoAgregada = regiaoAgregada; }
    public Double getPrecoEmReaisPorMMBtu() { return precoEmReaisPorMMBtu; }
    public void setPrecoEmReaisPorMMBtu(Double precoEmReaisPorMMBtu) { this.precoEmReaisPorMMBtu = precoEmReaisPorMMBtu; }
    public Integer getVolumeEmMilMetrosCubicosDia() { return volumeEmMilMetrosCubicosDia; }
    public void setVolumeEmMilMetrosCubicosDia(Integer volumeEmMilMetrosCubicosDia) { this.volumeEmMilMetrosCubicosDia = volumeEmMilMetrosCubicosDia; }
}