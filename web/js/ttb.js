/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * Función para simular una parada en javascript
 * @param {type} milliseconds Parámetro del tiempo que queremos esperar en milisegundos.
 * @returns {undefined}
 */
function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
};

/**
 * Funcion para mostrar el modal con el formulario de insertar en la pagina mainlist.
 * @returns {undefined}
 */
function messageAdd(){
    document.getElementById("idCantidad").value = "";
    document.getElementById("idNombre").value = "";
    document.getElementById("idUsuAsociado").value = "";
    $("#modalContent").html("");
    $('#myModal').modal();
    $("#modalTitle").html("ADD A ARTICLE");
    $("#modalFooter").html("<button type='button' class='btn btn-danger' data-dismiss='modal'>NO</button>"+
    "<button type='button' class='btn btn-success' onclick='addArticle()'>SEND</button>");
};

/**
 * Funcion para mostrar el modal con el formulario de insertar en la pagina my List 
 * @returns {undefined}
 */
function messageAddmyList(){
    document.getElementById("idCantidad").value = "";
    document.getElementById("idNombre").value = "";
    $("#modalContent").html("");
    $('#myModal').modal();
    $("#modalTitle").html("ADD A ARTICLE");
    $("#modalFooter").html("<button type='button' class='btn btn-danger' data-dismiss='modal'>NO</button>"+
    "<button type='button' class='btn btn-success' onclick='addArticleMyList()'>SEND</button>");
};

/**
 * Funcion para mostrar el modal con formulario para insertar una lista.
 * @returns {undefined}
 */
function messageAddList(){
    document.getElementById("idNameList").value = "";
    $("#modalContent").html("");
    $('#insertListModal').modal();
    $("#modalTitle").html("ADD A LIST");
    $("#modalFooter").html("<button type='button' class='btn btn-danger' data-dismiss='modal'>NO</button>"+
    "<button type='button' class='btn btn-success' onclick='addList()'>SEND</button>");
};

/**
 * Funcion rellenar los campos del formulario y para mostrar el modal con el formulario para actualizar mainlist.
 * @param {type} idArticle El id del articulo que se va a modificar.
 * @returns {undefined}
 */
function messageUpdate(idArticle){
    var cantidad2 = $("#tablecantidad".concat(idArticle)).text();
    var nombre2 = $("#tablenombre".concat(idArticle)).text();
    var asociado2 = $("#tableasociado".concat(idArticle)).text();
    document.getElementById("idCantidad").value = cantidad2;
    document.getElementById("idNombre").value = nombre2;
    document.getElementById("idUsuAsociado").value = asociado2;
    $("#modalContent").html("");
    $('#myModal').modal();
    $("#modalTitle").html("UPDATE ARTICLE");
    $("#modalFooter").html("<button type='button' class='btn btn-danger' data-dismiss='modal'>Close</button>"+
    "<button type='button' class='btn btn-success' onclick='updateArticle("+idArticle+")'>Update</button>");
};

/**
 * Funcion rellenar los campos del formulario y para mostrar el modal con el formulario para actualizar mylist.
 * @param {type} idArticle El id del articulo de mylist que se va a modificar.
 * @returns {undefined}
 */
function msgUpdateMyList(idArticle){
    var cantidad2 = $("#tablecantidad".concat(idArticle)).text();
    var nombre2 = $("#tablenombre".concat(idArticle)).text();
    document.getElementById("idCantidad").value = cantidad2;
    document.getElementById("idNombre").value = nombre2;
    $("#modalContent").html("");
    $('#myModal').modal();
    $("#modalTitle").html("UPDATE ARTICLE");
    $("#modalFooter").html("<button type='button' class='btn btn-danger' data-dismiss='modal'>Close</button>"+
    "<button type='button' class='btn btn-success' onclick='updateMyList("+idArticle+")'>Update</button>");
};

