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

export function merge(f, a, b) {
  let unique = [];
  return Object.keys(a).concat(Object.keys(b)).reduce(
    (acc, k) => {
      if (unique.indexOf(k) == -1) {
        unique.push(k);
        // this is a fusion of unique and the merge algorithm.
        if (a[k] && b[k]) {
          acc[k] = f(k, a[k], b[k]);
        } else {
          if (a[k]) acc[k] = a[k];
          else acc[k] = b[k];
        }
      }
      return acc;
    },
    {}
  );
}
