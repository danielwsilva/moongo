export type BalanceResponse = {
  balance: number;
  pending_withdraw: number;
};

export type CashWithdrawalRequest = {
  withdrawal: string;
};

export type ExtractResponse = {
  type: string;
  sub_type: string;
  value: number;
  created_at: string;
};
