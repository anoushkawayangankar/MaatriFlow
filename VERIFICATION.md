# Verification

- Next.js production compilation, TypeScript checking and static prerender: passed.
- `npm ci --dry-run --offline --ignore-scripts`: passed dependency-lock validation.
- Mock data only; no live messaging, voice, LLM or database integrations.
- Clinical-question simulation pauses automated outreach and slot confirmation. A clinical-review task cannot be marked resolved through the ordinary completion action; it requires Doctor/Nurse review first.
- Confirmation dialogs precede journey-status changes; completion requires entered evidence.

Not verified in a browser: this execution environment denies binding a local preview server (`EPERM`). Screenshots and interactive end-to-end browser checks could not be completed here.

Publication was attempted but blocked by DNS/network access to the Sites source host. No live deployment was created. The local production export is in `out/`.

Before a jury presentation, run `npm run dev`, follow the README’s guided scenario, and check desktop and mobile layout. The externally hosted landing photograph requires internet access.
