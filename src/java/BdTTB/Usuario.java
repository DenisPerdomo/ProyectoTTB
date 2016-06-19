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
public class Usuario {
    /**
     * Atributos de la clase Usuario
     */
    String nickUsuario;
    String nombreUsuario;
    String correoUsuario;
    String passUsuario;
    /**
     * Constructor con todos los atributos de la clase.
     * @param nickUsuario
     * @param nombreUsuario
     * @param correoUsuario
     * @param passUsuario 
     */
    public Usuario(String nickUsuario, String nombreUsuario, String correoUsuario, String passUsuario) {
        this.nickUsuario = nickUsuario;
        this.nombreUsuario = nombreUsuario;
        this.correoUsuario = correoUsuario;
        this.passUsuario = passUsuario;
    }
    /**
     * Constructor con tres atributos de la clase.
     * @param nickUsuario
     * @param nombreUsuario
     * @param correoUsuario 
     */
    public Usuario(String nickUsuario, String nombreUsuario, String correoUsuario) {
        this.nickUsuario = nickUsuario;
        this.nombreUsuario = nombreUsuario;
        this.correoUsuario = correoUsuario;
    }
    /**
     * Metodo para obtener el nick del usuario.
     * @return 
     */
    public String getNickUsuario() {
        return nickUsuario;
    }
    /**
     * Metodo para actualizar el nick del usuario
     * @param nickUsuario 
     */
    public void setNickUsuario(String nickUsuario) {
        this.nickUsuario = nickUsuario;
    }
    /**
     * Metodo para obtener el nombre del usuario.
     * @return 
     */
    public String getNombreUsuario() {
        return nombreUsuario;
    }
    /**
     * Metodo para actualizar el nombre del usuario.
     * @param nombreUsuario 
     */
    public void setNombreUsuario(String nombreUsuario) {
        this.nombreUsuario = nombreUsuario;
    }
    /**
     * Metodo para obtener el correo del usuario.
     * @return 
     */
    public String getCorreoUsuario() {
        return correoUsuario;
    }
    /**
     * Metodo para actualizar el correo del usuario.
     * @param correoUsuario 
     */
    public void setCorreoUsuario(String correoUsuario) {
        this.correoUsuario = correoUsuario;
    }
    /**
     * Metodo para obtener la pass del usuario
     * @return 
     */
    public String getPassUsuario() {
        return passUsuario;
    }
    /**
     * Metodo para actualizar la pass del usuario.
     * @param passUsuario 
     */
    public void setPassUsuario(String passUsuario) {
        this.passUsuario = passUsuario;
    }
}
