
export type Voucher = {
  brand: string
  category: string
  imageUrl: string
  title: string
  description: string
  distance: number
}

export type Transaction = {
  brand: string
  createdAt: Date
  type: 'income' | 'outcome'
  amount: number
  state: 'pending' | 'completed' | 'redeems'
}
