import { Transaction, Voucher } from "./types"

const createTransaction = (): Transaction => ({
  brand: 'Darna',
  createdAt: new Date(),
  type: 'income',
  amount: 43,
  state: 'completed'
})

const createVoucher = (): Voucher => ({
  brand: 'Vapiano',
  category: 'Dining',
  imageUrl: 'https://loremflickr.com/320/240',
  title: 'Buy 1 Get 1 Free',
  description: 'Some long long long long long long long long long long long long description',
  distance: 100
})

const vouchers = new Array(10).fill(0).map(createVoucher)

const transactions = new Array(10).fill(0).map(createTransaction)

type Db = {
    vouchers: Voucher[]
    transactions: Transaction[]
}

const useDb = (): Db => {
    return {
        vouchers,
        transactions
    }
}

export {
    useDb
}