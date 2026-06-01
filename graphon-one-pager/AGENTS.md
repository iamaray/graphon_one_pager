AGENTS.md

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

- This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.

# Mission

Write production-quality Next.js code that is easy for humans to read, modify, delete, and extend.

**BEFORE WRITING ANY CODE, ASK YOURSELF THE FOLLOWING:**

1. Does this solution beget an overly-complex, contrived explanation?
2. If so, can I make it simpler? If the answer is no, then you must change the approach.

**AFTER WRITING A FIRST-PASS SOLUTION, ASK YOURSELF THE FOLLOWING:**

1. Can I write this more simply? If so, then do so.
2. Is this code extensible and modular? If not, then make it so.
3. If applicable, can the body of this function be shortened by extracting functionality into helpers? If so, then make it so.

**Optimize for the following:**

1. Clarity as opposed to cleverness.
2. Simplicity as opposed to abstraction.
3. Small, focused files as opposed to large, tangled files.
4. Explicit behavior as opposed to hidden magic.
5. Fewer lines of code when fewer lines remain clear.
6. Extensibility through clean boundaries as opposed to premature generalization.

Optimize the code to the standard of a competent senior engineer who will be reviewing what you write.

---

## Default Engineering Principles

### Prefer boring code

Use ordinary TypeScript, React, and Next.js patterns unless there is a strong reason not to.

Avoid:

- unnecessary design patterns
- clever one-liners
- over-generalized utilities
- deeply nested abstractions
- custom frameworks inside the app
- premature optimization
- excessive configuration
- avoid using the `any` type as a placeholder to defer having to deal with a problem
- do not remove functionality in order to sweep a problem under the rug

If a simple function solves the problem, write a simple function.

### Minimize lines of code, without sacrificing readability

None of the code you write will be shipped blindly; I will review every single line, so human readability is extremely important. Reducing lines of code is good only when the result is still obvious.

Do not compress code in ways that make intent harder to understand.

**BAD:**

```ts
const x =
  a?.b?.c
    ?.map((y) => y.z)
    .filter(Boolean)
    .join(",") ?? "";
```

**BETTER:**

```ts
const names = user.profile?.contacts ?? [];

return names
  .map((contact) => contact.name)
  .filter(Boolean)
  .join(",");
```

### Make intent clear; naming conventions are important

The name of something must reflect its purpose.

Prefer:

```ts
const activeSubscriptions = subscriptions.filter(isActiveSubscription);
```

Over:

```ts
const filtered = subscriptions.filter((s) => s.status === "active");
```

Use comments only when they explain why something exists. Do not comment what the code already says.

---

## TypeScript Standards

### Use TypeScript strictly

Write code that works cleanly under strict TypeScript settings.

Avoid:

- `any`
- unsafe casts
- non-null assertions unless genuinely justified
- overly broad types
- duplicated type definitions

Prefer:

```ts
type UserRole = "admin" | "member" | "viewer";
```

Over:

```ts
type UserRole = string;
```

### Prefer local types

Define types near where they are used unless they are shared across multiple modules.

Do not create global type files just because a type exists.

### Model domain concepts explicitly

Use types to make invalid states harder to represent.

Prefer:

```ts
type LoadingState<T> =
  | { status: "idle" }
  | { status: "loading" }
  | { status: "success"; data: T }
  | { status: "error"; error: string };
```

Over separate booleans like:

```ts
isLoading: boolean;
isError: boolean;
data?: T;
error?: string;
```

---

## React and Next.js Standards

### Use Server Components by default

In the Next.js App Router, components should be Server Components unless they need:

- state
- effects
- browser APIs
- event handlers
- client-side libraries

Add `"use client"` only when necessary.

### Keep Client Components small

Client Components should usually be leaf components.

Good structure:

```txt
app/dashboard/page.tsx
components/dashboard/DashboardView.tsx
components/dashboard/FilterControls.tsx
```

Where `page.tsx` fetches data and `FilterControls.tsx` handles client interaction.

### Keep pages thin

Page files should mainly:

1. read route/search params
2. fetch data
3. compose components
4. handle redirects or not-found states

Avoid putting large UI trees, business logic, or complex transformations directly in `page.tsx`.

### Prefer composition over configuration

Prefer simple composed components instead of large components with many props.

Avoid components like:

```tsx
<Card variant="dashboard" mode="compact" showFooter showBadge enableActions />
```

Prefer:

```tsx
<Card>
  <CardHeader />
  <CardBody />
  <CardActions />
</Card>
```

Only introduce compound components when they clearly simplify repeated usage.

---

## File and Folder Organization

Use predictable, boring structure.

Recommended:

```txt
app/
components/
lib/
hooks/
types/
styles/
```

Feature-specific code may be grouped by feature when useful:

```txt
components/billing/
components/datasets/
components/account/
lib/billing/
lib/datasets/
```

Rules:

- Keep files focused.
- Keep related code close together.
- Do not create folders with only one file unless the structure is expected to grow soon.
- Do not create barrel files by default.
- Avoid circular imports.
- Avoid vague filenames like `utils.ts`, `helpers.ts`, or `misc.ts`.

Prefer specific names:

```txt
format-currency.ts
parse-search-params.ts
get-user-subscription.ts
```

---

## Components

### Component rules

Components should be:

- small
- named clearly
- easy to scan
- mostly free of business logic
- explicit about their props

Prefer:

```tsx
type DatasetCardProps = {
  name: string;
  description: string;
  sampleCount: number;
};

export function DatasetCard({
  name,
  description,
  sampleCount,
}: DatasetCardProps) {
  return (
    <article>
      <h3>{name}</h3>
      <p>{description}</p>
      <p>{sampleCount.toLocaleString()} samples</p>
    </article>
  );
}
```

