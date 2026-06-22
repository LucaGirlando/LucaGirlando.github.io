// Main logic for Luca Girlando's Portfolio Website

document.addEventListener('DOMContentLoaded', () => {
    // Theme Switcher Initialization
    initTheme();
    
    // Render initial state
    renderProjects(projectsData);
    
    // Setup event listeners for filtering, searching, and interactions
    setupEventListeners();
});

// Theme Management
function initTheme() {
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme) {
        document.documentElement.setAttribute('data-theme', savedTheme);
    } else if (systemPrefersDark) {
        document.documentElement.setAttribute('data-theme', 'dark');
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
    }
}

function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
}

// Global state for filtering
let currentCategory = 'all';
let searchQuery = '';

// Setup Event Listeners
function setupEventListeners() {
    // Theme Toggle
    const themeBtn = document.getElementById('theme-toggle');
    if (themeBtn) {
        themeBtn.addEventListener('click', toggleTheme);
    }
    
    // Mobile Menu Toggle
    const mobileMenuBtn = document.getElementById('mobile-menu-toggle');
    const navMenu = document.getElementById('nav-menu');
    if (mobileMenuBtn && navMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            const icon = mobileMenuBtn.querySelector('i');
            if (navMenu.classList.contains('active')) {
                icon.className = 'fas fa-times';
            } else {
                icon.className = 'fas fa-bars';
            }
        });
        
        // Close menu when clicking nav links
        navMenu.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                mobileMenuBtn.querySelector('i').className = 'fas fa-bars';
            });
        });
    }
    
    // Category Filters
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            filterButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentCategory = btn.getAttribute('data-filter');
            applyFilters();
        });
    });
    
    // Search Bar
    const searchInput = document.getElementById('search-input');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            searchQuery = e.target.value.toLowerCase().trim();
            applyFilters();
        });
    }
    
    // Close Modal Event Listeners
    const modalCloseBtn = document.getElementById('modal-close-btn');
    const modalOverlay = document.getElementById('modal-overlay');
    
    if (modalCloseBtn) {
        modalCloseBtn.addEventListener('click', closeModal);
    }
    
    if (modalOverlay) {
        modalOverlay.addEventListener('click', (e) => {
            if (e.target === modalOverlay) {
                closeModal();
            }
        });
    }
    
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeModal();
        }
    });
}

// Apply Category & Search Filters
function applyFilters() {
    let filtered = projectsData;
    
    // 1. Filter by Category
    if (currentCategory !== 'all') {
        filtered = filtered.filter(p => p.category === currentCategory);
    }
    
    // 2. Filter by Search Query
    if (searchQuery) {
        filtered = filtered.filter(p => {
            const inTitle = p.title.toLowerCase().includes(searchQuery);
            const inDesc = p.short_description.toLowerCase().includes(searchQuery);
            const inFeatures = p.features.some(f => f.toLowerCase().includes(searchQuery));
            const inParagraphs = p.paragraphs.some(para => para.toLowerCase().includes(searchQuery));
            return inTitle || inDesc || inFeatures || inParagraphs;
        });
    }
    
    renderProjects(filtered);
}

