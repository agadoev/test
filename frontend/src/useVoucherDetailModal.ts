import { reactive } from 'vue'
import { Voucher } from './types'

const voucherDetailModal = reactive<{
  selected: Voucher | undefined,
  isOpened: boolean
}>({
  selected: undefined,
  isOpened: false
})

const useVoucherDetailModal = () => {
  const open = (voucher: Voucher) => {
    voucherDetailModal.selected = voucher
    voucherDetailModal.isOpened = true
  }

  return {
    open,
    voucherDetailModal
  } 
}

export {
    useVoucherDetailModal
}