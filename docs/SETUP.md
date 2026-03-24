# Setup Guide

<div align="center">

🍒 **Cherry Computer Ltd.** · Input-Output Platform

</div>

---

## Prerequisites

| Dependency | Minimum Version | Purpose |
|:-----------|:--------------:|:--------|
| Node.js | 18.0.0 | Frontend build & dev server |
| Python | 3.10 | Backend API |
| Git | 2.30 | Version control |
| Docker *(optional)* | 24.0 | Full local stack |
| Docker Compose *(optional)* | 2.20 | Service orchestration |

---

## Quick Start (Demo Mode)

The simplest way to run Input-Output locally:

```bash
# Clone the repo
git clone https://github.com/Infinite-Networker/Input-Output.git
cd Input-Output

# Open the demo landing page directly in your browser
open index.html   # macOS
start index.html  # Windows
xdg-open index.html  # Linux
```

The demo page works entirely in the browser with no server required.

---

## Full Stack Setup

### 1. Backend (Python FastAPI)

```bash
cd backend
python -m venv venv
source venv/bin/activate     # Windows: venv\Scripts\activate
pip install -r requirements.txt

# Configure environment
cp ../.env.example .env
# Edit .env with your settings

# Run the development server
uvicorn main:app --reload --port 8000
```

API will be available at: `http://localhost:8000`
Swagger docs: `http://localhost:8000/docs`

### 2. Frontend (React + TypeScript)

```bash
cd frontend
npm install
npm run dev
```

Frontend will be available at: `http://localhost:3000`

### 3. Docker Compose (Recommended)

Run the entire stack with one command:

```bash
# Copy environment template
cp .env.example .env
# Edit .env with your credentials

# Start all services
docker-compose up --build

# Access the app
open http://localhost:3000
```

Services started:
- `frontend` — React app on port 3000
- `api` — FastAPI backend on port 8000
- `elasticsearch` — Search engine on port 9200
- `postgres` — Database on port 5432
- `redis` — Cache on port 6379

---

## Environment Variables

Create a `.env` file from `.env.example`:

```dotenv
# Application
IO_APP_ENV=development
IO_SECRET_KEY=your-secret-key-here
IO_API_KEY=your-api-key-for-testing

# Database
DATABASE_URL=postgresql://iouser:iopass@localhost:5432/inputoutput

# Search
ELASTICSEARCH_URL=http://localhost:9200

# Cache
REDIS_URL=redis://localhost:6379

# External APIs (optional)
ARXIV_API_RATE_LIMIT=3
PUBMED_API_KEY=your-pubmed-key
```

---

## Running Tests

```bash
# Backend tests
cd backend
pytest --cov=. --cov-report=html

# Frontend tests
cd frontend
npm test
npm run test:e2e
```

---

<div align="center">
Need help? Open an <a href="https://github.com/Infinite-Networker/Input-Output/issues">issue on GitHub</a><br/>
© 2026 <strong>Cherry Computer Ltd.</strong>
</div>
