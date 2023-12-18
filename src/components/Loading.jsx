import React from "react";

function Loading() {
  return (
    <div className="">
      <button type="button" class="bg-indigo-500 ..." disabled>
        <svg class="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24"></svg>
        loading...
      </button>
    </div>
  );
}

export default Loading;