/**
 * Funcion rellenar los campos del formulario y para mostrar el modal con el formulario para actualizar Lists.
 * @param {type} idLista El id de la lista que se va a modificar.
 * @returns {undefined}
 */
function messageUpdateList(idLista){
    var nombre = $("#nombrelista".concat(idLista)).text();
    document.getElementById("idNameList").value = nombre;
    $("#modalContent").html("");
    $('#insertListModal').modal();
    $("#modalTitle").html("UPDATE LIST");
    $("#modalFooter").html("<button type='button' class='btn btn-danger' data-dismiss='modal'>Close</button>"+
    "<button type='button' class='btn btn-success' onclick='updateList("+idLista+")'>Update</button>");
};

/**
 * Funcion para mostrar el mensaje modal para eliminar un articulo.
 * @param {type} idArticle El id del articulo de mainlist que vamos a eliminar.
 * @returns {undefined}
 */
function messageDel(idArticle){
    var nombre2 = $("#tablenombre".concat(idArticle)).text();
    $('#modalDel').modal();
    $("#modalContentDel").html("Are you sure to delete <span class='bg-danger'>"+nombre2+"</span>?");
    $("#modalTitleDel").html("DELETE A ARTICLE");
    $("#modalFooterDel").html("<button type='button' class='btn btn-danger' data-dismiss='modal'>No</button>"+
    "<button type='button' class='btn btn-success' onclick='deleteArticle("+idArticle+")'>Yes</button>");
};

/**
 * Funcion para mostrar el mensaje modal para eliminar un articulo de mylist.
 * @param {type} idArticle El id del articulo de mylist que vamos a eliminar.
 * @returns {undefined}
 */
function msgDelMyList(idArticle){
    var nombre2 = $("#tablenombre".concat(idArticle)).text();
    $('#modalDel').modal();
    $("#modalContentDel").html("Are you sure to delete <span class='bg-danger'>"+nombre2+"</span>?");
    $("#modalTitleDel").html("DELETE A ARTICLE");
    $("#modalFooterDel").html("<button type='button' class='btn btn-danger' data-dismiss='modal'>No</button>"+
    "<button type='button' class='btn btn-success' onclick='deleteMyList("+idArticle+")'>Yes</button>");
};

/**
 * Funcion para mostrar el mensaje modal para eliminar una lista.
 * @param {type} idList El id de la lista que vamos a eliminar.
 * @returns {undefined}
 */
function messageDelList(idList){
    var nombre = $("#nombrelista".concat(idList)).text();
    $('#delListModal').modal();
    $("#modalContentDel").html("Are you sure to delete <span class='bg-danger'>"+nombre+"</span>?");
    $("#modalTitleDel").html("DELETE A ARTICLE");
    $("#modalFooterDel").html("<button type='button' class='btn btn-danger' data-dismiss='modal'>No</button>"+
    "<button type='button' class='btn btn-success' onclick='deleteList("+idList+")'>Yes</button>");
};
/**
 * Funcion para mostrar el modal para hacer el logout.
 * @returns {undefined}
 */
function messageLogOut(){
    $('#modalLogOut').modal();
    $("#titleLogOut").html("LOG OUT");
    $("#contenLogOut").html("Are you sure to <span class='bg-danger'>Log Out</span>?");
    $("#footerLogOut").html("<button type='button' class='btn btn-danger' data-dismiss='modal'>No</button>"+
    "<a class='btn btn-success' href='logout.jsp'>Yes</button>");
};
//**************TODO RELACIONADO CON MAINLIST**************************
/**
 * Funcion para marcar el articulo como (si o no) comprado, en el mainlist.
 * @param {type} idArticulo Id del articulo que vamos a cambiar su estado.
 * @returns {undefined}
 */
