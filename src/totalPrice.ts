interface ITotalPriceProps {
  price: number
  discount: number
  isInstallment: boolean
  months: number
}

const totalPrice = ({ price, discount, isInstallment, months }: ITotalPriceProps): number => {
  const priceWithoutInstallment = (100 - discount) * 0.01 * price

  if (isInstallment) {
    return priceWithoutInstallment / months
  }

  return priceWithoutInstallment
}

console.log('With installment', totalPrice({ price: 100000, discount: 25, isInstallment: true, months: 12 }))
console.log('Without installment', totalPrice({ price: 100000, discount: 25, isInstallment: false, months: 12 }))