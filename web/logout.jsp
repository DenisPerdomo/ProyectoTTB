<%-- 
    Document   : logout
    Created on : 19-jun-2016, 6:15:05
    Author     : Denis
--%>

<%@page contentType="text/html" pageEncoding="windows-1252"%>
<%

  session.invalidate();//Cierra la sesión
  response.sendRedirect("index.jsp");
  
%>