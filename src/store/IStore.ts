export interface IStore {
  hallOfFame: {
    isOptionsModalOpen: boolean;
    lastWinner?: {
      cashRegister: number;
      eventId: string;
    };
    winnersCountToday: number;
  };
  connection: {
    isConnected: boolean;
  };
}
