import requests
from bs4 import BeautifulSoup
import json

def scrape_visor_vin(vin_url):
    response = requests.get(vin_url)
    soup = BeautifulSoup(response.text, 'html.parser')

    data = {
        "vin": vin_url.split("/")[-1],
        "title": soup.title.string if soup.title else "No title",
        "images": [],
        "dealer_notes": "",
        "price": None
    }

    img_tags = soup.find_all("img")
    for img in img_tags:
        src = img.get("src")
        if src and "cdn" in src:
            data["images"].append(src)

    text_blocks = soup.find_all("p")
    for p in text_blocks:
        if "dealer" in p.text.lower():
            data["dealer_notes"] = p.text.strip()

    price_div = soup.find("div", class_="price")
    if price_div:
        data["price"] = price_div.text.strip()

    with open("inventory_data.json", "w") as f:
        json.dump(data, f, indent=2)

    print("✅ Scraped and saved:", data["vin"])

# Example VIN page
scrape_visor_vin("https://visor.vin/search/listings/3FMCR9BN3SRF05903?agnostic=true&make=Ford")
