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
    /**
     * Atributos de la clase articulo.
     */
    int idArticulo;
    String nombreArticulo;
    int cantidad;
    String comprado;
    int id_lista;
    String nick_usuario;
    String usu_asociado;
    
    /**
     * Constructor de la clase Articulo sin nick_usuario
     * @param idArticulo 
     * @param nombreArticulo
     * @param cantidad
     * @param comprado Estado si o no.
     * @param id_lista
     * @param nick_usuario 
     */
    public Articulo(int idArticulo, String nombreArticulo, int cantidad, String comprado, int id_lista, String nick_usuario) {
        this.idArticulo = idArticulo;
        this.nombreArticulo = nombreArticulo;
        this.cantidad = cantidad;
        this.comprado = comprado;
        this.id_lista = id_lista;
        this.nick_usuario = nick_usuario;
    }
    
    /**
     * Constructor de la clase Articulo con todos los atributos.
     * @param idArticulo
     * @param nombreArticulo
     * @param cantidad
     * @param comprado
     * @param id_lista
     * @param nick_usuario
     * @param usu_asociado 
     */
    public Articulo(int idArticulo, String nombreArticulo, int cantidad, String comprado, int id_lista, String nick_usuario, String usu_asociado) {
        this.idArticulo = idArticulo;
        this.nombreArticulo = nombreArticulo;
        this.cantidad = cantidad;
        this.comprado = comprado;
        this.id_lista = id_lista;
        this.nick_usuario = nick_usuario;
        this.usu_asociado = usu_asociado;
    }
    
    /**
     * Metodo para obtener el id del articulo.
     * @return int Devuelve el id del articulo. 
     */
    public int getIdArticulo() {
        return idArticulo;
    }
    /**
     * Metodo para actualizar el id del articulo.
     * @param idArticulo 
     */
    public void setIdArticulo(int idArticulo) {
        this.idArticulo = idArticulo;
    }
    /**
     * Metodo para obtener el nombre del articulo
     * @return 
     */
    public String getNombreArticulo() {
        return nombreArticulo;
    }
    /**
     * Metodo para actualizar el nombre del articulo.
     * @param nombreArticulo 
     */
    public void setNombreArticulo(String nombreArticulo) {
        this.nombreArticulo = nombreArticulo;
    }
    /**
     * Metodo para obtener la cantidad del articulo.
     * @return 
     */
    public int getCantidad() {
        return cantidad;
    }
    /**
     * Metodo para actualizar la cantidad del articulo.
     * @param cantidad 
     */
    public void setCantidad(int cantidad) {
        this.cantidad = cantidad;
    }
    /**
     * Metodo para obtener el estado del articulo.
     * @return 
     */
    public String getComprado() {
        return comprado;
    }
    /**
     * Metodo para actualizar el estado del articulo.
     * @param comprado 
     */
    public void setComprado(String comprado) {
        this.comprado = comprado;
    }
    /**
     * Metodo para obtener el id de la lista del articulo.
     * @return 
     */
    public int getId_lista() {
        return id_lista;
    }
    /**
     * Metodo para actulizar el id de la lista del articulo.
     * @param id_lista 
     */
    public void setId_lista(int id_lista) {
        this.id_lista = id_lista;
    }
    /**
     * Metodo para obtener el nick del usuario propietario del articulo.
     * @return 
     */
    public String getNick_usuario() {
        return nick_usuario;
    }
    /**
     * Metodo para actualizar el nick del usuario propietario.
     * @param nick_usuario 
     */
    public void setNick_usuario(String nick_usuario) {
        this.nick_usuario = nick_usuario;
    }
    /**
     * Metodo para obtener el nick del usuario al que esta asociado el articulo.
     * @return 
     */
    public String getUsu_asociado() {
        return usu_asociado;
    }
    /**
     * Metodo para actulizar el nick del usuario asociado.
     * @param usu_asociado 
     */
    public void setUsu_asociado(String usu_asociado) {
        this.usu_asociado = usu_asociado;
    }
}
