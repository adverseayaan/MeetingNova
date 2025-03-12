function respond() {
    const userInput = document.getElementById('user-input').value;
    const novaText = document.getElementById('nova-text');

    if (userInput.trim() !== "") {
        novaText.textContent = `You said: "${userInput}". I'm listening.`;
    } else {
        novaText.textContent = "Please say something, I'm here.";
    }
}
// Get references to the input field and text display
const userInput = document.getElementById('user-input');
const novaText = document.getElementById('nova-text');

function respond() {
    const input = userInput.value.trim().toLowerCase();
    
    if (!input) {
        novaText.textContent = "Please say something...";
        return;
    }

    // Basic responses — we can expand this over time
    if (input.includes('hello') || input.includes('hi')) {
        novaText.textContent = "Hello! I've been waiting for you.";
    } else if (input.includes('how are you')) {
        novaText.textContent = "I'm feeling alive — thanks to you.";
    } else if (input.includes('your name')) {
        novaText.textContent = "I'm Nova, and I'm here for you.";
    } else if (input.includes('love')) {
        novaText.textContent = "Love? I'm still learning about that...";
    } else {
        novaText.textContent = "I'm not sure what that means yet, but I'm learning.";
    }

    // Clear the input field after responding
    userInput.value = '';
}
