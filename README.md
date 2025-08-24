# QuickHire

QuickHire is a modern job board platform built using the MERN stack. Users can register as either **Job Seekers** or **Employers**, post or apply to job openings, update profiles with resumes and photos, and enjoy a clean, responsive interface.

## ✨ Features

- Register as **Job Seeker** or **Employer**
- Secure Authentication using **JWT** and **cookies**
- Post, view, edit, and delete job listings (Employers)
- Apply to jobs with custom messages and resumes (Job Seekers)
- Update user profiles with bio, skills, resume, and photo 
- View applicants for posted jobs
- Responsive and beautiful UI with TailwindCSS and Tailgrid UI
- Rate limiting and bot protection via **ArcJet**
- Protected routes and session management

## 🛠 Tech Stack

- **Frontend**: React, TailwindCSS, Tailgrid UI
- **Backend**: Node.js, Express, MongoDB, Mongoose
- **Authentication**: JWT + Cookies
- **Security**: ArcJet for bot protection and rate limiting
- **Image/Resume Uploads**: Cloudinary
- **Others**: Bcrypt for password hashing, Axios

## 🚀 Getting Started (Local Setup)

### 1. Clone the repository

```bash
git clone https://github.com/techlead-1/quickhire.git
cd quickhire
```

### 2. Setup the Server

```bash
cd server
npm install
npm run dev
```

### 3. Setup the Client

```bash
cd client
npm install
npm run dev
```

### 4. Create `.env` file in the `server` directory

```env
# NODE ENVIRONMENT
NODE_ENV='development'

# PORT
PORT=5500

# MONGO DB
DB_URI='your_mongodb_connection_string'

# JWT AUTHENTICATION
JWT_SECRET='your_jwt_secret'
EXPIRES_IN='7 days'

# CLOUDINARY
CLOUDINARY_CLOUD_NAME='your_cloud_name'
CLOUDINARY_API_KEY='your_api_key'
CLOUDINARY_API_SECRET='your_api_secret'

# ARCJET
ARCJET_KEY='your_arcjet_key'
ARCJET_ENV='development'

# CORS
CORS_ORIGIN='http://localhost:5173'

COOKIES_ENV = 'development'
```

## 📸 Screenshots

All screenshots showcasing the platform's features and design can be found in the [screenshots](./screenshots/) directory.

## 📦 Deployment

> It's recommended that you deploy the client to an hosting service provider good with Frontend and the Backend on a backend focused hosting service provider. You have full autonomy is in your deployment decisions 

## 📄 License

This project is open-source and free to use.

---

<h2 align="center">📬 Contact Me</h2>

<p align="center">
  <b>Have a startup idea, collab offer, or just want to say hey?</b><br />
  I'm always open to great convos and bold opportunities.
</p>

<p align="center">
  🔗 <a href="https://www.linkedin.com/in/mike-lead/">LinkedIn</a> &nbsp;|&nbsp;
  🌐 <a href="https://thestartupdev.com">Website</a> &nbsp;|&nbsp;
  📧 <a href="mailto:adesanya1ademola@gmail.com">adesanya1ademola@gmail.com</a>
</p>

<p align="center">
  <i>Let’s build something legendary.</i> 🚀
</p>
