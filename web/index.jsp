<%-- 
    Document   : index
    Created on : 16-jun-2016, 9:49:53
    Author     : Denis
--%>

<%@page contentType="text/html" pageEncoding="windows-1252"%>
<%
   //Obtengo la variable de la sesion
   Object usuario = (String) session.getAttribute("nick");//Recoge la session
   //int idLista = Integer.parseInt(idListaS);
   //Comparamos su usario es null, en caso afirmativo redirige a la pantalla de logeo.
   if (usuario!=null){
       response.sendRedirect("lists.jsp");
   }
   //si el usuario es correcto cargamos la página.
   else{
%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=windows-1252">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>THINGS TO BRING</title>
        <meta charset="utf-8" />
        <link rel="stylesheet" href="css/bootstrap.min.css" />
        <link rel="stylesheet" href="css/normalize.css" />
        <link rel="stylesheet" href="css/navbar-fixed-top.css">
        <script type="text/javascript" src="js/jquery-1.12.0.js"></script>
        <script type="text/javascript" src="js/bootstrap.min.js"></script>
    </head>
    <body>
        <div class="container">
            <div class="col-md-4"></div>
            <div class="col-md-4">
                <img src="imgs/ttblogo.png" class="responsive center-block" width="65%"/>
                <br>
                <form class="form-signin" action ="Login" method="POST">
                  <h2 class="form-signin-heading">Please sign in</h2>
                  <div class="form-group">
                  <label for="inputNick" class="sr-only">User Nick</label>
                  <input type="text" id="inputNick" name = "usuario" class="form-control" placeholder="User Nick" required autofocus>
                  </div>
                  <div class="form-group">
                  <label for="inputPassword" class="sr-only">Password</label>
                  <input type="password" id="inputPassword" name="password" class="form-control" placeholder="Password" required>
                  </div>
                  <button class="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
                </form>
            </div>
            <div class="col-md-4"></div>
        </div> <!-- /container -->
    </body>
</html>
<% 
   }
%>
