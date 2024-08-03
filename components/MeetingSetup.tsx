"use client";
import React, { useEffect, useState } from "react";
import {
  VideoPreview,
  useCall,
  DeviceSettings,
} from "@stream-io/video-react-sdk";
import { Button } from "./ui/button";
const MeetingSetup = ({
  setIsSetupComplete,
}: {
  setIsSetupComplete: (value: boolean) => void;
}) => {
  const [isMicCamToggledOn, setaIsMicCamToggledOn] = useState(false);
  const call = useCall();

  if (!call) {
    throw new Error("Something went Wrong");
  }
  useEffect(() => {
    if (isMicCamToggledOn) {
      call?.camera.disable();
      call?.microphone.disable();
    } else {
      call?.camera.enable();
      call?.microphone.enable();
    }
  }, [isMicCamToggledOn, call?.camera, call?.microphone]);

  return (
    <div>
      <div className="flex h-screen w-full flex-col items-center justify-center text-white">
        <h1>Screen</h1>
        <VideoPreview />
        <div>
          <input
            type="checkbox"
            checked={isMicCamToggledOn}
            onChange={(e) => setaIsMicCamToggledOn(e.target.checked)}
          />
          Join with Mic and Camera Off
        </div>
        <DeviceSettings />
        <Button
          className="rounded-md bg-green-500 px-4"
          onClick={() => {
            call.join();
            setIsSetupComplete(true);
          }}
        >
          Join Meeting
        </Button>
      </div>
    </div>
  );
};

export default MeetingSetup;
