from fastapi import FastAPI
import json

app = FastAPI()

@app.get("/api/inventory")
def get_inventory():
    with open("inventory_data.json", "r") as f:
        return json.load(f)
