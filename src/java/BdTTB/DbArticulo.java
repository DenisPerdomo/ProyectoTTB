package BdTTB;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 *
 * @author Denis
 */
public class DbArticulo {
    ConClass conexionDBTTB;
    Connection con = null;
    
    public DbArticulo(){
        conexionDBTTB = new ConClass();
        con = conexionDBTTB.getConnection();
    }
    /**
     * Metodo para insertar un articulo en la BD.
     * @param nombre
     * @param cantidad
     * @param id_lista
     * @param nick_usuario
     * @param usu_asociado
     * @return 
     */
    public String insertArticle(String nombre, int cantidad, int id_lista, String nick_usuario, String usu_asociado){
        PreparedStatement stmt = null;
        try {
            stmt = con.prepareStatement("INSERT INTO articulo (nombre_articulo, cantidad, id_lista, nick_usuario, usu_asociado)VALUES (?,?,?,?,?)");
            stmt.setString(1, nombre);
            stmt.setInt(2, cantidad);
            stmt.setInt(3, id_lista);
            stmt.setString(4, nick_usuario);
            stmt.setString(5, usu_asociado);
            stmt.executeUpdate();
            return "ok";
        }catch (SQLException e) {
            System.out.println("SQLException" + e);
            return "error";
        }
    }
    /**
     * M�todo para actualizar un articulo en la BD.
     * @param idArticulo
     * @param nombre
     * @param cantidad
     * @param id_lista
     * @param nick_usuario
     * @param usu_asociado
     * @return 
     */
    public String updateArticle(int idArticulo, String nombre, int cantidad, int id_lista, String nick_usuario, String usu_asociado){
        PreparedStatement stmt = null;
        try {
            stmt = con.prepareStatement("UPDATE articulo SET nombre_articulo=?, cantidad=?, id_lista=?, nick_usuario=?, usu_asociado=? WHERE id_articulo = ?");
            stmt.setString(1, nombre);
            stmt.setInt(2, cantidad);
            stmt.setInt(3, id_lista);
            stmt.setString(4, nick_usuario);
            stmt.setString(5, usu_asociado);
            stmt.setInt(6, idArticulo);
            stmt.executeUpdate();
            return "ok";
        }catch (SQLException e) {
            System.out.println("SQLException" + e);
            return "error";
        }
    }
    /**
     * M�todo para actualizar solo el estado del articulo.
     * @param idArticulo
     * @return 
     */
    public String updateState(int idArticulo){
        PreparedStatement stmtSelect = null;
        PreparedStatement stmtUpdate = null;
        ResultSet rs = null;
        String comprado ="";
        try {
            stmtSelect=con.prepareStatement("SELECT comprado FROM articulo WHERE id_articulo=" + idArticulo + ";");
            rs=stmtSelect.executeQuery();
            while(rs.next()) {
            comprado = rs.getString("comprado");
            }
            if(comprado.compareTo("no")==0){
                stmtUpdate = con.prepareStatement("UPDATE articulo SET comprado=? WHERE id_articulo ="+idArticulo);
                stmtUpdate.setString(1, "si");
                stmtUpdate.executeUpdate();
                return "ok";
            }
            else{
                stmtUpdate = con.prepareStatement("UPDATE articulo SET comprado=? WHERE id_articulo ="+idArticulo);
                stmtUpdate.setString(1, "no");
                stmtUpdate.executeUpdate();
                return "ok";
            }
        }catch (SQLException e) {
            System.out.println("SQLException" + e);
            return "error";
        }
    }
    /**
     * Metodo para eliminar un articulo.
     * @param idArticulo Id del articulo a eliminar.
     * @return 
     */
    public String deleteArticle(int idArticulo){
        PreparedStatement stmt = null;
        try {
            stmt = con.prepareStatement("DELETE FROM articulo WHERE id_articulo = ?");
            stmt.setInt(1, idArticulo);
            stmt.executeUpdate();
            return "ok";
        }catch (SQLException e) {
            System.out.println("SQLException" + e);
            return "error";
        }
    }
    /**
     * M�todo para consultar los articulos de una lista.
     * @param id_lista
     * @return 
     */
    public ArrayList<Articulo> get(int id_lista){
        PreparedStatement stmt= null;
        ResultSet rs = null;
        ArrayList<Articulo> array = new ArrayList<Articulo>();
        int idArticulo,cantidad;
        String nombreArticulo,comprado,nick_usuario,usu_asociado;
        try {
            stmt=con.prepareStatement("SELECT * FROM articulo WHERE id_lista=" + id_lista + ";");
            rs=stmt.executeQuery();
            while(rs.next()) {// Se ejecuta tantas veces como filas tenga la consulta
                idArticulo = rs.getInt("id_articulo");
                nombreArticulo = rs.getString("nombre_articulo");
                cantidad = rs.getInt("cantidad");
                comprado = rs.getString("comprado");
                id_lista = rs.getInt("id_lista");
                nick_usuario = rs.getString("nick_usuario");
                usu_asociado = rs.getString("usu_asociado");
                Articulo aux = new Articulo(idArticulo, nombreArticulo, cantidad, comprado,id_lista, nick_usuario, usu_asociado);
                array.add(aux);
            }
            // Cierra la sentencia
            stmt.close();
            // Cierra la conexi�n
            con.close();
        }catch (SQLException e) {
            System.out.println("SQLException"+e);
        }
        return array;
    }
    /**
     * M�todo para consultar los articulos de una lista y de un usuario, Mylist.
     * @param id_lista Id de la lista seleccionada
     * @param nick Nick del usuario que queremos consultar la lista.
     * @return 
     */
    public ArrayList<Articulo> getmylist(int id_lista, String nick){
        PreparedStatement stmt= null;
        ResultSet rs = null;
        ArrayList<Articulo> array = new ArrayList<Articulo>();
        int idArticulo,cantidad;
        String nombreArticulo,comprado,nick_usuario,usu_asociado;
        try {
            stmt=con.prepareStatement("SELECT * FROM articulo WHERE id_lista=" + id_lista + " AND usu_asociado='"+nick+"';");
            rs=stmt.executeQuery();
            while(rs.next()) {// Se ejecuta tantas veces como filas tenga la consulta
                idArticulo = rs.getInt("id_articulo");
                nombreArticulo = rs.getString("nombre_articulo");
                cantidad = rs.getInt("cantidad");
                comprado = rs.getString("comprado");
                id_lista = rs.getInt("id_lista");
                nick_usuario = rs.getString("nick_usuario");
                usu_asociado = rs.getString("usu_asociado");
                Articulo aux = new Articulo(idArticulo, nombreArticulo, cantidad, comprado,id_lista, nick_usuario, usu_asociado);
                array.add(aux);
            }
            // Cierra la sentencia
            stmt.close();
            // Cierra la conexi�n
            con.close();
        }catch (SQLException e) {
            System.out.println("SQLException"+e);
        }
        return array;
    }
}
