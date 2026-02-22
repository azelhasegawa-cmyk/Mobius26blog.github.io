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
    document.querySelectorAll('.nav-item').forEach(b => b.classList.remove('active-nav'));
    const activeBtn = document.getElementById('btn-' + page);
    if(activeBtn) activeBtn.classList.add('active-nav');

    if (page === 'home') {
        c.innerHTML = `
        <div class="page-card" style="text-align: center;">
            <h1 style="color: #00d4ff; letter-spacing: 5px;">MOBIUS 2026</h1>
            <img src="images/MOBIUS.jpg" alt="Mobius Group" class="anatomy-img" style="max-width: 100%; border-radius: 12px; margin-bottom: 15px; border: 1px solid #00d4ff;">
            <p style="font-weight: 700; color: #00d4ff; font-size: 18px;">Grade 11-Mobius</p>
            <p>Explore the creative world of blogging with 11-Mobius.</p>
        </div>`;
    }

    if (page === 'about') {
        c.innerHTML = `
        <div class="page-card">
            <h1>Defining the Blog</h1>
            <div class="terms-grid">
                ${createCard('The Web Log', 'Blog is short for web log. It is an act of creating and maintaining a blog that is regularly updated and typically run by an individual or small group.')}
                ${createCard('Nature of Content', 'It is written in an informal or conversational style. It is like an online diary or journal, but created for an audience.')}
                ${createCard('History', 'Evolved in 1999 by Peter Merholz, becoming a phenomenon for personal, commercial, and business activities.')}
                ${createCard('Educational Venue', 'A venue where learners can reflect, comment, question, and communicate outside the classroom.')}
            </div>
        </div>`;
    }

    if (page === 'motivator') {
        c.innerHTML = `
        <div class="page-card">
            <h1>Blog as Learning Motivator</h1>
            <div class="terms-grid">
                ${createCard('Engagement', 'Increased motivation and literacy engagement as students read, write, and create for meaningful purposes.')}
                ${createCard('Peer Interaction', 'Students focus on clearly stating ideas to attract posts and feedback from peers.')}
                ${createCard('Authentic Audience', 'Access to a wide audience of peers gives students a purpose for writing beyond the teacher.')}
                ${createCard('Inclusion', 'Reticent students have the option to join conversations later by writing or replying to comments.')}
                ${createCard('Critical Thinking', 'Promotes higher order thinking like questioning texts and thinking critically about messages.')}
            </div>
        </div>`;
    }

    if (page === 'factors') {
        c.innerHTML = `
        <div class="page-card">
            <h1>Success Factors</h1>
            <div class="terms-grid">
                ${createCard('Clear Guidelines', "Don't just dive in. Bloggers must have clear guidelines and expectations.")}
                ${createCard('Academic Focus', "Don't confuse blogging with social networking; the academic focus must remain clear.")}
                ${createCard('Avoid Freebies', "Free sites often lack educator control and include distracting advertisements.")}
                ${createCard('Discussion Flow', "Avoid forcing a sequential style; reverse chronological order can hinder discussions.")}
                ${createCard('Teacher Role', "Teachers should offer constructive comments and share input on the blog.")}
            </div>
        </div>`;
    }

    if (page === 'types') {
        c.innerHTML = `
        <div class="page-card">
            <h1>Types of Literary Blogs</h1>
            <div class="terms-grid">
                ${createCard('Poetry Blog', 'Brings longevity to the art, increasing visibility and sparking community interest.')}
                ${createCard('Short Story Blog', 'Good for prose fiction that can be read in one sitting with compelling characters.')}
                ${createCard('Music Blogs', 'Critiques on trending music like jazz, pop, and heavy metal.')}
                ${createCard('Personal Blogs', 'Writers share daily life to make a difference or influence readers.')}
                ${createCard('Movie Blogs', 'Covers news and reviews; bloggers generate buzz for upcoming films.')}
                ${createCard('Vlog', 'A video blog where the primary medium is video with supporting metadata.')}
            </div>
        </div>`;
    }

    if (page === 'platforms') {
        c.innerHTML = `
        <div class="page-card">
            <h1>Blogging Platforms</h1>
            <div class="terms-grid">
                ${createCard('WordPress', 'Powers over 30% of websites. Best for full control over the blog’s future.')}
                ${createCard('Blogger', 'Free Google service; easy for non-tech-savvy users like students.')}
                ${createCard('Tumblr', 'Microblogging platform with social features like reblogging.')}
                ${createCard('Medium', 'Community of writers and experts with limited social networking features.')}
                ${createCard('Ghost', 'Minimalist platform entirely focused on the writing experience.')}
            </div>
        </div>`;
    }

    if (page === 'parts' || page === 'samples') {
        c.innerHTML = `
        <div class="page-card">
            <h1>Blog Anatomy & Visual Sample</h1>
            <img src="images/sample and parts of blog.jpg" 
                 alt="Blog Anatomy" 
                 class="anatomy-img" 
                 style="border: 1px solid #00d4ff; width: 100%;" 
                 onerror="this.onerror=null; this.src='images/sample and parts of blog.png';">
            <p style="font-size: 13px; color: #aaa; font-style: italic; text-align: center; margin-top: 10px;">Visual breakdown of blog parts including Header, Nav Bar, Title, Tags, Photo, and Comments.</p>
        </div>`;
    }

    if (page === 'steps') {
        c.innerHTML = `
        <div class="page-card">
            <h1>7 Steps to Start a Blog</h1>
            <div class="terms-grid">
                ${createCard('Step 1: Niche & Headline', 'Choose a specific topic and write a compelling headline to grab the reader\'s attention immediately.')}
                ${createCard('Step 2: The Hook', 'Write the lead paragraph. This section must entice the reader to continue through the rest of the post.')}
                ${createCard('Step 3: The Body', 'List and expand on your main points. Organise your thoughts logically to deliver your core message.')}
                ${createCard('Step 4: The Closing', 'Write your call-to-action. Tell your readers exactly what you want them to do next, like leaving a comment.')}
                ${createCard('Step 5: Refinement', 'Edit and revise your content. Look for ways to make your sentences clearer and more impactful.')}
                ${createCard('Step 6: Quality Control', 'Proofread your work. Check for any spelling, grammar, or formatting errors before going live.')}
                ${createCard('Step 7: Launch', 'Publish your content to your chosen platform and share it with your audience.')}
            </div>
        </div>`;
    }
}

window.onload = () => loadPage('home');