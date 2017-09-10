export function update(f, k, o) {
  if (!o[k]) return o;
  o[k] = f(o[k]);
  return o;
}

export function updateWithKey(f, k, o) {
  if (!o[k]) return o;
  o[k] = f(k, o[k]);
  return o;
}
