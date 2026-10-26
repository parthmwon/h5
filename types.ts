export type PlayerStatus = 'ACTIVE' | 'FOLDED' | 'ALL_IN' | 'ELIMINATED' | 'WINNER';

export type GameStatus = 'LOBBY' | 'BETTING' | 'SHOWDOWN' | 'ROUND_OVER' | 'PAUSED';

export type BetActionType = 'CALL' | 'RAISE' | 'CHECK' | 'FOLD' | 'ALL_IN';

export interface PlayerActionRecord {
  type: BetActionType;
  amount?: number;
  timestamp: number;
}

export interface Player {
  id: string;
  socketId?: string;
  name: string;
  chips: number;
  currentRoundContribution: number;
  status: PlayerStatus;
  isHost: boolean;
  isConnected: boolean;
  seatIndex: number;
  lastAction?: PlayerActionRecord;
}

export interface WinnerResult {
  playerId: string;
  name: string;
  chipsWon: number;
  reason?: string;
}

export interface ShowdownContender {
  id: string;
  name: string;
  chips: number;
  seatIndex: number;
}

export interface GameState {
  roomId: string;
  roomCode: string;
  roomName: string;
  hostId: string;
  status: GameStatus;
  minimumBet: number;
  currentBet: number;
  pot: number;
  currentPlayerTurn: string | null;
  roundNumber: number;
  players: Player[];
  maxPlayers: number;
  turnTimeRemaining: number;
  showdownContenders?: ShowdownContender[];
  winners?: WinnerResult[];
  roundEndCountdown?: number;
}

export interface GameLogEntry {
  id: string;
  timestamp: number;
  message: string;
  type: 'INFO' | 'BET' | 'FOLD' | 'RAISE' | 'CALL' | 'CHECK' | 'WIN' | 'JOIN' | 'LEAVE' | 'ALL_IN';
  playerId?: string;
  amount?: number;
}

// Client -> Server Events
export interface CreateRoomData {
  playerName: string;
  roomName?: string;
  minimumBet: number;
  maxPlayers: number;
}

export interface JoinRoomData {
  playerName: string;
  roomCode: string;
}

export interface ReconnectData {
  roomCode: string;
  playerToken: string;
}

export interface BetActionData {
  action: BetActionType;
  amount?: number;
}

export interface UpdateSettingsData {
  minimumBet?: number;
  maxPlayers?: number;
  roomName?: string;
}

export interface AwardShowdownData {
  roomCode: string;
  winnerPlayerId?: string;
  isSplit?: boolean;
}

// Server -> Client Payloads
export interface RoomJoinedPayload {
  playerToken: string;
  playerId: string;
  room: GameState;
  logs: GameLogEntry[];
}

export interface ErrorPayload {
  message: string;
  code?: string;
}

export interface ActionAnimationPayload {
  playerId: string;
  action: BetActionType;
  amount?: number;
  fromSeatIndex: number;
}

export interface WinnerAnimationPayload {
  winners: WinnerResult[];
  potAmount: number;
}
