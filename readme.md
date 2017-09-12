# js-sdk-objects

Simple objects utilities.

## library

```ts
$ update(f : Any -> Any, k : String, o : Object) -> Object

// Update the value of key 'k' if present.


$ updateWithKey(f : (k : String, v : Any) -> Any, k : String, o : Object) -> Object

// Update the value of key 'k' if present.
// Function 'f' will receive the pair (k, v) and must return the new value of 'k'.

$ merge(f : (k : String, vA : Any, vB : Any) -> Any, a : Object, b : Object) -> Object

// Merge 2 objects and use a function if 'k' key is present in both objects.
// NOTE: to make it recursive, just check if the values that the function 
// receives are Objects and call merge on them.
```

## license

See `license.md` or visit [Unlicense](http://unlicense.org).
