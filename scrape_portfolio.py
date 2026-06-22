import urllib.request
import re
import json
import os
import html
from urllib.error import HTTPError

def clean_html_tags(text):
    if not text:
        return ""
    # Replace common formatting tags
    text = re.sub(r'</?(?:strong|b|em|i|u|font|span|font)[^>]*>', '', text)
    text = html.unescape(text)
    # Remove excessive newlines
    text = re.sub(r'\n\s*\n', '\n', text)
    return text.strip()

def get_page_content(url):
    print(f"Fetching {url}...")
    headers = {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3'
    }
    req = urllib.request.Request(url, headers=headers)
    try:
        with urllib.request.urlopen(req) as response:
            return response.read().decode('utf-8')
    except HTTPError as e:
        print(f"HTTP Error {e.code} for {url}")
        return None
    except Exception as e:
        print(f"Error fetching {url}: {e}")
        return None

def parse_main_page(html_content):
    # Extracts menu links and project titles on the home page
    # Let's find links like /p1, /p2, etc.
    # Pattern: <a role="menuitem" href="/p([0-9]+)" ...><span>(.*?)</span></a>
    menu_items = []
    matches = re.findall(r'href="/(p[0-9]+)"[^>]*>\s*<span>(.*?)</span>', html_content)
    for path, title in matches:
        menu_items.append({
            "path": path,
            "title": clean_html_tags(title)
        })
    return menu_items

def parse_subpage(html_content, path):
    # Extracts the title from h1 tag first, fallback to head title
    h1_match = re.search(r'<h1[^>]*>(.*?)</h1>', html_content, re.DOTALL)
    if h1_match:
        title = clean_html_tags(h1_match.group(1))
    else:
        title_match = re.search(r'<title>(.*?) - Portfolio Luca Girlando</title>', html_content)
        title = clean_html_tags(title_match.group(1)) if title_match else ""
    
    # Try to find app buttons
    # Pattern: href="([^"]*streamlit[^"]*)"
    # Pattern: href="([^"]*github.com[^"]*)"
    app_links = []
    github_links = []
    pdf_links = []
    all_links = re.findall(r'href="([^"]*)"', html_content)
    
    for link in all_links:
        if 'streamlit.app' in link or 'streamlit' in link:
            if link not in app_links:
                app_links.append(link)
        elif 'github.com' in link:
            if link not in github_links:
                github_links.append(link)
        elif link.endswith('.pdf') or '/web/content/' in link:
            if link not in pdf_links:
                pdf_links.append(link)
                
    # Also grab the main section texts. Let's look for headings and list items.
    # A simple way to grab all paragraphs or list items:
    # Let's search inside the <main> element
    main_match = re.search(r'<main[^>]*>(.*?)</main>', html_content, re.DOTALL)
    content_text = ""
    if main_match:
        main_html = main_match.group(1)
        # remove scripts and styles
        main_html = re.sub(r'<script[^>]*>.*?</script>', '', main_html, flags=re.DOTALL)
        main_html = re.sub(r'<style[^>]*>.*?</style>', '', main_html, flags=re.DOTALL)
        
        # Extract features (list items)
        features = []
        feature_matches = re.findall(r'<li[^>]*>(.*?)</li>', main_html, re.DOTALL)
        for f in feature_matches:
            f_clean = clean_html_tags(f)
            if f_clean and f_clean not in features:
                features.append(f_clean)
                
        # Get paragraphs
        paragraphs = []
        p_matches = re.findall(r'<p[^>]*>(.*?)</p>', main_html, re.DOTALL)
        for p in p_matches:
            p_clean = clean_html_tags(p)
            if p_clean and p_clean not in paragraphs and "Click here to try" not in p_clean and "view the code" not in p_clean:
                paragraphs.append(p_clean)
                
        # Also grab h2 and h3 headers
        headers_found = []
        h_matches = re.findall(r'<h[23][^>]*>(.*?)</h[23]>', main_html, re.DOTALL)
        for h in h_matches:
            h_clean = clean_html_tags(h)
            if h_clean and h_clean not in headers_found:
                headers_found.append(h_clean)
    else:
        features = []
        paragraphs = []
        headers_found = []

    return {
        "path": path,
        "title": title,
        "app_links": app_links,
        "github_links": github_links,
        "pdf_links": pdf_links,
        "headers": headers_found,
        "features": features,
        "paragraphs": paragraphs
    }

def main():
    home_url = "https://portfoliolucagirlando.odoo.com/"
    home_html = get_page_content(home_url)
    if not home_html:
        print("Failed to fetch home page.")
        return
        
    menu_items = parse_main_page(home_html)
    print(f"Found {len(menu_items)} projects in menu.")
    
    projects_data = []
    for item in menu_items:
        path = item["path"]
        subpage_url = home_url + path
        subpage_html = get_page_content(subpage_url)
        if subpage_html:
            data = parse_subpage(subpage_html, path)
            data["menu_title"] = item["title"]
            projects_data.append(data)
        else:
            print(f"Skipping {path} due to error.")
            
    # Output file
    output_path = "portfolio_data.json"
    with open(output_path, "w", encoding="utf-8") as f:
        json.dump(projects_data, f, indent=4, ensure_ascii=False)
    print(f"Scraped data successfully saved to {output_path}")

if __name__ == "__main__":
    main()
