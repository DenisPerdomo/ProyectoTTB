<%-- 
    Document   : prueba
    Created on : 17-jun-2016, 11:36:35
    Author     : Denis
--%>

<%@page import="java.util.ArrayList"%>
<%@page import="BdTTB.Articulo"%>
<%@page import="BdTTB.DbArticulo"%>
            <div class="col-md-3"></div>
            <div class="col-md-6">
                <a style="font-size: 22pt; color:#5CB85C;" href="javascript:void(0)" onclick="messageAddmyList();"> <span class="glyphicon glyphicon-plus"></span></a>
                <table class="table table-condensed table-hover">
                    <thead>
                      <tr>
                        <th></th>
                        <th>#</th>
                        <th>Name</th>
                        <th>User</th>
                        <th>Who bring</th>
                        <th></th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                        <%
                            int idLista = (int) (session.getAttribute("id_lista"));
                            String usuario = (String) session.getAttribute("nick");
                            DbArticulo selectArticulos = new DbArticulo();
                            ArrayList<Articulo> array = new ArrayList<Articulo>();
                            array = selectArticulos.getmylist(idLista,usuario);
                            int i = 0;
                            String articuloNombre = "";
                            String condicion = "no";
                            Articulo fila;
                            while((array != null) && (i<array.size())){
                                fila = array.get(i);
                                if(fila.getComprado().compareTo("no")==0){
                                    out.print("<tr id='"+fila.getIdArticulo()+"'><td><a style='font-size: 18pt;' href='javascript:void(0)' onclick = 'selectMylist("+fila.getIdArticulo()+")'><span class='glyphicon glyphicon-check'></span></a></td>");
                                    out.print("<td><span id='tablecantidad"+fila.getIdArticulo()+"'>");
                                    out.print(fila.getCantidad());
                                    out.print("</span></td><td><span id='tablenombre"+fila.getIdArticulo()+"'>");
                                    out.print(fila.getNombreArticulo());
                                    out.print("</span></td><td><span id='tableusu"+fila.getIdArticulo()+"'>");
                                    out.print(fila.getNick_usuario());
                                    out.print("</span></td><td><span id='tableasociado"+fila.getIdArticulo()+"'>");
                                    out.print(fila.getUsu_asociado());
                                    out.print("</span></td><td>");
                                    out.print("<a style='font-size: 18pt; color:#FFC20E;' href='javascript:void(0)' onclick='msgUpdateMyList("+fila.getIdArticulo()+")'><span class='glyphicon glyphicon-edit'></span></a>");
                                    out.print("</td><td>");
                                    out.print("<a style='font-size: 18pt; color:#D9534F;' href='javascript:void(0)' onclick='messageDel("+fila.getIdArticulo()+")'><span class='glyphicon glyphicon-remove'></span></a>");
                                    out.print("</td></tr>");
                                    i++;
                                }else{
                                    out.print("<tr class='success' id='"+fila.getIdArticulo()+"'><td><a style='font-size: 18pt;' href='javascript:void(0)' onclick = 'selectArticulo("+fila.getIdArticulo()+")'><span class='glyphicon glyphicon-check'></span></a></td>");
                                    out.print("<td><s><span id='tablecantidad"+fila.getIdArticulo()+"'>");
                                    out.print(fila.getCantidad());
                                    out.print("</span></s></td><td><s><span id='tablenombre"+fila.getIdArticulo()+"'>");
                                    out.print(fila.getNombreArticulo());
                                    out.print("</span></s></td><td><s><span id='tableusu"+fila.getIdArticulo()+"'>");
                                    out.print(fila.getNick_usuario());
                                    out.print("</span></s></td><td><s><span id='tableasociado"+fila.getIdArticulo()+"'>");
                                    out.print(fila.getUsu_asociado());
                                    out.print("</span></s></td><td>");
                                    out.print("<a style='font-size: 18pt; color:#FFC20E;' href='javascript:void(0)' onclick='msgUpdateMyList("+fila.getIdArticulo()+")'><span class='glyphicon glyphicon-edit'></span></a>");
                                    out.print("</td><td>");
                                    out.print("<a style='font-size: 18pt; color:#D9534F;' href='javascript:void(0)' onclick='messageDel("+fila.getIdArticulo()+")'><span class='glyphicon glyphicon-remove'></span></a>");
                                    out.print("</td></tr>");
                                    i++;
                                }
                            }
                        %>
                    </tbody>
              </table>
            </div>
            <div class="col-md-3"></div>
