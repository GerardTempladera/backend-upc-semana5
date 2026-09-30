const express = require('express');
const app = express();

// Middleware para procesar y entender solicitudes en formato JSON
app.use(express.json());

// Puerto asignado dinámicamente por la plataforma cloud (Render) o puerto 3000 local
const PORT = process.env.PORT || 3000;

// Endpoint 1: Health Check (Verificación de estado para la captura de Postman)
app.get('/api/v1/health', (req, res) => {
  res.status(200).json({
    status: 'OK',
    message: 'Servicio Backend activo y desplegado en la Nube (UPC - Semana 5)',
    course: 'Arquitectura de Aplicaciones Web',
    timestamp: new Date()
  });
});

// Endpoint 2: Información técnica de la arquitectura de la aplicación
app.get('/api/v1/info', (req, res) => {
  res.status(200).json({
    architecture: 'Microservicios / Cloud Native',
    cloudProvider: 'Render (PaaS)',
    scalability: 'Horizontal / Auto-scaling'
  });
});

// Inicialización de la escucha del servidor HTTP
app.listen(PORT, () => {
  console.log(`Servidor ejecutándose exitosamente en el puerto ${PORT}`);
});