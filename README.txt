THRIVIN30 — Rise. Reset. Thrive.
=================================
40-Day Longevity Reset App

HOW TO GO LIVE (10 minutes)
=============================

STEP 1 — GITHUB
---------------
1. Go to github.com — sign up free
2. Click green "New" button
3. Name: thrivin30-app → click "Create repository"
4. Click "uploading an existing file"
5. Open THIS folder in Finder
6. Select ALL 4 items:
   - src (folder)
   - public (folder)  
   - package.json
   - vercel.json
7. Drag all 4 into the GitHub upload page
8. Click "Commit changes"
9. Check your repo — you should see src, public, package.json, vercel.json

STEP 2 — VERCEL
---------------
1. Go to vercel.com
2. Click "Sign up with GitHub"
3. Click "Add New Project"
4. Find "thrivin30-app" → click Import
5. Click "Environment Variables" — ADD THIS:
   Name:  REACT_APP_ANTHROPIC_KEY
   Value: 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
6. Click "Deploy"
7. Wait 2 minutes — YOU'RE LIVE! 🔥

YOUR LIVE URL will be: thrivin30-app.vercel.app

UPDATING THE APP LATER
-----------------------
1. Go to github.com → your thrivin30-app repo
2. Click the file → pencil icon to edit
3. Make changes → "Commit changes"
4. Vercel auto-updates in 60 seconds — same URL!

IMPORTANT — API KEY SECURITY
------------------------------
Go to console.anthropic.com → API Keys
Delete the key above and create a fresh one
Update it in Vercel: Project Settings → Environment Variables
