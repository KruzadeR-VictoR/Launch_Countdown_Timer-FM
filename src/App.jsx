import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [Days, setDays] = useState(0);
  const [Hours, setHours] = useState(0);
  const [Minutes, setMinutes] = useState(0);
  const [Seconds, setSeconds] = useState(0);
  const [isFinished, setisFinished] = useState(false);
  

  const countFunct = (date) => {
    const countdown = setInterval(() => {
      let endDate = date;
      const now = new Date().getTime();
      let distance = endDate - now;

      let days = Math.floor(distance / (24 * 60 * 60 * 1000));
      let hours = Math.floor(
        (distance % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000)
      );
      let minutes = Math.floor((distance % (60 * 60 * 1000)) / (60 * 1000));
      let seconds = Math.floor((distance % (60 * 1000)) / 1000);

      if (distance <= 0) {
        setisFinished(true);
        clearInterval(countdown);
      } else {
        setDays(days);
        setHours(hours);
        setMinutes(minutes);
        setSeconds(seconds);
      }
    }, 1000);
  };

  useEffect(() => {
    //| if countdown is finished then it resets the target date with 9days time (which is 777600000 in miliseconds)
    if (isFinished) {
      const newDate = new Date().getTime() + 777600000;
      countFunct(newDate);
    } else {
      countFunct(new Date("2023-04-12 14:54:00").getTime());
    }
  }, [isFinished]);

  const style = {
    Timer: "Timer min-h-screen flex flex-col",
    header:
      " text-White text-center text-[1.2rem] font-[700] tracking-[7px] pt-[8rem]",
    countdown: "mt-[4rem] flex justify-center gap-5 md:gap-8 px-5",
    card: "card w-[4.5rem] md:w-[8rem] h-[4rem] md:h-[7.5rem] px-2 flex justify-center items-center rounded-[5px]",
    cardText: "text-Softred text-[2rem] md:text-[3.5rem] font-[700]",
    unit: "absolute -bottom-[2rem] md:-bottom-[2.5rem] w-full text-center text-Grayishblue text-[.5rem] md:text-[.8rem] tracking-[4px] md:tracking-[7px] uppercase",
    // footer
    footer:
      "absolute bottom-[3rem] w-full flex justify-center items-center gap-8 p-3",
  };

  return (
    <>
      <main className={style.Timer}>
        <h1 className={style.header}>WE'RE LAUNCHING SOON</h1>
        <div className={style.countdown}>
          <div className={style.card}>
            <h1 className={style.cardText}>{Days >= 10 ? Days : `0${Days}`}</h1>
            <h2 className={style.unit}>DAYS</h2>
          </div>
          <div className={style.card}>
            <h1 className={style.cardText}>
              {Hours >= 10 ? Hours : `0${Hours}`}
            </h1>
            <h2 className={style.unit}>Hours</h2>
          </div>
          <div className={style.card}>
            <h1 className={style.cardText}>
              {Minutes >= 10 ? Minutes : `0${Minutes}`}
            </h1>
            <h2 className={style.unit}>MINUTES</h2>
          </div>
          <div className={style.card}>
            <h1 className={style.cardText}>
              {Seconds >= 10 ? Seconds : `0${Seconds}`}
            </h1>
            <h2 className={style.unit}>SECONDS</h2>
          </div>
        </div>
        <div className={style.footer}>
          <svg
            className="fb cursor-pointer socialIcon"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
          >
            <path
              fill="#8385A9"
              d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.323-.593 1.323-1.325V1.325C24 .593 23.407 0 22.675 0z"
            />
          </svg>
          <svg
            className="insta cursor-pointer socialIcon"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
          >
            <path
              fill="#8385A9"
              d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 01.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z"
            />
          </svg>
          <svg
            className="pinterest cursor-pointer socialIcon"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
          >
            <path
              fill="#8385A9"
              d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"
            />
          </svg>
        </div>
      </main>
    </>
  );
}

export default App;
