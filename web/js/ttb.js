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

$(document).ready(function(){
    $('#contenido').fadeOut();
    $('#contenido').load("contList.jsp");
    sleep(300);
    $('#contenido').fadeIn();
});

function prueba(idArticle){
    alert(idArticle);
    var cantidad2 = $("#tablecantidad".concat(idArticle)).text();
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

function messageDel(idArticle){
    var nombre2 = $("#tablenombre".concat(idArticle)).text();
    $('#modalDel').modal();
    $("#modalContentDel").html("Are you sure to delete "+nombre2+"?");
    $("#modalTitleDel").html("DELETE A ARTICLE");
    $("#modalFooterDel").html("<button type='button' class='btn btn-danger' data-dismiss='modal'>No</button>"+
    "<button type='button' class='btn btn-success' onclick='deleteArticle("+idArticle+")'>Yes</button>");
};

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
            $('#contenido').fadeOut();
            $('#contenido').load("contList.jsp");
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
    //var usu_prop = document.getElementById("username");
    var usu_prop = jQuery('#username').val();
    //var id_lista = document.getElementById("id_lista");
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


