import React from 'react';
import { useForm } from 'react-hook-form'; // Para gestión de estado y validación eficiente [cite: 78]
import { useNavigate } from 'react-router-dom'; // Para navegación sin recargar la página [cite: 63, 64]

import "./Login"
const Login = () => {
  const navigate = useNavigate(); // Hook para redirigir al usuario [cite: 63, 68]
  
  // Extraemos las herramientas de useForm [cite: 89-94]
  const { 
    register, 
    handleSubmit, 
    formState: { errors } 
  } = useForm();

  // Función que se ejecuta al enviar el formulario [cite: 95, 100]
  const onSubmit = (data) => {
    console.log('Intentando iniciar sesión con:', data); // Mostrar datos en consola [cite: 136]
    
    // Simulación de validación exitosa:
    // En un proyecto real, aquí conectarías con tu API de Laravel
    alert("Sesión iniciada correctamente");
    
    navigate('/perfil'); // Redirigir al perfil después del envío exitoso 
  };

  return (
    <div className="panel-formulario">

      <div className="registro-header">
        <img src="Img/Capa 1.svg" alt="StockMind" className="logo-stockmind" />
        <h1>Inicia Sesión</h1>
      </div>

      {/* Implementamos handleSubmit de react-hook-form [cite: 100] */}
      <form onSubmit={handleSubmit(onSubmit)}>
        
        <div className="grupo-input input-con-icono">
          <i className="bi bi-envelope"></i>
          <input 
            type="email" 
            placeholder="Correo Electrónico" 
            {...register("email", { 
              required: "El correo es obligatorio",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Formato de correo inválido"
              }
            })} 
          />
          {/* Mostrar mensaje si hay error en el correo  */}
          {errors.email && <span className="error-msg">{errors.email.message}</span>}
        </div>

        <div className="grupo-input input-con-icono">
          <i className="bi bi-lock"></i>
          <input 
            type="password" 
            placeholder="Contraseña" 
            {...register("password", { 
              required: "La contraseña es obligatoria",
              minLength: { value: 6, message: "Mínimo 6 caracteres" }
            })} 
          />
          {/* Mostrar mensaje si hay error en la contraseña  */}
          {errors.password && <span className="error-msg">{errors.password.message}</span>}
        </div>

        <button type="submit" className="btn-registrar">INICIAR SESIÓN</button>
      </form>
    </div>
  );
};

export default Login;