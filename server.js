const http = require('http');
const fs = require('fs');
const path = require('path');

const port = 3000;

const server = http.createServer((req, res) => {
  if (req.url === '/style.css') {
    // Dynamically serve the CSS file
    const cssPath = path.join(__dirname, 'public', 'style.css');
    fs.readFile(cssPath, (err, data) => {
      if (err) {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('Error loading CSS');
        return;
      }
      res.writeHead(200, { 'Content-Type': 'text/css' });
      res.end(data);
    });
  } else {
    // Dynamically generate HTML
    const html = `
      <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>The Future of AI-Powered Logistics</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
<div class="container">
        <h1 class="fade-in">Fasetire Gbolahan</h1>
        <p class="role slide-up">Lead Cloud Engineer</p>
        <h2 class="fade-in-delay">The Future of AI-Powered Digital Mental Health Systems</h2>
        <p class="pitch slide-up-delay">
        Our Digital Mental Health Management System reimagines mental healthcare by combining AI-driven sentiment analysis with microservices architecture to deliver intelligent, on-demand support. This scalable platform enables real-time emotional monitoring, virtual therapy sessions, and automated wellness tools—reducing clinician workload and expanding access to care.
        </p>
        <div class="bio-card fade-in">
        <p><strong>Bio:</strong> Fasetire is a Cloud Engineer with experience in backend development, cloud deployment (AWS EC2, UFW, Nginx), and scripting with Bash and Ansible. MSc in Computer Science.</p>
    </div>
</div>
</body>
</html>
    `;
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(html);
  }
});

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
