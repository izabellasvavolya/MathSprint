from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import json
import os

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def root():
    return {"message": "MathSprint backend running"}

@app.get("/questions")
def get_questions():
    file_path = os.path.join(os.path.dirname(__file__), "questions.json")
    print("Reading from:", file_path)

    with open(file_path, "r", encoding="utf-8") as f:
        data = json.load(f)

    print("Data loaded:", data)
    return data