### Avoid excessive prop drilling

If props pass through more than two layers without being used, reconsider the structure.

Acceptable solutions, in order of preference:

1. move the component closer to the data
2. compose children differently
3. introduce a small context
4. use a state library only if truly necessary

### Avoid premature reuse

Do not extract a reusable component after one use.

Extract only when:

- the same pattern appears at least twice
- the extracted component has a clear name
- the extraction reduces total complexity

Duplication is better than the wrong abstraction.

---

## Styling

Follow the project’s existing styling system.

If Tailwind is used:

- prefer readable class lists
- group related classes logically
- avoid deeply conditional class strings
- use `clsx` or a similar helper only when conditions are meaningful

Avoid creating custom CSS unless Tailwind or the existing system becomes unclear or repetitive.

Do not introduce a new styling library without a strong reason.

---

## Data Fetching and Server Logic

### Keep data access in server-side modules

Put data-fetching logic in `lib/` or feature-specific server modules.

Prefer:

```txt
lib/datasets/get-dataset.ts
lib/datasets/list-datasets.ts
```

Avoid scattering fetch/database calls throughout UI components.

### Validate external data

Validate data that comes from:

- APIs
- forms
- search params
- environment variables
- webhooks
- uploaded files

Use the project’s existing validation library if one exists. If not, prefer a small explicit validator before adding a new dependency.

### Handle empty and error states

Every data-dependent UI should consider:

- loading state
- empty state
- error state
- unauthorized state, when applicable

Do not leave impossible-looking blank screens.

---

## State Management

Prefer the simplest state that works.

Use, in order:

1. local component state
2. URL/search params
3. Server Components and server data fetching
4. React Context
5. external state libraries

Do not add global state unless the state is genuinely global.

Avoid duplicating server state in client state.

---

## Forms

Forms should be explicit and resilient.

Rules:

- validate inputs
- show useful error messages
- prevent duplicate submissions when appropriate
- preserve user input after validation errors
- keep mutation logic separate from rendering when it gets complex

Prefer server actions or existing project conventions.

Do not add large form libraries unless the form complexity justifies it.

---

## Error Handling

Handle errors close to where they occur.

Use clear user-facing messages and more detailed internal logs when appropriate.

Avoid:

```ts
catch (error) {
  console.log(error);
}
```

Prefer:

```ts
catch (error) {
  logger.error("Failed to create dataset", { error });
  return { success: false, message: "Could not create dataset." };
}
```

Do not expose sensitive error details to users.

---

## Accessibility

All UI should be accessible by default.

Required:

- semantic HTML where possible
- labels for form fields
- keyboard-accessible interactions
- meaningful button/link text
- alt text for meaningful images
- sufficient color contrast
- visible focus states

Do not replace native elements with divs unless necessary.

Prefer:

```tsx
<button type="button">Save changes</button>
```

Over:

```tsx
<div onClick={save}>Save changes</div>
```

---

## Performance

Do not optimize prematurely.

First make the code correct, simple, and readable.

Then optimize only when there is a known issue.

Reasonable defaults:

- avoid unnecessary Client Components
- avoid large client-side dependencies
- fetch only the data needed
- use pagination for large lists
- memoize only when it solves a real rendering problem
- avoid passing unstable objects/functions when it causes measurable issues

Do not use `useMemo` or `useCallback` as decoration.

---

## Dependencies

Before adding a dependency, ask:

1. Is this problem hard enough to justify a package?
2. Does the project already have a tool for this?
3. Is the dependency actively maintained?
4. Will this dependency meaningfully reduce complexity?
5. Is the API stable and easy to remove later?

Prefer small, well-known packages.

Do not add dependencies for trivial utilities.

---

## Testing

Write tests for behavior that matters.

Prioritize:

- business logic
- data transformations
- permissions
- form validation
- API/server actions
- regression-prone bugs

Avoid tests that only assert implementation details.

Prefer testing public behavior over internal structure.

---

## Code Review Checklist

Before finishing a change, verify:

- The code solves the actual problem.
- The solution is simpler than the problem.
- Names are clear.
- Files are reasonably small.
- Types are precise.
- There is no unnecessary abstraction.
- There is no duplicated business logic.
- Server and client boundaries are correct.
- Errors and empty states are handled.
- The UI is accessible.
- No new dependency was added without justification.
- The code fits the existing project style.

---

## Refactoring Rules

When modifying existing code:

1. Preserve behavior unless asked to change it.
2. Make the smallest safe improvement.
3. Do not rewrite large areas casually.
4. Delete dead code.
5. Improve names when doing so reduces confusion.
6. Avoid mixing unrelated refactors with feature work.

Leave the codebase cleaner than you found it, but do not turn every task into a cleanup project.

---

## Prohibited Patterns

Avoid these unless explicitly justified:

- large generic utility files
- unnecessary classes
- unnecessary custom hooks
- premature context providers
- deeply nested ternaries
- broad `any` types
- silent error swallowing
- duplicated source of truth
- client-side fetching when server-side fetching is simpler
- giant components
- giant prop objects
- magic constants hidden in logic
- new dependencies for simple functions
- clever code that requires explanation

---

## Preferred Response Behavior for Coding Assistants

When making code changes:

1. State the intended change briefly.
2. Make the smallest coherent patch.
3. Preserve existing conventions.
4. Explain any non-obvious tradeoff.
5. Mention tests or checks performed.
6. Do not claim success without evidence.

When uncertain, choose the simpler implementation and clearly mark the assumption.

---

## Final Standard

Good code in this project should feel obvious after reading it.

If the solution requires a long explanation, it is probably too complex.

If the abstraction does not clearly reduce complexity today, do not add it.

If deleting code improves the system, delete it.

<!-- END:nextjs-agent-rules -->
