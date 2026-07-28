// ─── DATA ───

const roleModels = [
    {
        name: 'Dr. A.P.J. Abdul Kalam',
        title: 'Missile Man of India',
        bio: 'From a small town in Tamil Nadu to the President of India. His journey inspires millions to dream beyond their circumstances.',
        achievement: '🇮🇳 Bharat Ratna • 11th President'
    },
    {
        name: 'Kalpana Chawla',
        title: 'Astronaut & Pioneer',
        bio: 'Born in Karnal, she became the first Indian woman in space. A symbol of courage, curiosity, and breaking barriers.',
        achievement: '🚀 NASA Astronaut • Padma Bhushan'
    },
    {
        name: 'Ratan Tata',
        title: 'Industrialist & Philanthropist',
        bio: 'Transformed the Tata Group into a global powerhouse while staying rooted in ethics and giving back to society.',
        achievement: '🏭 Padma Vibhushan • Legend of Industry'
    },
    {
        name: 'PV Sindhu',
        title: 'Badminton Champion',
        bio: 'From Hyderabad to Olympic silver and World Championship gold. She redefined what Indian women can achieve in sports.',
        achievement: '🏸 Olympic Medalist • Padma Bhushan'
    },
    {
        name: 'Sundar Pichai',
        title: 'CEO of Alphabet & Google',
        bio: 'Born in Chennai, he rose from humble beginnings to lead one of the world\'s most influential tech companies.',
        achievement: '💻 Forbes Top CEOs • IIT Kharagpur Alumnus'
    },
    {
        name: 'Mirabai Chanu',
        title: 'Weightlifting Star',
        bio: 'From a small village in Manipur to Olympic silver in Tokyo. Her grit and discipline are an inspiration to every young Indian.',
        achievement: '🏋️ Olympic Silver • Padma Shri'
    }
];

const careerData = [
    {
        id: 1,
        title: 'Software Engineer',
        category: 'tech',
        icon: '💻',
        desc: 'Build the future of India\'s digital economy. High demand in AI, cloud, and product development.',
        scope: 92,
        tags: ['AI/ML', 'Full Stack', 'Remote Work']
    },
    {
        id: 2,
        title: 'Data Scientist',
        category: 'tech',
        icon: '📊',
        desc: 'Turn data into decisions. One of the most sought-after roles with massive growth in Indian startups and MNCs.',
        scope: 95,
        tags: ['Python', 'ML', 'Analytics']
    },
    {
        id: 3,
        title: 'Investment Banker',
        category: 'business',
        icon: '🏦',
        desc: 'Drive India\'s financial markets. Work with top firms on M&A, IPOs, and wealth management.',
        scope: 82,
        tags: ['Finance', 'MBA', 'High Pay']
    },
    {
        id: 4,
        title: 'Entrepreneur',
        category: 'business',
        icon: '🚀',
        desc: 'Build your own venture. India\'s startup ecosystem is booming with funding, mentors, and government support.',
        scope: 78,
        tags: ['Startup', 'Innovation', 'Leadership']
    },
    {
        id: 5,
        title: 'UX/UI Designer',
        category: 'creative',
        icon: '🎨',
        desc: 'Shape the user experience of products used by millions. A perfect blend of creativity and technology.',
        scope: 76,
        tags: ['Design', 'Figma', 'User Research']
    },
    {
        id: 6,
        title: 'Digital Marketing Specialist',
        category: 'creative',
        icon: '📱',
        desc: 'Help brands grow in the digital world. India\'s internet boom has created endless opportunities.',
        scope: 80,
        tags: ['SEO', 'Content', 'Social Media']
    },
    {
        id: 7,
        title: 'Doctor (MBBS / MD)',
        category: 'science',
        icon: '🩺',
        desc: 'Serve the nation through healthcare. With India\'s growing population, doctors are always in high demand.',
        scope: 88,
        tags: ['Medicine', 'Surgery', 'Public Health']
    },
    {
        id: 8,
        title: 'Biotech Researcher',
        category: 'science',
        icon: '🧬',
        desc: 'Work at the intersection of biology and technology. India is emerging as a global hub for biotech innovation.',
        scope: 74,
        tags: ['Genomics', 'Drug Discovery', 'Research']
    },
    {
        id: 9,
        title: 'Civil Services (IAS/IPS)',
        category: 'govt',
        icon: '🏛️',
        desc: 'Serve the nation and bring change at the policy level. The most respected career path in India.',
        scope: 86,
        tags: ['UPSC', 'Administration', 'Policy']
    },
    {
        id: 10,
        title: 'Lawyer / Legal Advisor',
        category: 'govt',
        icon: '⚖️',
        desc: 'Defend justice and shape the legal landscape. Corporate law, criminal law, and constitutional practice are booming.',
        scope: 70,
        tags: ['Litigation', 'Corporate', 'Constitutional']
    }
];

