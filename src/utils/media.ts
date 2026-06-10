const API_ORIGIN = "http://119.15.153.74/api";

export const resolveMediaUrl = (value?: string | null) => {
  if (!value) return "";
  if (value.startsWith("http://") || value.startsWith("https://")) return value;

  const normalizedPath = value.startsWith("/") ? value : `/${value}`;
  return `${API_ORIGIN}${normalizedPath}`.replace("/api/v1", "");
};