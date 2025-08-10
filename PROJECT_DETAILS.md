# **AI-Powered Personal Branding Assistant: Feature Document**

- **Project Name:** NovaPersona
- **Vision:** To empower students and professionals to build a powerful and consistent personal brand online by leveraging AI for content optimization and portfolio creation.
- **Core Technologies:**
  - **Application Framework:** Next.js (handling both frontend and backend logic via Server Actions/API Routes)
  - **Styling:** TailwindCSS
  - **Database:** TiDB Cloud (Serverless Tier)
  - **Authentication:** better-auth
  - **AI/LLM:** Free and accessible LLM API (free forever that does not require credit card info)
  - **Deployment:** Vercel

## **1.0 User Authentication & Onboarding**

### **1.1 User Accounts**

- **Feature:** Users can create an account, log in, and log out.
- **User Flow:**
  1. A new user visits the landing page and clicks "Get Started."
  2. They are redirected to a sign-up page.
  3. The user can sign up using their email/password or through a social provider (Google/GitHub).
  4. Upon successful sign-up, they are logged in and redirected to the main dashboard.
  5. Existing users can log in using their credentials.
- **Technical Implementation:**
  - Utilize better-auth for handling all authentication logic.
  - On successful authentication, a user record is created in the users table in the TiDB database via a Server Action.
  - The user's session will be managed via JWTs provided by better-auth.

### **1.2 Onboarding**

- **Feature:** A simple, one-time onboarding process to gather initial user information.
- **User Flow:**
  1. After the first login, the user is prompted to provide their full name and a professional title (e.g., "Full Stack Developer").
  2. This information is saved to their user profile.
- **Technical Implementation:**
  - A boolean flag has_onboarded in the users table will track the onboarding status.
  - The frontend will check this flag and conditionally render the onboarding modal.

## **2.0 The Dashboard & Profile Management**

### **2.1 Main Dashboard**

- **Feature:** A central hub that provides an overview of the user's branding assets and suggests the next steps.
- **User Flow:**
  1. After logging in, the user lands on the dashboard.
  2. The dashboard will have distinct sections for:
     - Resume Analysis
     - LinkedIn Profile
     - Portfolio Website
     - AI Content Generator
- **Technical Implementation:**
  - A dedicated page in Next.js (/dashboard).
  - The page will fetch and display summary data for each module.

### **2.2 Profile Input**

- **Feature:** A dedicated section for users to upload and manage their professional data.
- **User Flow:**
  1. From the dashboard, the user navigates to the "Profile" section.
  2. They can upload their resume as a PDF file.
  3. They can input their LinkedIn profile URL.
  4. They can add their skills, work experience, and projects manually if they don't have a resume.
- **Technical Implementation:**
  - **Resume Upload:**
    - Use a file input to accept PDF files.
    - A Next.js API route will handle the file upload, use a library to extract text from the PDF, and store the file on Cloudflare R2.
    - The extracted text and file URL are linked to the user's profile in the database.
  - **Data Storage:** All professional data (experience, skills, etc.) will be stored in structured tables in TiDB, linked to the user_id.

## **3.0 Core AI Features**

### **3.1 Resume & LinkedIn Analysis**

- **Feature:** AI-powered analysis of the user's resume and LinkedIn profile to provide actionable feedback.
- **User Flow:**
  1. Once the resume is uploaded or LinkedIn URL is provided, the user can trigger an "Analyze" action.
  2. The application sends the text content to the AI model via a Server Action or API route.
  3. The AI returns a structured analysis including:
     - Keyword optimization suggestions.
     - Action verb improvements.
     - Consistency checks between the resume and LinkedIn.
     - A "Brand Score" out of 100\.
  4. The feedback is displayed in a clear, easy-to-read format.
- **Technical Implementation:**
  - A Next.js API route (/api/analyze/resume) or a Server Action will construct a detailed prompt for the LLM and handle the request.
  - The prompt will request a JSON object as output for easy parsing and display on the frontend.

### **3.2 AI Content Generator**

- **Feature:** Generate tailored content for LinkedIn posts and resume bullet points.
- **User Flow:**
  1. The user navigates to the "Content Generator."
  2. They can select a content type: "LinkedIn Post" or "Resume Bullet Point."
  3. For a LinkedIn post, they can input a topic (e.g., "my new project on NovaPersona"). The AI will generate a draft post.
  4. For a resume bullet point, they can describe a task, and the AI will rephrase it using the STAR (Situation, Task, Action, Result) method.
- **Technical Implementation:**
  - Server Actions will be used to handle the user's input and make calls to the LLM with dynamic prompts.

## **4.0 Portfolio Website Generator**

### **4.1 Template Selection & Generation**

- **Feature:** Automatically generate a professional, single-page portfolio website.
- **User Flow:**
  1. The user navigates to the "Portfolio" section.
  2. They can choose from a small selection of modern, clean templates.
  3. Upon selecting a template, the system generates a portfolio page populated with their profile information (name, title, experience, projects, skills).
- **Technical Implementation:**
  - The portfolio will be a dynamic route in the Next.js application (e.g., NovaPersona.ai/\[username\]).
  - The templates will be pre-built React components.
  - When a user visits the portfolio URL, the page will fetch the user's public data from the database and render it into the chosen template.

### **4.2 Customization and Deployment**

- **Feature:** Basic customization and a public URL for the portfolio.
- **User Flow:**
  1. The user can choose a primary color for their portfolio.
  2. They can toggle sections on or off (e.g., hide the "Projects" section).
  3. The portfolio is instantly live at their unique URL.
- **Technical Implementation:**
  - Customization options will be stored in a portfolio_settings table linked to the user.
  - The portfolio page component will read these settings to apply the chosen styles and render the correct sections.

## **5.0 Database Schema (TiDB)**

- users: id, email, password_hash, full_name, professional_title, has_onboarded
- profiles: id, user_id, resume_text, linkedin_url
- experiences: id, user_id, job_title, company, start_date, end_date, description
- projects: id, user_id, project_name, description, project_url
- skills: id, user_id, skill_name
- portfolio_settings: id, user_id, template_id, primary_color, visible_sections (JSON)

## **6.0 Deployment & Infrastructure (Free Tiers)**

- **Full-Stack Application (Next.js):** The entire application will be deployed on **Vercel**. The free tier is generous and offers automatic deployments from a Git repository, perfectly handling both frontend and backend (API Routes/Server Actions) logic.
- **Database (TiDB):** Use the **TiDB Cloud Serverless Tier**, which offers a substantial free quota for storage and requests.
- **Object Storage (for Resumes):** **Cloudflare R2** offers a generous free tier for storing user-uploaded files.

By strictly adhering to these free-tier services, the entire project can be built, deployed, and maintained with zero cost, making it a perfect submission for the HackVerse hackathon.