function selectArticulo(idArticulo){
    var parametros = {
      "idArticulo" : idArticulo 
    };
    $.ajax({
      data:   parametros,
      url:   'selectidarticle.jsp',
      type:  'post',
      beforeSend: function () {
       // $("#modalContent").html("Insert data&hellip;");
       // $("#modalFooter").html("");
       //  $('#myModal').modal({backdrop: 'static'});
      },
      success:  function (msg) {
        var var2=msg.split("\n").join("");;
        if(var2 == 'ok'){
            $('body,html').animate({scrollTop : 0}, 500);
            $('#contenido').fadeOut();
            $('#contenido').load("contList.jsp");
            sleep(300);
            $('#contenido').fadeIn();
        }else if(var2 == 'error'){
            $("#modalContent").html("");
            $("#modalContent").html("No se ha podido seleccionar");
        }
      }
  });    
}

/**
 * Función para añadir un articulo en la mainlist.
 * @returns {undefined}
 */
function addArticle(){
    var cantidad = document.getElementById("idCantidad").value;
    var nombre = document.getElementById("idNombre").value;
    var asociado = document.getElementById("idUsuAsociado").value;
    var usu_prop = jQuery('#username').val();
    var id_lista = jQuery('#id_lista').val();
    var parametros = {
      "cantidad" : cantidad,
      "nombre" : nombre,
      "asociado" : asociado,
      "id_lista" : id_lista,
      "usu_prop" : usu_prop  
    };
    $.ajax({
      data:   parametros,
      url:   'insertArticle.jsp',
      type:  'post',
      beforeSend: function () {
        $("#modalContent").html("Insert data&hellip;");
        $("#modalFooter").html("");
        $('#myModal').modal({backdrop: 'static'});
      },
      success:  function (msg) {
        var var2=msg.split("\n").join("");;
        if(var2 == 'ok'){
            $("#modalContent").html("");
            $("#modalContent").html("Insertado Correctamente");
            document.getElementById("idCantidad").value = "";
            document.getElementById("idNombre").value = "";
            document.getElementById("idUsuAsociado").value = "";
            $('#myModal').modal('hide');
            $('body,html').animate({scrollTop : 0}, 500);
            $('#contenido').fadeOut();
            $('#contenido').load("contList.jsp");
            sleep(300);
            $('#contenido').fadeIn();
        }else if(var2 == 'error'){
            $("#modalContent").html("");
            $("#modalContent").html("Insertado Mal");
        }
          //$('#myModal').modal('hide');
          //$('body,html').animate({scrollTop : 0}, 500);
      }
  });
}

/**
 * Funcion para modificar un artículo de la mainlist.
 * @param {type} idArticle Id del articulo que vamos a actualizar.
 * @returns {undefined}
 */
function updateArticle(idArticle){
    var cantidad = document.getElementById("idCantidad").value;
    var nombre = document.getElementById("idNombre").value;
    var asociado = document.getElementById("idUsuAsociado").value;
    var usu_prop = jQuery('#username').val();
    var id_lista = jQuery('#id_lista').val();
    var parametros = {
      "idArticle" : idArticle,
      "cantidad" : cantidad,
      "nombre" : nombre,
      "asociado" : asociado,
      "id_lista" : id_lista,
      "usu_prop" : usu_prop  
    };
    $.ajax({
      data:   parametros,
      url:   'updateArticle.jsp',
      type:  'post',
      beforeSend: function () {
        $("#modalContent").html("Update data&hellip;");
        $("#modalFooter").html("");
        $('#myModal').modal({backdrop: 'static'});
      },
      success:  function (msg) {
        var var2=msg.split("\n").join("");;
        if(var2 === 'ok'){
            $("#modalContent").html("");
            $("#modalContent").html("Insertado Correctamente");
            document.getElementById("idCantidad").value = "";
            document.getElementById("idNombre").value = "";
            document.getElementById("idUsuAsociado").value = "";
            $('#myModal').modal('hide');
            $('#contenido').fadeOut();
            $('#contenido').load("contList.jsp");
            sleep(300);
            $('#contenido').fadeIn();
        }else if(var2 === 'error'){
            $("#modalContent").html("");
            $("#modalContent").html("Update Wrong");
            $("#modalContent").html("");
        }
          //$('#myModal').modal('hide');
          //$('body,html').animate({scrollTop : 0}, 500);
      }
  });
}

