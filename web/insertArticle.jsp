<%-- 
    Document   : insertArticle
    Created on : 16-jun-2016, 19:57:44
    Author     : Denis
--%>
<%@page import="BdTTB.DbArticulo"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%
    
int cantidad = Integer.parseInt(request.getParameter("cantidad"));
String nombre = request.getParameter("nombre");
String asociado = request.getParameter("asociado");
String usu_prop = request.getParameter("usu_prop");
int id_lista = Integer.parseInt(request.getParameter("id_lista"));

DbArticulo insertArticulo = new DbArticulo();
String result = insertArticulo.insertArticle(nombre, cantidad, id_lista, usu_prop, asociado);
out.print(result);
%>