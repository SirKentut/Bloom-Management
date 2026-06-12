"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { BloomLogo } from "./BloomLogo";
import { Arrow } from "./Arrow";

/* ------------------------------------------------------------------ config */

const NOTION_CALENDAR_URL =
  "https://calendar.notion.so/meet/pharbin/ls7s3a3z";

const VISUAL_IMG =
  "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1400&q=80";
const VISUAL_FALLBACKS = [
  "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1400&q=80",
  "https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=1400&q=80",
];

type StepDef = {
  id: string;
  kind: "choice" | "text" | "email" | "tel" | "number" | "schedule";
  question: string;
  help?: string;
  options?: string[];
  placeholder?: string;
};

const STEPS: StepDef[] = [
  {
    id: "service",
    kind: "choice",
    question: "What do you need help with?",
    help: "Pick the area where Bloom can do the most for you.",
    options: ["Cleaning", "Management", "Both"],
  },
  {
    id: "city",
    kind: "choice",
    question: "Which city is your property in?",
    help: "We currently operate in these markets — more on the way.",
    options: ["Los Angeles", "San Francisco", "Detroit", "Other"],
  },
  {
    id: "properties",
    kind: "number",
    question: "How many properties do you have?",
    help: "A rough number is perfectly fine.",
    placeholder: "e.g. 3",
  },
  {
    id: "name",
    kind: "text",
    question: "What's your name?",
    placeholder: "Jane Doe",
  },
  {
    id: "email",
    kind: "email",
    question: "What's the best email to reach you?",
    placeholder: "you@email.com",
  },
  {
    id: "phone",
    kind: "tel",
    question: "And a phone number?",
    help: "Only used to confirm your demo — no spam, ever.",
    placeholder: "(555) 123-4567",
  },
  {
    id: "schedule",
    kind: "schedule",
    question: "Last step — pick a time.",
    help: "Grab whatever works on the calendar below and you're booked.",
  },
];

const TOTAL = STEPS.length;

/* ------------------------------------------------------------------ context */

type DemoModalContextValue = { open: () => void; close: () => void };
const DemoModalContext = createContext<DemoModalContextValue | null>(null);

export function useDemoModal() {
  const ctx = useContext(DemoModalContext);
  if (!ctx) {
    throw new Error("useDemoModal must be used within <DemoModalProvider>");
  }
  return ctx;
}

export function DemoModalProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);

  const value = useMemo(() => ({ open, close }), [open, close]);

  return (
    <DemoModalContext.Provider value={value}>
      {children}
      {isOpen && <DemoModal onClose={close} />}
    </DemoModalContext.Provider>
  );
}

/* ------------------------------------------------------------------ button */

type ButtonProps = {
  className?: string;
  children: React.ReactNode;
};

export function BookDemoButton({ className, children }: ButtonProps) {
  const { open } = useDemoModal();
  return (
    <button type="button" className={className} onClick={open}>
      {children}
    </button>
  );
}

/* ------------------------------------------------------------------ modal */

