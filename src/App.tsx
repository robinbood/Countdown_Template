import { Temporal } from "@js-temporal/polyfill";
import "./App.css";
import { useEffect, useState } from "react";

const App = () => {
  const [now, setNow] = useState(Temporal.Now.instant().toLocaleString());
  const [name, setName] = useState<string>("diddy party");
  const [eventDate, setEventDate] = useState<string>(now);
  const [timer, setTimer] = useState<string>("");
  const [timeleft, setTimeLeft] = useState<string>("");
  useEffect(() => {
  const interval = setInterval(() => {
    if (timer) {
      try {
        const now = Temporal.Now.instant();
        const target = Temporal.Instant.from(timer + "T00:00:00Z");
        const diff = target.since(now);

        // Convert instants to plain dates for duration calculations
        const nowDate = now.toZonedDateTimeISO("UTC").toPlainDate();
        const targetDate = target.toZonedDateTimeISO("UTC").toPlainDate();

        // Calculate duration components
        const duration = targetDate.since(nowDate, { largestUnit: 'years' });
        const years = duration.years;
        const months = duration.months;
        const days = duration.days;
        const hours = diff.total('hours') % 24;

        setTimeLeft(`${years} years ${months} months ${days} days ${hours} hour(s)`);
      } catch (error : unknown) {
        console.error("Error calculating time left:", error instanceof Error ? error.message : "Unknown error");
        setTimeLeft("Invalid timer");
      }
    }
  }, 1000);

  return () => clearInterval(interval);
}, [timer]);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setNow(Temporal.Now.instant().toLocaleString());
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  useEffect(() => {
    const dooom = window.localStorage.getItem("event");
    const dooom2 = window.localStorage.getItem("event2");
    setTimer(dooom ?? "");
    setName(dooom2 ?? "");
  }, []);
  const submit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    window.localStorage.setItem("event", eventDate);
    window.localStorage.setItem("event2", name);
  };

  return (
    <>
      <blockquote>
        <h3>
          <u>{now}</u>
        </h3>
      </blockquote>
      <div>
        <form onSubmit={submit}>
          <input type="text" onChange={(e) => setName(e.target.value)} />
          <input type="date" onChange={(e) => setEventDate(e.target.value)} />
        </form>
      </div>
      <div id="svg">
        <h1>{timer}</h1>
      </div>
      <br />
      <div>
        <h1>{name}</h1>
      </div>
      <div>{timeleft}</div>
    </>
  );
};

export default App;