// Render Projects List in Grid
function renderProjects(projects) {
    const grid = document.getElementById('projects-grid');
    const countElement = document.getElementById('results-count');
    
    if (!grid) return;
    
    grid.innerHTML = '';
    
    if (countElement) {
        countElement.textContent = `Found ${projects.length} projects`;
    }
    
    if (projects.length === 0) {
        grid.innerHTML = `
            <div style="grid-column: 1 / -1; text-align: center; padding: 3rem; color: var(--text-muted);">
                <i class="fas fa-search" style="font-size: 2.5rem; margin-bottom: 1rem; display: block;"></i>
                No projects found matching the search criteria.
            </div>
        `;
        return;
    }
    
    projects.forEach(p => {
        const card = document.createElement('div');
        card.className = 'project-card';
        card.setAttribute('data-id', p.id);
        
        // Define badge style
        let badgeClass = 'badge-quantitative-analysis';
        if (p.category === 'Interactive Web Apps') badgeClass = 'badge-interactive-app';
        else if (p.category === 'Research & Thesis') badgeClass = 'badge-academic-research';
        
        // Tags extracted (python, streamlit, etc.)
        const techTags = extractTechTags(p);
        const tagsHtml = techTags.map(tag => `<span class="tag">${tag}</span>`).join('');
        
        // Icons based on links available
        const hasApp = p.app_links.length > 0;
        const hasGithub = p.github_links.length > 0;
        const hasPdf = p.pdf_links.length > 0;
        
        let linkShortcuts = '';
        if (hasApp) linkShortcuts += `<a href="${p.app_links[0]}" target="_blank" title="Try the Web App" onclick="event.stopPropagation()"><i class="fas fa-external-link-alt"></i></a>`;
        if (hasGithub) linkShortcuts += `<a href="${p.github_links[0]}" target="_blank" title="Code on GitHub" onclick="event.stopPropagation()"><i class="fab fa-github"></i></a>`;
        if (hasPdf) linkShortcuts += `<a href="${p.pdf_links[0]}" target="_blank" title="Download PDF Report" onclick="event.stopPropagation()"><i class="fas fa-file-pdf"></i></a>`;
        
        card.innerHTML = `
            <div class="card-image-container">
                <span class="card-category-badge ${badgeClass}">${p.category}</span>
                <img src="${p.image_path}" class="card-img" alt="${p.title}" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
                <div class="card-img-placeholder" style="display: none;">
                    <i class="fas fa-chart-line"></i>
                    <span>${p.title}</span>
                </div>
            </div>
            <div class="card-body">
                <h3 class="card-title">${p.title}</h3>
                <p class="card-desc">${p.short_description}</p>
                <div class="card-tags">
                    ${tagsHtml}
                </div>
            </div>
            <div class="card-footer">
                <span class="card-action-link">Learn More <i class="fas fa-arrow-right"></i></span>
                <div class="card-links-shortcuts">
                    ${linkShortcuts}
                </div>
            </div>
        `;
        
        card.addEventListener('click', () => openModal(p.id));
        grid.appendChild(card);
    });
}

// Tech tags extraction helper
function extractTechTags(project) {
    const tags = [];
    const textToCheck = (project.title + ' ' + project.short_description + ' ' + project.features.join(' ') + ' ' + project.paragraphs.join(' ')).toLowerCase();
    
    if (textToCheck.includes('streamlit')) tags.push('Streamlit');
    if (textToCheck.includes('python')) tags.push('Python');
    if (textToCheck.includes('matlab')) tags.push('MATLAB');
    if (textToCheck.includes('latex')) tags.push('LaTeX');
    if (textToCheck.includes('prophet')) tags.push('Prophet');
    if (textToCheck.includes('monte carlo')) tags.push('Monte Carlo');
    if (textToCheck.includes('black-scholes') || textToCheck.includes('bs model')) tags.push('Black-Scholes');
    if (textToCheck.includes('invesco')) tags.push('Invesco');
    if (textToCheck.includes('portfolio optimization') || textToCheck.includes('markowitz') || textToCheck.includes('optimal portfolio')) tags.push('Optimization');
    if (textToCheck.includes('bond') || textToCheck.includes('fixed income')) tags.push('Fixed Income');
    
    // Add default category-based tag if none found
    if (tags.length === 0) {
        if (project.category === 'Interactive App') tags.push('Python');
        else if (project.category === 'Academic Research') tags.push('Research');
        else tags.push('Finance');
    }
    
    return tags.slice(0, 4); // Limit to 4 tags
}

