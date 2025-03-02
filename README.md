# NextStep AI - Your AI-Powered Career Coach 🚀

![NextStep AI Banner](public/NextStepAI_banner.png)

NextStep AI is a cutting-edge career development platform that leverages artificial intelligence to provide personalized career guidance, skill development recommendations, and professional growth opportunities.

## 🌟 Features

### Implemented Features

#### 🔐 Authentication & User Management
- Secure authentication using Clerk
- Custom login and signup pages
- User profile management
- Personalized onboarding experience

#### 💼 Professional Profile
- Industry and specialization selection
- Skills assessment
- Experience tracking
- Professional bio creation

#### 🎨 Modern UI/UX
- Responsive design using Tailwind CSS
- Dark/Light theme support
- Glass-morphism effects
- Shadcn UI components
- Interactive animations

### Upcoming Features

#### 🤖 AI-Driven Career Insights
- Personalized industry analysis
- Skill gap identification
- Career trajectory predictions
- Weekly insights using Gemini AI
- Automated career recommendations

#### 🎯 Mock Interviews
- AI-generated interview questions
- Industry-specific scenarios
- Real-time feedback
- Performance analytics
- Interview preparation tips

#### 📝 Resume Builder
- AI-powered resume optimization
- Multiple template options
- ATS-friendly formatting
- PDF export functionality
- Version control

#### ✍️ Cover Letter Generator
- Customized cover letter creation
- Industry-specific templates
- AI-powered content suggestions
- Professional formatting

#### 📊 Career Dashboard
- Progress tracking
- Skill development metrics
- Interview performance stats
- Career goal monitoring
- Personalized action items

## 🛠️ Tech Stack

### Frontend
- React 19
- Next.js 15
- Tailwind CSS
- Shadcn UI
- Framer Motion

### Backend
- Next.js API Routes
- Prisma ORM
- NeonDB (PostgreSQL)
- Inngest (Background Jobs)

### AI/ML
- Google Gemini API
- Natural Language Processing
- Machine Learning Models

### Authentication
- Clerk Authentication
- JWT Tokens
- Role-based access control

### DevOps
- Vercel Deployment
- GitHub Actions
- Continuous Integration

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/nextstep-ai.git
```

2. Install dependencies:
```bash
cd nextstep-ai
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env.local
# Add your API keys and configuration
```

4. Run the development server:
```bash
npm run dev
```

## 🔑 Environment Variables

Create a `.env.local` file with the following variables:

```env
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key
DATABASE_URL=your_neon_db_url
GEMINI_API_KEY=your_gemini_api_key
```

## 🗄️ Database Schema

The application uses a PostgreSQL database with the following main models:

- Users
- Industries
- Skills
- Interviews
- Resumes
- CareerInsights

## 🚀 Deployment

The application is deployed on Vercel:

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Configure environment variables
4. Deploy!

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 🎥 Project Tutorial

This project was built referring the tutorial by [RoadsideCoder]([https://youtu.be/UbXpRv5ApKA?si=uvIJETPupwPig0RJ](https://youtu.be/UbXpRv5ApKA?si=9oGuJXKaBOToGe7N)).

## 🔮 Future Roadmap

- [ ] AI-powered skill recommendations
- [ ] Integration with job boards
- [ ] Peer networking features
- [ ] Mobile application
- [ ] Chrome extension for job applications
- [ ] Interview recording and analysis
- [ ] Mentor matching system

## 👨‍💻 Developer

Developed by [Zufiya Idrisi](https://www.linkedin.com/in/zufiyaidrisi9797/)

---

*Note: This project is currently under active development. Some features mentioned are planned for future implementation.*
