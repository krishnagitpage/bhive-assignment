export function cn(...classNames: string[]) {
  return classNames
    .flat()
    .filter(Boolean)
    .map((cls) => {
      if (typeof cls === "object") {
        return Object.keys(cls)
          .filter((key) => cls[key])
          .join(" ");
      }
      return cls;
    })
    .join(" ")
    .trim();
}
