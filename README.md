# MedRecom

## Introduction
**MedRecom** is a platform designed to diagnose users and recommend appropriate medicines based on various factors such as age, symptoms, and more. It also tracks users' health over time, offering personalized health recommendations and monitoring.

## Table of Contents
1. [Introduction](#introduction)
2. [Features](#features)
3. [Installation](#installation)
4. [Usage](#usage)
5. [Configuration](#configuration)
6. [Dependencies](#dependencies)
7. [Examples](#examples)
8. [Contributors](#contributors)
9. [License](#license)

## Features
- **User Diagnosis**: Diagnose users based on symptoms, age, and other relevant factors.
- **Medicine Recommendation**: Suggest appropriate medicines tailored to individual users.
- **Health Tracking**: Monitor and track users' health over time, providing ongoing recommendations.
- **Personalized Experience**: The platform adapts its recommendations based on user data and history.

## Installation
To set up the project locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/Rohanlanjewar07/MedRecom.git
   cd MedRecom
   ```
2. Install the dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```
3. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```
4. Open your browser and navigate to `http://localhost:3000`.

## Usage
Once the server is running, users can:
1. Enter their symptoms, age, and other health-related data.
2. Receive a diagnosis along with a list of recommended medicines.
3. Track their health data over time for ongoing monitoring and adjustments to recommendations.

## Configuration
Configuration details specific to your environment can be managed in the `next.config.mjs` and `tailwind.config.ts` files. Make sure to set up any necessary API keys or environment variables.

## Dependencies
This project relies on several key dependencies:
- `@clerk/nextjs`: For user authentication and management.
- `clsx`: A utility for constructing `className` strings conditionally.
- `next`: The core framework used for the project.
- `react` & `react-dom`: For building and rendering the user interface.
- `react-js-loader`: For showing loading animations.

## Examples
To see the platform in action, navigate to the homepage and input some sample data, such as:
- **Age**: 30
- **Symptoms**: Headache, fever
The platform will diagnose and provide a list of recommended medicines along with tracking options.

## Contributors
- [Rohan Lanjewar](https://github.com/Rohanlanjewar07)

## License
This project is licensed under the MIT License.


## For Group Members

### **Technology Overview**

**Next.js**:
- **What**: Next.js is a React framework that enables server-side rendering and static site generation. It’s a popular choice for creating optimized, fast web applications.
- **Why**: It provides a robust foundation for building full-stack React applications with features like routing, API routes, and more.
- **Integration**: This project uses Next.js as the core framework, handling both the front-end rendering and the back-end API logic.

**React**:
- **What**: React is a JavaScript library for building user interfaces, particularly single-page applications where you need a fast, interactive user experience.
- **Why**: React’s component-based architecture allows for reusable UI components, making it easier to maintain and scale the application.
- **Integration**: Used for building the user interface and managing state across components.

**Tailwind CSS**:
- **What**: Tailwind is a utility-first CSS framework that allows for rapid UI development.
- **Why**: It provides a set of predefined classes that can be composed to build custom designs directly in your HTML, improving both speed and flexibility.
- **Integration**: Tailwind is configured via `tailwind.config.ts` and used across the project to style components.

**TypeScript**:
- **What**: TypeScript is a typed superset of JavaScript that compiles to plain JavaScript.
- **Why**: It adds static type definitions, which helps catch errors early in the development process and improves code quality.
- **Integration**: TypeScript is used throughout the project, as indicated by the presence of `.ts` and `.tsx` files, enhancing the reliability and maintainability of the code.

**Clerk**:
- **What**: Clerk is an authentication solution for web applications.
- **Why**: It simplifies user management, including login, signup, and session management, which are crucial for any personalized platform.
- **Integration**: The package `@clerk/nextjs` is integrated into the project for handling user authentication.

**ESLint**:
- **What**: ESLint is a tool for identifying and fixing problems in JavaScript/TypeScript code.
- **Why**: Ensures that the codebase adheres to consistent coding standards, preventing potential bugs and improving readability.
- **Integration**: Configured to lint the codebase, ensuring code quality and consistency.

**PostCSS**:
- **What**: PostCSS is a tool for transforming CSS with JavaScript plugins.
- **Why**: It allows the use of modern CSS features and optimizations like autoprefixing, nested rules, etc.
- **Integration**: PostCSS is configured in `postcss.config.mjs` to process the CSS files in the project.

### **Deployment with Vercel**

**Vercel**:
- **What**: Vercel is a cloud platform for static sites and serverless functions, built to integrate with front-end frameworks like Next.js. It provides an easy and efficient way to deploy web applications with minimal configuration.
- **Why**: Vercel offers seamless integration with Next.js, including automatic deployments, preview environments, and support for server-side rendering. It allows you to deploy your application directly from your Git repository, ensuring that your latest changes are live in a matter of seconds.
- **Integration**: The project is deployed on Vercel, leveraging its capabilities for smooth and efficient deployment, including features like:
  - **Automatic Deployments**: Each push to the main branch triggers a new deployment.
  - **Custom Domains**: You can connect a custom domain to your Vercel project.
  - **Environment Variables**: Vercel allows you to set environment variables for different environments (development, preview, production).
  - **Serverless Functions**: Any API routes in the Next.js project are automatically deployed as serverless functions on Vercel.

#### Deployment Process:

1. **Connect Repository**: 
   - Log in to [Vercel](https://vercel.com/) and connect your GitHub/GitLab/Bitbucket repository containing the `MedRecom` project.
   
2. **Configure Settings**: 
   - You may need to configure some settings, such as environment variables, build commands, and output directory (for Next.js, this is usually automatic).

3. **Automatic Deployments**: 
   - Each time you push code to the repository, Vercel automatically builds and deploys the latest version of your application.
   - You can also create preview deployments for each pull request, allowing you to test changes before merging them into the main branch.

4. **Custom Domain (Optional)**:
   - You can add a custom domain to your project via the Vercel dashboard under the "Domains" section.

5. **Environment Variables**:
   - In Vercel, go to your project settings and under "Environment Variables", add any necessary variables for different environments (e.g., API keys).


