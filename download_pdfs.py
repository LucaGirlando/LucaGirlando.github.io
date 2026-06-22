import urllib.request
import os

pdf_links = {
    "p8_BSc_Thesis_Invesco.pdf": "https://portfoliolucagirlando.odoo.com/web/content/548?unique=42c6544e6eea34504748a8fe530e9a43693ac0cd&download=true",
    "p14_Financial_Econometrics.pdf": "https://portfoliolucagirlando.odoo.com/web/content/735?unique=15d687a82ae4af12031a80427ddaa871aff0805b&download=true",
    "p16_Opening_Range_Breakout.pdf": "https://portfoliolucagirlando.odoo.com/web/content/825?unique=4dfd58f7b038f516864e64c8ea6ad67e0869abe1&download=true",
    "p17_Testing_Portfolio_Models.pdf": "https://portfoliolucagirlando.odoo.com/web/content/826?unique=fb0221cc429073d94d9c19487268126c4165385e&download=true",
    "p18_Investment_Strategy.pdf": "https://portfoliolucagirlando.odoo.com/web/content/827?unique=bfb43affebbe809cd53f6098df7dd048610568e8&download=true"
}

os.makedirs("public/pdfs", exist_ok=True)

headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3'
}

for filename, url in pdf_links.items():
    dest = os.path.join("public/pdfs", filename)
    print(f"Downloading {filename}...")
    req = urllib.request.Request(url, headers=headers)
    try:
        with urllib.request.urlopen(req) as response, open(dest, "wb") as out_file:
            out_file.write(response.read())
        print(f"Successfully downloaded {filename}")
    except Exception as e:
        print(f"Failed to download {filename}: {e}")
