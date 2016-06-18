/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
/**
 * 
 * @param {type} idArticle
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

function prueba(){
    alert("funciona");
}
/**
 * 
 * @returns {undefined}
 */
function messageAdd(){
    document.getElementById("idCantidad").value = "";
    document.getElementById("idNombre").value = "";
    document.getElementById("idUsuAsociado").value = "";
    $('#myModal').modal();
    $("#modalTitle").html("ADD A ARTICLE");
    $("#modalFooter").html("<button type='button' class='btn btn-danger' data-dismiss='modal'>NO</button>"+
    "<button type='button' class='btn btn-success' onclick='addArticle()'>SEND</button>");
};

function messageAddmyList(){
    document.getElementById("idCantidad").value = "";
    document.getElementById("idNombre").value = "";
    $('#myModal').modal();
    $("#modalTitle").html("ADD A ARTICLE");
    $("#modalFooter").html("<button type='button' class='btn btn-danger' data-dismiss='modal'>NO</button>"+
    "<button type='button' class='btn btn-success' onclick='addArticleMyList()'>SEND</button>");
};

/**
 * 
 * @param {type} idArticle
 * @returns {undefined}
 */
function messageUpdate(idArticle){
    var cantidad2 = $("#tablecantidad".concat(idArticle)).text();
    var nombre2 = $("#tablenombre".concat(idArticle)).text();
    var asociado2 = $("#tableasociado".concat(idArticle)).text();
    document.getElementById("idCantidad").value = cantidad2;
    document.getElementById("idNombre").value = nombre2;
    document.getElementById("idUsuAsociado").value = asociado2;
    $('#myModal').modal();
    $("#modalTitle").html("UPDATE ARTICLE");
    $("#modalFooter").html("<button type='button' class='btn btn-danger' data-dismiss='modal'>Close</button>"+
    "<button type='button' class='btn btn-success' onclick='updateArticle("+idArticle+")'>Update</button>");
};

function msgUpdateMyList(idArticle){
    var cantidad2 = $("#tablecantidad".concat(idArticle)).text();
    var nombre2 = $("#tablenombre".concat(idArticle)).text();
    document.getElementById("idCantidad").value = cantidad2;
    document.getElementById("idNombre").value = nombre2;
    $('#myModal').modal();
    $("#modalTitle").html("UPDATE ARTICLE");
    $("#modalFooter").html("<button type='button' class='btn btn-danger' data-dismiss='modal'>Close</button>"+
    "<button type='button' class='btn btn-success' onclick='updateMyList("+idArticle+")'>Update</button>");
};

function messageDel(idArticle){
    var nombre2 = $("#tablenombre".concat(idArticle)).text();
    $('#modalDel').modal();
    $("#modalContentDel").html("Are you sure to delete "+nombre2+"?");
    $("#modalTitleDel").html("DELETE A ARTICLE");
    $("#modalFooterDel").html("<button type='button' class='btn btn-danger' data-dismiss='modal'>No</button>"+
    "<button type='button' class='btn btn-success' onclick='deleteArticle("+idArticle+")'>Yes</button>");
};

function messageAddList(){
    document.getElementById("idNameList").value = "";
    $('#insertListModal').modal();
    $("#modalTitle").html("ADD A LIST");
    $("#modalFooter").html("<button type='button' class='btn btn-danger' data-dismiss='modal'>NO</button>"+
    "<button type='button' class='btn btn-success' onclick='addList()'>SEND</button>");
};

function messageUpdateList(idLista){
    var nombre = $("#nombrelista".concat(idLista)).text();
    document.getElementById("idNameList").value = nombre;
    $('#insertListModal').modal();
    $("#modalTitle").html("UPDATE LIST");
    $("#modalFooter").html("<button type='button' class='btn btn-danger' data-dismiss='modal'>Close</button>"+
    "<button type='button' class='btn btn-success' onclick='updateList("+idLista+")'>Update</button>");
};

function messageDelList(idList){
    var nombre = $("#nombrelista".concat(idList)).text();
    $('#delListModal').modal();
    $("#modalContentDel").html("Are you sure to delete <span class='bg-danger'>"+nombre+"</span>?");
    $("#modalTitleDel").html("DELETE A ARTICLE");
    $("#modalFooterDel").html("<button type='button' class='btn btn-danger' data-dismiss='modal'>No</button>"+
    "<button type='button' class='btn btn-success' onclick='deleteList("+idList+")'>Yes</button>");
};

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
            $("#modalContent").html("Insertado Mal");
        }
      }
  });    
}

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
            $('#contenido').load("contList.jsp");
            sleep(300);
            $('#contenido').fadeIn();
        }else if(var2 == 'error'){
            $("#modalContent").html("");
            $("#modalContent").html("Insertado Mal");
        }
      }
  });    
}

/**
 * 
 * @returns {undefined}
 */
function addArticle(){
    var cantidad = document.getElementById("idCantidad").value;
    var nombre = document.getElementById("idNombre").value;
    var asociado = document.getElementById("idUsuAsociado").value;
    //var usu_prop = document.getElementById("username");
    var usu_prop = jQuery('#username').val();
    //var id_lista = document.getElementById("id_lista");
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
            $('#contenido').load("contmyList.jsp");
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
 * Funcion para insertar los datos con la función de ajax de jquery.
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
