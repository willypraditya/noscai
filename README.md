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
https://noscai.vercel.app/
```

#### Sample Usage Video URL
```
https://www.loom.com/share/63062b043e674803b476ebffff3f0381
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

#### Notes
- The data will be reset when users refresh the page.
- Total time spent on the project: 8-10 hours

#### Difficulties Found
- First time using react-table, followed tutorial to implement it
- First time using dnd-kit, followed this video to implement it (https://www.youtube.com/watch?v=RG-3R6Pu_Ik)

#### Improvement Notes
- Use MSW for mocking the networks (https://mswjs.io/)
- More Unit test
- E2E testings
- dnd-kit components (AnamnesisContainer and AnamnesisItem) should be re-usable for other possible dnd-kit usage (Possible component name: DndContainer and DndItem)
