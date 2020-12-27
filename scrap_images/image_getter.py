import requests

key_word = "hubble"
API_URL = f"https://images-api.nasa.gov/search?q={key_word}"

r = requests.get(API_URL)
results = r.json()
items = results["collection"]["items"]

images = []


def make_images():
    global images
    for item in items:
        link = item["links"][0]["href"]
        description = item["data"][0]["description"]
        title = item["data"][0]["title"]
        data = {"title": title,
                "link": link,
                "description": description}
        images.append(data)
        print(data)
    return


def get_image():
    make_images()
    return images
