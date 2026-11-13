"use client";

import { useState, type FormEvent } from "react";

/**
 * The original form posts to an unconfigured provider (empty API key), so this
 * replica keeps the UI and just acknowledges the submission locally.
 */
export function NewsletterForm() {
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
    event.currentTarget.reset();
  };

  return (
    <form onSubmit={onSubmit} className="relative flex w-full flex-row gap-2.5 text-white">
      <label htmlFor="newsletter-email" className="sr-only">
        Email address
      </label>
      <input
        id="newsletter-email"
        type="email"
        name="email"
        required
        placeholder="name@email.com"
        autoComplete="email"
        autoCapitalize="off"
        spellCheck={false}
        onChange={() => setSubmitted(false)}
        className="h-[49px] w-full min-w-0 appearance-none rounded-lg border-none bg-input p-[15px] font-[sans-serif] text-base text-black outline-none placeholder:text-[darkgray] focus-visible:ring-2 focus-visible:ring-brand"
      />
      <button
        type="submit"
        className="h-[49px] shrink-0 cursor-pointer appearance-none rounded-lg border-none bg-brand p-[15px] font-[sans-serif] text-base leading-[19px] text-white outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
      >
        {submitted ? "Thanks!" : "Subscribe"}
      </button>
    </form>
  );
}
