export default function (number){
  return number.toFixed().replace(/(\d)(?=(\d{3})+$)/g, '$1,');
}