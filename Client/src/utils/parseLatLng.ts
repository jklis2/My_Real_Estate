export function parseLatLng(input: string) {
  const regex = /(\d+)°\s*(\d+)'\s*(\d+(?:\.\d+)?)''\s*([NSEW])/g;
  const matches = regex.exec(input);
  if (!matches) {
    return null;
  }

  const degrees = parseFloat(matches[1]);
  const minutes = parseFloat(matches[2]);
  const seconds = parseFloat(matches[3]);
  const direction = matches[4];

  let decimal = degrees + minutes / 60 + seconds / 3600;
  if (direction === "S" || direction === "W") {
    decimal = -decimal;
  }

  return +decimal.toFixed(2);
}
