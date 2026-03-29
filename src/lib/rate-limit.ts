const requestStore = new Map<string, number[]>();

export function isRateLimited(
  key: string,
  options: { windowMs: number; maxRequests: number },
) {
  const now = Date.now();
  const windowStart = now - options.windowMs;
  const timestamps = requestStore.get(key) ?? [];
  const validTimestamps = timestamps.filter((stamp) => stamp > windowStart);

  if (validTimestamps.length >= options.maxRequests) {
    requestStore.set(key, validTimestamps);
    return true;
  }

  validTimestamps.push(now);
  requestStore.set(key, validTimestamps);
  return false;
}
