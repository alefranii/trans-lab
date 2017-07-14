/* Holiii acá va tu código también */
// // VALIDACIÓN FORMULARIO // //
(function validateForm(){
	document.getElementById('send').addEventListener('click', function(event) {
		event.preventDefault();
	// ELIMINAR SMALLS DE VALIDACIONES ANTERIORES
		document.querySelectorAll(".form-group small").forEach(function(small) {small.remove()});
	// VALORES VALUE
		var email = document.getElementById('email').value;
		var password = document.getElementById('password').value;
		var validaciones = true;
	// CARACTERES VÁLIDOS // REGULAR EXPRESSIONS
		var validEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	////// EMAIL
		// VERIFICACIÓN DE CAMPOS VACÍOS	
		if (email === "") {
			var rellenarText = document.createTextNode("campo obligatorio.");
			document.getElementsByClassName('form-group')[0].appendChild(labelErr());
			console.log("Correo: " + email);
			validaciones = validaciones && false;
		}
		// VERIFICACIÓN DE CARACTERES REQUERIDOS
		else if(!validEmail.test(email)) {
			var rellenarText = document.createTextNode("ingrese correo válido");
			document.getElementsByClassName('form-group')[0].appendChild(labelErr());
			console.log("Correo: " + email + ". Tiene caracteres no permitidos.");
			validaciones = validaciones && false;
		}
		// IMPRIMIR
		else {
			console.log("Correo: " + email);
			validaciones = validaciones && true;
		}
	////// Contraseña
		// VERIFICACIÓN DE CAMPOS VACÍOS	
		if (password === "") {
			var rellenarText = document.createTextNode("campo obligatorio.");
			document.getElementsByClassName('form-group')[1].appendChild(labelErr());
			console.log("Contraseña: " + password);
			validaciones = validaciones && false;
		}
		// VERIFICACIÓN DE MINIMO DE CARACTERES
		else if(password.length < 6) {
			var rellenarText = document.createTextNode("Debe ser de al menos 6 caracteres.");
			document.getElementsByClassName('form-group')[1].appendChild(labelErr());
			console.log("Contraseña: " + password + ". No es válida.");
			validaciones = validaciones && false;
		}
		// VERIFICACIÓN DE "123456"
		else if(password == "123456") {
			var rellenarText = document.createTextNode("Esta contraseña no es válida.");
			document.getElementsByClassName('form-group')[1].appendChild(labelErr());
			console.log("Contraseña: " + password + ". No es válida.");
			validaciones = validaciones && false;
		}
		// IMPRIMIR
		else {
			console.log("Contraseña: " + password);
			validaciones = validaciones && true;
		}
	////// VACIAR CAMPOS
		if (validaciones == true) {
			location.href = "menu.html";
		}

		function labelErr() {
			var labelError = document.createElement('small');
			labelError.classList.add('label', 'error');
			labelError.appendChild(rellenarText);
			return labelError;
		}
	});
})();