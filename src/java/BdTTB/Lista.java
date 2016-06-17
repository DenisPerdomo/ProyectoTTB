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
    int id_lista;
    String nombre_lista;
    Date fecha_lista;

    public Lista(int id_lista, String nombre_lista, Date fecha_lista) {
        this.id_lista = id_lista;
        this.nombre_lista = nombre_lista;
        this.fecha_lista = fecha_lista;
    }

    public int getId_lista() {
        return id_lista;
    }

    public void setId_lista(int id_lista) {
        this.id_lista = id_lista;
    }

    public String getNombre_lista() {
        return nombre_lista;
    }

    public void setNombre_lista(String nombre_lista) {
        this.nombre_lista = nombre_lista;
    }

    public Date getFecha_lista() {
        return fecha_lista;
    }

    public void setFecha_lista(Date fecha_lista) {
        this.fecha_lista = fecha_lista;
    }
}
