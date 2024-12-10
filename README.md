
# Hacker News Viewer

A responsive web application that fetches and displays top stories from the Hacker News API. This project demonstrates key features such as infinite scrolling, sorting by score, and accessibility enhancements, all implemented using **Vue 3** with **TypeScript** and **SASS**.

---

## Features

- Fetches top stories from the Hacker News API.
- Responsive grid layout with infinite scrolling.
- Stories sorted in ascending order by score.
- Uses Vue 3 composition API for state management.
- SASS used for styles with modern CSS techniques.
- Accessibility compliant (WCAG 2.1 AA).

---

## Prerequisites

Ensure you have the following installed on your system:

- **Node.js** (version 16 or later)
- **npm**
- **Git**

---

## Setup Instructions

1. **Clone the Repository**

   ```bash
   git clone https://github.com/KlausAndrade/HackerNews.git HackerNews
   cd HackerNews
   ```

2. **Install Dependencies**

   ```bash
   npm install
   ```

3. **Run the Development Server**

   ```bash
   npm run dev
   ```

   The application will be available at `http://localhost:3000`.

4. __Production steps not includes.__

---

## Project Structure

```plaintext
.
├── components/
├── composables/ - not used
├── pages/
├── layouts/
├── services/
├── types/
├── router/
├── public/
├── styles/
├── tests/
├── README.md
└── package.json
```

---

## Scripts

| Command            | Description                                         |
|--------------------|-----------------------------------------------------|
| `npm run dev`      | Start the development server         |
| `npm run test`     | Run unit tests using Vitest                        |

---

## API Endpoints Used

- **Top Stories**: `https://hacker-news.firebaseio.com/v0/topstories.json`
- **Story Item**: `https://hacker-news.firebaseio.com/v0/item/{id}.json`
- **User Info**: `https://hacker-news.firebaseio.com/v0/user/{id}.json`

---

## Technologies Used

- **Framework**: Vue 3 + TypeScript
- **CSS Preprocessor**: SASS
- **Build Tool**: Vite
- **Testing**: Vitest and Vue Testing Library
- **API**: Hacker News API

---

## Testing

To run unit tests, execute:

```bash
npm run test
```

---

## License

This project is licensed under the MIT License.
