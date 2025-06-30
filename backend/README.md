# BrilliantMinds Backend API

A Node.js/Express backend for the BrilliantMinds platform with MongoDB integration.

## Features

- Contact form submissions
- Donation processing
- News management
- Admin authentication
- Rate limiting
- Input validation
- Error handling

## Setup

1. Install dependencies:
\`\`\`bash
npm install
\`\`\`

2. Create environment file:
\`\`\`bash
cp .env.example .env
\`\`\`

3. Update environment variables in `.env`

4. Start MongoDB (local or use MongoDB Atlas)

5. Seed admin user:
\`\`\`bash
npm run seed
\`\`\`

6. Start development server:
\`\`\`bash
npm run dev
\`\`\`

## API Endpoints

### Contact
- `POST /api/contact/submit` - Submit contact
