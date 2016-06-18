<%-- 
    Document   : updateArticle
    Created on : 17-jun-2016, 12:30:48
    Author     : Denis
--%>
<%@page import="BdTTB.DBLista"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%
    
int idList = Integer.parseInt(request.getParameter("idList"));

DBLista Lista = new DBLista();
String result = Lista.deleteList(idList);
out.print(result);
%>
