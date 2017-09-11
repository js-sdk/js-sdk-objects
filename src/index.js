export function update(f, k, o) {
  if (!o[k]) return o;
  o[k] = f(o[k]);
  return o;
}
