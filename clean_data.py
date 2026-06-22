import json
import re
import html

def clean_text(text):
    if not text:
        return ""
    # Replace HTML tags that might be left
    text = re.sub(r'<[^>]+>', ' ', text)
    # Replace non-breaking spaces and other formatting
    text = text.replace('\xa0', ' ')
    text = html.unescape(text)
    # Replace multiple spaces
    text = re.sub(r'\s+', ' ', text)
    return text.strip()

def process_features(features_list):
    cleaned = []
    for f in features_list:
        # Split by sub-lists if Odoo combined them in list items
        parts = re.split(r'<li>|</li>|\n', f)
        for part in parts:
            c_part = clean_text(part)
            if c_part and c_part not in cleaned:
                cleaned.append(c_part)
    return cleaned

def determine_category(path, title, menu_title, app_links):
    if path in ["p5", "p6"]:
        return "Leadership & Initiatives"
    elif len(app_links) > 0:
        return "Interactive Web Apps"
    else:
        return "Research & Thesis"

def main():
    with open("portfolio_data.json", "r", encoding="utf-8") as f:
        data = json.load(f)
        
    # Get unique by path
    unique_data = {}
    for d in data:
        path = d["path"]
        if path not in unique_data:
            unique_data[path] = d
            
    # Sort from p20 down to p1 (most recent first)
    sorted_paths = sorted(unique_data.keys(), key=lambda x: int(x[1:]), reverse=True)
    
    cleaned_projects = []
    for path in sorted_paths:
        proj = unique_data[path]
        
        title = clean_text(proj.get("title", ""))
        menu_title = clean_text(proj.get("menu_title", ""))
        
        # If title is empty, use menu title
        if not title:
            title = menu_title
            
        # Clean title of " (App)" or similar suffixes
        title_clean = re.sub(r'\s*\(App\)\s*$', '', title, flags=re.IGNORECASE)
        title_clean = re.sub(r'\s*-\s*Heatmap\s*$', '', title_clean, flags=re.IGNORECASE)
        title_clean = title_clean.strip()
        
        # Globally fix MSc Thesis -> BSc Thesis for Invesco
        if "invesco" in title_clean.lower() or "invesco" in menu_title.lower():
            title_clean = "BSc Thesis - Invesco Asset Management"
            
        app_links = proj.get("app_links", [])
        github_links = proj.get("github_links", [])
        
        # Clean and map PDFs to local paths
        pdf_links = proj.get("pdf_links", [])
        local_pdf_links = []
        for pdf in pdf_links:
            # Match standard local name
            if "548" in pdf:
                local_pdf_links.append("public/pdfs/p8_BSc_Thesis_Invesco.pdf")
            elif "735" in pdf:
                local_pdf_links.append("public/pdfs/p14_Financial_Econometrics.pdf")
            elif "825" in pdf:
                local_pdf_links.append("public/pdfs/p16_Opening_Range_Breakout.pdf")
            elif "826" in pdf:
                local_pdf_links.append("public/pdfs/p17_Testing_Portfolio_Models.pdf")
            elif "827" in pdf:
                local_pdf_links.append("public/pdfs/p18_Investment_Strategy.pdf")
            else:
                local_pdf_links.append(pdf)
                
        # Fix for Fixed Income & Options Pricing PDFs manually uploaded
        if path == "p15":
            local_pdf_links = ["public/pdfs/p15_Fixed_Income.pdf"]
        elif path == "p4":
            local_pdf_links = ["public/pdfs/p4_Asian_Options_Pricing.pdf"]
            
        features = process_features(proj.get("features", []))
        paragraphs = [clean_text(p) for p in proj.get("paragraphs", []) if p.strip()]
        
        # Filter paragraphs that are actually button texts or links
        filtered_paragraphs = []
        for p in paragraphs:
            if "Click here" in p or "Click to" in p or "view the code" in p or "LinkedIn" in p:
                continue
            if p == "​" or not p:
                continue
            filtered_paragraphs.append(p)
            
        category = determine_category(path, title_clean, menu_title, app_links)
        
        # Synthesize a short description from first paragraph or first feature
        valid_paragraphs = [p for p in filtered_paragraphs if "sleeping" not in p.lower() and "get this app" not in p.lower()]
        if valid_paragraphs:
            short_desc = valid_paragraphs[0]
        elif features:
            short_desc = features[0]
        else:
            short_desc = "Quantitative finance project focusing on analysis, modeling, and financial calculations."
            
        # Specific overrides for better descriptions
        if "Volatility Surface Analyzer" in title_clean:
            short_desc = "Interactive 3D visualization and arbitrage scanning tool for implied volatility surfaces using Black-Scholes."
        elif "Portfolio Backtester" in title_clean:
            short_desc = "Multi-asset portfolio simulation engine utilizing historical Yahoo Finance data and Monte Carlo projections."
            
        # Limit short description length for cards
        if len(short_desc) > 130:
            short_desc = short_desc[:127] + "..."
            
        # Specific fixes for project descriptions that we know
        if "BSc Thesis" in title_clean or "Invesco" in title_clean:
            short_desc = "Analysis of thematic investment funds and consumer trends, developed during BSc thesis with Invesco Asset Management."
        elif "SF Bicocca" in title_clean or path == "p5":
            short_desc = "Role as Portfolio Manager for a virtual fund at Starting Finance Bicocca Club, scaling the division to 100+ members."
        elif "Koi Asset" in title_clean or path == "p6":
            short_desc = "Student association bridging quantitative finance and behavioral psychology, managing a dynamic ETF virtual fund."
            
        # Custom content overrides for Starting Finance (p5) and Koi Asset Management (p6)
        if path == "p6":
            title_clean = "Koi Asset Management"
            filtered_paragraphs = [
                "Koi Asset Management is a student-led financial association created to engage members with quantitative finance while bridging the gap between psychology and economics, exploring how cognitive biases and behavioral patterns influence investment decisions.",
                "The platform manages the Koi Long Term Fund, a dynamic virtual asset allocation model designed to optimize returns while actively managing risk. Portfolio weights are adjusted based on age-related risk tolerance and interest rate expectations using a systematic formula: Equity Allocation (%) = 125 - 20 * (Age) - 5 * (Fed Rate).",
                "For the winter period (Nov 2024 - Jan 2025), the fund achieved a 5.70% return, outperforming the S&P 500 (5.61%) and MSCI World (4.57%) benchmarks with lower drawdown. The association hosts weekly market updates and workshops to train analysts in behavioral finance."
            ]
            features = [
                "Systematic Asset Allocation: Implemented a custom allocation formula based on investor age and the Federal Reserve interest rate.",
                "Behavioral Finance Focus: Investigated the intersection of psychology and economics, exploring cognitive biases in financial markets.",
                "Performance Excellence: Achieved +5.70% returns in the virtual fund, outperforming the S&P 500 and MSCI World benchmarks.",
                "Weekly Research: Published briefings on macroeconomic events, central bank policies, and sector-specific asset selection."
            ]
            app_links = ["https://www.linkedin.com/company/koi-asset-management/"]
            
        elif path == "p5":
            title_clean = "SF Bicocca US Alpha Fund"
            filtered_paragraphs = [
                "As the Head of the Portfolio Management Division, I founded and managed the SF Bicocca Alpha Fund—a virtual fund designed to systematically outperform the S&P 500 index. I scaled the division from an initial group of 5 members to a structured team of 100+ active members, organized into 11 GICS sector-specific analyst teams.",
                "My role involved training 90+ junior analysts in quantitative analysis, financial modeling, and fundamental stock selection, defining the macro asset allocation strategy, and mentoring team leaders in conducting sector analysis.",
                "During my tenure, the fund achieved +1.52% alpha relative to the S&P 500 index with a maximum drawdown restricted to -8.5%, demonstrating robust risk-adjusted returns during turbulent market regimes."
            ]
            features = [
                "Strategic Portfolio Management: Founded and managed a virtual S&P 500-beating fund, achieving a +1.52% positive alpha.",
                "Division Leadership: Scaled the Starting Finance Bicocca Portfolio Management division from 5 to over 100 active members.",
                "Mentoring & Training: Mentored 90+ junior analysts in macroeconomic, fundamental, and quantitative analysis, organizing workshops.",
                "Risk Management: Maintained strict limit controls, capping the maximum drawdown of the sector-diversified portfolios to -8.5%."
            ]
            app_links = ["https://www.linkedin.com/company/starting-finance/"]
            
        cleaned_projects.append({
            "id": path,
            "title": title_clean,
            "category": category,
            "short_description": short_desc,
            "image_path": f"public/images/{path}.svg",
            "app_links": app_links,
            "github_links": github_links,
            "pdf_links": local_pdf_links,
            "features": features,
            "paragraphs": filtered_paragraphs,
            "menu_title": menu_title
        })
        
    # Write to projects.js
    js_content = f"// Automatically generated project data\nconst projectsData = {json.dumps(cleaned_projects, indent=4, ensure_ascii=False)};\n"
    with open("projects.js", "w", encoding="utf-8") as f:
        f.write(js_content)
        
    print(f"Successfully processed {len(cleaned_projects)} projects and wrote to projects.js")

if __name__ == "__main__":
    main()
