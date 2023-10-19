from fastapi import FastAPI

app = FastAPI()

@app.get("/principal.html")
def read_root():
    return {"Hello": "World"}