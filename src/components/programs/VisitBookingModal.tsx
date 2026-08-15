import { useState, type FormEvent } from "react";
import { X, Calendar, AlertCircle } from "lucide-react";
import { CONTACT_CONFIG } from "../../config/contact";

interface FieldProps {
  id: string;
  name?: string;
  label: string;
  placeholder: string;
  value: string;
  onChange: (e: any) => void;
  error?: string | undefined;
  type?: string;
}

export function Field({
  id,
  name,
  label,
  placeholder,
  value,
  onChange,
  error,
  type = "text",
}: FieldProps) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-sm font-bold text-ink">
        {label}
      </label>
      <input
        id={id}
        name={name || id}
        type={type}
        required
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`w-full rounded-2xl border bg-background px-4 py-3 text-base text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-all ${
          error ? "border-red-400 focus:border-red-400 focus:ring-red-200" : "border-border focus:border-primary"
        }`}
      />
      {error ? (
        <span className="mt-1.5 flex items-center gap-1.5 text-xs font-bold text-red-500 animate-slide-in">
          <AlertCircle className="size-3.5" />
          {error}
        </span>
      ) : null}
    </div>
  );
}

export function VisitBookingModal({ onClose, defaultProgram = "Nursery" }: { onClose: () => void; defaultProgram?: string }) {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    age: "",
    date: "",
    time: "10:00 AM",
    program: defaultProgram,
    message: ""
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const timeSlots = ["9:30 AM", "11:00 AM", "2:00 PM", "3:30 PM"];
  const todayStr = new Date().toISOString().split("T")[0];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validate = () => {
    const tempErrors: Record<string, string> = {};
    if (!form.name.trim()) tempErrors["name"] = "Parent name is required.";
    if (!form.age.trim()) tempErrors["age"] = "Child's age is required.";
    if (!form.date) tempErrors["date"] = "Please pick a date.";

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!form.email) {
      tempErrors["email"] = "Email is required.";
    } else if (!emailRegex.test(form.email)) {
      tempErrors["email"] = "Invalid email format.";
    }

    const phoneRegex = /^\+?[0-9\s\-]{8,15}$/;
    if (!form.phone) {
      tempErrors["phone"] = "Phone is required.";
    } else if (!phoneRegex.test(form.phone)) {
      tempErrors["phone"] = "Invalid phone number.";
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleBookingSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);
    if (CONTACT_CONFIG.FORM_ENDPOINT) {
      fetch(CONTACT_CONFIG.FORM_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      })
        .then((res) => {
          if (res.ok) {
            setSuccess(true);
          } else {
            alert("Oops! There was an issue submitting your request. Please try again.");
          }
        })
        .catch(() => {
          alert("Oops! There was an issue submitting your request. Please try again.");
        })
        .finally(() => {
          setLoading(false);
        });
    } else {
      setTimeout(() => {
        setLoading(false);
        setSuccess(true);
      }, 1200);
    }
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center bg-ink/30 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="w-full max-w-lg bg-background rounded-[2rem] border border-border/80 shadow-premium p-6 sm:p-8 animate-scale-in relative max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close booking modal"
          className="absolute right-5 top-5 grid size-10 place-items-center rounded-2xl bg-cream hover:bg-sunny/45 text-ink transition-colors"
        >
          <X className="size-5" />
        </button>

        {success ? (
          <div className="py-8 text-center animate-fade-in">
            <span className="mx-auto grid size-16 place-items-center rounded-full bg-mint text-emerald-800 text-3xl mb-5 shadow-soft">
              👍
            </span>
            <h3 className="text-2xl font-extrabold text-ink">Visit Scheduled!</h3>
            <p className="mt-3 text-muted-foreground text-sm max-w-sm mx-auto leading-relaxed">
              Thank you! Your tour visit is booked. We will send details to your email <span className="font-semibold">{form.email}</span> shortly.
            </p>
            <button
              onClick={onClose}
              className="mt-8 min-h-11 inline-flex items-center justify-center rounded-full bg-primary px-8 text-sm font-bold text-primary-foreground shadow-soft hover:-translate-y-0.5"
            >
              Okay, Great!
            </button>
          </div>
        ) : (
          <form onSubmit={handleBookingSubmit} noValidate>
            <h3 className="text-2xl font-extrabold text-ink flex items-center gap-2">
              <Calendar className="text-primary size-6" /> Book a Visit
            </h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Schedule a personal guided tour around the LittleSteps campus.
            </p>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="sm:col-span-2">
                <Field
                  id="name"
                  name="name"
                  label="Parent Name"
                  placeholder="Your full name"
                  value={form.name}
                  onChange={handleInputChange}
                  error={errors["name"]}
                />
              </div>

              <Field
                id="phone"
                name="phone"
                label="Phone Number"
                type="tel"
                placeholder={CONTACT_CONFIG.PHONE_NUMBER}
                value={form.phone}
                onChange={handleInputChange}
                error={errors["phone"]}
              />

              <Field
                id="email"
                name="email"
                label="Email Address"
                type="email"
                placeholder="name@domain.com"
                value={form.email}
                onChange={handleInputChange}
                error={errors["email"]}
              />

              <Field
                id="age"
                name="age"
                label="Child's Age"
                placeholder="e.g. 3 years"
                value={form.age}
                onChange={handleInputChange}
                error={errors["age"]}
              />

              <div>
                <label htmlFor="program" className="mb-2 block text-sm font-bold text-ink">
                  Program
                </label>
                <select
                  id="program"
                  name="program"
                  value={form.program}
                  onChange={handleInputChange}
                  className="w-full rounded-2xl border border-border bg-background px-4 py-3 text-sm text-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-ring transition-all"
                >
                  <option value="Play Group">Play Group</option>
                  <option value="Nursery">Nursery</option>
                  <option value="LKG">LKG</option>
                  <option value="UKG">UKG</option>
                </select>
              </div>

              <div>
                <label htmlFor="date" className="mb-2 block text-sm font-bold text-ink">
                  Preferred Date
                </label>
                <input
                  id="date"
                  name="date"
                  type="date"
                  required
                  min={todayStr}
                  value={form.date}
                  onChange={handleInputChange}
                  className={`w-full rounded-2xl border bg-background px-4 py-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-all ${
                    errors["date"] ? "border-red-400 focus:border-red-400 focus:ring-red-200" : "border-border focus:border-primary"
                  }`}
                />
                {errors["date"] ? (
                  <span className="mt-1 flex items-center gap-1 text-xs font-bold text-red-500">
                    {errors["date"]}
                  </span>
                ) : null}
              </div>

              <div>
                <label htmlFor="time" className="mb-2 block text-sm font-bold text-ink">
                  Preferred Time Slot
                </label>
                <select
                  id="time"
                  name="time"
                  value={form.time}
                  onChange={handleInputChange}
                  className="w-full rounded-2xl border border-border bg-background px-4 py-3 text-sm text-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-ring transition-all"
                >
                  {timeSlots.map((slot) => (
                    <option key={slot} value={slot}>
                      {slot}
                    </option>
                  ))}
                </select>
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="message" className="mb-2 block text-sm font-bold text-ink">
                  Message (Optional)
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={2}
                  value={form.message}
                  onChange={handleInputChange}
                  placeholder="Share any specific requests"
                  className="w-full rounded-2xl border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-ring transition-all"
                />
              </div>
            </div>

            <div className="mt-6 flex flex-col sm:flex-row sm:justify-end gap-3 border-t border-border/40 pt-5">
              <button
                type="button"
                onClick={onClose}
                className="min-h-11 rounded-full border border-border px-5 text-sm font-bold text-ink hover:bg-cream"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={loading}
                className="min-h-11 rounded-full bg-primary px-7 text-sm font-bold text-primary-foreground shadow-soft hover:-translate-y-0.5 transition-all disabled:opacity-75"
              >
                {loading ? "Scheduling..." : "Book Visit"}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
