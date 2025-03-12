function respond() {
    const userInput = document.getElementById('user-input').value;
    const novaText = document.getElementById('nova-text');

    if (userInput.trim() !== "") {
        novaText.textContent = `You said: "${userInput}". I'm listening.`;
    } else {
        novaText.textContent = "Please say something, I'm here.";
    }
}
