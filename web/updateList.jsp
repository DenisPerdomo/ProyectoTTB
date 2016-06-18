<%-- 
    Document   : updateArticle
    Created on : 17-jun-2016, 12:30:48
    Author     : Denis
--%>

<%@page import="BdTTB.DBLista"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%
    
String nameList = request.getParameter("nameList");
int idLista = Integer.parseInt(request.getParameter("idLista"));

DBLista updateLista = new DBLista();
String result = updateLista.updateList(idLista,nameList);
out.print(result);
%>
