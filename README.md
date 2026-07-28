<div align="center">

# ⚛️ Complete React

_A collection of React projects built while learning React through hands-on experimentation with concepts, patterns, and libraries._

<p align="center">

<img src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=react&logoColor=white"/>
<img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black"/>
<img src="https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white"/>
<img src="https://img.shields.io/badge/Vite-646CFF?style=flat-square&logo=vite&logoColor=white"/>
<img src="https://img.shields.io/badge/Next.js-000000?style=flat-square&logo=nextdotjs&logoColor=white"/>
<img src="https://img.shields.io/badge/React_Router-CA4245?style=flat-square&logo=reactrouter&logoColor=white"/>

<br/>

<img src="https://img.shields.io/badge/Context_API-61DAFB?style=flat-square"/>
<img src="https://img.shields.io/badge/Redux-764ABC?style=flat-square&logo=redux&logoColor=white"/>
<img src="https://img.shields.io/badge/Redux_Toolkit-764ABC?style=flat-square&logo=redux&logoColor=white"/>
<img src="https://img.shields.io/badge/TanStack_Query-FF4154?style=flat-square&logo=reactquery&logoColor=white"/>
<img src="https://img.shields.io/badge/Testing-25A162?style=flat-square"/>
<img src="https://img.shields.io/badge/Authentication-0F9D58?style=flat-square"/>

</p>

</div>

---

## About

This repository is a structured collection of React projects built while learning various topics of React. Instead of building a single evolving application, I chose to separate each concept into its own project. This approach helps me:

- Focus deeply on one concept at a time
- Rebuild fundamentals from scratch multiple times
- Compare different patterns (e.g. Context API vs Redux)
- Keep earlier learning stages intact for reference
- Experiment freely without breaking existing code

Each folder represents a self-contained learning milestone, starting from JavaScript refreshers and basic React fundamentals, and gradually moving toward more advanced topics like state management, side effects, routing, and real-world application patterns.

This repository will continue to grow as I progress through the course, covering every major topic and project included in it.

---

## What's in this repository?

```text
Complete-React
├── javascript-refresher
├── react-essentials
├── react-counter
├── react-art
├── class-component-example
├── react-forms
├── react-form-actions
├── form-actions-opinions-demo
├── redux-basics
├── react-redux
├── redux-cart
├── elegant-context-shop
├── investment-calculator
├── place-picker
├── tic-tac-toe
├── time-challenge
└── ...
```

---

## Projects

### Fundamentals & JavaScript Refresher

- [`javascript-refresher`](./javascript-refresher) — Modern JavaScript concepts used throughout React development
- [`react-essentials`](./react-essentials) — Core React concepts: components, props, state, events, and rendering
- [`react-counter`](./react-counter) — Simple state management and event handling practice
- [`class-component-example`](./class-component-example) — Understanding legacy React class components

---

### UI & Component Design

- [`react-art`](./react-art) — Component composition, styling approaches, and UI structuring

---

### Forms & User Input

- [`react-forms`](./react-forms) — Controlled components, validation, and form handling
- [`react-form-actions`](./react-form-actions) — Form actions and submission patterns
- [`form-actions-opinions-demo`](./form-actions-opinions-demo) — Experimenting with different form handling approaches

---

### State Management

- [`redux-basics`](./redux-basics) — Redux fundamentals and core concepts
- [`react-redux`](./react-redux) — Connecting React with Redux
- [`redux-cart`](./redux-cart) — Practical application using Redux Toolkit
- [`elegant-context-shop`](./elegant-context-shop) — State management using Context API as an alternative to Redux

---

### Mini Applications & Practice Projects

- [`investment-calculator`](./investment-calculator) — Financial calculation app with React state logic
- [`place-picker`](./place-picker) — Interactive UI with dynamic selection logic
- [`tic-tac-toe`](./tic-tac-toe) — Game logic, state transitions, and win conditions
- [`time-challenge`](./time-challenge) — Timer-based challenge using effects and state updates

---

## Running a project

Each folder is a standalone React application.

```bash
git clone https://github.com/SDhanush163/Complete-React.git
```

## Running a project

Each folder is standalone, and the start command depends on the stack.

| Folder type | Example folders                                              | Command                      |
| ----------- | ------------------------------------------------------------ | ---------------------------- |
| Parcel      | `javascript-refresher`                                       | `npm install && npm start`   |
| CRA         | `class-component-example`, `react-redux`, `redux-basics`     | `npm install && npm start`   |
| Vite        | Most React projects in this repository[^1]                   | `npm install && npm run dev` |
| Backends    | `place-picker/backend`, `form-actions-opinions-demo/backend` | `npm install && npm start`   |

[^1]:
    Includes `react-essentials`, `react-counter`, `react-art`, `react-forms`,
    `react-form-actions`, `form-actions-opinions-demo`, `elegant-context-shop`,
    `investment-calculator`, `place-picker`, `redux-cart`, `tic-tac-toe`, and
    `time-challenge`.

---

## Tech Stack

<p align="center">

<img src="https://skillicons.dev/icons?i=react,nextjs,ts,js,vite,redux,html,css,npm,git,github,vscode" />

</p>

This repository includes projects built with:

- ✅ JavaScript Refresher
- ✅ React Fundamentals
- ✅ Components, JSX, Props & State
- ✅ Styling React Components
- ✅ Debugging React Apps
- ✅ Refs & Portals
- ✅ Project: Project Management App
- ✅ Context API & `useReducer`
- ✅ Side Effects (`useEffect`)
- ✅ Project: Quiz Application
- ✅ React Performance & Optimization
- ✅ Class-based Components
- ✅ HTTP Requests & Backend Communication
- ✅ Custom Hooks
- ✅ Forms & User Input
- ✅ Form Actions
- ✅ Project: Food Order App
- ✅ Redux Fundamentals
- ✅ Advanced Redux (Redux Toolkit)
- ⏳ React Router
- ⏳ Authentication
- ⏳ Deployment
- ⏳ TanStack Query
- ⏳ Next.js
- ⏳ React Server Components & Server Actions
- ⏳ Animations
- ⏳ React Patterns & Best Practices
- ⏳ Replacing Redux with React Hooks
- ⏳ Testing React Applications
- ⏳ React + TypeScript

> Note: Not every project uses all the tools listed above. Each folder reflects the specific technologies introduced in that section of the course.

---

## Notes

- Each folder is a standalone project with its own purpose. I prefer keeping concepts separated instead of gradually growing a single application.
- Some topics are revisited across different projects. As I learned new patterns and libraries, I often rebuilt similar features to understand the trade-offs between different approaches.
- I generally don't go back and rewrite older projects after learning something new. They serve as a snapshot of what I knew at that point, which makes it easier to see how my approach has changed over time.
- The projects in this repository vary in size. Some are small exercises focused on a single concept, while others combine multiple concepts into more complete applications.
- As I continue learning, I'll keep adding new projects covering topics such as routing, authentication, data fetching, testing, Next.js, and TypeScript.
- While the projects are primarily learning exercises, I try to follow good development practices wherever they make sense; keeping components reusable, organising files clearly, and writing code that's easy to come back to later.

---

<div align="center">

Still learning. Still shipping.

</div>
