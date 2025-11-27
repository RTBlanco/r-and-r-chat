# r-and-r-chat 🚀  
*A real-time chat application built with Ruby on Rails (backend) and React + Inertia.js (frontend)*  

## Table of Contents  
- [What is this?](#what-is-this)  
- [Motivation & Goals](#motivation--goals)  
- [Features](#features)  
- [Tech Stack](#tech-stack)  
- [Getting Started (Local Setup)](#getting-started-local-setup)  
- [Usage / How to Use](#usage--how-to-use)  
- [Project Structure](#project-structure)  
- [Contributing](#contributing)  
- [Future Improvements / Roadmap](#future-improvements--roadmap)  
- [License](#license)  
- [Contact / Author](#contact--author)  

## What is this?  
**r-and-r-chat** is a real-time chat application inspired by Discord — you can create channels, join conversations, and chat in real time. The backend is powered by Ruby on Rails, while the frontend leverages React with Inertia.js for a smooth, SPA-like experience without heavy API overhead.  

## Motivation & Goals  
- 🧑‍💻 As a portfolio-worthy side project showcasing full-stack capabilities (Rails ↔ React/Inertia).  
- Explore real-time features (websockets / ActionCable or similar) for chat.  
- Provide a clean, modern UI/UX comparable to commercial chat platforms.  
- Make it easy for others to spin up locally, learn, or contribute.  

## Features  
- Real-time messaging across channels  
- Channel creation / listing / selection  
- User authentication (sign up / log in)  
- React + Inertia-driven frontend (fast navigation without full reloads)  
- Persistent backend with Rails, plus support for background jobs / tasks if needed  
- (Optionally) Dockerized / container-friendly setup for easy deployment  

## Tech Stack  
| Layer | Technology |
|-------|------------|
| Backend | Ruby on Rails |
| Frontend | React.js + Inertia.js |
| DB / Data | PostgreSQL (or your database of choice) |
| Styling / UI | Tailwind |
| Dev / Ops | Docker / Dockerfile (if applicable), Procfile.dev, standard Rails tooling |

## Getting Started (Local Setup)  

```bash
# Clone the repo  
git clone https://github.com/RTBlanco/r-and-r-chat.git  
cd r-and-r-chat  

# Install backend dependencies  
bundle install  

# Install frontend dependencies  
npm install   # or yarn  

# Setup database (edit database.yml / env variables as needed)  
rails db:create  
rails db:migrate  
rails db:seed   # if you have seeds  

# (Optional) If using Docker, build / run via Dockerfile or docker-compose  

# Start the development server  
# Example if using Procfile.dev:  
#   foreman start -f Procfile.dev  
bin/dev # or npm run dev / yarn dev if frontend dev server is separate  
