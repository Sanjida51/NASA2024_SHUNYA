# Mirror of Climate

**Team SHUNYA | Representing Barishal Division, Bangladesh**

Mirror of Climate is a web-based platform developed by **Team Shunya** to address the urgent need for climate awareness. Our platform combines real-time environmental data, AI-driven interactions, and cutting-edge Augmented Reality (AR) to empower users to visualize climate impacts. **Mirror of Climate** serves as a mirror to reflect the current state of our environment, encouraging education and action.

## Mission Statement
We believe that by providing users with real-time data, educational resources, and immersive AR experiences, we can inspire a global community to take proactive measures against climate change. **Mirror of Climate** leverages NASA's data and modern technologies to create an interactive and impactful tool for climate awareness.

## Key Features
- **AI-Powered Chatbot & Voice Assistant**  
  Chatbot and voice assistant functionalities to answer user questions about climate change and provide real-time updates with accessible, voice-enabled interaction.
  
- **Real-Time Weather and Climate Data**  
  Live weather data sourced from NASA APIs, visualized to help users explore environmental conditions worldwide and climate trends over time.
  
- **Climate Education Hub**  
  Interactive educational resources on climate change, global warming, and sustainability, with multimedia content such as videos, infographics, and animations.
  
- **Climate Alerts**  
  Real-time alerts for extreme environmental events like storms, wildfires, and other natural disasters, designed with clear visuals for immediate comprehension.
  
- **Augmented Reality (AR) Visualization**  
  Immersive AR experiences that allow users to visualize climate impacts like rising sea levels or deforestation in their own environment using mobile devices.

## Technical Overview

**Architecture:**  
- **Front-End:** HTML5, CSS3, JavaScript  
- **Back-End:** Python with Flask/Django  
- **AI Integration:** NLP models for chatbot and voice assistant  
- **Real-Time Data:** NASA APIs for weather and climate data  
- **AR Framework:** AR.js or Three.js for mobile-friendly AR visualizations  

**Key Components:**
- `index.html` – Central platform page for accessing all features.
- `chatbot.html` & `voiceassis.html` – AI-powered pages for chatbot and voice interactions.
- `weather.html` – Displays real-time weather and climate data.
- `climateimpact.html`, `awareness.html` – Educational resources on climate awareness.
- `ar.html` – AR-enabled page for visualizing climate impacts in real-world surroundings.
- `app.py` & `main.py` – Backend files to manage API requests, data processing, and interactions.

## Setup Instructions

### Prerequisites:
- Python 3.8+
- Flask or Django
- NASA API Key
- AR.js or Three.js (for AR features)

### Installation Guide for Linux:

1. Clone the repository:
    ```bash
    git clone https://github.com/ourusername/MirrorOfClimate.git
    cd MirrorOfClimate
    ```
2. Install dependencies:
    ```bash
    pip install -r requirements.txt
    ```
3. Run the application:
    ```bash
    python app.py
    ```
4. Access the platform:
    Open [http://localhost:5000](http://localhost:5000) in your browser.
    
5. AR Experience:
    For mobile AR, open the AR-enabled page on your mobile device and scan the provided marker to experience virtual climate models in augmented reality.

## Usage Overview

- **Chatbot & Voice Assistant:** Ask questions or interact via voice to explore climate change and environmental data.
- **Real-Time Weather:** Access real-time weather and climate data via NASA APIs.
- **Educational Resources:** Explore climate education sections with engaging multimedia content.
- **Climate Alerts:** Stay informed on critical environmental changes and events in real time.
- **AR Visualization:** Use your mobile device to place AR models in your environment and visualize climate impacts firsthand.

## Future Enhancements
- **Advanced AI:** Expand the chatbot’s capabilities for personalized, context-aware conversations.
- **Global AR Models:** Integrate detailed, region-specific AR climate models depicting climate change impacts worldwide.
- **Community Engagement:** Enable users to share AR visualizations and climate experiences with others.

## Contributing
We welcome contributions from developers, climate scientists, and AR/AI enthusiasts. Follow these steps to contribute:
1. Fork the repository.
2. Create a feature branch:
    ```bash
    git checkout -b feature/YourFeature
    ```
3. Commit your changes:
    ```bash
    git commit -m "Add new feature"
    ```
4. Push to the branch:
    ```bash
    git push origin feature/YourFeature
    ```
5. Open a pull request.

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.


to see Live Preview: https://sanjida51.github.io/NASA2024_SHUNYA/
