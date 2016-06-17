package BdTTB;

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 *
 * @author Denis
 */
public class Articulo {
    int idArticulo;
    String nombreArticulo;
    int cantidad;
    String comprado;
    int id_lista;
    String nick_usuario;
    String usu_asociado;

    public Articulo(int idArticulo, String nombreArticulo, int cantidad, String comprado, int id_lista, String nick_usuario) {
        this.idArticulo = idArticulo;
        this.nombreArticulo = nombreArticulo;
        this.cantidad = cantidad;
        this.comprado = comprado;
        this.id_lista = id_lista;
        this.nick_usuario = nick_usuario;
    }

    public Articulo(int idArticulo, String nombreArticulo, int cantidad, String comprado, int id_lista, String nick_usuario, String usu_asociado) {
        this.idArticulo = idArticulo;
        this.nombreArticulo = nombreArticulo;
        this.cantidad = cantidad;
        this.comprado = comprado;
        this.id_lista = id_lista;
        this.nick_usuario = nick_usuario;
        this.usu_asociado = usu_asociado;
    }

    public int getIdArticulo() {
        return idArticulo;
    }

    public void setIdArticulo(int idArticulo) {
        this.idArticulo = idArticulo;
    }

    public String getNombreArticulo() {
        return nombreArticulo;
    }

    public void setNombreArticulo(String nombreArticulo) {
        this.nombreArticulo = nombreArticulo;
    }

    public int getCantidad() {
        return cantidad;
    }

    public void setCantidad(int cantidad) {
        this.cantidad = cantidad;
    }

    public String getComprado() {
        return comprado;
    }

    public void setComprado(String comprado) {
        this.comprado = comprado;
    }

    public int getId_lista() {
        return id_lista;
    }

    public void setId_lista(int id_lista) {
        this.id_lista = id_lista;
    }

    public String getNick_usuario() {
        return nick_usuario;
    }

    public void setNick_usuario(String nick_usuario) {
        this.nick_usuario = nick_usuario;
    }

    public String getUsu_asociado() {
        return usu_asociado;
    }

    public void setUsu_asociado(String usu_asociado) {
        this.usu_asociado = usu_asociado;
    }
}
