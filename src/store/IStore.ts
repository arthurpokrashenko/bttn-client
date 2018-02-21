export interface IStore {
  hallOfFame: {
    cashRegisterNumber?: number;
    isCashRegisterNumberModalOpen: boolean;
    lastWinner?: {
      cashRegister: number;
      eventId: string;
    };
  };
  connection: {
    isConnected: boolean;
  };
}
