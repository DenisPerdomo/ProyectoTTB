package BdTTB;

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import javax.swing.JOptionPane;

/**
 *
 * @author Denis
 */
public class ConClass {
    /**
     * Método para conectarse a la Base de datos ttb_db
     * @return conexion.
     */
    public Connection getConnection(){
        Connection conexion = null;
        try{
            Class.forName("com.mysql.jdbc.Driver");
            String server = "jdbc:mysql://localhost/ttb_db";
            String userDB = "root";
            String passDB = "";
            conexion = DriverManager.getConnection(server,userDB,passDB);
        }catch(ClassNotFoundException ex){
            System.out.print(ex + " Error 1 con la conexion BBDD "+ex.getMessage());
        } catch(SQLException ex){
            System.out.print(ex + " Error 2 con la conexion BBDD "+ex.getMessage());
        } catch (Exception ex){
            System.out.print(ex + " Error 3 con la conexion BBDD "+ex.getMessage());
        } finally{
            return conexion;
        }
}
}

