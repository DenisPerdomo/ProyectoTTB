<%-- 
    Document   : updateArticle
    Created on : 17-jun-2016, 12:30:48
    Author     : Denis
--%>

<%@page import="BdTTB.DbArticulo"%>
<%@page import="BdTTB.Articulo"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%
    
int idArticle = Integer.parseInt(request.getParameter("idArticle"));
int cantidad = Integer.parseInt(request.getParameter("cantidad"));
String nombre = request.getParameter("nombre");
String asociado = request.getParameter("asociado");
String usu_prop = request.getParameter("usu_prop");
int id_lista = Integer.parseInt(request.getParameter("id_lista"));

DbArticulo updateArticulo = new DbArticulo();
String result = updateArticulo.updateArticle(idArticle, nombre, cantidad, id_lista, usu_prop, asociado);
out.print(result);
%>