/**
 * Funcion para eliminar un articulo de la mainlist.
 * @param {type} idArticle Id del articulo que se vamos a eliminar.
 * @returns {undefined}
 */
function deleteArticle(idArticle){
    var parametros = {
      "idArticle" : idArticle 
    };
    $.ajax({
      data:   parametros,
      url:   'deleteArticle.jsp',
      type:  'post',
      beforeSend: function () {
        $("#modalContentDel").html("Deleting data&hellip;");
        $("#modalFooterDel").html("");
        $('#modalDel').modal({backdrop: 'static'});
      },
      success:  function (msg) {
        var var2=msg.split("\n").join("");;
        if(var2 === 'ok'){
            $("#modalContentDel").html("Delete Succesfull");
            document.getElementById("idCantidad").value = "";
            document.getElementById("idNombre").value = "";
            document.getElementById("idUsuAsociado").value = "";
            $('#modalDel').modal('hide');
            $('#contenido').fadeOut();
            $('#contenido').load("contList.jsp");
            sleep(300);
            $('#contenido').fadeIn();
        }else if(var2 === 'error'){
            $("#modalContent").html("");
            $("#modalContent").html("Update Wrong");
            $("#modalContent").html("");
        }
          //$('#myModal').modal('hide');
          //$('body,html').animate({scrollTop : 0}, 500);
      }
  });
}
//**************TERMINA TODO RELACIONADO CON MAINLIST**************************

//**************TODO RELACIONADO CON MYLIST************************************

/**
 * Funcion para marcar el articulo como (si o no) comprado, en mylist.
 * @param {type} idArticulo Id del articulo que vamos a cambiar el estado.
 * @returns {undefined}
 */
function selectMylist(idArticulo){
    var parametros = {
      "idArticulo" : idArticulo 
    };
    $.ajax({
      data:   parametros,
      url:   'selectidarticle.jsp',
      type:  'post',
      beforeSend: function () {
       // $("#modalContent").html("Insert data&hellip;");
       // $("#modalFooter").html("");
       //  $('#myModal').modal({backdrop: 'static'});
      },
      success:  function (msg) {
        var var2=msg.split("\n").join("");;
        if(var2 == 'ok'){
            $('body,html').animate({scrollTop : 0}, 500);
            $('#contenido').fadeOut();
            $('#contenido').load("contmyList.jsp");
            sleep(300);
            $('#contenido').fadeIn();
        }else if(var2 == 'error'){
            $("#modalContent").html("");
            $("#modalContent").html("Error al marcarlo");
        }
      }
  });    
}

/**
 * Funcion para añadir un articulo a mylist.
 * @returns {undefined}
 */
function addArticleMyList(){
    var cantidad = document.getElementById("idCantidad").value;
    var nombre = document.getElementById("idNombre").value;
    var usu_prop = jQuery('#username').val();
    var id_lista = jQuery('#id_lista').val();
    var parametros = {
      "cantidad" : cantidad,
      "nombre" : nombre,
      "asociado" : usu_prop,
      "id_lista" : id_lista,
      "usu_prop" : usu_prop  
    };
    $.ajax({
      data:   parametros,
      url:   'insertArticle.jsp',
      type:  'post',
      beforeSend: function () {
        $("#modalContent").html("Insert data&hellip;");
        $("#modalFooter").html("");
        $('#myModal').modal({backdrop: 'static'});
      },
      success:  function (msg) {
        var var2=msg.split("\n").join("");;
        if(var2 == 'ok'){
            $("#modalContent").html("");
            $("#modalContent").html("Insertado Correctamente");
            document.getElementById("idCantidad").value = "";
            document.getElementById("idNombre").value = "";
            $('#myModal').modal('hide');
            $('body,html').animate({scrollTop : 0}, 500);
            $('#contenido').fadeOut();
            $('#contenido').load("contmyList.jsp");
            sleep(300);
            $('#contenido').fadeIn();
        }else if(var2 == 'error'){
            $("#modalContent").html("");
            $("#modalContent").html("Insertado Mal");
        }
          //$('#myModal').modal('hide');
          //$('body,html').animate({scrollTop : 0}, 500);
      }
  });
}

