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

import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

/**
 *
 * @author Denis
 */
public class Login extends HttpServlet {

    /**
     * Processes requests for both HTTP <code>GET</code> and <code>POST</code>
     * methods.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    protected void processRequest(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        response.setContentType("text/html;charset=UTF-8");
        PrintWriter out = response.getWriter();
        try {
           //Recogemos variables que son enviadas desde administrator.jsp
            String usuario = request.getParameter("usuario");
            String password = request.getParameter("password");

            //Realizamos acceso a base de Datos
            String [] datos=DBUsuario.getFila("SELECT * FROM usuario WHERE nick='"
                +usuario+"' AND pass=MD5('"+password+"')");
            if(datos==null){
                // nos mostrara esto en caso el usuario no sea encontrado.
                out.println("<html>");
                out.println("<head>");
                out.println("<meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\">");
                out.println("<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">");
                out.println("<title>THINGS TO BRING</title>");
                out.println("<title>THINGS TO BRING</title>");
                out.println("<link rel=\"stylesheet\" href=\"css/bootstrap.min.css\" />");
                out.println("<link rel=\"stylesheet\" href=\"css/normalize.css\" />");    
                out.println("<link rel=\"stylesheet\" href=\"css/navbar-fixed-top.css\">");  
                out.println("<script type=\"text/javascript\" src=\"js/jquery-1.12.0.js\"></script>");
                out.println("<script type=\"text/javascript\" src=\"js/bootstrap.min.js\"></script>");
                out.println("</head>");
                out.println("<body>");
                out.println("<div class=\"container\">");
                out.println("<div class=\"col-md-4\"></div>");
                out.println("<div class=\"col-md-4\">");
                out.println("<img src=\"imgs/ttblogo.png\" class=\"responsive center-block\" width=\"65%\"/>");
                out.println("<br>");
                out.println("<form class=\"form-signin\">");
                out.println("<h2 class=\"form-signin-heading\">Please sign in</h2>");
                out.println("<label for=\"inputEmail\" class=\"sr-only\">Email address</label>");
                out.println("<input type=\"email\" id=\"inputEmail\" class=\"form-control\" placeholder=\"Email address\" required autofocus>");
                out.println("<label for=\"inputPassword\" class=\"sr-only\">Password</label>");
                out.println("<input type=\"password\" id=\"inputPassword\" class=\"form-control\" placeholder=\"Password\" required>");
                out.println("<br>");
                out.println("<button class=\"btn btn-lg btn-primary btn-block\" type=\"submit\">Sign in</button>");
                out.println("</form>");
                out.println("</div>");
                out.println("<div class=\"col-md-4\"></div>");
                out.println("</div> <!-- /container -->");
                out.println("</body>");
                out.println("</html>");	
            }else{

                //Capturamos las variables a mostrar
                String nickSql=datos[0];
                String passwordSql=datos[3];

                //creamos nuestra sesion
                HttpSession session = request.getSession(true);

                //Obtenemos los obejtos a guardar en session
                session.setAttribute("nick", nickSql);
                session.setAttribute("pass", passwordSql);
                session.setAttribute("id_lista", 0);
                //pagina a donde se enviara si se encuentra el usuario autenticado
                response.sendRedirect("lists.jsp");

            }
            
        } finally { 
            out.close();
        }
    }

    // <editor-fold defaultstate="collapsed" desc="HttpServlet methods. Click on the + sign on the left to edit the code.">
    /**
     * Handles the HTTP <code>GET</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        processRequest(request, response);
    }

    /**
     * Handles the HTTP <code>POST</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        processRequest(request, response);
    }

    /**
     * Returns a short description of the servlet.
     *
     * @return a String containing servlet description
     */
    @Override
    public String getServletInfo() {
        return "Short description";
    }// </editor-fold>

}
