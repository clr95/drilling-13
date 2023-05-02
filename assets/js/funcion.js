function showModal(link) {
  let src = $(link).children("img").attr("src");
  let titulo = $(link).closest('.card').find('.card-title').text();
  let descripcion = $(link).closest('.card').find('.card-text').text();
  $(".modal-imagen").attr("src", src);
  $(".modal-titulo").text(titulo);
  $(".modal-descripcion").text(descripcion);
  $('#imagenModal').modal('show');
}

function mostrarFormulario() {
   console.log("entro aquí")
    let formulario = document.getElementById("idFormulario1");
    formulario.style.display="block";
  }
  function mostrarFormulario2() {
    console.log("entro aquí")
     let formulario = document.getElementById("idFormulario2");
     formulario.style.display="block";
   }

   function envioFormulario() {
    console.log("Enviar");
    let nombre = document.getElementById("nombre1").value;
    let correo = document.getElementById("correo1").value;
    alert(`Gracias ${nombre} te enviaremos pronto una respuesta a ${correo}`);
 }

 function envioFormulario2() {
  console.log("Enviar");
  let nombre2 = $("#nombre2").val();
  let correo2 = $("#correo2").val();
  let cantidad = $("#CANTIDAD").val();
  alert(`Estimado: ${nombre2} agradecemos reservar con nosotros. Hemos registrado confirmación de tu reserva para ${cantidad}. Se ha enviado el código de confirmación al correo ${correo2}. Gracias por preferirnos`);
}

