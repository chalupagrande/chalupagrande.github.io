export function random(one, two) {
  let val = Math.random()
  let result
  if (one !== undefined && two === undefined) result = val * one
  if (one !== undefined && two !== undefined) {
    result = val * Math.abs(two - one) + one
  }
  return result
}
