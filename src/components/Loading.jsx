import React from "react";

function Loading() {
  return (
    <div className="">
      <button type="button" className="" disabled>
        <svg className="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24"></svg>
        loading...
      </button>
    </div>
  );
}

export default Loading;
