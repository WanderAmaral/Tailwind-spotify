import {
  HomeIcon,
  SearchIcon,
  LibraryIcon,
  HeartIcon,
  HandMetalIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
  PlayIcon,
  Clock3,
} from "lucide-react";

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1 ">
        <aside className="w-72 bg-zinc-950 p-6 ">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-red-500 rounded-full" />
            <div className="w-3 h-3 bg-yellow-500 rounded-full" />
            <div className="w-3 h-3 bg-green-500 rounded-full" />
          </div>
          <div className="bg-zinc-900 gap-2 mb-4 rounded-lg mt-7">
            <nav className="p-4  hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring  rounded-lg">
              <a
                href="/"
                className="flex items-center gap-2 text-sm font-semibold"
              >
                <HomeIcon size={30} />
                Home
              </a>
            </nav>
            <nav className="p-4 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring rounded-lg">
              <a
                href=""
                className="flex items-center gap-2 text-sm font-semibold "
              >
                <SearchIcon size={30} />
                Search
              </a>
            </nav>
          </div>

          <div className="bg-zinc-900 gap-2 rounded-lg">
            <nav className="p-4  hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring rounded-lg">
              <a
                href="/"
                className="flex items-center gap-2 text-sm font-semibold"
              >
                <LibraryIcon size={30} />
                Your Library
              </a>
            </nav>
            <nav className="p-4 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring rounded-lg">
              <a
                href="/"
                className="flex items-center gap-2 text-sm font-semibold"
              >
                <HeartIcon size={30} />
                Liked Songs
              </a>
            </nav>
            <nav className="p-4 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring rounded-lg">
              <a
                href="/"
                className="flex items-center gap-2 text-sm font-semibold"
              >
                <HandMetalIcon size={30} />
                Rock
              </a>
            </nav>
          </div>
        </aside>
        <main className="flex-1 rounded-lg ">
          <div className="flex justify-start gap-3 bg-gradient-to-t from-green-700 to-blue-800 w-full p-5">
            <button>
              <ArrowLeftIcon size={30} />
            </button>
            <button>
              <ArrowRightIcon size={30} />
            </button>
            <button className="bg-green-400 rounded-full items-center flex justify-center text-black p-3">
              <PlayIcon size={32} />
            </button>
          </div>
          <div className="flex justify-between grid-cols-3 bg-zinc-700 p-2">
            <div>#</div>
            <div>Artist</div>
            <div>Album</div>
            <div>Date Added</div>
            <div>
              <Clock3 />
            </div>
          </div>
        </main>
      </div>
      <footer className="bg-zinc-800 border-t border-zinc-700 p-6">
        Footer
      </footer>
    </div>
  );
}
