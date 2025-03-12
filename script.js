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
