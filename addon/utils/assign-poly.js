export default function assignPoly (original) {
  for (let i = 1; i < arguments.length; i++) {
    let arg = arguments[i];
    if (!arg) { continue; }

    let updates = Object.keys(arg);

    for (let i = 0; i < updates.length; i++) {
      let prop = updates[i];
      original[prop] = arg[prop];
    }
  }

  return original;
}