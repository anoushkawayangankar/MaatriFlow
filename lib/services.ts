// Replace these adapters with FastAPI endpoints without changing the UI.
// All outreach is simulated. No external services receive patient information.
export interface OutreachRequest { journeyId:string; channel:'WhatsApp'|'Voice'; language:string; template:string; consent:boolean; }
export interface OutreachReceipt { id:string; mode:'simulation'; status:'sent'; }
export interface CoordinationService { send(request:OutreachRequest):Promise<OutreachReceipt>; availableSlots(journeyId:string):Promise<string[]>; }
export const coordinationService:CoordinationService={
 async send(request) { if(!request.consent) throw new Error('Communication consent is required.'); if(!request.template.trim()) throw new Error('An approved message is required.'); await new Promise(r=>setTimeout(r,550)); return {id:crypto.randomUUID(),mode:'simulation',status:'sent'}; },
 async availableSlots() { await new Promise(r=>setTimeout(r,350)); return ['05 Oct 2026 · 10:30 AM','05 Oct 2026 · 2:00 PM','06 Oct 2026 · 11:00 AM']; }
};
