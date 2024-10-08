"use client";
import MeetingTypeList from "@/components/MeetingTypeList";
import { useState, useEffect } from "react";

const Home = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formattedTime = time.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit", // Include seconds
  });

  const date = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(
    time
  );

  return (
    <section className="flex size-full flex-col gap-5 text-white ">
      <div className="h-[303px] w-full rounded-[20px] bg-hero bg-cover">
        <div className="flex h-full flex-col justify-between max-md:px-5 max-md:py-8 lg:p-11">
          <div className="flex flex-col gap-2">
            <h1 className="text-4xl font-extrabold lg:text-7xl">
              {formattedTime}
            </h1>
            <p className="text-lg font-medium text-sky-1 lg:text-2xl">{date}</p>
          </div>
          <h2 className="glassmorphism max-w-[273px] rounded py-2 text-center text-base font-normal">
            Click the cards to explore and join meetings
          </h2>
        </div>
      </div>
      <MeetingTypeList />
    </section>
  );
};

export default Home;
