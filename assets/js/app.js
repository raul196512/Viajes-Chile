

$(document).ready(function () {
    $("#enviarCorreo").click(function () {
        alert("Su solicitud fue enviada correctamente")
    });

    $(window).resize(function () {
        if ($(window).width() < 576) { // Cambia 768 según tu criterio
            $("¿QUIENES SOMOS?").hide();
        } else {
            $("¿QUIENES SOMS").show();
        }
    });
});

