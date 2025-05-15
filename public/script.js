async function generateCode() {
    const prompt = document.getElementById('prompt').value;
    const output = document.getElementById('output');
  
    output.textContent = 'Generating...';
  
    try {
      const response = await fetch('http://localhost:3000/api/generate-code', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt }),
      });
  
      const data = await response.json();
      output.textContent = data.code || '// No code returned';
    } catch (error) {
      output.textContent = '// Error: ' + error.message;
    }
  }
  