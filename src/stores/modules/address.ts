export const useAddressStore = defineStore('address', () => {
  const selectedAddress = ref<AddressItem>()

  const changeSelectedAddress = (val: AddressItem) => {
    selectedAddress.value = val
    console.log(selectedAddress.value)
  }

  return { selectedAddress, changeSelectedAddress }
})
