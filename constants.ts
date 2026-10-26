export const STARTING_CHIPS = 500;
export const DEFAULT_MIN_BET = 25;
export const MIN_PLAYERS = 2;
export const MAX_PLAYERS = 8;
export const TURN_TIMEOUT_SECONDS = 30;
export const NEXT_ROUND_COUNTDOWN_SECONDS = 6;

export const CHIP_DENOMINATIONS = [
  { value: 5, color: '#f8fafc', textColor: '#0f172a', borderColor: '#cbd5e1', label: '5' },
  { value: 25, color: '#16a34a', textColor: '#ffffff', borderColor: '#22c55e', label: '25' },
  { value: 50, color: '#2563eb', textColor: '#ffffff', borderColor: '#3b82f6', label: '50' },
  { value: 100, color: '#09090b', textColor: '#fbbf24', borderColor: '#f59e0b', label: '100' },
  { value: 500, color: '#9333ea', textColor: '#ffffff', borderColor: '#c084fc', label: '500' },
] as const;
