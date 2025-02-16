const DEFAULT_HEADER = { "Content-Type": "application/json" };

export async function FetchWrapper(URL, options) {
  const resolve = await fetch(URL, { ...options, headers: DEFAULT_HEADER });
  if (!resolve.ok) {
    return console.log(resolve);
  } else {
    return resolve.json();
  }
}