/**
 * Funcion para actualizar un articulo de mylist.
 * @param {type} idArticle Id del articulo de mylist que vamos a actulizar.
 * @returns {undefined}
 */
function updateMyList(idArticle){
    var cantidad = document.getElementById("idCantidad").value;
    var nombre = document.getElementById("idNombre").value;
    var asociado = jQuery('#username').val();
    var usu_prop = $("#tableusu".concat(idArticle)).text();
    var id_lista = jQuery('#id_lista').val();
    var parametros = {
      "idArticle" : idArticle,
      "cantidad" : cantidad,
      "nombre" : nombre,
      "asociado" : asociado,
      "id_lista" : id_lista,
      "usu_prop" : usu_prop  
    };
    $.ajax({
      data:   parametros,
      url:   'updateArticle.jsp',
      type:  'post',
      beforeSend: function () {
        $("#modalContent").html("Update data&hellip;");
        $("#modalFooter").html("");
        $('#myModal').modal({backdrop: 'static'});
      },
      success:  function (msg) {
        var var2=msg.split("\n").join("");;
        if(var2 === 'ok'){
            $("#modalContent").html("");
            $("#modalContent").html("Update Succesfull");
            document.getElementById("idCantidad").value = "";
            document.getElementById("idNombre").value = "";
            $('#myModal').modal('hide');
            $('#contenido').fadeOut();
            $('#contenido').load("contmyList.jsp");
            sleep(300);
            $('#contenido').fadeIn();
        }else if(var2 === 'error'){
            $("#modalContent").html("");
            $("#modalContent").html("Update Wrong");
            $("#modalContent").html("");
        }
          //$('#myModal').modal('hide');
          //$('body,html').animate({scrollTop : 0}, 500);
      }
  });
}

/**
 * Funcion para borrar un articulo de mylist.
 * @param {type} idArticle Id del articulo de mylist que vamos a borrar.
 * @returns {undefined}
 */
function deleteMyList(idArticle){
    var parametros = {
      "idArticle" : idArticle 
    };
    $.ajax({
      data:   parametros,
      url:   'deleteArticle.jsp',
      type:  'post',
      beforeSend: function () {
        $("#modalContentDel").html("Deleting data&hellip;");
        $("#modalFooterDel").html("");
        $('#modalDel').modal({backdrop: 'static'});
      },
      success:  function (msg) {
        var var2=msg.split("\n").join("");;
        if(var2 === 'ok'){
            $("#modalContentDel").html("Delete Succesfull");
            $('#modalDel').modal('hide');
            $('#contenido').fadeOut();
            $('#contenido').load("contmyList.jsp");
            sleep(300);
            $('#contenido').fadeIn();
        }else if(var2 === 'error'){
            $("#modalContent").html("");
            $("#modalContent").html("Update Wrong");
            $("#modalContent").html("");
        }
          //$('#myModal').modal('hide');
          //$('body,html').animate({scrollTop : 0}, 500);
      }
  });
}
//**************TERMINA TODO RELACIONADO CON MYLIST*****************

//**************TODO RELACIONADO CON LISTS**************************

/**
 * Funcion para seleccionar la lista con la que vamos a trabajar.
 * @param {type} idLista Id de la lista que vamos a seleccionar.
 * @returns {undefined}
 */
