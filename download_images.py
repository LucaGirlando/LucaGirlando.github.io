import urllib.request
import os
import urllib.parse

images = {
    "p1": "/web/image/539-47f83049/Screenshot%2520%25286%2529.svg",
    "p2": "/web/image/538-66db1207/Screenshot%2520%252814%2529.svg",
    "p3": "/web/image/714-92fcb7a4/Screenshot%25202025-05-18%2520170800.svg",
    "p4": "/web/image/737-e3c682ab/Screenshot%25202025-06-22%2520214004.svg",
    "p5": "/web/image/543-fa731579/153AEAA3-F379-4B9A-B10C-35CC6DB6B2A3.svg",
    "p6": "/web/image/542-8598fa9b/logo%2520%25E9%25AF%2589.svg",
    "p7": "/web/image/533-918243c8/Screenshot%2520%2528138%2529.svg",
    "p8": "/web/image/547-d83fbda4/Invesco.svg",
    "p9": "/web/image/688-c40a8844/Screenshot%2520%252825%2529.svg",
    "p10": "/web/image/691-324a9bcc/Screenshot%2520%252826%2529.svg",
    "p11": "/web/image/695-bbcf3487/Screenshot%2520%252827%2529.svg",
    "p12": "/web/image/696-4f535073/Screenshot%2520%252828%2529.svg",
    "p13": "/web/image/734-f07f4f10/Screenshot%25202025-06-19%2520100506.svg",
    "p14": "/web/image/733-d880312e/Screenshot%25202025-06-19%2520100319.svg",
    "p15": "/web/image/819-c2fddfac/Screenshot%25202026-01-22%2520120459.svg",
    "p16": "/web/image/818-c4fd89d5/Screenshot%25202026-01-22%2520120809.svg",
    "p17": "/web/image/821-8ed46c73/Screenshot%25202026-01-22%2520121200.svg",
    "p18": "/web/image/822-f868ccfd/Screenshot%25202026-01-22%2520121503.svg",
    "p19": "/web/image/820-fd7c7ccf/Screenshot%25202026-01-22%2520122433.svg",
    "p20": "/web/image/823-c0613303/Screenshot%25202026-01-22%2520122056.svg"
}

os.makedirs("public/images", exist_ok=True)

headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3'
}

base_url = "https://portfoliolucagirlando.odoo.com"

for key, path in images.items():
    # URL decode the path (sometimes contains %2520, which is double encoded %20)
    decoded_path = urllib.parse.unquote(path)
    url = base_url + decoded_path
    
    # Get the file extension
    ext = ".svg" if ".svg" in decoded_path.lower() else ".png"
    if ".png" in decoded_path.lower():
        ext = ".png"
    elif ".jpg" in decoded_path.lower() or ".jpeg" in decoded_path.lower():
        ext = ".jpg"
    elif ".webp" in decoded_path.lower():
        ext = ".webp"
        
    filename = f"{key}{ext}"
    dest = os.path.join("public/images", filename)
    
    print(f"Downloading {filename} from {url}...")
    req = urllib.request.Request(url, headers=headers)
    try:
        with urllib.request.urlopen(req) as response:
            content = response.read()
            with open(dest, "wb") as out_file:
                out_file.write(content)
        print(f"Successfully downloaded {filename}")
    except Exception as e:
        print(f"Failed to download {filename}: {e}")
