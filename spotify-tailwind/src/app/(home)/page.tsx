import { HomeIcon, SearchIcon, LibraryIcon, HeartIcon, HandMetalIcon } from "lucide-react";



export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1 ">
        <aside className="w-72 bg-zinc-950 p-6 ">
          <div className="bg-zinc-900 gap-2 mb-4 rounded-lg">
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
              <a href="/" className="flex items-center gap-2 text-sm font-semibold">
                <HandMetalIcon size={30}/>
                Rock
              </a>
            </nav>
          </div>
        </aside>
        <main className="flex-1 p-6">main</main>
      </div>
      <footer className="bg-zinc-800 border-t border-zinc-700 p-6">
        Footer
      </footer>
    </div>
  );
}
