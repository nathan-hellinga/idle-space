export default function(base, count){
  return Math.floor((base / 10) * Math.pow(count, 1.5) + base)
}