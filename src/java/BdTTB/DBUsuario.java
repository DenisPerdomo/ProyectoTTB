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
import java.sql.ResultSet;
import java.sql.ResultSetMetaData;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.Vector;

/**
 *
 * @author Denis
 */
public class DBUsuario {
    ConClass conexionDBTTB;
    Connection con = null;
    
    public DBUsuario(){
        conexionDBTTB = new ConClass();
        con = conexionDBTTB.getConnection();
    }
    static public Vector consulta(String sql) {
        Vector regs = new Vector();

        try	{
            ConClass db = new ConClass();//Llamamos a nuestra Clase Conexion
            Connection cn = db.getConnection();

            if (cn == null) {
            	regs = null;
            } else {
	            Statement  		st = cn.createStatement();
	            ResultSet		rs = st.executeQuery(sql);
	            ResultSetMetaData	rm = rs.getMetaData();
	            int 		numCols = rm.getColumnCount();

	            // Toma los títulos de las columnas
	            String[] titCols= new String[numCols];
	            for(int i=0; i<numCols; ++i)//recorre las filas de la Tabla
	                titCols[i]= rm.getColumnName(i+1);

	            // la fila 0 del vector lleva los títulos de las columnas
	            regs.add(titCols);

	            // toma las filas de la consulta
	            while(rs.next()) {
	                String[] reg= new String[numCols];

	                for(int i=0; i<numCols; i++) {
	                    reg[i] = rs.getString(i + 1);
	                }

	                regs.add(reg);
	            }

	            rs.close();
	            st.close();
	            cn.close();
            }

        } catch(SQLException e) {
            regs= null;
        } catch(Exception e) {
            regs= null;
        }

        return regs;
    }
    
    static public String[] getFila(String sql) {
        Vector vector = consulta(sql);
        String[] fila = null;

        if(vector!=null)				// todo OK!
            if(vector.size()>1)				// hay filas
                fila = (String[]) vector.get(1);	// en 0 están los títulos

        return fila;
    }
}
