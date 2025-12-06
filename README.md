[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/YHSq4TPZ)
# TotoTodo – Student Time Management Solution
⚠️ Please complete **all sections marked with the ✍️ icon** — these are required for your submission.

👀 Please Check ASSIGNMENT.md file in this repository for assignment requirements.

## 🚀 Project Setup & Usage
**How to install and run your project:**  

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation & Setup
1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd web-track-naver-vietnam-ai-hackathon-v1rtuoso-dev
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Initialize the database:**
   ```bash
   npm run db:init
   npm run db:migrate
   npm run db:seed
   ```

4. **Start the development servers:**
   ```bash 
   # Or start them separately:
   npm run frontend:dev    # Frontend on http://localhost:5173
   npm run backend:start   # Backend on http://localhost:3002
   ```

5. **Create your first user:**
   ```bash
   npm run user:create $username $password
   ```

### Production Build
```bash
npm run build
```

## 🔗 Deployed Web URL or APK file
✍️ [Paste your deployment link here - e.g., Vercel, Netlify, etc.]

## 🎥 Demo Video
**Demo video link (≤ 2 minutes):**  
📌 **Video Upload Guideline:** when uploading your demo video to YouTube, please set the visibility to **Unlisted**.  
- "Unlisted" videos can only be viewed by users who have the link.  
- The video will not appear in search results or on your channel.  
- Share the link in your README so mentors can access it.  

✍️ Video link: https://youtu.be/k_JPgmCMbaQ

## 💻 Project Introduction

### a. Overview

Tototodo is a comprehensive student time management solution designed specifically for Vietnamese university students. It addresses the daily chaos of managing classes, group projects, part-time work, and personal life through an intelligent, hierarchical task management system with multi-language support and Telegram integration.

The application provides a complete ecosystem for students to organize their academic and personal tasks, track progress, and maintain productivity through smart features like AI-powered task suggestions, recurring task management, and real-time notifications.

### b. Key Features & Function Manual

**Core Task Management:**
- ✅ **Full CRUD Operations**: Create, read, update, and delete tasks with rich metadata
- 📅 **Due Date Management**: Set deadlines with timezone support and smart reminders
- 🏷️ **Tagging System**: Organize tasks with custom tags and categories
- 🔄 **Recurring Tasks**: Set up daily, weekly, monthly, or custom recurring patterns
- 📊 **Priority Levels**: High, medium, low priority with visual indicators
- ✅ **Status Tracking**: Todo, in-progress, completed with completion timestamps

**Project & Area Organization:**
- 📁 **Project Management**: Group related tasks into projects with progress tracking
- 🏢 **Areas of Responsibility**: Organize tasks by life areas (academic, work, personal)
- 📈 **Progress Visualization**: Charts and metrics for project completion rates

**Advanced Features:**
- 🧠 **AI Task Intelligence**: Smart suggestions for next actions and task prioritization
- 📱 **Telegram Integration**: Receive notifications and manage tasks via Telegram bot
- 🌍 **Multi-language Support**: 25+ languages including Vietnamese, English, Korean
- 📝 **Note-taking**: Rich text notes with markdown support and tagging
- 📅 **Calendar Integration**: Multiple calendar views (day, week, month)
- 🍅 **Pomodoro Timer**: Built-in productivity timer for focused work sessions
- 📊 **Analytics Dashboard**: Track productivity patterns and completion rates

**User Experience:**
- 🌙 **Dark/Light Mode**: Adaptive theming based on system preferences
- 📱 **Responsive Design**: Works seamlessly on desktop, tablet, and mobile
- ⚡ **Real-time Updates**: Live synchronization across all connected devices
- 🔍 **Advanced Search**: Filter and search tasks by multiple criteria

### c. Unique Features (What's special about this app?)

**🎯 Student-Focused Design:**
- **Academic Calendar Integration**: Sync with university schedules and exam periods
- **Group Project Management**: Collaborative features for team assignments
- **Study Session Optimization**: AI-powered suggestions for optimal study times
- **Deadline Collision Detection**: Warns about overlapping deadlines and suggests rescheduling

**🤖 AI-Powered Intelligence:**
- **Smart Task Suggestions**: Learns from user behavior to suggest relevant next actions
- **Procrastination Detection**: Identifies patterns and provides gentle nudges
- **Time Estimation Learning**: Improves task duration predictions based on historical data
- **Contextual Recommendations**: Suggests tasks based on current project context

**🌐 Vietnamese Student Context:**
- **Localized Content**: Vietnamese language support with cultural context
- **University Life Integration**: Features tailored to Vietnamese university structure
- **Social Features**: Optional sharing and collaboration with peers
- **Cultural Productivity Patterns**: Adapts to Vietnamese student lifestyle and work habits

**📱 Multi-Platform Ecosystem:**
- **Telegram Bot Integration**: Manage tasks without opening the app
- **Cross-Device Synchronization**: Seamless experience across all devices
- **Offline Capability**: Core features work without internet connection
- **Export/Import**: Backup and migrate data between systems

### d. Technology Stack and Implementation Methods

**Frontend:**
- **React 18** with TypeScript for type-safe, modern UI development
- **Vite** for fast development and optimized production builds
- **Tailwind CSS** for responsive, utility-first styling
- **React Router** for client-side routing and navigation
- **Zustand** for lightweight state management
- **SWR** for data fetching and caching
- **React Hook Form** for efficient form handling
- **Recharts** for data visualization and analytics

