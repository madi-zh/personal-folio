---
title: "BudgetFlow - Personal Finance API"
description: "A production-ready REST API for personal finance tracking built in Rust, showcasing backend development best practices with secure authentication and comprehensive testing."
role: "Solo Developer"
period: "2024"
highlights:
  - "Built complete JWT authentication with refresh token rotation and secure session management"
  - "Designed normalized database schema with 7 migrations and PostgreSQL triggers for data integrity"
  - "Implemented Argon2id password hashing and SHA-256 token storage (raw tokens never persisted)"
  - "Created layered architecture with separate DTOs ensuring sensitive data never exposed in responses"
  - "Wrote comprehensive test suite covering authentication flows and edge cases"
tech:
  - "Rust"
  - "Actix-web"
  - "PostgreSQL"
  - "SQLx"
  - "JWT"
  - "Tokio"
metrics:
  impact: "Production-ready"
featured: true
order: 4
---

## Overview

BudgetFlow is a personal finance tracking API I built to learn Rust while applying backend development best practices. The project demonstrates secure authentication, proper database design, and comprehensive testing.

## Technical Highlights

### Async Programming
Built non-blocking services with Tokio runtime and async/await patterns for high performance.

### Authentication System
Complete JWT authentication with access tokens, refresh token rotation, and secure session management.

### Database Design
Normalized schema with 7 migrations, optimized indexing, and PostgreSQL triggers for data integrity.

### Security Implementation
- Argon2id password hashing
- SHA-256 token storage (raw tokens never persisted)
- Parameterized queries to prevent SQL injection

### Code Architecture
Layered architecture with separate DTOs for requests/responses, ensuring sensitive data is never exposed in API responses.

### Testing
Comprehensive test suite covering authentication flows, token validation, and edge cases using cargo test framework.
