<div align="center">

<img src="./assets/logo.svg" alt="Input-Output Logo" width="500"/>

<br/>

<!-- Badges -->
[![License: MIT](https://img.shields.io/badge/License-MIT-a78bfa.svg?style=for-the-badge)](LICENSE)
[![Version](https://img.shields.io/badge/Version-1.0.0-60a5fa.svg?style=for-the-badge)](https://github.com/Infinite-Networker/Input-Output/releases)
[![Status](https://img.shields.io/badge/Status-Active-34d399.svg?style=for-the-badge)]()
[![Made by Cherry Computer Ltd.](https://img.shields.io/badge/Made%20by-Cherry%20Computer%20Ltd.-c084fc.svg?style=for-the-badge&logo=cherry&logoColor=white)](https://github.com/Infinite-Networker)
[![Open Access](https://img.shields.io/badge/Open%20Access-100%25-f59e0b.svg?style=for-the-badge)]()
[![PRs Welcome](https://img.shields.io/badge/PRs-Welcome-38bdf8.svg?style=for-the-badge)](CONTRIBUTING.md)

<br/>

> **🍒 Created & Maintained by [Cherry Computer Ltd.](https://github.com/Infinite-Networker)**
>
> *"Knowledge should be free AND clear."*

<br/>

---

</div>

## 📖 What is Input-Output?

**Input-Output** is a next-generation open-access PDF intelligence platform built to make academic knowledge genuinely accessible — not just technically available. We bridge the gap between millions of open-access research papers and the people who need them, wrapping every document in clear licensing information, smart discovery tools, and legal safeguards.

Whether you're a student, researcher, journalist, or lifelong learner, Input-Output gives you the knowledge to find what you need **and** understand exactly what you're allowed to do with it.

---

## 🎯 The Problem We Solve

```
📚 Millions of open-access PDFs exist...
   ┌─────────────────────────────────────────────────────┐
   │  😵 Scattered across 1000s of repositories          │
   │  😵 Confusing license terms (CC BY? CC BY-NC-ND?)   │
   │  😵 No unified discovery interface                   │
   │  😵 Citation formats are a nightmare                 │
   │  😵 No personalization or smart recommendations     │
   └─────────────────────────────────────────────────────┘

⚡ Input-Output solves all of this:
   ┌─────────────────────────────────────────────────────┐
   │  ✅ Unified search across all major repositories     │
   │  ✅ Plain-English license explanations               │
   │  ✅ Auto-generated citations (APA, MLA, Chicago)     │
   │  ✅ Personalized profiles & smart recommendations    │
   │  ✅ Browser extension for one-click access           │
   └─────────────────────────────────────────────────────┘
```

---

## ✨ Key Features

### 🔍 Smart Discovery Engine
```python
# Example: Using the Input-Output Search API
import inputoutput as io

client = io.Client(api_key="your_api_key")

# Semantic search — understands context, not just keywords
results = client.search(
    query="neural networks for climate prediction",
    filters={
        "license": ["CC BY", "CC BY-SA"],
        "discipline": "Environmental Science",
        "date_from": "2020-01-01",
        "peer_reviewed": True
    },
    limit=20
)

for paper in results:
    print(f"📄 {paper.title}")
    print(f"   👤 {paper.authors}")
    print(f"   🏛️  {paper.institution}")
    print(f"   🔑 {paper.license} — {paper.license_summary}")
    print(f"   🔗 {paper.url}\n")
```

### 🛡️ Legal Safeguards

Every document on Input-Output comes with a full legal dashboard:

| License Type | Share | Modify | Commercial | Attribution Required |
|:------------|:-----:|:------:|:----------:|:-------------------:|
| CC BY | ✅ | ✅ | ✅ | ✅ |
| CC BY-SA | ✅ | ✅ | ✅ | ✅ |
| CC BY-NC | ✅ | ✅ | ❌ | ✅ |
| CC BY-ND | ✅ | ❌ | ✅ | ✅ |
| CC BY-NC-SA | ✅ | ✅ | ❌ | ✅ |
| CC BY-NC-ND | ✅ | ❌ | ❌ | ✅ |
| Public Domain | ✅ | ✅ | ✅ | ❌ |

### 👤 Personalized Profiles
```javascript
// JavaScript SDK Example
import { InputOutput } from '@cherry-computer/input-output-sdk';

const io = new InputOutput({ apiKey: process.env.IO_API_KEY });

// Create a research collection
const collection = await io.collections.create({
  name: "Climate Research 2026",
  description: "Papers on climate modelling and AI",
  visibility: "public"
});

// Add papers to your collection
await collection.addPaper("doi:10.1234/example");

// Get personalized recommendations
const recommendations = await io.recommendations.get({
  basedOn: collection.id,
  limit: 10
});
```

### 📚 Citation Generator
```python
# Auto-generate citations in any format
paper = client.get_paper("doi:10.1234/example")

print(paper.cite("APA"))
# → Smith, J., & Doe, A. (2025). Neural Forecasting of Climate Patterns.
#   Journal of Environmental AI, 12(3), 45–67. https://doi.org/10.1234/example

print(paper.cite("MLA"))
# → Smith, John, and Alice Doe. "Neural Forecasting of Climate Patterns."
#   Journal of Environmental AI 12.3 (2025): 45–67. Web.

print(paper.cite("BibTeX"))
# → @article{smith2025neural,
# →   title   = {Neural Forecasting of Climate Patterns},
# →   author  = {Smith, John and Doe, Alice},
# →   journal = {Journal of Environmental AI},
# →   year    = {2025}, volume  = {12}, pages = {45--67},
# →   doi     = {10.1234/example}
# → }
```

---

## 🏗️ Architecture

```
Input-Output Platform
├── 🌐 Web App (React + TypeScript)
│   ├── Search Interface
│   ├── Paper Viewer (with annotations)
│   ├── User Profiles & Collections
│   └── Educational Resources Hub
│
├── 🔌 REST API (Python / FastAPI)
│   ├── /search          — Semantic PDF search
│   ├── /papers/{id}     — Paper metadata & license info
│   ├── /cite/{id}       — Citation generation
│   ├── /collections     — User collection management
│   └── /recommendations — Personalized suggestions
│
├── 🧠 AI/ML Engine
│   ├── Semantic Embedding Model
│   ├── License Classification
│   └── Recommendation Engine
│
├── 📦 Data Ingestion Pipeline
│   ├── ArXiv Crawler
│   ├── PubMed Central Indexer
│   ├── DOAJ Connector
│   └── Institutional Repository Adapters
│
└── 🍒 Cherry Computer Ltd. Infrastructure
    ├── CDN & Edge Caching
    ├── Search Index (Elasticsearch)
    └── User Data Store (PostgreSQL)
```

---

## 🚀 Quick Start

### Prerequisites

```bash
# Required
node >= 18.0.0
python >= 3.10
git

# Optional (for full local stack)
docker >= 24.0
docker-compose >= 2.20
```

### 1. Clone the Repository

```bash
git clone https://github.com/Infinite-Networker/Input-Output.git
cd Input-Output
```

### 2. Install Dependencies

```bash
# Backend (Python)
cd backend
python -m venv venv
source venv/bin/activate        # Windows: venv\Scripts\activate
pip install -r requirements.txt

# Frontend (Node.js)
cd ../frontend
npm install
```

### 3. Configure Environment

```bash
cp .env.example .env
# Edit .env with your credentials:
#   IO_API_KEY=your_api_key_here
#   DATABASE_URL=postgresql://localhost:5432/inputoutput
#   ELASTICSEARCH_URL=http://localhost:9200
#   SECRET_KEY=your_secret_key_here
```

### 4. Run the Application

```bash
# Start backend API
cd backend && uvicorn main:app --reload --port 8000

# Start frontend dev server (new terminal)
cd frontend && npm run dev

# Or use Docker Compose for the full stack
docker-compose up --build
```

### 5. Open in Browser

```
http://localhost:3000
```

---

## 🔌 API Reference

### Search Papers

```http
GET /api/v1/search?q={query}&license={license}&limit={n}
```

**Example Request:**
```bash
curl -X GET \
  "https://api.input-output.io/v1/search?q=quantum+computing&license=CC+BY&limit=5" \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -H "Content-Type: application/json"
```

**Example Response:**
```json
{
  "status": "success",
  "count": 5,
  "results": [
    {
      "id": "arxiv:2501.12345",
      "title": "Advances in Quantum Error Correction",
      "authors": ["Alice Chen", "Bob Martinez"],
      "abstract": "We present a novel approach to quantum error correction...",
      "license": "CC BY 4.0",
      "license_url": "https://creativecommons.org/licenses/by/4.0/",
      "can_share": true,
      "can_modify": true,
      "can_use_commercially": true,
      "doi": "10.48550/arXiv.2501.12345",
      "published": "2025-01-15",
      "pdf_url": "https://arxiv.org/pdf/2501.12345"
    }
  ],
  "meta": {
    "query_time_ms": 42,
    "powered_by": "Cherry Computer Ltd. Search Engine"
  }
}
```

### Get Paper Details

```http
GET /api/v1/papers/{id}
```

### Generate Citation

```http
POST /api/v1/cite
Content-Type: application/json

{
  "paper_id": "arxiv:2501.12345",
  "format": "APA"
}
```

---

## 📂 Project Structure

```
Input-Output/
├── 📁 assets/                  # Logos, icons, brand assets
│   ├── logo.svg
│   └── logo-dark.svg
├── 📁 src/                     # Source code
│   ├── 📁 css/                 # Stylesheets
│   ├── 📁 js/                  # JavaScript modules
│   └── 📁 components/          # UI components
├── 📁 backend/                 # Python FastAPI backend
│   ├── main.py
│   ├── requirements.txt
│   └── 📁 routes/
├── 📁 frontend/                # React TypeScript frontend
│   ├── package.json
│   └── 📁 src/
├── 📁 docs/                    # Documentation
│   ├── API.md
│   ├── SETUP.md
│   └── ARCHITECTURE.md
├── 📁 .github/                 # GitHub templates & workflows
│   ├── 📁 ISSUE_TEMPLATE/
│   └── 📁 workflows/
├── 🌐 index.html               # Demo landing page
├── 📋 CONTRIBUTING.md
├── 🔒 SECURITY.md
├── ⚖️  CODE_OF_CONDUCT.md
├── 📜 LICENSE
└── 📖 README.md
```

---

## 🤝 Contributing

We welcome contributions from the community! Input-Output is built by the community, for the community.

1. **Fork** the repository
2. **Create** your feature branch (`git checkout -b feature/amazing-feature`)
3. **Commit** your changes (`git commit -m 'feat: add amazing feature'`)
4. **Push** to the branch (`git push origin feature/amazing-feature`)
5. **Open** a Pull Request

Please read our [Contributing Guidelines](CONTRIBUTING.md) and [Code of Conduct](CODE_OF_CONDUCT.md) before submitting.

---

## 🛡️ Security

Found a vulnerability? Please read our [Security Policy](SECURITY.md) and report it responsibly. Do **not** open a public issue for security vulnerabilities.

---

## 📜 License

This project is licensed under the **MIT License** — see the [LICENSE](LICENSE) file for details.

---

## 🌐 Community & Support

<div align="center">

| Channel | Link |
|:-------:|:----:|
| 🐛 Bug Reports | [GitHub Issues](https://github.com/Infinite-Networker/Input-Output/issues) |
| 💡 Feature Requests | [GitHub Discussions](https://github.com/Infinite-Networker/Input-Output/discussions) |
| 📖 Documentation | [docs/](./docs/) |
| 🔒 Security | [SECURITY.md](./SECURITY.md) |

</div>

---

<div align="center">

<br/>

<img src="./assets/logo-dark.svg" alt="Input-Output Icon" width="100"/>

<br/>

**Built with ❤️ by**

### 🍒 Cherry Computer Ltd.

*Empowering minds through open access to knowledge.*

<br/>

[![GitHub](https://img.shields.io/badge/GitHub-Infinite--Networker-a78bfa?style=for-the-badge&logo=github)](https://github.com/Infinite-Networker)
[![License](https://img.shields.io/badge/License-MIT-60a5fa?style=for-the-badge)](LICENSE)

<br/>

---

*© 2026 Cherry Computer Ltd. · Input-Output Platform · All Rights Reserved under MIT License*

</div>
