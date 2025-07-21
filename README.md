# Next.js + Firebase Data Connect Example

This example shows how to build a movie review app using [Next.js](https://nextjs.org/docs) with [Firebase Data Connect](https://firebase.google.com/docs/data-connect) (PostgreSQL).

## Prerequisites

- Node.js 18+
- Firebase CLI (`npm install -g firebase-tools`)
- A Firebase project with Data Connect enabled

## Getting Started

1. **Install dependencies**

   ```bash
   npm install
   ```

2. **Set up environment variables**

   ```bash
   cp env.local.example .env.local
   ```

   Then update `.env.local` with your Firebase project ID:

   ```
   FIREBASE_PROJECT_ID=your-project-id
   ```

3. **Configure Firebase Data Connect**

   For production:

   ```bash
   firebase deploy --only dataconnect
   ```

   For local development (recommended):

   ```bash
   firebase emulators:start --only dataconnect
   ```

4. **Run the development server**

   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) to see your app.
