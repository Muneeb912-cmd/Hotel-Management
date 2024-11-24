export const validateField = (key, value) => {
  if (typeof value !== "string") {
    if (value === undefined || value === null) {
      return `${key} is required`;
    }
    return null;
  }

  if (!value.trim()) {
    return `${key} is required`;
  }
  if (key === "mapLocation" && !value) {
    return "Please select a location on the map";
  }
  if (
    ["totalRooms", "floors", "startingRent", "landArea"].includes(key) &&
    isNaN(value)
  ) {
    return `${key} must be a number`;
  }

  return null;
};
