<%-- 
    Document   : lists
    Created on : 16-jun-2016, 18:11:37
    Author     : Denis
--%>

<%@page import="BdTTB.DBLista"%>
<%@page import="java.util.ArrayList"%>
<%@page import="BdTTB.Lista"%>
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
                $("#<%out.print(idLista);%>").removeAttr("class");
                $("#<%out.print(idLista);%>").addClass("warning");
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
                    <li class="active"><a href="lists.jsp">List</a></li>
                    <li><a href="mainlist.jsp">Main List</a></li>
                    <li><a href="mylist.jsp">My List</a></li>
                </ul>
                <p class="navbar-text pull-right">
                    <a href="#" class="navbar-link">Help</a>
                </p>
                <p class="navbar-text pull-right">
                    <a href="#" class="navbar-link">Log out</a>
                </p>
            </div><!--/.nav-collapse -->
          </div>
        </nav>
        <div class="container" id="contenidoList" >
            <div class="col-md-3"></div>
            <div class="col-md-6">
                <a style="font-size: 22pt; color:#5CB85C;" href="javascript:void(0)" onclick="messageAddList();"> <span class="glyphicon glyphicon-plus"></span></a>
                <table class="table table-condensed table-hover">
                    <thead>
                      <tr>
                        <th></th>
                        <th>List ID</th>
                        <th>List Name</th>
                        <th>List Date</th>
                        <th></th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                        <%
                            DBLista selectListas = new DBLista();
                            ArrayList<Lista> array = new ArrayList<Lista>();
                            array = selectListas.get();
                            int i = 0;
                            String articuloNombre = "";
                            Lista fila;
                            while((array != null) && (i<array.size())){
                                fila = array.get(i);
                                out.print("<tr id='"+fila.getId_lista()+"'><td><a style='font-size: 18pt;' href='javascript:void(0)' onclick = 'selectLista("+fila.getId_lista()+")'><span class='glyphicon glyphicon-check'></span></a></td>");
                                out.print("<td><span id='idlista"+fila.getId_lista()+"'>");
                                out.print(fila.getId_lista());
                                out.print("</span></td><td><span id='nombrelista"+fila.getId_lista()+"'>");
                                out.print(fila.getNombre_lista());
                                out.print("</span></td><td><span id='fechalista"+fila.getId_lista()+"'>");
                                out.print(fila.getFecha_lista());
                                out.print("</span></td><td>");
                                out.print("<a style='font-size: 18pt; color:#FFC20E;' href='javascript:void(0)' onclick='messageUpdateList("+fila.getId_lista()+")'><span class='glyphicon glyphicon-edit'></span></a>");
                                out.print("</td><td>");
                                out.print("<a style='font-size: 18pt; color:#D9534F;' href='javascript:void(0)' onclick='messageDelList("+fila.getId_lista()+")'><span class='glyphicon glyphicon-remove'></span></a>");
                                out.print("</td></tr>");
                                i++;
                            }
                        %>
                    </tbody>
              </table>
            </div>
            <div class="col-md-3"></div>
        </div>
        <div class="modal fade" tabindex="-1" role="dialog" id="insertListModal">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                         <button type="button" class="close" data-dismiss="modal">&times;</button>
                          <h4 id = "modalTitle" class="modal-title"></h4>
                    </div>
                    <div class="modal-body">
                        <div id="modalForm">
                            <form id ="formAddList" name ="formsampling" role ="form">
                               <div class="form-group" id ="nameListGroup">
                                  <label class="control-label" for="idNameList">List Name</label>
                                  <input type="text" class="form-control" id ="idNameList" placeholder="List Name" required>
                                  <span id ="nameListHelp" class="help-block">Name name you want for the list.</span>
                                  <span id="iconNameList" class=""></span>
                                </div>
                                <input type="hidden" id="username" value="charlie">
                                <input type="hidden" id="id_lista" value="1">
                                <br></br>
                            </form>
                            </div>
                            <p id ="modalContent"></p>
                        </div>
                        <div class="modal-footer" id = "modalFooter"></div>
                    </div><!-- /.modal-content -->
                </div><!-- /.modal-dialog -->
            </div><!-- /.modal -->
            <div class="modal fade" tabindex="-1" role="dialog" id="delListModal">
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
