import os
import openai
import speech_recognition as sr
import pyttsx3
import datetime
import pywhatkit
import wikipedia
import pyjokes

# Initialize recognizer and TTS engine
listener = sr.Recognizer()
clima = pyttsx3.init()
voices = clima.getProperty('voices')
clima.setProperty('voice', voices[1].id)

# Set your OpenAI API key
openai.api_key = 'your-openai-api-key'

def talk(text):
    clima.say(text)
    clima.runAndWait()

def take_command():
    try:
        with sr.Microphone() as source:
            print('listening...')
            voice = listener.listen(source)
            command = listener.recognize_google(voice)
            command = command.lower()
            if 'clima' in command:
                command = command.replace('clima', '')
    except Exception as e:
        print(f"Error: {e}")
        pass
    return command

def gpt_response(prompt):
    try:
        # Call GPT-3/4 API to get a response
        response = openai.Completion.create(
            engine="text-davinci-003",  # or use "gpt-4" if available
            prompt=prompt,
            max_tokens=150
        )
        answer = response.choices[0].text.strip()
        return answer
    except Exception as e:
        print(f"Error: {e}")
        return "Sorry, I couldn't connect to the GPT API."

def run_clima():
    command = take_command()

    if 'time' in command:
        time = datetime.datetime.now().strftime('%I:%M %p')
        print(time)
        talk('Current time is ' + time)

    elif 'play' in command:
        story = command.replace('play', '')
        talk('playing ' + story)
        pywhatkit.playonyt(story)

    elif 'about' in command:
        look_for = command.replace('tell me about', '')
        info = wikipedia.summary(look_for, 1)
        print(info)
        talk(info)

    elif 'joke' in command:
        talk(pyjokes.get_joke())

    elif 'gpt' in command:  # New feature to ask GPT a question
        prompt = command.replace('gpt', '')
        print(f"Sending to GPT: {prompt}")
        answer = gpt_response(prompt)
        print(answer)
        talk(answer)

    elif 'story' in command:  # Existing climate story
        talk('Once upon a time, high up in the sky...')
    
    # Other custom commands as in your original code...

    else:
        talk('I did not get it but I am going to search it for you')
        pywhatkit.search(command)

while True:
    run_clima()
