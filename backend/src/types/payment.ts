export interface PaymentMethod {
  id: string;
  status: 'active' | 'failed';
  last4: string;
  brand: string;
}

export interface PaymentIntent {
  id: string;
  amount: number;
  status: string;
  client_secret: string;
}

export interface CallPayment {
  callId: string;
  userId: string;
  creatorId: string;
  amount: number;
  status: 'pending' | 'completed' | 'failed';
  createdAt: string;
  completedAt?: string;
}