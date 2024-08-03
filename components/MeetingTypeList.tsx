"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import MeetingModal from "./MeetingModal";
import { useUser } from "@clerk/nextjs";
import { useStreamVideoClient, Call } from "@stream-io/video-react-sdk";

const MeetingTypeList = () => {
  const [meetingState, setMeetingState] = useState<
    "isScheduleMeeting" | "isJoiningMeeting" | "isInstantMeeting" | undefined
  >();

  const { user } = useUser();
  const client = useStreamVideoClient();

  const [values, setValues] = useState({
    dateTime: new Date(),
    description: "",
    link: "",
  });

  const [callDetails, setCallDetails] = useState<Call>();
  const createMeeting = async () => {
    if (!client || !user) return;
    try {
      const id = crypto.randomUUID();
      const call = client.call("default", id);
      if (!call) throw new Error("Failed to create Call");
      const startsAt =
        values.dateTime.toISOString() || new Date(Date.now()).toISOString();
      const description = values.description || "Instant Meeting";
      await call.getOrCreate({
        data: {
          starts_at: startsAt,
          custom: {
            description,
          },
        },
      });
      setCallDetails(call);
      if (!values.description) {
        router.push(`/meeting/${call.id}`);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const router = useRouter();
  return (
    <section className="my-2">
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
        <div
          className="bg-yellow-200 rounded-md min-h-[260px] cursor-pointer"
          onClick={() => setMeetingState("isInstantMeeting")}
        >
          <h1 className="text-3xl">New Meeting</h1>
          <p>Start an Meeting</p>
        </div>
        <div
          className="bg-orange-300 rounded-md min-h-[260px] cursor-pointer"
          onClick={() => setMeetingState("isJoiningMeeting")}
        >
          <h1 className="text-3xl">Join Meeting</h1>
          <p>via Invitation Link</p>
        </div>
        <div
          className="bg-blue-400 rounded-md min-h-[260px] cursor-pointer"
          onClick={() => setMeetingState("isScheduleMeeting")}
        >
          <h1 className="text-3xl">Schedule Meeting</h1>
          <p>Create Invitation Link</p>
        </div>
        <div
          className="bg-purple-500 rounded-md min-h-[260px] cursor-pointer"
          onClick={() => router.push("/recordings")}
        >
          <h1 className="text-3xl">Recordings</h1>
          <p>View Recordings</p>
        </div>
      </div>
      <MeetingModal
        isOpen={meetingState === "isInstantMeeting"}
        onClose={() => setMeetingState(undefined)}
        title="Start an Instant Meeting"
        className="text-center"
        buttonText="Start Meeting"
        handleClick={createMeeting}
      />
    </section>
  );
};

export default MeetingTypeList;
