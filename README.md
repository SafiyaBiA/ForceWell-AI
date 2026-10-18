# FORCEWELL AI
### Predictive Personnel Stress & Welfare Monitoring System for Uniformed Forces
**Smart India Hackathon 2026 ? Problem Statement SIH26186**
- **Organization:** Ministry of Home Affairs
- **Department:** Central Reserve Police Force (CRPF), Police-II Division
- **Category:** Software | **Theme:** MedTech / BioTech / HealthTech
- **Tagline:** *"Predict Early. Protect Privacy. Empower People."*
- **Core Principle:** **SUPPORT, NOT SURVEILLANCE.**

---

## Executive Overview

FORCEWELL AI is an explainable, privacy-preserving predictive personnel welfare intelligence platform designed specifically for uniformed forces. It identifies **early welfare-risk patterns** to support timely human-led intervention, rather than diagnosing clinical mental illness.

The platform fuses organizational operational indicators (continuous deployment duration, duty schedules, leave utilization gaps, transfer frequency) together with voluntary, confidential daily wellness check-ins.

### Decision-Support Mandate:
- **AI Recommends.**
- **Authorized Human Welfare Officers Review and Decide.**
- **Strict Non-Punitive Guardrail:** Zero automatic disciplinary or career-impacting actions.

---

## Key Features & Three Role-Based Portals

### 1. Role 1: Personnel (Mobile-First Responsive Experience)
- **Voluntary Daily Check-In:** 5-point wellness scale (`Very Good` to `Very Low`) with optional sleep, fatigue, workload, and recovery inputs.
- **Confidential Support Request:** Immediate private assistance request routed directly to the Unit Welfare Officer.
- **Longitudinal Personal Trends:** 5-week risk index curve compared against personal baseline (e.g. baseline: 32 vs current: 72) with non-diagnostic guidance.
- **Support & Crisis Resources:** 24/7 Sampark helpline, Buddy Care cell, and Unit MI Room contacts.

### 2. Role 2: Welfare Officer (Command Center)
- **Executive KPI Dashboard:** Total Personnel (102), Active Field Deployments, Watch, Elevated, Critical Review, and Open Support Requests.
- **Donut Risk Distribution Chart:** Interactive 7d / 30d / 90d rolling analysis window.
- **Personnel Welfare Registry:** Filterable by battalion formation, risk bracket, and searchable by ID or name.
- **Detailed Welfare Profile Deep-Dive:**
  - 7 contributing indicators.
  - **AI Explanation Narrative:** Transparent plain-language diagnostic summary.
  - **SHAP-Style Feature Attribution:** Additive waterfall point decomposition (`Baseline: 24` + `Deployment: +18` + `Workload: +16` + `Leave Gap: +12` + `Fatigue: +10` + `Recovery: +8` + `Sleep: +8` = `Total: 72`).
  - **Action Triggers:** `[Start Welfare Review]`, `[Record Intervention]`, `[Schedule Follow-up]`.
- **Workload Intelligence:** Imbalance detection across formations (Unit Alpha at 84% vs Unit Delta at 43%) with interactive load rebalancing simulation.
- **Intervention Lifecycle Management:** Track cases from Signal &rarr; Review &rarr; Action &rarr; Follow-up &rarr; Outcome.
- **Audit Logging:** Tamper-evident cryptographic ledger recording every profile view and welfare action.
- **CSV Data Ingestion:** Real-time schema validation, boundary checks, duplicate screening, and data quality scoring.
- **Official Reports:** Printable/downloadable previews for Unit Welfare Summaries, Risk Trends, Workload, and Audit Logs.

### 3. Role 3: Commander / Administrator (Strategic Insights)
- **Data Minimization:** Private voluntary check-in narratives strictly concealed.
- **Macro Operational Heatmaps:** Unit workload concentration, tour length vs leave utilization curves, and staffing readiness indices.

### 4. SIH 3-Minute Presentation Mode
- Click the **"Start SIH Demo"** button in the top navigation bar to launch an interactive 7-step guided evaluator tour highlighting the complete SIH26186 journey.

---

## Technical Stack

- **Frontend:** React 18, TypeScript, Tailwind CSS, Recharts, Lucide Icons
- **Backend / Architectural Specification:** FastAPI (Python 3.11+), Pydantic, OpenAPI
- **AI / ML Engine:** Hybrid Risk Fusion combining Random Forest / XGBoost ensemble inference with transparent operational rule rails & SHAP-style explainability
- **Security & Privacy:** Role-Based Access Control (RBAC), AES-256 data-at-rest encryption simulation, TLS 1.3 in-transit, Data Minimization filters

---

## Running the Application Locally

```bash
# 1. Install dependencies
npm install

# 2. Start the development server
npm run dev

# 3. Build production bundle
npm run build

# 4. Preview production build
npm run preview
```

---

## Ethical Boundaries & Statutory Notice

1. **Non-Diagnostic:** The platform never claims to diagnose depression, PTSD, anxiety, or suicidal intent.
2. **Support, Not Surveillance:** Welfare indicators cannot be queried for disciplinary proceedings or Annual Confidential Reports (ACR).
3. **Synthetic Demonstration Data:** All personnel profiles, battalion rosters, and telemetry are synthetic demonstrations created strictly for evaluation under SIH26186.
