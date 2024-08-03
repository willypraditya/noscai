### NoscAi Test

#### Tech Stack
- Vite
- React w/ TypeScript
- TailwindCss
- Vitest w/ RTL
  - Used Vitest instead of Jest due to better support. Read more: (https://jestjs.io/docs/getting-started#using-vite)
- Husky for Pre-Commit hooks (https://typicode.github.io/husky/#/)

#### Deployment URL
```

```

#### How to run
    $ npm install
    $ npm run dev

#### Folder Structure
```
├── assets
├── components
    Contains re-usable components
├── pages
    ├── {domain}
    Each page has their own domain parent folder
        ├── index.tsx
        UI / View file
        ├── hooks.tsx
        State / Functions file
├── styles
    Global CSS Files / Themes
└── utils
    Reusable helper functions
```