function DemoModal({ onClose }: { onClose: () => void }) {
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const inputRef = useRef<HTMLInputElement>(null);

  const step = STEPS[index];
  const value = answers[step.id] ?? "";
  const isLast = index === TOTAL - 1;

  const setAnswer = useCallback(
    (id: string, val: string) => setAnswers((a) => ({ ...a, [id]: val })),
    []
  );

  const canAdvance = useCallback(() => {
    if (step.kind === "choice" || step.kind === "schedule") return true;
    const v = (answers[step.id] ?? "").trim();
    if (!v) return false;
    if (step.kind === "email") return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
    if (step.kind === "number") return Number(v) > 0;
    return true;
  }, [answers, step]);

  const goNext = useCallback(() => {
    if (!canAdvance()) return;
    setIndex((i) => Math.min(i + 1, TOTAL - 1));
  }, [canAdvance]);

  const goBack = useCallback(() => setIndex((i) => Math.max(i - 1, 0)), []);

  const choose = useCallback(
    (id: string, val: string) => {
      setAnswer(id, val);
      window.setTimeout(() => setIndex((i) => Math.min(i + 1, TOTAL - 1)), 200);
    },
    [setAnswer]
  );

  /* lock scroll + escape to close */
  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
        return;
      }
      // On a choice step, let A–Z keys pick the matching option.
      if (step.kind === "choice" && step.options && e.key.length === 1) {
        if (e.metaKey || e.ctrlKey || e.altKey) return;
        const i = e.key.toLowerCase().charCodeAt(0) - 97; // "a" -> 0
        if (i >= 0 && i < step.options.length) {
          e.preventDefault();
          choose(step.id, step.options[i]);
        }
      }
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [onClose, step, choose]);

  /* focus the input when its step shows */
  useEffect(() => {
    if (["text", "email", "tel", "number"].includes(step.kind)) {
      inputRef.current?.focus();
    }
  }, [step.kind, index]);

  const progress = Math.round(((index + (isLast ? 1 : 0)) / TOTAL) * 100);

  return (
    <div
      className="demo-overlay"
      role="dialog"
      aria-modal="true"
      aria-label="Book a demo"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="demo-card">
        <button
          type="button"
          className="demo-close"
          onClick={onClose}
          aria-label="Close"
        >
          <svg viewBox="0 0 14 14" width="14" height="14" aria-hidden="true">
            <path
              d="M1 1l12 12M13 1L1 13"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
            />
          </svg>
        </button>

        {/* LEFT — logo + full card image */}
        <div className="demo-visual" aria-hidden="true">
          <div className="demo-brand">
            <BloomLogo className="demo-brand-logo" />
            <span>bloomcleaning</span>
          </div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={VISUAL_IMG}
            data-fallbacks={JSON.stringify(VISUAL_FALLBACKS)}
            alt=""
            onError={(e) => {
              const img = e.currentTarget as HTMLImageElement;
              try {
                const f = JSON.parse(img.dataset.fallbacks || "[]") as string[];
                const next = f.shift();
                if (next) {
                  img.src = next;
                  img.dataset.fallbacks = JSON.stringify(f);
                }
              } catch {
                /* ignore */
              }
            }}
          />
        </div>

        {/* RIGHT — intake */}
        <div className="demo-panel">
          <div className="demo-progress" aria-hidden="true">
            <div className="demo-progress-bar" style={{ width: `${progress}%` }} />
          </div>

          {step.kind === "schedule" ? (
            <div className="demo-step demo-schedule">
              <span className="demo-step-num">
                Step {index + 1} of {TOTAL}
              </span>
              <h2 className="demo-q">{step.question}</h2>
              {step.help && <p className="demo-help">{step.help}</p>}
              <iframe
                className="demo-iframe"
                src={NOTION_CALENDAR_URL}
                title="Schedule your demo"
              />
              <a
                className="demo-schedule-link"
                href={NOTION_CALENDAR_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                Trouble loading? Open the scheduler
                <Arrow />
              </a>
            </div>
          ) : (
            <form
              className="demo-step"
              onSubmit={(e) => {
                e.preventDefault();
                goNext();
              }}
            >
              <span className="demo-step-num">
                Step {index + 1} of {TOTAL}
              </span>
              <h2 className="demo-q">{step.question}</h2>
              {step.help && <p className="demo-help">{step.help}</p>}

              {step.kind === "choice" ? (
                <div className="demo-options">
                  {step.options!.map((opt, i) => {
                    const selected = value === opt;
                    return (
                      <button
                        type="button"
                        key={opt}
                        className={`demo-option${selected ? " selected" : ""}`}
                        onClick={() => choose(step.id, opt)}
                      >
                        <span className="demo-option-key">
                          {String.fromCharCode(65 + i)}
                        </span>
                        <span>{opt}</span>
                      </button>
                    );
                  })}
                </div>
              ) : (
                <input
                  ref={inputRef}
                  className="demo-input"
                  type={step.kind === "number" ? "number" : step.kind}
                  inputMode={
                    step.kind === "number"
                      ? "numeric"
                      : step.kind === "tel"
                      ? "tel"
                      : undefined
                  }
                  min={step.kind === "number" ? 1 : undefined}
                  placeholder={step.placeholder}
                  value={value}
                  onChange={(e) => setAnswer(step.id, e.target.value)}
                />
              )}

              {step.kind !== "choice" && (
                <button
                  type="submit"
                  className="btn btn-lg demo-next"
                  disabled={!canAdvance()}
                >
                  Continue
                  <Arrow />
                </button>
              )}
            </form>
          )}

          <div className="demo-nav">
            {index > 0 ? (
              <button type="button" className="demo-back" onClick={goBack}>
                ← Back
              </button>
            ) : (
              <span />
            )}
            <span className="demo-nav-hint">
              {step.kind === "choice"
                ? "Select an option"
                : step.kind === "schedule"
                ? "Almost there"
                : "Press Enter ↵"}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
