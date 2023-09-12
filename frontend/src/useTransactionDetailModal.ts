import { reactive } from "vue"
import { Transaction } from "./types"

const transactionDetailModal = reactive<{
  selected: Transaction | undefined,
  isOpened: boolean
}>({
  selected: undefined,
  isOpened: false
})

const useTransactionDetailModal = () => {
  const openTransactionDetail = (voucher: Transaction) => {
    transactionDetailModal.selected = voucher
    transactionDetailModal.isOpened = true
  }

  const closeTransactionDetail = () => {
    transactionDetailModal.selected = undefined
    transactionDetailModal.isOpened = false
  }

  return {
    openTransactionDetail,
    closeTransactionDetail,
    transactionDetailModal
  }
}

export {
  useTransactionDetailModal
}
