/*
 * Copyright (C) 2016 Denis
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */
package BdTTB;

import java.sql.Connection;
import java.sql.Date;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;


/**
 *
 * @author Denis
 */
public class DBLista {
    ConClass conexionDBTTB;
    Connection con = null;
    
    public DBLista(){
        conexionDBTTB = new ConClass();
        con = conexionDBTTB.getConnection();
    }
public String insertList(String nameList){
        PreparedStatement stmt = null;
        try {
            stmt = con.prepareStatement("INSERT INTO lista (nombre_lista, fecha_lista)VALUES (?,CURRENT_DATE)");
            stmt.setString(1, nameList);
            stmt.executeUpdate();
            return "ok";
        }catch (SQLException e) {
            System.out.println("SQLException" + e);
            return "error";
        }
    }
    
    public String updateList(int idLista, String nombre){
        PreparedStatement stmt = null;
        try {
            stmt = con.prepareStatement("UPDATE lista SET nombre_lista=? WHERE id_lista = ?");
            stmt.setString(1, nombre);
            stmt.setInt(2, idLista);
            stmt.executeUpdate();
            return "ok";
        }catch (SQLException e) {
            System.out.println("SQLException" + e);
            return "error";
        }
    }
    
    public String deleteList(int idList){
        PreparedStatement stmt = null;
        try {
            stmt = con.prepareStatement("DELETE FROM lista WHERE id_lista = ?");
            stmt.setInt(1, idList);
            stmt.executeUpdate();
            return "ok";
        }catch (SQLException e) {
            System.out.println("SQLException" + e);
            return "error";
        }
    }
    
    public ArrayList<Lista> get(){
        PreparedStatement stmt= null;
        ResultSet rs = null;
        ArrayList<Lista> array = new ArrayList<Lista>();
        int idLista;
        String nombreLista;
        Date fechaLista;
        try {
            stmt=con.prepareStatement("SELECT * FROM lista");
            rs=stmt.executeQuery();
            while(rs.next()) {// Se ejecuta tantas veces como filas tenga la consulta
                idLista = rs.getInt("id_lista");
                nombreLista = rs.getString("nombre_lista");
                fechaLista = rs.getDate("fecha_lista");
                Lista aux = new Lista(idLista, nombreLista, fechaLista);
                array.add(aux);
            }
            // Cierra la sentencia
            stmt.close();
            // Cierra la conexión
            con.close();
        }catch (SQLException e) {
            System.out.println("SQLException"+e);
        }
        return array;
    }
}
