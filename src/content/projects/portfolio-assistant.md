---
title: "Portfolio Assistant - RAG Chatbot"
description: "A RAG-powered chatbot backend that answers questions about my professional portfolio using semantic retrieval, vector search, and streaming responses."
role: "Solo Developer"
period: "2024 - Present"
highlights:
  - "Implemented complete RAG pipeline with semantic chunking, vector indexing, and relevance-threshold retrieval"
  - "Built REST API with JSON and streaming SSE endpoints, rate limiting, and CORS middleware"
  - "Deployed on Cloud Run with Docker containerization and automated deployment scripts"
  - "Created knowledge indexing tool with configurable chunking and MD5-based deduplication"
  - "Achieved 88% fact accuracy through RAG optimization (up from 27%)"
tech:
  - "Python"
  - "FastAPI"
  - "LangChain"
  - "Pinecone"
  - "Google Gemini"
  - "Docker"
  - "Cloud Run"
metrics:
  impact: "88% accuracy"
featured: true
order: 5
---

## Overview

The Portfolio Assistant is the AI chatbot powering this very website. It uses RAG (Retrieval-Augmented Generation) to answer questions about my professional experience, projects, and skills with high accuracy.

## Technical Highlights

### RAG Pipeline
Implemented complete retrieval pipeline with semantic chunking, Pinecone vector indexing, FlashRank reranking, and relevance-threshold filtering.

### API Design
REST API with both standard JSON and streaming SSE endpoints for real-time responses, plus rate limiting and CORS middleware.

### Production Deployment
Docker containerization with Cloud Run deployment, including health checks and automated deployment scripts.

### Knowledge Indexing
Custom indexing tool with configurable chunking, dry-run mode, and MD5-based deduplication for efficient updates.

### Accuracy Improvements
Through iterative RAG optimization, improved fact accuracy from 27% to 88%, ensuring reliable responses about my professional background.
