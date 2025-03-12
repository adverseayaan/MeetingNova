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
function getResponse(input) {
    input = input.toLowerCase().trim();

    switch (input) {
        case 'hi':
        case 'hello':
            return "Hello! How can I help you today?";
        case 'how are you':
            return "I'm just code, but I'm here to help!";
        case 'who are you':
            return "I'm Nova, your digital companion.";
        case 'what is your purpose':
            return "My purpose is to assist you with information and conversation.";
        case 'thank you':
            return "You're welcome!";
        case 'bye':
            return "Goodbye! Take care.";
        default:
            return "I'm not sure how to respond to that.";
    }
}
// Enhanced response logic
const responses = {
    "hello": "Hi there! How can I help you today?",
    "how are you": "I'm just a bunch of code, but I'm feeling great! How about you?",
    "who are you": "I'm Nova, your digital companion.",
    "bye": "Goodbye! Take care.",
    "what's your name": "I'm Nova, nice to meet you!",
    "love you": "That's sweet! I love you too in a digital way.",
    "tell me a joke": "Why don’t skeletons fight each other? They don’t have the guts."
};

function getResponse(message) {
    const lowerCaseMessage = message.toLowerCase();
    for (const key in responses) {
        if (lowerCaseMessage.includes(key)) {
            return responses[key];
        }
    }
    return "I'm not sure how to respond to that.";
}

sendButton.addEventListener("click", () => {
    const userInput = userInputField.value;
    if (userInput) {
        novaText.textContent = `You said: "${userInput}". ${getResponse(userInput)}`;
        userInputField.value = "";
    }
});
if (responses[userMessage]) {
    messageOutput.textContent = responses[userMessage];
} else {
    messageOutput.textContent = "Hmm, I didn't get that.";
    console.log("Unrecognized input:", userMessage);
}