// ─── QUIZ DATA ───
const quizQuestions = [
    {
        q: 'What kind of work environment excites you the most?',
        options: [
            'Fast-paced tech company with innovation',
            'Creative studio with design and media',
            'Corporate boardroom with strategy',
            'Research lab or hospital',
            'Government office serving the public'
        ],
        map: ['tech', 'creative', 'business', 'science', 'govt']
    },
    {
        q: 'Which skill do you enjoy using the most?',
        options: [
            'Coding & problem-solving',
            'Visual design & storytelling',
            'Numbers & financial analysis',
            'Scientific reasoning & experimentation',
            'Communication & public speaking'
        ],
        map: ['tech', 'creative', 'business', 'science', 'govt']
    },
    {
        q: 'What is your ultimate career goal?',
        options: [
            'Build innovative products that change the world',
            'Express creativity and inspire people',
            'Lead businesses and create wealth',
            'Make breakthroughs in science and health',
            'Serve society through policy and governance'
        ],
        map: ['tech', 'creative', 'business', 'science', 'govt']
    }
];

// ─── RENDER ROLE MODELS ───
function renderModels() {
    const grid = document.getElementById('modelsGrid');
    grid.innerHTML = roleModels.map(m => `
        <div class="model-card">
            <div class="model-avatar">${m.name.charAt(0)}</div>
            <h3>${m.name}</h3>
            <div class="model-title">${m.title}</div>
            <div class="model-bio">${m.bio}</div>
            <span class="model-achievement">${m.achievement}</span>
        </div>
    `).join('');
}

// ─── RENDER CAREERS ───
let activeFilter = 'all';

function renderCareers(filter = 'all') {
    const grid = document.getElementById('careersGrid');
    const filtered = filter === 'all' ? careerData : careerData.filter(c => c.category === filter);

    if (filtered.length === 0) {
        grid.innerHTML =
            `<p style="color:var(--text-muted);grid-column:1/-1;text-align:center;padding:40px 0;">No careers found for this category. Try another filter.</p>`;
        return;
    }

    grid.innerHTML = filtered.map(c => `
        <div class="career-card" data-category="${c.category}">
            <span class="icon">${c.icon}</span>
            <h4>${c.title}</h4>
            <div class="career-category">${c.category}</div>
            <p>${c.desc}</p>
            <div class="scope-bar">
                <span style="font-size:0.75rem;color:var(--text-muted);font-weight:500;">Scope</span>
                <div class="bar-track">
                    <div class="bar-fill" style="width:${c.scope}%;"></div>
                </div>
                <span class="scope-label">${c.scope}%</span>
            </div>
            <div class="career-tags">
                ${c.tags.map(t => `<span>${t}</span>`).join('')}
            </div>
        </div>
    `).join('');
}

// ─── FILTER BUTTONS ───
function setupFilters() {
    const buttons = document.querySelectorAll('#careerFilters button');
    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            buttons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            activeFilter = btn.dataset.filter;
            renderCareers(activeFilter);
        });
    });
}

// ─── QUIZ ───
let currentQ = 0;
const answers = [];

function renderQuiz() {
    const container = document.getElementById('quizContent');
    const q = quizQuestions[currentQ];
    const total = quizQuestions.length;

    container.innerHTML = `
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:16px;">
            <span style="font-size:0.75rem;color:var(--text-muted);font-weight:500;">Question ${currentQ+1} of ${total}</span>
            <span style="font-size:0.75rem;color:var(--gold);font-weight:600;">${Math.round((currentQ+1)/total*100)}%</span>
        </div>
        <div class="question">${q.q}</div>
        <div class="options">
            ${q.options.map((opt, idx) => `
                <label>
                    <input type="radio" name="quiz" value="${idx}" ${answers[currentQ] === idx ? 'checked' : ''} />
                    ${opt}
                </label>
            `).join('')}
        </div>
    `;

    document.getElementById('prevBtn').disabled = currentQ === 0;
    const nextBtn = document.getElementById('nextBtn');
    if (currentQ === total - 1) {
        nextBtn.textContent = '📊 See Results';
    } else {
        nextBtn.textContent = 'Next →';
    }

    if (answers[currentQ] !== undefined) {
        const radios = container.querySelectorAll('input[name="quiz"]');
        if (radios[answers[currentQ]]) radios[answers[currentQ]].checked = true;
    }

    const placeholder = document.getElementById('resultPlaceholder');
    const resultContent = document.getElementById('resultContent');
    placeholder.style.display = 'block';
    resultContent.style.display = 'none';
    document.getElementById('resetBtn').style.display = 'none';
}

