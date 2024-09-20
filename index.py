import nltk
from nltk.chat.util import Chat, reflections

# Define pairs of patterns and responses
pairs = [
    [
        r"my name is skibiditoiletrizz321.",
        ["Hello %1, how can I assist you today?",]
    ],
    [
        r"what is your name?",
        ["I am a chatbot created to help you!",]
    ],
    [
        r"how are you?",
        ["I'm just a bunch of code, but thanks for asking!",]
    ],
    [
        r"quit",
        ["Bye! Take care!",]
    ],
]

# Create the chatbot
chatbot = Chat(pairs, reflections)

# Start the conversation
print("Hello! I'm a simple chatbot. Type 'quit' to exit.")
chatbot.converse()
