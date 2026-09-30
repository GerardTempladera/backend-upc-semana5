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

// Endpoint: Matriz de Clasificación de Servicios Cloud
app.get('/api/v1/cloud-matrix', (req, res) => {
  res.status(200).json({
    title: "Matriz de Clasificación de Servicios Cloud",
    categories: [
      {
        model: "IaaS (Infrastructure as a Service)",
        controlLevel: "Alto (Servidores virtuales, almacenamiento y red)",
        examples: ["AWS EC2", "Azure Virtual Machines", "Google Compute Engine"],
        useCase: "Administración completa del sistema operativo e infraestructura."
      },
      {
        model: "PaaS (Platform as a Service)",
        controlLevel: "Medio (Código de la aplicación y datos)",
        examples: ["Render", "Heroku", "AWS Elastic Beanstalk"],
        useCase: "Despliegue automático de aplicaciones sin gestionar el SO (caso de este laboratorio)."
      },
      {
        model: "SaaS (Software as a Service)",
        controlLevel: "Bajo (Solo consumo por interfaz de usuario)",
        examples: ["Google Workspace", "Microsoft 365", "GitHub"],
        useCase: "Uso directo de aplicaciones terminadas mediante el navegador."
      }
    ]
  });
});
// Endpoint para servir la documentación interactiva (Punto 4 de Entregables)
app.get('/docs', (req, res) => {
  const htmlContent = `
  <!DOCTYPE html>
  <html lang="es">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Resolución Actividades 3 y 4 - UPC</title>
    <style>
      body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; margin: 30px; background-color: #f4f6f9; color: #333; }
      h1 { color: #0056b3; border-bottom: 2px solid #0056b3; padding-bottom: 10px; }
      h2 { color: #17a2b8; margin-top: 30px; }
      .card { background: white; padding: 20px; border-radius: 8px; box-shadow: 0 2px 5px rgba(0,0,0,0.1); margin-bottom: 20px; }
      table { width: 100%; border-collapse: collapse; margin-top: 15px; }
      th, td { border: 1px solid #dee2e6; padding: 12px; text-align: left; }
      th { background-color: #0056b3; color: white; }
      tr:nth-child(even) { background-color: #f8f9fa; }
      ul { line-height: 1.8; }
    </style>
  </head>
  <body>

    <h1>Resolución de Casos de Estudio (Actividades 3 y 4)</h1>

    <!-- Caso 1: PCI DSS -->
    <div class="card">
      <h2>1. Casos de Seguridad PCI DSS</h2>
      <p>Para garantizar el cumplimiento de seguridad en el procesamiento de pagos en arquitecturas Web y Cloud:</p>
      <ul>
        <li><b>Cifrado en Tránsito:</b> Implementación obligatoria de HTTPS mediante TLS 1.3 para proteger los datos expuestos por la API Express.</li>
        <li><b>Aislamiento de Secretos:</b> Almacenamiento de credenciales y claves API en variables de entorno (<code>process.env</code>) usando archivos <code>.env</code> no subidos al repositorio.</li>
        <li><b>Headers de Seguridad:</b> Integración del middleware <code>helmet</code> en Express para prevenir vulnerabilidades XSS y Clickjacking.</li>
      </ul>
    </div>

    <!-- Caso 2: Tabla de IA -->
    <div class="card">
      <h2>2. Tabla Comparativa de Servicios de IA en la Nube</h2>
      <table>
        <thead>
          <tr>
            <th>Proveedor Cloud</th>
            <th>Servicio de IA</th>
            <th>Tipo de Modelo</th>
            <th>Caso de Uso Principal</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Amazon Web Services (AWS)</td>
            <td>Amazon Bedrock</td>
            <td>PaaS / Managed LLM</td>
            <td>Acceso mediante API a modelos fundacionales como Claude y Titan.</td>
          </tr>
          <tr>
            <td>Microsoft Azure</td>
            <td>Azure OpenAI Service</td>
            <td>PaaS / Managed LLM</td>
            <td>Integración empresarial de modelos GPT-4 con aislamiento de datos.</td>
          </tr>
          <tr>
            <td>Google Cloud (GCP)</td>
            <td>Vertex AI</td>
            <td>PaaS / Machine Learning Platform</td>
            <td>Entrenamiento, ajuste fino (fine-tuning) y despliegue de modelos personalizados.</td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Caso 3: Escalabilidad -->
    <div class="card">
      <h2>3. Caso de Escalabilidad en la Nube</h2>
      <p><b>Estrategia de Escalabilidad Aplicada:</b> Escalabilidad Horizontal (Auto-scaling).</p>
      <ul>
        <li><b>Mecanismo:</b> La plataforma PaaS (Render) incrementa dinámicamente el número de contenedores/instancias del servidor Node.js según la carga de peticiones HTTP.</li>
        <li><b>Balanceo de Carga:</b> Un balanceador de carga integrado distribuye el tráfico equitativamente entre las instancias activas para evitar la saturación del puerto Express.</li>
      </ul>
    </div>

  </body>
  </html>
  `;
  
  res.setHeader('Content-Type', 'text/html');
  res.status(200).send(htmlContent);
});
// Inicialización de la escucha del servidor HTTP
app.listen(PORT, () => {
  console.log(`Servidor ejecutándose exitosamente en el puerto ${PORT}`);
});