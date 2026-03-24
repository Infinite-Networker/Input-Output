/**
 * Input-Output Platform — Main JavaScript
 * Created by Cherry Computer Ltd.
 * © 2026 Cherry Computer Ltd. All Rights Reserved
 */

'use strict';

/* ──────────────────────────────────────────────
   Mock paper database for demo search
   (In production, this hits the real API)
─────────────────────────────────────────────── */
const MOCK_PAPERS = [
  {
    id: 'arxiv:2501.00123',
    title: 'Neural Network Approaches to Climate Pattern Forecasting Using Open Data',
    authors: 'Chen, A., Patel, B., Williams, R.',
    institution: 'MIT, Stanford University',
    year: 2025,
    discipline: 'Climate Science',
    license: 'CC BY',
    abstract: 'We present a novel deep learning architecture for climate pattern prediction trained exclusively on open-access datasets. Our model achieves state-of-the-art accuracy while remaining fully reproducible and open-source.',
    doi: '10.48550/arXiv.2501.00123',
    url: 'https://arxiv.org/abs/2501.00123',
  },
  {
    id: 'arxiv:2502.04567',
    title: 'Quantum Error Correction via Machine Learning: A Comprehensive Survey',
    authors: 'Martinez, L., Nguyen, T., Al-Hassan, K.',
    institution: 'CERN, University of Tokyo',
    year: 2025,
    discipline: 'Physics',
    license: 'CC BY-SA',
    abstract: 'This survey covers the latest advances in applying machine learning to quantum error correction, covering topological codes, variational algorithms, and hardware-aware approaches.',
    doi: '10.48550/arXiv.2502.04567',
    url: 'https://arxiv.org/abs/2502.04567',
  },
  {
    id: 'pmc:PMC7891234',
    title: 'Machine Learning in Healthcare: Ethical Frameworks and Clinical Applications',
    authors: 'Johnson, S., Lee, Y., Okonkwo, F.',
    institution: 'Johns Hopkins, WHO',
    year: 2024,
    discipline: 'Medicine',
    license: 'CC BY-NC',
    abstract: 'A systematic review of ML applications in clinical settings, covering diagnostic imaging, drug discovery, and patient outcome prediction with a focus on fairness and transparency.',
    doi: '10.1093/jamia/ocad201',
    url: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7891234/',
  },
  {
    id: 'doaj:10.22541/2024-b3k',
    title: 'Open-Access Publishing: Barriers, Incentives and the Future of Scientific Communication',
    authors: 'Thompson, D., Adeyemi, G.',
    institution: 'University of Cambridge',
    year: 2024,
    discipline: 'Computer Science',
    license: 'CC BY',
    abstract: 'We analyze the socioeconomic barriers to open-access publishing and propose a new model for incentivising researchers in developing economies to share their work freely.',
    doi: '10.22541/2024-b3k',
    url: 'https://www.authorea.com/users/123',
  },
  {
    id: 'arxiv:2503.09812',
    title: 'Federated Learning for Privacy-Preserving Medical Imaging Analysis',
    authors: 'Kim, J., Rossi, M., Bakare, O.',
    institution: 'Google DeepMind, NHS England',
    year: 2025,
    discipline: 'Medicine',
    license: 'CC BY',
    abstract: 'We demonstrate that federated learning can match centralized training performance on medical imaging tasks while preserving strict patient privacy guarantees across 12 hospital systems.',
    doi: '10.48550/arXiv.2503.09812',
    url: 'https://arxiv.org/abs/2503.09812',
  },
  {
    id: 'arxiv:2412.11093',
    title: 'Large Language Models as Knowledge Graphs: Bridging Neural and Symbolic AI',
    authors: 'Singh, R., Yamamoto, H.',
    institution: 'UC Berkeley, NTT Research',
    year: 2024,
    discipline: 'Computer Science',
    license: 'CC BY-SA',
    abstract: 'We explore the structural relationship between LLM representations and symbolic knowledge graphs, proposing a hybrid architecture that combines the strengths of both paradigms.',
    doi: '10.48550/arXiv.2412.11093',
    url: 'https://arxiv.org/abs/2412.11093',
  },
  {
    id: 'pmc:PMC9234567',
    title: 'CRISPR-Cas9 Off-Target Analysis Using Computational Genomics',
    authors: 'De Silva, N., Petrov, I., Walsh, C.',
    institution: 'Broad Institute, Wellcome Sanger',
    year: 2025,
    discipline: 'Biology',
    license: 'CC BY',
    abstract: 'A comprehensive computational pipeline for predicting and minimizing CRISPR-Cas9 off-target edits using transformer-based genomic models trained on publicly available genome data.',
    doi: '10.1038/s41586-025-00123-4',
    url: 'https://www.nature.com/articles/s41586-025-00123-4',
  },
  {
    id: 'arxiv:2601.05678',
    title: 'Reinforcement Learning for Energy Grid Optimization in Smart Cities',
    authors: 'Muñoz, P., Zhang, W., Osei, A.',
    institution: 'ETH Zürich, Tsinghua University',
    year: 2026,
    discipline: 'Computer Science',
    license: 'CC BY',
    abstract: 'We apply multi-agent reinforcement learning to optimize energy distribution in smart city grids, reducing peak load by 23% and carbon emissions by 18% compared to traditional approaches.',
    doi: '10.48550/arXiv.2601.05678',
    url: 'https://arxiv.org/abs/2601.05678',
  },
];

