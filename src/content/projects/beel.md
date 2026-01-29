---
title: "Beel - Music Streaming Platform"
description: "Comprehensive music streaming service built with microservices architecture, consisting of 9 independent services for catalog management, user authentication, streaming, playlists, payments, and notifications."
role: "Lead Backend Developer"
period: "September 2023 - January 2024"
highlights:
  - "Architected 9 independent microservices with event-driven RabbitMQ communication"
  - "Led backend team with 2 junior developers, making architectural decisions"
  - "Built complete authentication system with JWT, LDAP integration, and multi-device session management"
  - "Implemented efficient audio streaming with range request support and MinIO object storage"
  - "Established comprehensive test suites with pytest-asyncio and GitLab CI pipelines"
tech:
  - "Python"
  - "FastAPI"
  - "PostgreSQL"
  - "RabbitMQ"
  - "Redis"
  - "Celery"
  - "MinIO"
  - "Docker"
  - "GitLab CI"
metrics:
  commits: "653"
  contribution: "62%"
  users: "30,000 MAUs"
featured: true
order: 1
---

## Overview

Beel is a comprehensive music streaming service that I led as the backend developer. The platform handles catalog management, user authentication, audio streaming, playlist management, payments, and notifications through a microservices architecture.

## Leadership Experience

As Lead Backend Developer, I had several developers reporting directly to me. My responsibilities included:

- Planning work for the backend team
- Making most architectural decisions for the project
- Mentoring 2 junior developers through code reviews and pair programming sessions

**Key Leadership Lesson**: One developer initially ignored advice and preferred doing things their own way. I adapted my approach by sitting down to demonstrate the reasoning through practical examples. The key insight: show, don't just tell - practical demonstrations are more effective than verbal advice alone.

## Technical Highlights

### Microservices Architecture
Implemented 9 independent, loosely-coupled microservices with event-driven RabbitMQ communication handling 30,000 monthly active users.

### User Management
Built full authentication system with JWT tokens, LDAP integration, multi-device session management, and role-based access control.

### Music Catalog System
Developed complete catalog management with search functionality, favorites, and many-to-many relationships for songs, artists, albums, and genres.

### Playlist Engine
Created dynamic playlist management with user playlists, system playlists, top charts, trending calculations, and Celery-based background tasks.

### Streaming Service
Implemented efficient audio streaming with range request support, MinIO object storage integration, and stream analytics.

### Quality & Testing
Established comprehensive test suites with pytest-asyncio, GitLab CI pipelines with automated linting, SonarQube integration, and Grafana + Loki monitoring.

## Contribution Breakdown

- User Management: 236 commits
- Playlists Service: 148 commits
- Catalog Service: 84 commits
- Streaming Service: 47 commits
