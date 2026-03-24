# Input-Output API Reference

<div align="center">

🍒 **Cherry Computer Ltd.** · REST API v1

Base URL: `https://api.input-output.io/v1`

</div>

---

## Authentication

All API requests require a Bearer token in the `Authorization` header:

```http
Authorization: Bearer YOUR_API_KEY
```

Get your API key by signing up at [input-output.io](https://input-output.io).

---

## Endpoints

### `GET /search`

Search for open-access papers with optional filters.

**Query Parameters**

| Parameter | Type | Required | Description |
|:----------|:-----|:--------:|:-----------|
| `q` | string | ✅ | Search query (semantic) |
| `license` | string | ❌ | Filter by license type |
| `discipline` | string | ❌ | Filter by academic discipline |
| `date_from` | date | ❌ | Earliest publication date (ISO 8601) |
| `date_to` | date | ❌ | Latest publication date (ISO 8601) |
| `peer_reviewed` | bool | ❌ | Only peer-reviewed papers |
| `limit` | int | ❌ | Results per page (default: 20, max: 100) |
| `offset` | int | ❌ | Pagination offset |

**Example Request**

```bash
curl "https://api.input-output.io/v1/search?q=quantum+computing&license=CC+BY&limit=5" \
  -H "Authorization: Bearer YOUR_API_KEY"
```

**Example Response**

```json
{
  "status": "success",
  "count": 5,
  "total": 243,
  "results": [
    {
      "id": "arxiv:2501.00123",
      "title": "Quantum Error Correction via Machine Learning",
      "authors": ["Alice Chen", "Bob Martinez"],
      "abstract": "We present...",
      "license": "CC BY",
      "license_url": "https://creativecommons.org/licenses/by/4.0/",
      "can_share": true,
      "can_modify": true,
      "can_use_commercially": true,
      "doi": "10.48550/arXiv.2501.00123",
      "published": "2025-01-15",
      "pdf_url": "https://arxiv.org/pdf/2501.00123",
      "source": "ArXiv"
    }
  ],
  "meta": {
    "query_time_ms": 42,
    "powered_by": "Cherry Computer Ltd. Search Engine v1"
  }
}
```

---

### `GET /papers/{id}`

Retrieve full metadata for a specific paper.

```bash
curl "https://api.input-output.io/v1/papers/arxiv:2501.00123" \
  -H "Authorization: Bearer YOUR_API_KEY"
```

---

### `POST /cite`

Generate a formatted citation for a paper.

**Request Body**

```json
{
  "paper_id": "arxiv:2501.00123",
  "format": "APA"
}
```

**Supported Formats**: `APA`, `MLA`, `Chicago`, `BibTeX`, `RIS`, `Vancouver`

---

### `GET /collections`

List the authenticated user's paper collections.

---

### `POST /collections`

Create a new paper collection.

```json
{
  "name": "My Research Collection",
  "description": "Papers for my thesis",
  "visibility": "private"
}
```

---

## Rate Limits

| Plan | Requests/minute | Requests/day |
|:-----|:--------------:|:------------:|
| Free | 30 | 1,000 |
| Pro | 300 | 50,000 |
| Enterprise | Unlimited | Unlimited |

---

## SDKs

- **Python**: `pip install inputoutput`
- **JavaScript**: `npm install @cherry-computer/input-output-sdk`

---

<div align="center">
© 2026 <strong>Cherry Computer Ltd.</strong> · Input-Output API Documentation
</div>
