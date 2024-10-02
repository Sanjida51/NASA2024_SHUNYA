document.getElementById('submitBtn').addEventListener('click', () => {
    const userInput = document.getElementById('userInput').value;
    if (userInput.trim()) {
        showTypingIndicator();
        setTimeout(() => {
            getResponse(userInput);
            hideTypingIndicator();
        }, 1000); // Simulate a short delay for typing effect
    }
});

function getResponse(userInput) {
    let response = '';

    // Normalize user input to lowercase
    const lowerCaseInput = userInput.toLowerCase();

    if (lowerCaseInput.includes('1')) /*time*/ {
        response = `The current time is ${new Date().toLocaleTimeString()}.`;
    } else if (lowerCaseInput.includes('2'))/*joke*/ {
        response = "Why did the scarecrow win an award? Because he was outstanding in his field!";
    } else if (lowerCaseInput.includes('3'))/*hello*/ {
        response = "Hello! How can I assist you today?";
    } else if (lowerCaseInput.includes('4'))/*what is climate*/ {
        response = "Climate refers to the long-term patterns of temperature, humidity, wind, and precipitation in a particular area.";
    } else if (lowerCaseInput.includes('5'))/*climate story*/ {
        response = "Once upon a time, the Earth was flourishing with diverse ecosystems and stable climates. However, as human activities increased, pollution and greenhouse gases began to change the climate.";
    } else if (lowerCaseInput.includes('6'))/*ozone layer*/ {
        response = "The ozone layer is a region of Earth's stratosphere that contains a high concentration of ozone (O3) molecules. It plays a crucial role in protecting living organisms by absorbing most of the Sun's harmful ultraviolet (UV) radiation.";
    } else if (lowerCaseInput.includes('7'))/*antarctica ozone hole*/ {
        response = "The Antarctic ozone hole is a seasonal depletion of the ozone layer over Antarctica that occurs primarily in the spring.";
    } else {
        response = "I didn't get that. Could you please choose another number?";
    }

    // Display the response with a typing effect
    displayResponse(response);

    // Text-to-Speech
    speakResponse(response);
}

function displayResponse(text) {
    const responseDiv = document.getElementById('response');
    responseDiv.innerHTML = '';

    let i = 0;
    const interval = setInterval(() => {
        if (i < text.length) {
            responseDiv.innerHTML += text.charAt(i);
            i++;
        } else {
            clearInterval(interval);
        }
    }, 50); // Typing effect speed
}

// Text-to-Speech function
function speakResponse(text) {
    const speech = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(speech);
}

// Show and hide typing indicator
function showTypingIndicator() {
    document.getElementById('typingIndicator').classList.remove('hidden');
}

function hideTypingIndicator() {
    document.getElementById('typingIndicator').classList.add('hidden');
}
