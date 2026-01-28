# SOFTWARE SOLUTION SPECIFICATION (SSD)

## Project Title
Lendsqr Frontend Engineering Assessment

## Document Purpose
This document defines the functional, non-functional, architectural, and integration specifications for the Lendsqr Frontend Engineering Assessment. It serves as a single source of truth describing **what was built, how it was built, and why specific technical decisions were made**, based strictly on the assessment instructions and provided design files.

---

## 1. Project Overview

### 1.1 Objective
To build a pixel-perfect frontend application that mirrors a subset of the Lendsqr Admin Console, demonstrating intermediate-to-senior level frontend engineering competence.

### 1.2 Target Audience
- Lendsqr engineering reviewers
- Frontend engineering interview panel

### 1.3 Scope
The application covers the following screens:
- Login
- Dashboard
- Users List
- User Details

The application is frontend-only and uses mocked APIs.

---

## 2. UI & SCREEN SPECIFICATIONS

### 2.1 Global Layout

**Components**
- Top Navigation Bar
- Persistent Side Navigation
- Main Content Area

**Top Navigation Bar**
- Switch Organization
- Search Input
- Logged-in User Display
- Logout Action
- Application Version (v1.2.0)

**Side Navigation Groups**

CUSTOMERS
- Users
- Guarantors

BUSINESSES
- Organization
- Loan Products
- Savings Products
- Fees and Charges
- Transactions
- Services
- Service Account
- Settlements
- Reports

SETTINGS
- Preferences
- Fees and Pricing
- Audit Logs
- Systems Messages

---

### 2.2 Login Screen

**Purpose**
Authenticate users before accessing the application.

**UI Elements**
- Welcome text
- Email / Username input
- Password input
- Password visibility toggle
- Forgot password link
- Login button

---

### 2.3 Dashboard Screen

**Purpose**
Display high-level user metrics.

**Metric Cards**
- Total Users
- Active Users
- Users with Loans
- Users with Savings

---

### 2.4 Users List Screen

**Purpose**
Display and manage users.

**Table Columns**
- Organization
- Username
- Email
- Phone Number
- Date Joined
- Status

**User Status Values**
- Active
- Inactive
- Pending
- Blacklisted

**Actions**
- View Details
- Activate User
- Blacklist User

---

### 2.5 User Details Screen

**Purpose**
View comprehensive information about a user.

**Header Information**
- Full Name
- User ID
- Tier
- Bank Details

**Actions**
- Activate User
- Blacklist User

**Tabs**
- General Details
- Documents
- Bank Details
- Loans
- Savings
- App and System

---

## 3. DATA MODELS

### 3.1 User Model
- id
- fullName
- username
- email
- phoneNumber
- organization
- status
- dateJoined
- userTier
- accountNumber
- bankName

### 3.2 Personal Information
- fullName
- phoneNumber
- email
- bvn
- gender
- maritalStatus
- children
- residenceType

### 3.3 Education & Employment
- levelOfEducation
- employmentStatus
- employmentSector
- employmentDuration
- officeEmail
- monthlyIncome
- loanRepayment

### 3.4 Socials
- twitter
- facebook
- instagram

### 3.5 Guarantor
- fullName
- phoneNumber
- email
- relationship

---

## 4. API ENDPOINT MAPPING (MOCKED)

### 4.1 Authentication
- POST /auth/login

### 4.2 Dashboard
- GET /metrics/summary

### 4.3 Users
- GET /users?page=&limit=
- GET /users/{userId}
- PATCH /users/{userId}/activate
- PATCH /users/{userId}/blacklist

---

## 5. NON-FUNCTIONAL REQUIREMENTS (NFRs)

### 5.1 Performance
- Must handle rendering of 500 users without UI lag
- Pagination required to reduce DOM load

### 5.2 Responsiveness
- Fully responsive across mobile, tablet, and desktop
- Layout must adapt without loss of functionality

### 5.3 Visual Fidelity
- UI must be pixel-perfect against the Figma design
- Spacing, typography, colors, and alignment must match exactly

### 5.4 Code Quality
- Modular component architecture
- Clear separation of concerns
- Consistent naming conventions
- Reusable UI components

### 5.5 Maintainability
- Typed components and services using TypeScript
- Centralized API and data access logic

### 5.6 Reliability
- Graceful handling of empty states
- Defensive UI against missing or malformed data

### 5.7 Testing
- Unit tests covering:
  - Positive scenarios
  - Negative scenarios
- Component and logic-level testing

### 5.8 Storage
- User detail data must persist using:
  - Local Storage or IndexedDB

---

## 6. ARCHITECTURE OVERVIEW

### 6.1 Architectural Pattern
- Component-based architecture using React
- Unidirectional data flow
- Stateless presentational components where possible

### 6.2 Layering
- UI Layer: Pages and components
- State Layer: Local component state and browser storage
- Service Layer: API abstraction for mock endpoints

### 6.3 Routing
- Client-side routing for screen navigation
- Semantic URL paths

---

## 7. ARCHITECTURAL JUSTIFICATION

- **React + TypeScript** ensures scalability, maintainability, and type safety
- **SCSS** enables modular and maintainable styling aligned with the design system
- **Mock APIs** allow simulation of real-world data interactions without backend dependency
- **Local Storage / IndexedDB** ensures persistence across navigation as required
- **Component reusability** reduces duplication and improves maintainability
- **Pagination and filtering** ensure performance at scale

---

## 8. DEPLOYMENT

- Application deployed on a free hosting platform
- Publicly accessible URL following the required naming convention

---

## 9. SUBMISSION ARTEFACTS

- Deployed application URL
- Public GitHub repository (lendsqr-fe-test)
- This SSD document
- Loom video walkthrough (≤ 3 minutes, face visible)

---

## 10. CONCLUSION

This SSD documents the implementation approach, constraints, and decisions taken to meet the Lendsqr Frontend Engineering Assessment requirements, with strict adherence to design fidelity, code quality, and architectural best practices.

