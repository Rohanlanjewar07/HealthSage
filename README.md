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
