import React, { useEffect } from "react";
import { VideoSDKMeeting } from "@videosdk.live/rtc-js-prebuilt";

export default function App() {
  useEffect(() => {
    const config = {
      name: "Demo User",
      meetingId: "milkyway",
      apiKey: "c2f0c8b5-0723-4ce3-8fcf-c9582c44d382",

      containerId: null,

      micEnabled: true,
      webcamEnabled: true,
      participantCanToggleSelfWebcam: true,
      participantCanToggleSelfMic: true,

      chatEnabled: true,
      screenShareEnabled: true,

      joinScreen: {
        visible: true,
        title: "Daily scrum",
      }
      /*

     Other Feature Properties
      
      */
    };

    const meeting = new VideoSDKMeeting();
    meeting.init(config);
  }, []);

  // const createMeeting = () => {
  //   console.log('create meeting')
  //   let meetingId =  'xxxxyxxx'.replace(/[xy]/g, function(c) {
  //     var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
  //     return v.toString(16);
  //   });
  //   console.log("http://"+ window.location.host + "?meetingId="+ meetingId)
  //   document.getElementById("copyInput").value = "https://"+ window.location.host + "/meeting.html?meetingId="+ meetingId;
  // }

  // const myFunction = () => {
  //   console.log("my function")
  //    /* Get the text field */
  //    var copyText = document.getElementById("copyInput");

  //    /* Select the text field */
  //    copyText.select();
  //    copyText.setSelectionRange(0, 99999); /* For mobile devices */

  //    /* Copy the text inside the text field */
  //    navigator.clipboard.writeText(copyText.value);
  // }

  return <div>

    {/* <button onClick={() => createMeeting()}>Create Meeting</button>
    <br/>
    <input type="text" id="copyInput" />
    <button onClick={() => myFunction()}>Copy Link</button> */}
  </div>;
}