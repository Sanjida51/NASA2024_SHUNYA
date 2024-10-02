from flask import Flask, jsonify
import threading
import speech_recognition as sr
import pyttsx3
import datetime
import pywhatkit
import wikipedia
import pyjokes

app = Flask(_name_)
listener = sr.Recognizer()
clima = pyttsx3.init()
voices = clima.getProperty('voices')
clima.setProperty('voice', voices[1].id)

def talk(text):
    clima.say(text)
    clima.runAndWait()

def take_command():
    try:
        with sr.Microphone() as source:
            print('Listening...')
            voice = listener.listen(source)
            command = listener.recognize_google(voice)
            command = command.lower()
            if 'clima' in command:
                command = command.replace('clima', '')
    except Exception as e:
        print(e)
        return ""
    return command

def run_clima():
    command = take_command()
    if 'time' in command:
        time = datetime.datetime.now().strftime('%I:%M %p')
        print(time)
        talk('Current time is ' + time)
    elif 'play' in command:
        story = command.replace('play', '')
        talk('Playing ' + story)
        pywhatkit.playonyt(story)
    elif 'about' in command:
        look_for = command.replace('tell me about', '')
        info = wikipedia.summary(look_for, 1)
        print(info)
        talk(info)
    elif 'joke' in command:
        talk(pyjokes.get_joke())
    # Add other commands here...

@app.route('/start-voice-assistant')
def start_voice_assistant():
    # Run the voice assistant in a separate thread
    threading.Thread(target=run_clima).start()
    return jsonify({"status": "Voice assistant started!"})

if _name_ == '_main_':
    app.run(debug=True, port=5000)  # Run the Flask app