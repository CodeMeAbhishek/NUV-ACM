import { Home, Users, Calendar, CalendarClock } from "lucide-react";

function Navbar() {
  return (
    <nav className="z-50 text-white w-[28rem] flex justify-center items-center font-aleo font-bold text-2xl">
      <div className="backdrop-blur-sm container mx-auto h-16 flex justify-between items-center border border-slate-100 rounded-full">
        <nav className="flex space-x-4 w-full justify-center gap-0">
          <a
            href="/"
            className="w-full m-0 hover:text-red-600 ease-out duration-200 cursor-pointer flex flex-col justify-center items-center gap-2 text-xs"
          >
            <div>
              <Home size={20}/>
            </div>
            <div>Home</div>
          </a>
          <a
            href="/team"
            className="w-full hover:text-red-600 ease-out duration-200 cursor-pointer flex flex-col justify-center items-center gap-2 text-xs"
          >
            <div>
              <Users size={20}/>
            </div>
            <div>The Team</div>
          </a>
          <a
            href="/upcoming-event"
            className="w-full hover:text-red-600 ease-out duration-200 cursor-pointer flex flex-col justify-center items-center gap-2 text-xs"
          >
            <div>
              <CalendarClock size={20}/>
            </div>
            <div>Upcoming Event</div>
          </a>
          <a
            href="/events"
            className="w-full hover:text-red-600 ease-out duration-200 cursor-pointer flex flex-col justify-center items-center gap-2 text-xs"
          >
            <div>
              <Calendar size={20}/>
            </div>
            <div>Events</div>
          </a>
        </nav>
      </div>
    </nav>
  );
}

export default Navbar;
