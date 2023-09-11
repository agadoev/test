import { Transaction, Voucher } from "./types"
import { faker } from '@faker-js/faker'

console.log(faker.color.rgb())

const createTransaction = (): Transaction => ({
  brand: faker.company.name(),
  createdAt: faker.date.past(),
  type: faker.helpers.arrayElement(['income', 'outcome']),
  amount: faker.number.int({ min: 1, max: 1000 }),
  state: faker.helpers.arrayElement(['completed', 'redeems', 'pending'])
})

const createVoucher = (): Voucher => ({
  brand: faker.company.name(),
  category: faker.commerce.product(),
  imageUrl: faker.image.urlPicsumPhotos(),
  title: faker.lorem.words({ min: 2, max: 4 }),
  description: faker.lorem.lines(2),
  distance: faker.number.int({ min: 1, max: 1000 })
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