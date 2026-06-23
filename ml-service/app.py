from fastapi import FastAPI

app = FastAPI(
    title="AI Career Intelligence Platform",
    description="Resume Analysis and Career Recommendation System",
    version="1.0.0"
)

@app.get("/")
def home():
    return {
        "message": "AI Career Intelligence Platform ML Service Running"
    }