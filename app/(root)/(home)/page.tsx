import MeetingTypeList from "@/components/MeetingTypeList";
import React from "react";

const Home = () => {
  const time = new Date().toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
  });
  const date = new Intl.DateTimeFormat("en-US", {
    dateStyle: "full",
  }).format(new Date());
  return (
    <>
      <div className=" p-2 m-4">
        <section className="text-white border rounded-lg glassmorphism px-4">
          <div className="">
            <div className="my-2">Upcoming Meeting</div>
          </div>
          <hr />
          <div className="my-4">
            <h1 className="text-3xl">{time}</h1>
            <p className="text-2xl">{date}</p>
          </div>
        </section>

        <MeetingTypeList />
      </div>
    </>
  );
};

export default Home;
