package BdTTB;


import java.sql.Date;

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 *
 * @author Denis
 */
public class Lista {
    /**
     * Atributos de la clase Lista
     */
    int id_lista;
    String nombre_lista;
    Date fecha_lista;
    /**
     * Constructor de la clase lista, con todos sus atributos.
     * @param id_lista
     * @param nombre_lista
     * @param fecha_lista 
     */
    public Lista(int id_lista, String nombre_lista, Date fecha_lista) {
        this.id_lista = id_lista;
        this.nombre_lista = nombre_lista;
        this.fecha_lista = fecha_lista;
    }
    /**
     * Constructor de la clase lista con dos atributos.
     * @param id_lista
     * @param nombre_lista 
     */
    public Lista(int id_lista, String nombre_lista) {
        this.id_lista = id_lista;
        this.nombre_lista = nombre_lista;
    }
    /**
     * Metodo para obtener el id de la lista.
     * @return 
     */
    public int getId_lista() {
        return id_lista;
    }
    /**
     * Metodo para actualizar el id de la lista.
     * @param id_lista 
     */
    public void setId_lista(int id_lista) {
        this.id_lista = id_lista;
    }
    /**
     * Metodo para obtener el nombre de la lista.
     * @return 
     */
    public String getNombre_lista() {
        return nombre_lista;
    }
    /**
     * Metodo para actualizar el nombre de la lista.
     * @param nombre_lista 
     */
    public void setNombre_lista(String nombre_lista) {
        this.nombre_lista = nombre_lista;
    }
    /**
     * Metodo para obtener la fecha de la lista.
     * @return 
     */
    public Date getFecha_lista() {
        return fecha_lista;
    }
    /**
     * Metodo para actualizar la fecha de la lista.
     * @param fecha_lista 
     */
    public void setFecha_lista(Date fecha_lista) {
        this.fecha_lista = fecha_lista;
    }
}
