# **Server Management Dashboard**

This is a feature-rich server management dashboard built using [Next.js](https://nextjs.org/). It allows users to monitor server statuses, including name, IP address, response time, uptime, and current status. Authentication features such as account creation, login, and logout are implemented using Firebase. Form validation is handled by Yup, with Tailwind CSS providing a sleek and responsive UI. Real-time notifications are displayed using Toast Sonner.

---

## **Table of Contents**
1. [Features](#features)
2. [Tech Stack](#tech-stack)
3. [Getting Started](#getting-started)
   - [Installation](#installation)
   - [Running the Development Server](#running-the-development-server)
4. [Usage](#usage)
5. [Deployment](#deployment)
6. [Contributing](#contributing)

---

## **Features**

- **Authentication**:
  - Account creation, login, and logout using Firebase.
- **Server Monitoring**:
  - Display server details such as name, IP address, status, response time, and uptime using static dummy data.
- **Form Validation**:
  - Input fields are validated using Yup for improved user experience.
- **Real-time Notifications**:
  - Toast Sonner provides pop-up friendly messages for user actions.
  - **Virtual Token**:
  - Generate a virtual token for login, which is stored in a cookie for session management.

- **Responsive Design**:
  - Tailwind CSS ensures the dashboard looks great on all devices.

---

## **Tech Stack**

- **Frontend**: [Next.js](https://nextjs.org/), [React](https://reactjs.org/)
- **Authentication**: [Firebase](https://firebase.google.com/)
- **Validation**: [Yup](https://github.com/jquense/yup)
- **Notifications**: [Toast Sonner](https://sonner.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)

---

## **Getting Started**

### **Installation**

1. Clone the repository:
   ```bash
   git clone <repository-url>

2. Navigate to the project directory:
     bash
cd project-directory

3. Install dependencies:
    npm install

4. Running the Development Server
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev

Open http://localhost:3000 in your browser to see the application.


Note :
 Public routes
http://localhost:3000/auth/signin
http://localhost:3000/auth/signup

Authenticated Routes:
Dashboard (requires authentication): http://localhost:3000/dashboard


Usage:
Once logged in, you can view the dashboard with server statistics.
Real-time notifications will appear for actions like successful login/logout, errors, etc.
Access and manage server statuses, such as uptime and response time.


