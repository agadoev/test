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
  const openVoucherDetail = (voucher: Voucher) => {
    voucherDetailModal.selected = voucher
    voucherDetailModal.isOpened = true
  }

  return {
    openVoucherDetail,
    voucherDetailModal
  } 
}

export {
    useVoucherDetailModal
}