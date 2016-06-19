<%-- 
    Document   : selectidlista
    Created on : 18-jun-2016, 10:57:22
    Author     : Denis
--%>

<%@page contentType="text/html" pageEncoding="windows-1252"%>
<%
    
int idLista = Integer.parseInt(request.getParameter("idLista")); 
session.setAttribute("id_lista", idLista);
String idListaS = (String) (session.getAttribute("id_lista"));
int idListan = Integer.parseInt(idListaS);
if(idLista == idListan){
    out.print("ok");
}else{
    out.print("error");
}
%>