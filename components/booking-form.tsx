"use client";

import { FormEvent, useState } from "react";
import { ArrowUpRight } from "@/components/icons";

export function BookingForm() {
  const [status, setStatus] = useState("");

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const required = ["name", "email", "event", "city", "date"];
    if (required.some((field) => !String(form.get(field) ?? "").trim())) {
      setStatus("Please complete every required field.");
      return;
    }

    const subject = encodeURIComponent(`Booking enquiry — ${form.get("event")} — ${form.get("city")}`);
    const body = encodeURIComponent([
      `Name: ${form.get("name")}`,
      `Email: ${form.get("email")}`,
      `Company: ${form.get("company") || "—"}`,
      `Event: ${form.get("event")}`,
      `City / country: ${form.get("city")}`,
      `Date: ${form.get("date")}`,
      `Capacity: ${form.get("capacity") || "—"}`,
      `Budget: ${form.get("budget") || "—"}`,
      "",
      String(form.get("message") || "No additional notes."),
    ].join("\n"));

    setStatus("Your email app is opening with the booking brief prepared.");
    window.location.href = `mailto:dcrmilda@gmail.com?subject=${subject}&body=${body}`;
  }

  return (
    <form className="booking-form" onSubmit={submit} noValidate>
      <div className="form-grid">
        <label><span>Your name *</span><input name="name" autoComplete="name" required placeholder="Full name" /></label>
        <label><span>Email *</span><input name="email" type="email" autoComplete="email" required placeholder="name@company.com" /></label>
        <label><span>Company / promoter</span><input name="company" autoComplete="organization" placeholder="Organization" /></label>
        <label><span>Event type *</span><select name="event" required defaultValue=""><option value="" disabled>Select one</option><option>Club</option><option>Festival</option><option>Fashion show</option><option>Private event</option><option>Brand event</option><option>Other</option></select></label>
        <label><span>City / country *</span><input name="city" required placeholder="Berlin, Germany" /></label>
        <label><span>Event date *</span><input name="date" type="date" required /></label>
        <label><span>Venue capacity</span><input name="capacity" inputMode="numeric" placeholder="1,200" /></label>
        <label><span>Budget range</span><input name="budget" placeholder="Currency + range" /></label>
      </div>
      <label className="form-message"><span>Tell us about the room</span><textarea name="message" rows={5} placeholder="Venue, lineup, set time, audience, and anything we should know." /></label>
      <div className="form-submit-row">
        <p role="status" aria-live="polite">{status || "Replies are typically handled by the artist team."}</p>
        <button className="button button-light" type="submit">Prepare enquiry <ArrowUpRight /></button>
      </div>
    </form>
  );
}
