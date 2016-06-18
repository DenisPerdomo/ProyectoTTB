<%-- 
    Document   : selectidlista
    Created on : 18-jun-2016, 10:57:22
    Author     : Denis
--%>

<%@page import="BdTTB.DbArticulo"%>
<%@page contentType="text/html" pageEncoding="windows-1252"%>
<%
    
int idArticulo = Integer.parseInt(request.getParameter("idArticulo")); 
DbArticulo selectArticulo = new DbArticulo();
String result = selectArticulo.updateState(idArticulo);
out.print(result);
%>