// Assume you have a route set up to handle the chatbot logic on the server
// Make a fetch request to the server to send user input and receive bot response
fetch('/chatbot', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({ message: userInput }),
})
  .then(response => response.json())
  .then(data => {
    // Update the UI with the bot's response
    displayBotResponse(data.response);
  });
