export default ({ name, email, message }: { name: string, email: string, message: string }) => {
    return `
        <!DOCTYPE html>
        <html lang="es">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <style>
                body {
                    font-family: Arial, sans-serif;
                    background-color: #f4f4f4;
                    margin: 0;
                    padding: 0;
                }
                .container {
                    width: 100%;
                    padding: 20px;
                    background-color: #ffffff;
                    max-width: 600px;
                    margin: 20px auto;
                    border: 1px solid #ddd;
                    border-radius: 5px;
                }
                .header {
                    background-color: #007bff;
                    color: #ffffff;
                    padding: 10px;
                    text-align: center;
                    border-top-left-radius: 5px;
                    border-top-right-radius: 5px;
                }
                .content {
                    padding: 20px;
                }
                .content h2 {
                    color: #333;
                }
                .content p {
                    color: #555;
                    line-height: 1.5;
                }
                .footer {
                    margin-top: 20px;
                    padding: 10px;
                    background-color: #f4f4f4;
                    text-align: center;
                    font-size: 12px;
                    color: #777;
                }
            </style>
        </head>
        <body>
            <div class="container">
                <div class="header">
                    <h1>Nuevo Mensaje de Contacto</h1>
                </div>
                <div class="content">
                    <h2>Detalles del mensaje</h2>
                    <p><strong>Nombre:</strong> ${name}</p> 
                    <p><strong>Email:</strong> ${email}</p>
                    <p><strong>Mensaje:</strong></p>
                    <p>${message}</p>
                </div>
                <div class="footer">
                    <p>Este correo es una notificación automática. No respondas a este mensaje.</p>
                </div>
            </div>
        </body>
        </html>
    `;
}