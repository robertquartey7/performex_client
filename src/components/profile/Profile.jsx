import React, { useEffect, useState } from "react";
import Athlete from "./Athlete";
import Recruiter from "./Recruiter";
import Select from "react-select";
import { useSearchParams } from "next/navigation";

const options = [
  { value: "athlete", label: "athlete" },
  { value: "recruiter", label: "recruiter" },
];

function Profile() {
  const [profileState, setProfileState] = useState(null);
  const [id, setId] = useState(null);

  const userId = useSearchParams().get("_id");

  useEffect(() => {
    if (userId) {
      setId(userId);
    } else {
      // router.push("/login");
    }
  }, [userId]);

  return (
    <div>
      <div>
        <Select
          options={options}
          placeholder={"Are you an athlete or a recruiter ?"}
          onChange={(e) => setProfileState(e.value)}
        />
      </div>
      <div>
        {profileState === "athlete" && <Athlete userId={id} />}
        {profileState === "recruiter" && <Recruiter userId={id} />}
      </div>{" "}
      <div className="text-gray-500 m-5 px-10 flex flex-col items-center">
        <p>Contact Us:</p>
        <a href="mailto:contact@performexoffical.com">
          contact@performexoffical.com
        </a>
      </div>
    </div>
  );
}

export default Profile;
