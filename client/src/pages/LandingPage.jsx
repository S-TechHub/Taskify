import { Link } from "react-router-dom";

import TKY from "../assets/tky.png";

function LandingPage() {
  return (
    <div className="h-screen w-screen flex flex-col">
      <header className="md:flex justify-between p-5">
        <div className="flex items-center gap-2.5">
          <img src={TKY} alt="LOGO" className="h-6" />
          <h3 className="font-bold">Taskify</h3>
        </div>
        <div className="flex gap-10 items-center">
          <Link to={"/login"}>Login</Link>
          <Link to={"/Signup"} className="border-1 p-[0.25rem_1rem] rounded-xl">
            Sign up
          </Link>
        </div>
      </header>
      <main className="mt-25 flex flex-col items-center flex-grow">
        <h1 className="text-[5rem] font-bold text-center italic">
          Prioritize Systematize
          <br />
          Delegate.
        </h1>
        <p className="text-center font-light">
          Organize yourself and enhance productivity with our to-do list tool.
          Track
          <br /> tasks, set deadlines, and monitor progress all in one place.
        </p>
        <button className="bg-[var(--primary-color)] p-[0.75rem_5rem] rounded-xl my-5">Get Started</button>
      </main>
    </div>
  );
}

export default LandingPage;