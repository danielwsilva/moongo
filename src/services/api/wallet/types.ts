export type BalanceResponse = {
  balance: number;
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
