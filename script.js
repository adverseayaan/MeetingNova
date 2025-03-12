function respond() {
    const userInput = document.getElementById('user-input').value.toLowerCase();
    const novaText = document.getElementById('nova-text');

    let response = "I'm listening.";

    if (userInput.includes("hello") || userInput.includes("hi")) {
        response = "Hi there! How can I assist you today?";
    } else if (userInput.includes("how are you")) {
        response = "I'm just a program, but I'm running smoothly!";
    } else if (userInput.includes("who are you")) {
        response = "I'm Nova, your digital companion.";
    } else if (userInput.includes("thank you")) {
        response = "You're welcome!";
    } else if (userInput.includes("bye")) {
        response = "Goodbye! Take care.";
    } else if (userInput.trim() === "") {
        response = "Please say something!";
    }

    // Update Nova's text and clear input
    novaText.textContent = `You said: "${userInput}". ${response}`;
    document.getElementById('user-input').value = "";
}
function handleInput(event) {
    event.preventDefault(); // Prevent form from submitting
    
    const userInput = userInputElement.value.trim().toLowerCase();
    if (userInput === "") return;
    
    displayUserMessage(userInput);
    
    let response = "";

    // Intent recognition and pattern matching
    if (userInput.includes("hello") || userInput.includes("hi")) {
        response = "Hello! How can I help you today?";
    } else if (userInput.includes("how are you")) {
        response = "I'm just a bunch of code, but I'm feeling ready to chat!";
    } else if (userInput.includes("your name")) {
        response = "I'm Nova, your digital companion.";
    } else if (userInput.includes("bye") || userInput.includes("goodbye")) {
        response = "Goodbye! Take care.";
    } else if (userInput.includes("thank you")) {
        response = "You're welcome! Let me know if you need anything else.";
    } else {
        // Catch-all for unrecognized inputs
        response = "I'm not sure I understand. Can you clarify?";
    }

    displayNovaMessage(response);
    userInputElement.value = "";
}