/* ──────────────────────────────────────────────
   Search logic
─────────────────────────────────────────────── */
function runSearch() {
  const query       = document.getElementById('searchInput').value.trim().toLowerCase();
  const licFilter   = document.getElementById('licenseFilter').value;
  const discFilter  = document.getElementById('disciplineFilter').value;
  const yearFilter  = document.getElementById('yearFilter').value;
  const resultsEl   = document.getElementById('searchResults');

  if (!query && !licFilter && !discFilter && !yearFilter) {
    resultsEl.innerHTML = `
      <div class="result-placeholder">
        <div class="placeholder-icon">🔍</div>
        <p>Please enter a search term or apply a filter.</p>
      </div>`;
    return;
  }

  // Filter papers
  let results = MOCK_PAPERS.filter(p => {
    const matchQuery =
      !query ||
      p.title.toLowerCase().includes(query) ||
      p.authors.toLowerCase().includes(query) ||
      p.abstract.toLowerCase().includes(query) ||
      p.discipline.toLowerCase().includes(query);

    const matchLicense = !licFilter || p.license === licFilter;
    const matchDisc    = !discFilter || p.discipline === discFilter;
    const matchYear    =
      !yearFilter ||
      (yearFilter === '2020+' ? p.year >= 2020 : p.year === parseInt(yearFilter));

    return matchQuery && matchLicense && matchDisc && matchYear;
  });

  if (results.length === 0) {
    resultsEl.innerHTML = `
      <div class="result-placeholder">
        <div class="placeholder-icon">😔</div>
        <p>No papers found for your query.</p>
        <p class="placeholder-sub">Try broader terms or remove some filters.</p>
      </div>`;
    return;
  }

  const html = results.map(p => buildResultCard(p)).join('');
  resultsEl.innerHTML = `
    <div style="font-size:0.8rem; color:var(--color-text-dim); margin-bottom:16px;">
      Found <strong style="color:var(--color-primary)">${results.length}</strong> open-access papers
      <span style="float:right; color:var(--color-text-dim);">Powered by 🍒 Cherry Computer Ltd.</span>
    </div>
    ${html}`;
}

function buildResultCard(paper) {
  return `
    <div class="result-card">
      <div class="result-title">${escapeHtml(paper.title)}</div>
      <div class="result-meta">
        👤 ${escapeHtml(paper.authors)} &nbsp;·&nbsp;
        🏛️ ${escapeHtml(paper.institution)} &nbsp;·&nbsp;
        📅 ${paper.year} &nbsp;·&nbsp;
        🔬 ${escapeHtml(paper.discipline)}
      </div>
      <div class="result-abstract">${escapeHtml(paper.abstract)}</div>
      <div class="result-footer">
        <span class="license-pill">${escapeHtml(paper.license)}</span>
        <a class="result-link" href="${paper.url}" target="_blank" rel="noopener">
          📄 View Paper →
        </a>
        <button class="result-cite-btn" onclick="showCitation('${paper.id}')"
          style="margin-left:auto; background:none; border:1px solid var(--color-border);
                 color:var(--color-text-muted); padding:4px 12px; border-radius:6px;
                 font-size:0.78rem; cursor:pointer; font-family:var(--font-sans);
                 transition:all 0.2s;">
          📋 Copy APA Citation
        </button>
      </div>
    </div>`;
}

