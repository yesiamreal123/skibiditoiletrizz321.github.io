document.getElementById("send").addEventListener("click", function() {
    const input = document.getElementById("input");
    const userMessage = input.value;
    
    if (userMessage) {
        displayMessage(userMessage, 'user');
        input.value = '';

        // Simulate AI response
        const aiResponse = getAIResponse(userMessage);
        setTimeout(() => {
            displayMessage(aiResponse, 'ai');
        }, 500); // Delay for a more natural feel
    }
});

function displayMessage(message, sender) {
    const messagesDiv = document.getElementById("messages");
    const messageDiv = document.createElement("div");
    messageDiv.className = `message ${sender}`;
    messageDiv.textContent = message;
    messagesDiv.appendChild(messageDiv);
    messagesDiv.scrollTop = messagesDiv.scrollHeight; // Auto-scroll to latest message
}

function getAIResponse(input) {
    // Basic responses for demonstration
    const responses = {
        "hello": "Hi there! How can I help you?",
        "how are you?": "I'm just a bunch of code, but thanks for asking!",
        "what's your name?": "I'm a simple AI chatbot.",
        "bye": "Goodbye! Have a great day!"
    };
    return responses[input.toLowerCase()] || "I'm not sure how to respond to that.";
}
