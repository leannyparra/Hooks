import React, { useState, useEffect } from 'react'; // Importamos useEffect [cite: 53]
import { Link, useNavigate } from 'react-router-dom'; // Importamos useNavigate [cite: 66]

import "./Perfil.css"
const Perfil = () => {
  const navigate = useNavigate(); // Inicializamos el hook de navegación [cite: 68]

  // 1. Estado para los datos del aprendiz (inicia vacío o null) [cite: 32]
  const [aprendiz, setAprendiz] = useState(null);
  
  // Estado para controlar la carga (Loading)
  const [cargando, setCargando] = useState(true);

  // 2. Estado para las preferencias
  const [preferencias, setPreferencias] = useState({
    modoOscuro: false,
    notificaciones: true
  });

  // 3. Hook useEffect para simular la carga de datos al montar el componente [cite: 50, 54]
  useEffect(() => {
    console.log("El componente Perfil se ha cargado"); // [cite: 55]
    
    // Simulamos una petición a la API de Laravel de 1.5 segundos
    const obtenerDatos = setTimeout(() => {
      setAprendiz({
        primerNombre: 'Juan',
        segundoNombre: 'Andres',
        primerApellido: 'Estrada',
        segundoApellido: 'Erazo',
        tipoDoc: 'C.C.',
        numDoc: '10058191',
        ficha: '2558394',
        telefono: '310 123 4567',
        centro: 'Centro Comercio y Servicios',
        programa: 'Análisis y Desarrollo de Software',
        correo: 'juanestrada@soysena.edu.co',
        rol: 'Aprendiz - Etapa Lectiva',
        foto: 'Img/aprendizlogo.png'
      });
      setCargando(false); // Finaliza la carga
    }, 1500);

    return () => clearTimeout(obtenerDatos); // Limpieza del efecto
  }, []); // El arreglo vacío indica que solo se ejecuta una vez [cite: 55]

  const togglePreferencia = (e) => {
    const { id, checked } = e.target;
    setPreferencias({
      ...preferencias,
      [id === 'check-oscuro' ? 'modoOscuro' : 'notificaciones']: checked
    });
  };

  // Función para cerrar sesión usando useNavigate [cite: 63]
  const handleLogout = () => {
    // Aquí podrías limpiar el localStorage si lo usas [cite: 140]
    alert("Cerrando sesión...");
    navigate('/'); // Redirige al inicio o login [cite: 70]
  };

  // Si los datos aún no cargan, mostramos un mensaje (UX)
  if (cargando) {
    return <div className="cargando">Cargando perfil de aprendiz...</div>;
  }

  return (
    <main className="contenido-principal">
      <div className="perfil-contenedor">
        
        {/* HEADER DEL PERFIL */}
        <header className="perfil-header">
          <div className="perfil-info">
            <div className="avatar-aprendiz">
              <img src={aprendiz.foto} alt="Perfil Aprendiz" className="avatar-img" />
              <button className="fotoAprendiz">
                <i className="bi bi-camera"></i>
              </button>
            </div>
            <div className="texto-perfil">
              <h1>{`${aprendiz.primerNombre} ${aprendiz.primerApellido}`}</h1>
              <span className="rol">{aprendiz.rol}</span>
              <p>{aprendiz.correo}</p>
            </div>
          </div>
        </header>

        <div className="perfil-subtitulo">
          {/* SECCIÓN IZQUIERDA: INFORMACIÓN PERSONAL */}
          <section className="perfil-cards">
            <h3><i className="bi bi-person-lines-fill"></i> Información Personal</h3>

            <div className="losDatos">
              <div className="dato">
                <label>Primer Nombre</label>
                <div className="dato-falso"><i className="bi bi-person"></i> {aprendiz.primerNombre}</div>
              </div>
              <div className="dato">
                <label>Segundo Nombre</label>
                <div className="dato-falso"><i className="bi bi-person"></i> {aprendiz.segundoNombre}</div>
              </div>
              <div className="dato">
                <label>Primer Apellido</label>
                <div className="dato-falso"><i className="bi bi-person-badge"></i> {aprendiz.primerApellido}</div>
              </div>
              <div className="dato">
                <label>Segundo Apellido</label>
                <div className="dato-falso"><i className="bi bi-person-badge"></i> {aprendiz.segundoApellido}</div>
              </div>
              <div className="dato">
                <label>Tipo Documento</label>
                <div className="dato-falso">{aprendiz.tipoDoc}</div>
              </div>
              <div className="dato">
                <label>Número Documento</label>
                <div className="dato-falso"><i className="bi bi-card-text"></i> {aprendiz.numDoc}</div>
              </div>
              <div className="dato">
                <label>Ficha</label>
                <div className="dato-falso"><i className="bi bi-hash"></i> {aprendiz.ficha}</div>
              </div>
              <div className="dato">
                <label>Teléfono</label>
                <div className="dato-falso"><i className="bi bi-telephone"></i> {aprendiz.telefono}</div>
              </div>
              <div className="dato-ancho">
                <label>Centro de Formacion</label>
                <div className="dato-falso"><i className="bi bi-bank"></i> {aprendiz.centro}</div>
              </div>
              <div className="dato-ancho">
                <label>Programa de Formación</label>
                <div className="dato-falso"><i className="bi bi-mortarboard"></i> {aprendiz.programa}</div>
              </div>
              <div className="dato-ancho">
                <label>Correo Electrónico</label>
                <div className="dato-falso"><i className="bi bi-envelope"></i> {aprendiz.correo}</div>
              </div>
            </div>
          </section>

          {/* SECCIÓN DERECHA: BARRA LATERAL */}
          <section className="perfil-barraLateral">
            <div className="perfil-cards">
              <h3><i className="bi bi-shield-lock"></i> Seguridad</h3>
              <div className="botones-seguridad">
                <Link to="/cambiar-password" disable className="btn-seguridad btn-password">
                  <i className="bi bi-shield-lock"></i> Cambiar Contraseña
                </Link>
                {/* Aplicamos la navegación por evento en el botón  */}
                <button onClick={handleLogout} className="btn-seguridad btn-logout">
                  <i className="bi bi-box-arrow-right"></i> Cerrar Sesión
                </button>
                <button className="btn-seguridad btn-delete">
                  <i className="bi bi-trash3"></i> Eliminar Cuenta
                </button>
              </div>
            </div>

            <div className="perfil-cards">
              <h3><i className="bi bi-gear"></i> Preferencias</h3>
              <div className="opcion-oscuro">
                <span>Modo Oscuro</span>
                <label className="switch">
                  <input 
                    type="checkbox" 
                    id="check-oscuro" 
                    checked={preferencias.modoOscuro}
                    onChange={togglePreferencia}
                  />
                  <span className="slider"></span>
                </label>
              </div>
              <div className="opcion-oscuro">
                <span>Notificaciones</span>
                <label className="switch">
                  <input 
                    type="checkbox" 
                    id="check-notificaciones" 
                    checked={preferencias.notificaciones}
                    onChange={togglePreferencia}
                  /> 
                  <span className="slider"></span>
                </label>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
};

export default Perfil;