**Backend:**
- **Node.js** with Express.js for RESTful API development
- **Sequelize ORM** with SQLite for database management and migrations
- **JWT Authentication** for secure user sessions
- **bcrypt** for password hashing and security
- **Helmet** for security headers and protection
- **CORS** for cross-origin resource sharing
- **Morgan** for HTTP request logging

**Development & Deployment:**
- **ESLint & Prettier** for code quality and formatting
- **TypeScript** for type safety across the entire stack
- **Vite** for fast development server and optimized builds
- **Git** for version control and collaboration

**AI & Integrations:**
- **Telegram Bot API** for messaging and notification integration
- **i18next** for internationalization and multi-language support
- **Date-fns** for comprehensive date and time manipulation

### e. Service Architecture & Database structure (when used)


**Database Schema:**
- **Users**: Authentication, preferences, settings, timezone
- **Tasks**: Core task data, metadata, relationships, timestamps
- **Projects**: Project organization, progress tracking, settings
- **Areas**: Life area categorization and management
- **Tags**: Flexible tagging system for task organization
- **Notes**: Rich text notes with markdown support
- **Task Events**: Activity logging and timeline tracking
- **Calendar Tokens**: Integration with external calendar services
- **Inbox Items**: Quick capture and processing of incoming tasks

**API Endpoints:**
- **Authentication**: `/api/auth/*` - Login, register, session management
- **Tasks**: `/api/tasks/*` - Full CRUD operations for task management
- **Projects**: `/api/projects/*` - Project creation and management
- **Areas**: `/api/areas/*` - Area of responsibility management
- **Tags**: `/api/tags/*` - Tag creation and organization
- **Notes**: `/api/notes/*` - Note-taking and management
- **Telegram**: `/api/telegram/*` - Bot integration and webhooks
- **Users**: `/api/users/*` - User profile and settings management

## 🧠 Reflection

### a. If you had more time, what would you expand?

**Enhanced AI Features:**
- **Natural Language Processing**: Allow users to create tasks using natural language ("Remind me to study for math exam next Tuesday")
- **Smart Scheduling**: AI-powered automatic task scheduling based on user patterns and preferences
- **Predictive Analytics**: Advanced insights into productivity patterns and optimal work times
- **Voice Integration**: Voice commands for hands-free task management

**Collaboration Features:**
- **Team Projects**: Full collaborative project management with role-based permissions
- **Study Groups**: Create and manage study groups with shared tasks and schedules
- **Peer Accountability**: Optional sharing of progress with study partners
- **Group Chat Integration**: Built-in messaging for project teams

**Advanced Integrations:**
- **Google Calendar Sync**: Two-way synchronization with Google Calendar
- **University LMS Integration**: Direct integration with popular learning management systems
- **Email Integration**: Convert emails to tasks and send reminders via email


**Productivity Enhancements:**
- **Habit Tracking**: Built-in habit formation and tracking system
- **Focus Sessions**: Advanced Pomodoro with break suggestions
- **Time Blocking**: Visual time blocking and calendar management
- **Goal Setting**: Long-term goal tracking with milestone management

### b. If you integrate AI APIs more for your app, what would you do?

**Intelligent Task Management:**
- **Auto-categorization**: AI automatically categorizes tasks based on content and context
- **Smart Prioritization**: Machine learning algorithms that learn user preferences and automatically prioritize tasks
- **Deadline Prediction**: AI that predicts realistic completion times based on task complexity and user history
- **Contextual Suggestions**: AI that suggests relevant tasks based on current projects and deadlines

**Content Generation:**
- **Task Description Enhancement**: AI-generated detailed task descriptions and action items
- **Study Plan Creation**: AI-generated study schedules based on exam dates and course content
- **Progress Reports**: Automated weekly/monthly productivity reports with insights
- **Motivational Content**: Personalized motivational messages and productivity tips

**Predictive Analytics:**
- **Procrastination Detection**: AI that identifies procrastination patterns and provides intervention strategies
- **Optimal Work Time Prediction**: Machine learning to determine when users are most productive
- **Stress Level Monitoring**: AI analysis of task load and deadline pressure to suggest workload adjustments
- **Success Pattern Recognition**: Identify what makes users most successful and replicate those conditions

**Natural Language Interface:**
- **Voice Commands**: Full voice control for task creation, updates, and queries
- **Chat Interface**: Conversational AI for task management and productivity coaching
- **Smart Search**: Natural language search across all tasks, notes, and projects
- **Automated Meeting Notes**: AI that converts meeting transcripts into actionable tasks

**Personalized Learning:**
- **Adaptive UI**: AI that learns user preferences and customizes the interface accordingly
- **Personalized Recommendations**: AI-powered suggestions for productivity techniques and tools
- **Learning Path Creation**: AI-generated learning paths for skill development
- **Performance Optimization**: Continuous AI optimization of user workflows and habits

## ✅ Checklist
- [x] Code runs without errors  
- [x] All required features implemented (add/edit/delete/complete tasks)  
- [x] All ✍️ sections are filled
- [x] Full CRUD operations on tasks, projects, areas, and notes
- [x] Persistent storage with SQLite database
- [x] Multiple views: Task list, Calendar, Analytics, Project views
- [x] Comprehensive time/date handling with timezone support
- [x] Handles 20+ items with pagination and search
- [x] Multi-language support (25+ languages)
- [x] Telegram integration for notifications
- [x] AI-powered task suggestions
- [x] Responsive design for all devices  
