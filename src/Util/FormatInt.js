export default function formatInt(number){
  return number.toFixed().replace(/(\d)(?=(\d{3})+$)/g, '$1,');
}