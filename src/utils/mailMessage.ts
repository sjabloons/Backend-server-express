export const htmlContent = (data: any): string => `<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <title>Bevestiging registratie</title>
    <style>
      body {
        font-family: Arial, sans-serif;
        background-color: #f9f9f9;
        margin: 0;
        padding: 20px;
        color: #333;
      }
      .container {
        max-width: 600px;
        margin: 0 auto;
        background-color: #ffffff;
        padding: 20px;
        border-radius: 8px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      }
      h1 {
        color: #007bff;
      }
      p {
        font-size: 1rem;
      }
      ul {
        list-style: none;
        padding: 0;
      }
      li {
        margin-bottom: 10px;
        font-size: 0.95rem;
      }
      li strong {
        color: #000;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <h1>Bevestiging registratie</h1>
      <p>Hieronder vind je de gegevens die je hebt ingevoerd:</p>
      <ul>
        <li><strong>Naam:</strong> ${data.naam}</li>
        <li><strong>Voornaam:</strong> ${data.voornaam}</li>
        <li><strong>Geboortedatum:</strong> ${data.geboortedatum}</li>
        <li><strong>Haarkleur:</strong> <div style="background-color: ${data.haarkleur}; width: 100px; height: 20px; border-radius: 5px; display: inline-block;">${data.haarkleur}</div> </li>
        <li><strong>Lengte:</strong> ${data.lengte} cm</li>
        <li><strong>Gender:</strong> ${data.gender}</li>
        <li><strong>Opmerking:</strong> ${data.opmerking}</li>
      </ul>
    </div>
  </body>
</html>
`;
