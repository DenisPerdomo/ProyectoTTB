<%-- 
    Document   : insertArticle
    Created on : 16-jun-2016, 19:57:44
    Author     : Denis
--%>
<%@page import="BdTTB.DBLista"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%
    

String nameList = request.getParameter("nameList");

DBLista insertLista = new DBLista();
String result = insertLista.insertList(nameList);
out.print(result);
%>