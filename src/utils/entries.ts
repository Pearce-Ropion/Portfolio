function forIn<T extends {}>(
  obj: T,
  callback: (key: keyof T, value: T[keyof T]) => void,
) {
  for (const key in obj) {
    if (!obj.hasOwnProperty(key)) continue;
    callback(key, obj[key]);
  }
}

export function keys<T extends {}>(obj: T) {
  const values: Array<keyof T> = [];

  forIn(obj, key => {
    values.push(key);
  });

  return values;
}

export function values<T extends {}>(obj: T) {
  const values: Array<T[keyof T]> = [];

  forIn(obj, (key, value) => {
    values.push(value);
  });

  return values;
}

export function entries<T extends {}>(obj: T) {
  const entries: Array<[keyof T, T[keyof T]]> = [];

  forIn(obj, (key, value) => {
    entries.push([key, value]);
  });

  return entries;
}

export function forEachKey<T extends {}>(
  obj: T,
  callback: (key: keyof T) => void,
) {
  forIn(obj, callback);
}

export function forEachValue<T extends {}>(
  obj: T,
  callback: (value: T[keyof T]) => void,
) {
  forIn(obj, (key, value) => callback(value));
}

export function forEachEntry<T extends {}>(
  obj: T,
  callback: (key: keyof T, value: T[keyof T]) => void,
) {
  forIn(obj, callback);
}
