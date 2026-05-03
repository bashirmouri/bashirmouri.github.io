# Bashir Portfolio

Personal portfolio website showcasing full-stack projects, technical capabilities, and contact details.

## Overview

This site is built as a single-page experience with focused sections for projects, skills, and contact. The project cards surface quick highlights with optional deep-dive case study details to keep the page scannable.

## Features

- Project case studies with highlights and expandable details
- Skills sections grouped by backend, frontend, security, and adversarial thinking
- Clear primary calls to action for projects and contact
- Responsive layout and consistent typographic system

## Tech Stack

- React
- Vite
- Tailwind CSS

## Getting Started

### Prerequisites

- Node.js (LTS)
- npm

### Install

```bash
npm install
```

### Run locally

```bash
npm run dev
```

### Build

```bash
npm run build
```

### Preview production build

```bash
npm run preview
```

### Lint

```bash
npm run lint
```

## Project Structure

```
public/
	bashirlogo.png
src/
	components/
		Contact.jsx
		Hero.jsx
		Navbar.jsx
		ProjectCard.jsx
		Projects.jsx
		Services.jsx
	pages/
		Home.jsx
	index.css
	main.jsx
```

## Customize Content

- Project data: edit the projects array in src/components/Projects.jsx
- Skills and capabilities: edit the services array in src/components/Services.jsx
- Contact details: update src/components/Contact.jsx
- Global styles and utilities: adjust src/index.css and tailwind.config.js

## Deployment

Run `npm run build` and deploy the generated dist/ folder to your hosting provider.
