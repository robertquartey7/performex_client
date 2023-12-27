import { useRouter } from "next/router";

export function VerifiedEmail() {
  const router = useRouter();
  return (
    <div className="flex flex-col items-center gap-5">
      <div className=" ">
        <img src="/img/verified.png" alt="" className="w-20 h-20" />
      </div>
      <p className="font-bold text-xl">PerformEx, You have successfully verified you account</p>
      <button
        className="block text-center p-2 border w-full mt-2 bg-green-900 text-white rounded hover:opacity-90 duration-100 delay-100"
        onClick={() => {
          router.push("/");
        }}
      >
        Go To Home
      </button>
    </div>
  );
}
