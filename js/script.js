/* logic for expanding cards */
function toggleCard(card) { card.classList.toggle('active'); }

/* Helper to create the interactive module cards */
function createCard(title, moduleText) {
    return `
    <div class="term-card" onclick="toggleCard(this)">
        <div class="term-title">${title}</div>
        <div class="info-content">
            <div class="info-section"><span class="label">Course Module Content</span>${moduleText}</div>
        </div>
    </div>`;
}

function loadPage(page) {
    const c = document.getElementById("content");
    if(!c) return;

    document.querySelectorAll('.nav-item').forEach(b => b.classList.remove('active-nav'));
    const activeBtn = document.getElementById('btn-' + page);
    if(activeBtn) activeBtn.classList.add('active-nav');

    if (page === 'home') {
        c.innerHTML = `
        <div class="page-card" style="text-align: center;">
            <h1 style="color: #00d4ff; letter-spacing: 5px;">MOBIUS 2026</h1>
            <img src="images/MOBIUS.jpg" alt="Mobius Group" class="anatomy-img" style="max-width: 100%; border-radius: 12px; margin-bottom: 15px; border: 1px solid #00d4ff;">
            <p style="font-weight: 700; color: #00d4ff; font-size: 18px;">Grade 11-Mobius</p>
            <p>Welcome to the digital literature portal.</p>
        </div>`;
    }

    if (page === 'about') {
        c.innerHTML = `
        <div class="page-card">
            <h1>Defining the Blog</h1>
            <div class="terms-grid">
                ${createCard('The Web Log', 'Short for web log. An act of maintaining a regularly updated site run by an individual or group.')}
                ${createCard('Nature', 'Written in an informal, conversational style like an online journal.')}
            </div>
        </div>`;
    }

    if (page === 'motivator') {
        c.innerHTML = `
        <div class="page-card">
            <h1>Learning Motivators</h1>
            <div class="terms-grid">
                ${createCard('Engagement', 'Increased literacy engagement as students create for meaningful purposes.')}
                ${createCard('Critical Thinking', 'Promotes questioning texts and thinking critically about messages.')}
            </div>
        </div>`;
    }

    if (page === 'factors') {
        c.innerHTML = `
        <div class="page-card">
            <h1>Success Factors</h1>
            <div class="terms-grid">
                ${createCard('Clear Guidelines', "Bloggers must have clear expectations and specific prompts.")}
                ${createCard('Teacher Role', "Teachers offer constructive comments and model professional behavior.")}
            </div>
        </div>`;
    }

    if (page === 'types') {
        c.innerHTML = `
        <div class="page-card">
            <h1>Types of Literary Blogs</h1>
            <div class="terms-grid">
                ${createCard('Poetry Blog', 'Increases visibility and sparking interest online.')}
                ${createCard('Vlog', 'Video-based blogging with supporting metadata.')}
            </div>
        </div>`;
    }

    if (page === 'platforms') {
        c.innerHTML = `
        <div class="page-card">
            <h1>Blogging Platforms</h1>
            <div class="terms-grid">
                ${createCard('WordPress', 'Powers over 30% of websites. Best for full control over the blog’s future.')}
                ${createCard('Blogger', 'Free Google service; easy for students.')}
            </div>
        </div>`;
    }

    if (page === 'parts') {
        c.innerHTML = `
        <div class="page-card">
            <h1>Blog Anatomy & Visual Sample</h1>
            <img src="images/sample and parts of blog.jpg" 
                 alt="Blog Anatomy" 
                 class="anatomy-img" 
                 style="border: 1px solid #00d4ff; width: 100%;" 
                 onerror="this.onerror=null; this.src='images/sample and parts of blog.png';">
            <p style="font-size: 13px; color: #aaa; font-style: italic; text-align: center; margin-top: 10px;">Visual breakdown including Header, Nav Bar, Title, Tags, Photo, and Comments.</p>
        </div>`;
    }

    if (page === 'steps') {
        c.innerHTML = `
        <div class="page-card">
            <h1>7 Steps to Start a Blog</h1>
            <p style="color: #00d4ff; margin-bottom: 20px; font-style: italic;">Click each step to reveal the explanation.</p>
            <div class="terms-grid">
                ${createCard('Step 1: Niche & Headline', 'Choose a specific topic and write a compelling headline to grab attention.')}
                ${createCard('Step 2: The Hook', 'Write the lead paragraph to entice the reader to continue.')}
                ${createCard('Step 3: The Body', 'Organize your thoughts logically to deliver your core message.')}
                ${createCard('Step 4: The Closing', 'Write a call-to-action, like asking for comments.')}
                ${createCard('Step 5: Refinement', 'Edit and revise for clarity and impact.')}
                ${createCard('Step 6: Quality Control', 'Proofread for spelling and grammar errors.')}
                ${createCard('Step 7: Launch', 'Publish your content and share it with your audience.')}
            </div>
        </div>`;
    }
}

window.onload = () => loadPage('home');