// Modal management
function openModal(id) {
    const p = projectsData.find(proj => proj.id === id);
    if (!p) return;
    
    const overlay = document.getElementById('modal-overlay');
    const container = document.getElementById('modal-container-content');
    
    if (!overlay || !container) return;
    
    // Extract actions
    const hasApp = p.app_links.length > 0;
    const hasGithub = p.github_links.length > 0;
    const hasPdf = p.pdf_links.length > 0;
    
    let actionButtonsHtml = '';
    if (hasApp) {
        actionButtonsHtml += `
            <a href="${p.app_links[0]}" target="_blank" class="btn-action btn-primary-action">
                <i class="fas fa-play-circle"></i> Try the Web App
            </a>
        `;
    }
    if (hasGithub) {
        actionButtonsHtml += `
            <a href="${p.github_links[0]}" target="_blank" class="btn-action btn-secondary-action">
                <i class="fab fa-github"></i> Code on GitHub
            </a>
        `;
    }
    if (hasPdf) {
        actionButtonsHtml += `
            <a href="${p.pdf_links[0]}" target="_blank" class="btn-action btn-secondary-action" download>
                <i class="fas fa-file-pdf"></i> Download PDF Report
            </a>
        `;
    }
    
    // Tech list
    const tags = extractTechTags(p);
    const techItemsHtml = tags.map(tag => `<li><span class="tech-info-label">${tag}</span><span class="tech-info-value"><i class="fas fa-check-circle" style="color: var(--accent);"></i></span></li>`).join('');
    
    // Paragraphs HTML
    const paragraphsHtml = p.paragraphs.map(para => `<p>${para}</p>`).join('');
    
    // Features List HTML
    let featuresSectionHtml = '';
    if (p.features.length > 0) {
        const featuresItemsHtml = p.features.map(f => `<li>${f}</li>`).join('');
        featuresSectionHtml = `
            <div>
                <h4 class="modal-section-title"><i class="fas fa-star"></i> Key Features</h4>
                <ul class="modal-features-list">
                    ${featuresItemsHtml}
                </ul>
            </div>
        `;
    }
    
    container.innerHTML = `
        <div class="modal-header-image">
            <img src="${p.image_path}" alt="${p.title}" onerror="this.style.display='none';">
        </div>
        <div class="modal-header-content">
            <span class="modal-category">${p.category}</span>
            <h2 class="modal-title">${p.title}</h2>
        </div>
        <div class="modal-content-grid">
            <div class="modal-main-column">
                <div>
                    <h4 class="modal-section-title"><i class="fas fa-info-circle"></i> Project Description</h4>
                    <div class="modal-paragraphs">
                        ${paragraphsHtml || `<p>${p.short_description}</p>`}
                    </div>
                </div>
                ${featuresSectionHtml}
            </div>
            <div class="modal-side-column">
                <div>
                    <h4 class="modal-section-title"><i class="fas fa-link"></i> Links</h4>
                    <div class="action-buttons-group">
                        ${actionButtonsHtml || '<span style="color: var(--text-muted); font-size: 0.9rem;">No external links available for this project.</span>'}
                    </div>
                </div>
                <div>
                    <h4 class="modal-section-title"><i class="fas fa-tools"></i> Technologies Used</h4>
                    <div class="tech-info-card">
                        <ul class="tech-info-list">
                            ${techItemsHtml}
                            <li><span class="tech-info-label">Project ID</span><span class="tech-info-value">${p.id.toUpperCase()}</span></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden'; // Disable page scroll
}

function closeModal() {
    const overlay = document.getElementById('modal-overlay');
    if (!overlay) return;
    overlay.classList.remove('active');
    document.body.style.overflow = ''; // Restore page scroll
}

// Copy to clipboard helper
function copyToClipboard(text, elementId) {
    navigator.clipboard.writeText(text).then(() => {
        const el = document.getElementById(elementId);
        if (el) {
            const originalText = el.innerHTML;
            el.innerHTML = '<i class="fas fa-check"></i> Copied!';
            setTimeout(() => {
                el.innerHTML = originalText;
            }, 2000);
        }
    });
}