function getSelected() {
    const selected = document.querySelector('input[name="quiz"]:checked');
    return selected ? parseInt(selected.value) : null;
}

function showResult() {
    const counts = { tech: 0, creative: 0, business: 0, science: 0, govt: 0 };
    for (let i = 0; i < answers.length; i++) {
        const val = answers[i];
        if (val !== undefined && val !== null) {
            const cat = quizQuestions[i].map[val];
            if (cat && counts[cat] !== undefined) counts[cat]++;
        }
    }

    let topCat = 'tech';
    let topCount = 0;
    for (const [cat, count] of Object.entries(counts)) {
        if (count > topCount) {
            topCount = count;
            topCat = cat;
        }
    }

    const matched = careerData.filter(c => c.category === topCat);
    const names = matched.map(c => c.title).join(', ');
    const catLabel = { tech: 'Technology', creative: 'Creative & Media', business: 'Business & Finance',
        science: 'Science & Health', govt: 'Government & Law' } [topCat] || topCat;

    const placeholder = document.getElementById('resultPlaceholder');
    const resultContent = document.getElementById('resultContent');
    placeholder.style.display = 'none';
    resultContent.style.display = 'block';
    document.getElementById('resetBtn').style.display = 'inline-flex';

    resultContent.innerHTML = `
        <h4>🎯 Your Top Career Cluster: ${catLabel}</h4>
        <p style="margin-top:8px;">
            <strong>Recommended paths:</strong> ${names || 'Explore all careers in this cluster.'}
        </p>
        <p style="margin-top:12px;font-size:0.9rem;color:var(--text-secondary);">
            Based on your interests, you're best suited for careers in <strong style="color:var(--gold);">${catLabel}</strong>.
            Check the <a href="#careers" style="color:var(--gold);">Career Paths</a> section to explore detailed scope and opportunities in India.
        </p>
        <div style="margin-top:16px;display:flex;gap:8px;flex-wrap:wrap;">
            ${matched.slice(0,3).map(c => `<span style="background:var(--gold-dim);padding:4px 14px;border-radius:100px;font-size:0.75rem;border:1px solid var(--border-gold);color:var(--gold);">${c.icon} ${c.title}</span>`).join('')}
        </div>
    `;
}

function setupQuiz() {
    renderQuiz();

    document.getElementById('nextBtn').addEventListener('click', () => {
        const selected = getSelected();
        if (selected === null) {
            alert('Please select an option to continue.');
            return;
        }
        answers[currentQ] = selected;

        if (currentQ === quizQuestions.length - 1) {
            showResult();
            return;
        }
        currentQ++;
        renderQuiz();
    });

    document.getElementById('prevBtn').addEventListener('click', () => {
        if (currentQ > 0) {
            currentQ--;
            renderQuiz();
        }
    });

    document.getElementById('resetBtn').addEventListener('click', () => {
        for (let i = 0; i < answers.length; i++) answers[i] = undefined;
        currentQ = 0;
        document.getElementById('resultContent').style.display = 'none';
        document.getElementById('resultPlaceholder').style.display = 'block';
        document.getElementById('resetBtn').style.display = 'none';
        renderQuiz();
    });
}

// ─── NAV ───
function setupNav() {
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('navLinks');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('open');
    });

    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => navLinks.classList.remove('open'));
    });

    window.addEventListener('scroll', () => {
        const nav = document.getElementById('navbar');
        if (window.scrollY > 40) nav.classList.add('scrolled');
        else nav.classList.remove('scrolled');
    });
}

// ─── SMOOTH SCROLL ───
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// ─── INIT ───
document.addEventListener('DOMContentLoaded', () => {
    renderModels();
    renderCareers('all');
    setupFilters();
    setupQuiz();
    setupNav();
});