function showCitation(paperId) {
  const paper = MOCK_PAPERS.find(p => p.id === paperId);
  if (!paper) return;

  const authors = paper.authors.split(', ').map(a => {
    const parts = a.split(' ');
    const lastName = parts[parts.length - 1];
    const initials = parts.slice(0, -1).map(n => n[0] + '.').join(' ');
    return `${lastName}, ${initials}`;
  }).join(', ');

  const citation = `${authors} (${paper.year}). ${paper.title}. https://doi.org/${paper.doi}`;

  navigator.clipboard.writeText(citation).then(() => {
    showToast('✅ APA citation copied to clipboard!');
  }).catch(() => {
    showToast(`📋 ${citation}`, 5000);
  });
}

/* ──────────────────────────────────────────────
   Toast notification
─────────────────────────────────────────────── */
function showToast(message, duration = 3000) {
  const existing = document.querySelector('.io-toast');
  if (existing) existing.remove();

  const toast = document.createElement('div');
  toast.className = 'io-toast';
  toast.textContent = message;
  Object.assign(toast.style, {
    position:       'fixed',
    bottom:         '28px',
    left:           '50%',
    transform:      'translateX(-50%) translateY(20px)',
    background:     'linear-gradient(135deg, #1a1740, #13112e)',
    color:          '#f1f5f9',
    padding:        '12px 24px',
    borderRadius:   '10px',
    border:         '1px solid rgba(167,139,250,0.3)',
    fontSize:       '0.88rem',
    fontWeight:     '500',
    zIndex:         '9999',
    boxShadow:      '0 8px 32px rgba(0,0,0,0.5)',
    transition:     'all 0.3s cubic-bezier(0.4,0,0.2,1)',
    maxWidth:       '90vw',
    textAlign:      'center',
    whiteSpace:     'pre-wrap',
    wordBreak:      'break-word',
  });

  document.body.appendChild(toast);

  requestAnimationFrame(() => {
    toast.style.transform = 'translateX(-50%) translateY(0)';
    toast.style.opacity   = '1';
  });

  setTimeout(() => {
    toast.style.transform = 'translateX(-50%) translateY(20px)';
    toast.style.opacity   = '0';
    setTimeout(() => toast.remove(), 400);
  }, duration);
}

/* ──────────────────────────────────────────────
   Helper utilities
─────────────────────────────────────────────── */
function escapeHtml(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function fillSearch(term) {
  document.getElementById('searchInput').value = term;
  runSearch();
  document.getElementById('search-demo').scrollIntoView({ behavior: 'smooth' });
}

/* ──────────────────────────────────────────────
   Code tabs (API section)
─────────────────────────────────────────────── */
function showTab(tabId, btn) {
  document.querySelectorAll('.code-block').forEach(el => el.classList.add('hidden'));
  document.querySelectorAll('.code-tab').forEach(el => el.classList.remove('active'));
  document.getElementById(`tab-${tabId}`).classList.remove('hidden');
  btn.classList.add('active');
}

/* ──────────────────────────────────────────────
   Navbar scroll effect
─────────────────────────────────────────────── */
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 40);
}, { passive: true });

/* ──────────────────────────────────────────────
   Keyboard shortcut: press '/' to focus search
─────────────────────────────────────────────── */
document.addEventListener('keydown', (e) => {
  if (e.key === '/' && document.activeElement.tagName !== 'INPUT') {
    e.preventDefault();
    const input = document.getElementById('searchInput');
    input.focus();
    input.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }
  if (e.key === 'Enter' && document.activeElement === document.getElementById('searchInput')) {
    runSearch();
  }
});

/* ──────────────────────────────────────────────
   Console branding
─────────────────────────────────────────────── */
console.log(
  '%c🍒 Input-Output%c\nOpen-Access PDF Intelligence Platform\nCreated by Cherry Computer Ltd. © 2026',
  'color:#a78bfa; font-size:18px; font-weight:900;',
  'color:#94a3b8; font-size:12px;'
);
