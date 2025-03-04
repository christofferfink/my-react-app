  // Define the Card type
 
export enum bjAction{
  HIT = 'HIT',
  STAND = 'STAND',
}
  
export type Card = {
    rank: '0' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | 'J' | 'Q' | 'K' | 'A';
    suit: 'Hearts' | 'Tiles' | 'Pikes' | 'Clovers'| 'Blank';
};
type Coins = {
    color: string;
    value: number;
  };
  // Define props that Card component will receive

export type BlackjackSimpleState = {
  dealerCards: Card[]
  playerCards: Card[]
  placedBet: number


}
 

export type BlackJackState = {
    dealerCards: Card[]
    playerCards: Card[]
    
    
    
    placedBet: number
    notPlacedBet: number
    blackJackGameResult: String | null

    coins: Coins[]
    message: string
    isGameStarted: boolean
    
    roundTimer: number
     
    blackjackEntity: any
    gameID: number | null

    testMode: boolean
    round: number
    roundStarted: boolean
    hit: boolean
    playerStand: boolean
    dealerStand: boolean
    dealerScore: number
    playerScore: number
    playerBust: boolean
    dealerBust: boolean
    hasWon: boolean
    hasLost: boolean
    isDraw: boolean
    timeBetweenCardsDelt: number
    timestamp: number


   
  
  }
  export type BlackJackAction =
  | { type: 'START_GAME'; payload: { error: String } }
  |  { type: 'PLACE_BET'; payload: number }
  | { type: 'DECREMENT_TIMER' }
  | { type: 'STOP_ROUND' }
  | { type: 'DEAL_CARD_TO_PLAYER'; payload: Card }
  | { type: 'DEAL_CARD_TO_DEALER'; payload: Card  }
  | { type: 'START_ROUND' }
    | { type: 'HIT' }
    | { type: 'PLAYER_STAND' }
    | { type: 'DEALER_STAND' }
    | { type: 'UPDATE_PLAYER_SCORE'; payload: number }
    | { type: 'UPDATE_DEALER_SCORE'; payload: number }
    | { type: 'PLAYER_BUST' }
    | { type: 'DEALER_BUST' }
    | { type: 'PLAYER_WINS' }
    | { type: 'DEALER_WINS' }
    | { type: 'DRAW' }
    | {type: 'SET_DEALER_CARDS'; payload: Card[]}
    | {type: 'DECREMENT_TIME_BETWEEN_CARDS'}
    | { type: 'RESET_TIME_BETWEEN_CARDS'}
    | { type: 'RESET_GAME'; }
    | { type: 'SET_NOT_PLACED_BET'; payload: number }
    | { type: 'SET_BLACKJACK_ENTITY'; payload: any }
    | { type: 'SET_GAME_ENTITY'; payload: any }
    | { type: 'INIT_GAME'; payload: any }
    | { type: 'UPDATE_GAME_STATE'; payload: any }
    | {type: 'RESET_GAME_ACTION'}
 