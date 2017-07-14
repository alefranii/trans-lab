/* Holiii acá va tu código también */
// // VALIDACIÓN FORMULARIO // //
$(document).ready(function () {
                $("#wp_signup_form").validate({
                    rules: {
                       
						          "email": {
                            required: true,
                            email: true
                        }, 

                        "password": {
                            required: true,
                            minlength: 8
                            window.location.href = 'menu.html';
                        }, 
                    }
                });
            });