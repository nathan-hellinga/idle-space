export default function(fabItem, count){
  return Math.floor(fabItem.basePrice * Math.pow(fabItem.costMultiFactor, count))
}