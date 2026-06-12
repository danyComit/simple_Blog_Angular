# Blog

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 21.2.14.

---

## Concepts Covered

### Components
The building blocks of an Angular app. Each component is responsible for one thing only (Single Responsibility Principle) — a post card, a post list, a form, etc.

### Signals
Angular's modern reactivity system. A `signal()` holds a value and automatically notifies the UI when it changes. Used instead of plain variables for reactive state.

### Computed Signals
Derived values that automatically recalculate when their dependencies change. Created with `computed()`. Example: word count derived from post content.

### input() and output()
The modern Angular way to pass data between components. `input()` receives data from a parent, `output()` emits events up to a parent. Replaces the older `@Input()` and `@Output()` decorators.

### Services
Plain TypeScript classes decorated with `@Injectable({ providedIn: 'root' })` that hold shared state and logic. Any component can inject a service and access the same instance — enabling shared state without passing data through every layer.

### Dependency Injection
Angular's system for providing instances of classes to components. Used with `inject()` to get a service, router, or any other dependency inside a component.

### Routing
Angular's client-side navigation system. Routes are defined in `app.routes.ts` and components are swapped in and out of `<router-outlet>` without a full page reload — making this a Single Page Application (SPA).

### Lazy Loading
Routes load their component code only when the user navigates to them, instead of all at once on startup. Implemented with `loadComponent` in route definitions. Improves initial load performance.

### Reactive Forms
Angular's form management system using `FormGroup` and `FormControl`. Handles form state, validation, and error messages in a structured and scalable way.

### Validators
Rules applied to form fields. Angular provides built-in validators (`Validators.required`, `Validators.minLength`, `Validators.email`, etc.) and supports custom validator functions for specific rules like Lebanese phone number format or password strength.

### Route Parameters
Dynamic segments in URLs (e.g. `/posts/:id`) that allow navigating to specific resources. Read from the URL using `ActivatedRoute`.

### Route Guards
Functions that protect routes from unauthorized access. Returns `true` to allow navigation or redirects to another route (e.g. `/login`) if the user is not authenticated.

### Auth Flow
A basic authentication system using localStorage to store a token on login and remove it on logout. The auth guard checks for the token before allowing access to protected routes.

### Tailwind CSS
A utility-first CSS framework where styles are applied directly in HTML using class names. Used throughout this project with a neobrutalism design style — thick borders, hard offset shadows, and bold colors.

---

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Vitest](https://vitest.dev/) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
