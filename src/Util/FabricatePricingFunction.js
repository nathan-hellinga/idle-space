export default function fabricatePricingFunction(fabItem, count){
  return Math.floor(fabItem.basePrice * Math.pow(fabItem.costMultiFactor, count))
}