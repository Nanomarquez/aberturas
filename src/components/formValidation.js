export const validation = (user) => {
	const errors = {};
	const { nombre, email, localidad, mensaje, telefono } = user;

	if (!nombre) {
		errors.nombre = 'El nombre es requerido';
	}

	if (!email) {
		errors.email = 'El correo electronico es requerido';
	} else if (!/\S+@\S+\.\S+/.test(email)) {
		errors.email = 'El correo electronico no es valido';
	} else if (email.length > 35) {
		errors.email = 'El correo electronico no puede tener mas de 35 caracteres';
	}

	if (!localidad) {
		errors.localidad = 'La localidad es requerida';
	}
   if (!telefono) {
      errors.telefono = 'El número de teléfono es requerido'
   }

	if (!mensaje) {
		errors.mensaje = 'El mensaje es requerido';
	}

   return errors;
};
