export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
```

---

## 7) tailwind.config.js
```js
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: { extend: {} },
  plugins: [],
}
