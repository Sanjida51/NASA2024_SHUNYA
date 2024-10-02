function getResponse() {
                    const userInput = document.getElementById("userInput").value;
                    const outputText = document.getElementById("outputText");
                
                    if (userInput.trim() === "") {
                        outputText.textContent = "Please type something!";
                        return;
                    }
                
                    // Handling specific input: "What is climate?"
                    if (userInput.toLowerCase() === "what is climate?") {
                        outputText.textContent = "Climate refers to the long-term patterns of temperature, humidity, wind, etc., in an area, typically measured over decades. It is different from weather, which describes short-term conditions.";
                    
                    // Handling specific input: "What is climate change?"
                    } else if (userInput.toLowerCase() === "what is climate change?") {
                        outputText.textContent = "Climate change refers to significant changes in global temperatures and weather patterns over time. While climate change is a natural phenomenon, recent decades have seen rapid warming due to human activities like burning fossil fuels, leading to global warming.";
                
                    // Handling specific input: "Write about the climate element"
                    } else if (userInput.toLowerCase() === "write about the climate element") {
                        outputText.textContent = "The key elements of climate include temperature, humidity, precipitation, wind, and atmospheric pressure. These elements interact to form different climate zones across the planet, such as tropical, temperate, and polar regions.";
                
                    // Handling specific input: "Ozone story"
                    } else if (userInput.toLowerCase() === "ozone story") {
                        outputText.textContent = "The ozone layer, a fragile shield of gas, protects Earth from the sun’s harmful ultraviolet radiation. In the 1980s, scientists discovered a hole in the ozone layer caused by harmful chemicals like CFCs. Global efforts, including the Montreal Protocol, led to the regulation of these chemicals. Since then, the ozone layer has been recovering, showing the power of coordinated environmental action.";
                
                    // Handling general greetings
                    } else if (userInput.toLowerCase().includes("hello")) {
                        outputText.textContent = "Hello! How can I assist you today?";
                
                    // Handling a request for help
                    } else if (userInput.toLowerCase().includes("help")) {
                        outputText.textContent = "I'm here to help! What do you need assistance with?";
                
                    // Default response for unrecognized input
                    } else {
                        outputText.textContent = "I'm not sure how to respond to that. Could you try asking something else?";
                    }
                }
                