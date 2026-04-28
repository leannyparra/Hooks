import React from 'react';
import { useForm } from 'react-hook-form'; // Para gestión de estado y validación [cite: 77]
import { useNavigate } from 'react-router-dom'; // Para navegación entre rutas [cite: 63]

import "./Formulario.css"
const Formulario = () => {
  const navigate = useNavigate(); // Inicializar navegación [cite: 68]
  
  // Extraemos las herramientas de useForm [cite: 89-94]
  const { 
    register, 
    handleSubmit, 
    formState: { errors }, 
    reset 
  } = useForm({
    defaultValues: {
      tipoDocumento: 'CC'
    }
  });

  // Acción al enviar el formulario [cite: 95]
  const onSubmit = (data) => {
    console.log('Datos enviados correctamente:', data); // Mostrar en consola [cite: 136]
    reset(); // Limpiar el formulario 
    alert("Registro exitoso");
    navigate('/login'); // Redirigir al Login después del envío 
  };

  return (
    <div className="contenido-derecho">
      <div className="registro-header">
        <img src="Img/Capa 1.svg" alt="StockMind" className="logo-stockmind" />
        <h1>Crear Cuenta</h1>
      </div>

      {/* Implementamos handleSubmit de react-hook-form [cite: 100] */}
      <form onSubmit={handleSubmit(onSubmit)}>
        
        <div className="fila-input">
          <div className="grupo-input">
            <i className="bi bi-person"></i>
            <input 
              type="text" 
              placeholder="Primer Nombre" 
              {...register("primerNombre", { required: "El nombre es obligatorio" })} 
            />
            {errors.primerNombre && <span className="error">{errors.primerNombre.message}</span>}
          </div>

          <div className="grupo-input">
            <i className="bi bi-person"></i>
            <input 
              type="text" 
              placeholder="Segundo Nombre" 
              {...register("segundoNombre")} 
            />
          </div>
        </div>

        <div className="fila-input">
          <div className="grupo-input">
            <i className="bi bi-person-badge"></i>
            <input 
              type="text" 
              placeholder="Primer Apellido" 
              {...register("primerApellido", { required: "El apellido es obligatorio" })} 
            />
            {errors.primerApellido && <span className="error">{errors.primerApellido.message}</span>}
          </div>

          <div className="grupo-input">
            <i className="bi bi-person-badge"></i>
            <input 
              type="text" 
              placeholder="Segundo Apellido" 
              {...register("segundoApellido")} 
            />
          </div>
        </div>

        <div className="fila-input">
          <div className="grupo-input" style={{ flex: 0.4 }}>
            <select className="select-input" {...register("tipoDocumento")}>
              <option value="CC">C.C.</option>
              <option value="TI">T.I.</option>
              <option value="CE">C.E.</option>
            </select>
          </div>

          <div className="grupo-input" style={{ flex: 1 }}>
            <i className="bi bi-card-heading"></i>
            <input 
              type="text" 
              placeholder="Número de Documento" 
              {...register("documento", { required: "Documento requerido" })} 
            />
          </div>
        </div>

        <div className="fila-input">
          <div className="grupo-input">
            <i className="bi bi-hash"></i>
            <input 
              type="text" 
              placeholder="Ficha" 
              {...register("ficha", { required: "La ficha es obligatoria" })} 
            />
          </div>
          <div className="grupo-input">
            <i className="bi bi-geo-alt"></i>
            <select className="select-input" {...register("centro", { required: true })}>
              <option value="" disabled>Seleccione Centro</option>
              <option value="agropecuario">Centro Agropecuario</option>
              <option value="ctpi">CTPI</option>
              <option value="comercio">Centro de Comercio y Servicios</option>
            </select>
          </div>
        </div>

        <div className="grupo-input">
          <i className="bi bi-envelope"></i>
          <input 
            type="email" 
            placeholder="Correo" 
            {...register("correo", { 
              required: "Correo requerido",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Formato de correo inválido"
              }
            })} 
          />
          {errors.correo && <span className="error">{errors.correo.message}</span>}
        </div>

        <div className="grupo-input">
          <i className="bi bi-lock"></i>
          <input 
            type="password" 
            placeholder="Contraseña" 
            {...register("password", { 
              required: "Contraseña requerida",
              minLength: { value: 6, message: "Mínimo 6 caracteres" } 
            })} 
          />
          {errors.password && <span className="error">{errors.password.message}</span>}
        </div>

        <button type="submit" className="btn-registrar">REGISTRARSE</button>
      </form>
    </div>
  );
};

export default Formulario;