import { DateTime } from "luxon";
import { useEffect, useState } from "react";

const MainCard = () => {
  const [timeLeft, setTimeLeft] = useState({
    months: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = DateTime.fromISO("2025-08-13T20:30:00", {
      zone: "America/Sao_Paulo",
    });

    const updateCountdown = () => {
      const now = DateTime.now().setZone("America/Sao_Paulo");
      const diff = targetDate
        .diff(now, ["months", "days", "hours", "minutes", "seconds"])
        .toObject();

      setTimeLeft({
        months: Math.floor(diff.months || 0),
        days: Math.floor(diff.days || 0),
        hours: Math.floor(diff.hours || 0),
        minutes: Math.floor(diff.minutes || 0),
        seconds: Math.floor(diff.seconds || 0),
      });
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="backdrop-blur-md bg-black/50 border border-white/20 rounded-xl shadow-lg p-4 sm:p-6 w-full max-w-4xl text-white mx-auto overflow-hidden">
      {/* Title */}
      <h2 className="text-center text-lg sm:text-xl font-semibold mb-4">
        <span className="text-white">LOCAL DO </span>
        <span className="text-yellow-400">EVENTO</span>
      </h2>

      {/* Map */}
      <div className="w-full h-100 mb-6 overflow-hidden rounded-md">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14632.529748103274!2d-46.6868847!3d-23.5277386!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5803b6a863d5%3A0x55b43bfc3a4cde14!2sEspa%C3%A7o%20Unimed!5e0!3m2!1spt-BR!2sbr!4v1747785181896!5m2!1spt-BR!2sbr"
          width="100%"
          height="100%"
          className="rounded-md"
          style={{ border: 0 }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      {/* Subtitle */}
      <h3 className="text-center text-base sm:text-lg font-semibold mb-3">
        TEMPO RESTANTE ATÉ O <span className="text-yellow-400">SHOW</span>
      </h3>

      {/* Countdown */}
      <div className="flex justify-center flex-wrap text-center gap-y-2 text-xs sm:text-sm font-medium">
        {[
          ["Meses", timeLeft.months],
          ["Dias", timeLeft.days],
          ["Horas", timeLeft.hours],
          ["Minutos", timeLeft.minutes],
          ["Segundos", timeLeft.seconds],
        ].map(([label, value]) => (
          <div key={label} className=" min-w-[100px]">
            <div className="text-lg sm:text-xl font-bold">{value}</div>
            <div>{label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MainCard;
