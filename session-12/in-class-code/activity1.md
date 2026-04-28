### 1. Install ESLint and React Plugins

From the project root, run:

```bash
npm install --save-dev eslint eslint-plugin-react eslint-plugin-react-hooks
```

---

### 2. Create the ESLint Configuration File

Create a file named **`eslint.config.mjs`** in the project root:

```bash
touch eslint.config.mjs
```

Add the following content:

```js
import { defineConfig } from "eslint/config";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";

export default defineConfig([
  {
    files: ["**/*.{js,jsx}"],
    ignores: ["dist/**", "node_modules/**"],

    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },

    plugins: {
      react,
      "react-hooks": reactHooks,
    },

    rules: {
      "react/react-in-jsx-scope": "off",
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",
    },

    settings: {
      react: {
        version: "detect",
      },
    },
  },
]);
```

---

### 3. Lint Script in `package.json`

Make sure your `package.json` includes this script:

```json
{
  "scripts": {
    "lint": "eslint ."
  }
}
```

---

### 4. Run ESLint

Run the linter:

```bash
npm run lint
```

Automatically fix issues ESLint can fix:

```bash
npm run lint -- --fix
```
