document.addEventListener('DOMContentLoaded', function () {
    const inputText = document.getElementById('inputText');
    const improveButton = document.getElementById('improveButton');
    const outputText = document.getElementById('outputText');
  
    improveButton.addEventListener('click', async () => {
      const text = inputText.value;

      // Implement ChatGPT integration here to improve the text
      // You'll need to send a request to the ChatGPT API
  
      // Example: Replace this with actual ChatGPT integration
      const improvedText = await improveTextWithChatGPT(text, apiKey);
  
      outputText.textContent = improvedText;
    });
  });
  
  async function improveTextWithChatGPT(text, apiKey) {
    // Implement ChatGPT API call here to improve the text
    // You will need to use an API key and make a POST request to the API
    // Replace this with actual API integration
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ',
      },
      body: JSON.stringify({ text }),
    });

    const data = await response.json();
    return data.improvedText; // Adjust this based on the API response format
  }
  