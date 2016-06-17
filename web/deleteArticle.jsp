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

DbArticulo Articulo = new DbArticulo();
String result = Articulo.deleteArticle(idArticle);
out.print(result);
%>
