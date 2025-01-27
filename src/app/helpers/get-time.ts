import { DateTime } from "luxon";

export function getTimeFromTimezone(
  timezone: string,
  format: "12-hour" | "24-hour"
): string {
  const dateTime = DateTime.now().setZone(timezone);

  if (format === "12-hour") {
    return dateTime.toFormat("hh:mm:ss a");
  } else {
    return dateTime.toFormat("HH:mm:ss");
  }
}
