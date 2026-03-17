# YJ CODE Portfolio

A hybrid portfolio platform for **YJ CODE**, combining **brand presentation**, **project showcase**, and **technical archive** in a single web experience.

## Overview

This project is designed as more than a simple personal website.

It serves as:

- a **brand site** for YJ CODE
- a **portfolio platform** for selected projects
- a **technical archive** for engineering notes, case studies, and development insights

The goal is to present YJ CODE as a developer brand with both **technical depth** and **refined design sense**, with a strong focus on **hiring appeal** and **client trust**.

## Core Goals

- Build a polished portfolio platform for YJ CODE
- Showcase selected works with strong technical context
- Create a maintainable content-driven architecture
- Establish a clean CI/CD workflow with GitHub Actions and Vercel
- Turn the website itself into a portfolio-worthy project

## Audience

Primary audience:

- Hiring managers

Secondary audience:

- Potential freelance clients
- Collaborators
- Developers interested in the process and architecture

## Tech Stack

- **Next.js** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **shadcn/ui**
- **Framer Motion**
- **MDX**
- **GitHub Actions**
- **Vercel**

## Project Structure

```txt
src/
  app/
    (marketing)/
      page.tsx
      about/page.tsx
      works/page.tsx
      services/page.tsx
      blog/page.tsx
      lab/page.tsx
      contact/page.tsx
      layout.tsx
    api/
      contact/route.ts
    layout.tsx
    globals.css
  components/
    layout/
    sections/
    ui/
  domain/
    project/
    post/
  lib/
    content/
    seo/
    utils/
  types/

content/
  projects/
  posts/
```

## Planned Pages

- `/` — Home
- `/about` — Brand and personal introduction
- `/works` — Selected project showcase
- `/services` — Development capabilities and collaboration scope
- `/blog` — Technical writing and engineering notes
- `/lab` — Experiments, small builds, and explorations
- `/contact` — Contact and inquiry page

## Development Principles

This project is being built with the following principles:

- **clarity over clutter**
- **structure over decoration**
- **maintainability over shortcuts**
- **brand consistency across pages**
- **portfolio storytelling, not just visual presentation**

## CI/CD

### CI

GitHub Actions is used for:

- lint checks
- type checks
- production build verification

### CD

Vercel is used for:

- preview deployments for branches and pull requests
- production deployment from the `main` branch

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Run lint:

```bash
npm run lint
```

Run type check:

```bash
npm run typecheck
```

Create a production build:

```bash
npm run build
```

## Current Status

This project is currently in the **foundation phase**.

Initial focus areas:

- project structure
- design direction
- route architecture
- content model
- CI/CD setup
- portfolio system foundation

## Why This Project Matters

This project is intended to be both:

1. a public-facing portfolio platform for YJ CODE
2. a documented example of how a modern portfolio product can be planned, structured, built, and deployed

It is being developed as a long-term brand asset rather than a one-time showcase page.

## Author

**YJ CODE**

Developer brand focused on building polished digital products with strong engineering structure and thoughtful visual execution.
