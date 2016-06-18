<%-- 
    Document   : mainlist
    Created on : 16-jun-2016, 9:50:21
    Author     : Denis
--%>

<%@page import="BdTTB.DBUsuario"%>
<%@page import="BdTTB.Usuario"%>
<%@page import="java.util.ArrayList"%>
<%@page import="BdTTB.Articulo"%>
<%@page import="BdTTB.DbArticulo"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%
   //Obtengo la variable de la sesion
   Object usuario = (String) session.getAttribute("nick");//Recoge la session
   //int idLista = Integer.parseInt(idListaS);
   //Comparamos su usario es null, en caso afirmativo redirige a la pantalla de logeo.
   if (usuario==null){
       response.sendRedirect("index.jsp");
   }
   //si el usuario es correcto cargamos la página.
   else{
       int idLista = (int) (session.getAttribute("id_lista"));
%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no">
        <title>THINGS TO BRING</title>
        <meta charset="utf-8" />
        <link rel="stylesheet" href="css/bootstrap.min.css" />
        <link rel="stylesheet" href="css/normalize.css" />
        <link rel="stylesheet" href="css/navbar-fixed-top.css">
        <script type="text/javascript" src="js/jquery-1.12.0.js"></script>
        <script type="text/javascript" src="js/bootstrap.min.js"></script>
        <script type="text/javascript" src="js/ttb.js"></script>
        <script type="text/javascript">
            $(document).ready(function(){
            $('#contenido').fadeOut();
            $('#contenido').load("contList.jsp");
            sleep(300);
            $('#contenido').fadeIn();
            });
        </script>
    </head>
    <body>
        <nav class="navbar navbar-default navbar-fixed-top navbar-hover" role="navigation" id="mainMenu">
          <div class="container">
            <div class="navbar-header">
              <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
              </button>
              <a class="navbar-brand" id="logo" href="index.jsp"></a>
            </div>
            <div id="navbar" class="navbar-collapse collapse">
                <ul class="nav navbar-nav">
                    <li><li><a href="lists.jsp">List</a></li></li>
                    <li class="active"><a href="mainlist.jsp">Main List</a></li>
                    <li><a href="mylist.jsp">My List</a></li>
                </ul>
                <p class="navbar-text pull-right">
                    <a href="#" class="navbar-link">Log Out</a>
                </p>
                <p class="navbar-text pull-right">
                    <a href="#" class="navbar-link">Ayuda</a>
                </p>
            </div><!--/.nav-collapse -->
          </div>
        </nav>
        <div class="container" id="contenido">
        </div>
        <div class="modal fade" tabindex="-1" role="dialog" id="myModal">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                          <button type="button" class="close" data-dismiss="modal">&times;</button>
                          <h4 id = "modalTitle" class="modal-title"></h4>
                        </div>
                        <div class="modal-body">
                            <div id="modalForm">
                            <form id ="formArticle" name ="formArticleName" role ="form">
                                <div class="form-group" id ="cantidadGroup">
                                  <label class="control-label" for="idCantidad">Number</label>
                                  <input type="number" class="form-control" id ="idCantidad" placeholder="How many are you bring?" required>
                                  <span id ="cantidadHelp" class="help-block">Numbers to bring</span>
                                  <span id="iconCantidad" class=""></span>
                                </div>
                                <div class="form-group" id ="nombreGroup">
                                  <label class="control-label" for="idNombre">Name</label>
                                  <input type="text" class="form-control" id ="idNombre" placeholder="" required>
                                  <span id ="nameHelp" class="help-block">The product to bring.</span>
                                  <span id="iconName" class=""></span>
                                </div>
                                <div class="form-group" id ="usuAsociadoGroup">
                                  <label class="control-label" for="idUsuAsociado">Who bring?</label>
                                  <!--<input type="text" class="form-control" id ="idUsuAsociado" placeholder="" required>-->
                                    <select class="form-control" id="idUsuAsociado"> 
                                    <option value='' selected='selected' disabled='disabled'>Nick</option>
                                    <%DBUsuario listarUsuarios = new DBUsuario();
                                    ArrayList<Usuario> array = new ArrayList<Usuario>();
                                    array = listarUsuarios.get();
                                    int i = 0;
                                    Usuario fila;
                                    while ((array != null) && (i<array.size())){
                                        fila=array.get(i);
                                        out.print("<option value='"+fila.getNickUsuario()+"''>"+fila.getNickUsuario() +"</option>");  
                                        i++;
                                    }
                                    %>
                                    </select>	
                                  <span id ="asociadoHelp" class="help-block">User's Name</span>
                                  <span id="iconAsociado" class=""></span>
                                </div>
                                <input type="hidden" id="username" value="<%out.print(usuario);%>">
                                <input type="hidden" id="id_lista" value="<%out.print(idLista);%>">
                                <br></br>
                            </form>
                            </div>
                            <p id ="modalContent"></p>
                        </div>
                        <div class="modal-footer" id = "modalFooter"></div>
                    </div><!-- /.modal-content -->
                </div><!-- /.modal-dialog -->
            </div><!-- /.modal -->
            <div class="modal fade" tabindex="-1" role="dialog" id="modalDel">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                          <button type="button" class="close" data-dismiss="modal">&times;</button>
                          <h4 id = "modalTitleDel" class="modal-title"></h4>
                        </div>
                        <div class="modal-body">
                            <p id ="modalContentDel"></p>
                        </div>
                        <div class="modal-footer" id = "modalFooterDel"></div>
                    </div><!-- /.modal-content -->
                </div><!-- /.modal-dialog -->
            </div><!-- /.modal -->
    </body>
</html>
<% 
   }
%>
