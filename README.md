# MaatriFlow

Interactive maternal continuity-of-care prototype. All patients, appointments, messages and metrics are fictional. This application coordinates operations; it does not diagnose, assess clinical risk or recommend treatment.

## Run locally

Requires Node.js 22 or newer. Run `npm install` and `npm run dev`, then open http://127.0.0.1:3000. `npm run build` produces a static Next.js export in `out/`. `npm run typecheck` checks TypeScript.

## Jury demonstration

1. Open the dashboard and choose **Demo Journey**.
2. Begin the scenario and confirm setting Asha’s anatomy scan to overdue.
3. Detect the gap and verify two unanswered WhatsApp attempts.
4. Start the simulated Hindi callback.
5. Choose an appointment slot, confirm it, then verify the audit trail and finish.
6. Open Conversations and choose **I have a clinical question**. Confirm the escalation and open Clinical review. Review as Doctor or Nurse, record a decision and follow-up date, then close the escalation.

Use the logo to open the public landing page. Use the profile to change demo roles. Navigation uses shareable hash URLs, such as `/#conversations` and `/#journey/MF-1024`.

## State and boundaries

- Local browser state persists fictional patient updates, audit events and selected role under `maatriflow-v1`. Pathways persist under `maatri-plan`. Clear those keys to reset all demo data; starting the guided demo resets Asha after confirmation.
- Confirmations precede all journey-status mutations. Rescheduling is distinct from task completion. Completion requires recorded evidence.
- Clinical questions stop automated outreach and appointment offers. Clinical-review closure is restricted in the UI to Doctor and Nurse roles.
- Role selection is a demo, not authentication or a production authorization boundary. No personal data should be entered.
- Voice calls, WhatsApp, slots, translations and external failures are simulated. No message or call reaches a real person. Translations require clinical and linguistic review.
- `lib/services.ts` defines typed coordination adapters for future FastAPI, WhatsApp/Twilio and Sarvam integration. PostgreSQL and production audit storage belong behind authenticated backend endpoints. No API credentials are needed.
- The analytics page labels illustrative data and proposed pilot targets. Dashboard live queue counts derive from the seven example journeys; trend and response-rate summaries are illustrative.

## Implementation

Next.js App Router, React, TypeScript, Tailwind CSS, Radix accessible components, Recharts and Lucide. `components/maatriflow.tsx` contains the app shell and workflow views; `lib/care-data.ts` contains the fictional fixtures. `app/globals.css` implements the responsive visual system.

Landing photograph: UNICEF/UN0491519/Vishwanathan, from https://www.unicef.org/rosa/stories/covid-19-and-pregnancy. It is an external editorial image used for prototype context; confirm reproduction rights before public distribution.
