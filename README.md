# Fishki-de

A minimalistic German-Polish flashcard quiz app built with Next.js and TypeScript. Learn German vocabulary through interactive multiple-choice quizzes with randomized questions.

## Features

- 8 categories: Podstawowe (Basics), Czasowniki (Verbs), Liczby (Numbers), Kolory (Colors), Jedzenie (Food), Rodzina (Family), Szkoła (School), Podróże (Travel)
- Randomized 10-question quizzes per category
- Multiple-choice format to test translations
- Score capped at 10 points
- Smooth, minimalistic design with German flag background
- Responsive layout

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/xvyeh/fishki-de.git
   cd fishki-de
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Technologies Used

- Next.js 16
- React 19
- TypeScript
- Plain CSS (no frameworks)

## Project Structure

- `app/page.tsx` - Main quiz component
- `app/layout.tsx` - Root layout with metadata
- `app/globals.css` - Global styles
- Categories data embedded in the component

## Contributing

Feel free to open issues or submit pull requests for improvements!