function selectLista(idLista){
    var parametros = {
      "idLista" : idLista 
    };
    $.ajax({
      data:   parametros,
      url:   'selectidlista.jsp',
      type:  'post',
      beforeSend: function () {
       // $("#modalContent").html("Insert data&hellip;");
       // $("#modalFooter").html("");
       //  $('#myModal').modal({backdrop: 'static'});
      },
      success:  function (msg) {
        var var2=msg.split("\n").join("");
        window.location.reload(false);
      }
  });    
}

/**
 * Funcion para añadir una lista nueva.
 * @returns {undefined}
 */
function addList(){
    var nameList = document.getElementById("idNameList").value;
    var parametros = {
      "nameList" : nameList  
    };
    $.ajax({
      data:   parametros,
      url:   'insertList.jsp',
      type:  'post',
      beforeSend: function () {
        $("#modalContent").html("Insert data&hellip;");
        $("#modalFooter").html("");
        $('#insertListModal').modal({backdrop: 'static'});
      },
      success:  function (msg) {
        var var2=msg.split("\n").join("");;
        if(var2 == 'ok'){
            $("#modalContent").html("");
            $("#modalContent").html("Insertado Correctamente");
            document.getElementById("idNameList").value = "";
            $('#insertListModal').modal('hide');
            window.location.reload(false);
        }else if(var2 == 'error'){
            $("#modalContent").html("");
            $("#modalContent").html("Insertado Mal");
        }
          //$('#myModal').modal('hide');
          //$('body,html').animate({scrollTop : 0}, 500);
      }
  });
}

/**
 * Funcion para modificar una lista existente.
 * @param {type} idLista Id de la lista que vamos a actualizar.
 * @returns {undefined}
 */
function updateList(idLista){
    var nameList = document.getElementById("idNameList").value;
    var parametros = {
      "idLista" : idLista,
      "nameList" : nameList  
    };
    $.ajax({
      data:   parametros,
      url:   'updateList.jsp',
      type:  'post',
      beforeSend: function () {
        $("#modalContent").html("Update data&hellip;");
        $("#modalFooter").html("");
        $('#myModal').modal({backdrop: 'static'});
      },
      success:  function (msg) {
        var var2=msg.split("\n").join("");;
        if(var2 === 'ok'){
            $("#modalContent").html("");
            $("#modalContent").html("Update Succesful");
            document.getElementById("idNameList").value = "";
            $('#insertListModal').modal('hide');
            window.location.reload(false);
        }else if(var2 === 'error'){
            $("#modalContent").html("");
            $("#modalContent").html("Update Wrong");
        }
          //$('#myModal').modal('hide');
          //$('body,html').animate({scrollTop : 0}, 500);
      }
  });
}

/**
 * Funcion para borrar una lista.
 * @param {type} idList Id de la lista que vamos a borrar.
 * @returns {undefined}
 */
function deleteList(idList){
    var parametros = {
      "idList" : idList 
    };
    $.ajax({
      data:   parametros,
      url:   'deleteList.jsp',
      type:  'post',
      beforeSend: function () {
        $("#modalContentDel").html("Deleting data&hellip;");
        $("#modalFooterDel").html("");
        $('#modalDel').modal({backdrop: 'static'});
      },
      success:  function (msg) {
        var var2=msg.split("\n").join("");;
        if(var2 === 'ok'){
            $("#modalContentDel").html("Delete Succesfull");
            $('#modalDel').modal('hide');
            $('#insertListModal').modal('hide');
            window.location.reload(false);
        }else if(var2 === 'error'){
            $("#modalContent").html("");
            $("#modalContent").html("Delete Wrong");
            $("#modalContent").html("");
        }
          //$('#myModal').modal('hide');
          //$('body,html').animate({scrollTop : 0}, 500);
      }
  });
}

//**************TERMINA TODO RELACIONADO CON LISTS*****************
