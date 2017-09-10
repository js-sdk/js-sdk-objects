# js-sdk-objects

Simple objects utilities.

## library

```ts
update(f : Any -> Any, k : String, o : Object) -> Object

// Update the value of key 'k' if present.


updateWithKey(f : (String, Any) -> Any, k : String, o : Object) -> Object

// Update the value of key 'k' if present.
// Function 'f' will receive the pair (k, v) and must return the new value of 'k'.
```

## license

See `license.md` or visit [Unlicense](http://unlicense.org).
