import { User, MapPin, Server,CircleCheck } from "lucide-react";
function App() {
  const CardIcon = ({ number, name, icons }) => {
    return (
      <>
        <section className="flex flex-row gap-5 p-4 m-4">
          <p className="w-10 h-10 bg-red-200 rounded-xl flex justify-center items-center">
            <h4 className="text-red-500">{icons}</h4>
          </p>
          <div>
            <small className="font-bold text-[#0B132A] text-2xl">
              {number}
            </small>
            <p className="font-normal text-xl text-[#4F5665]">{name}</p>
          </div>
        </section>
      </>
    );
  };
  return (
    <>
      <header className="p-4 m-4 grid grid-cols-3   capitalize">
        <h2 className="font-medium text-xl">
          Lasles<b>VPN</b>
        </h2>
        <nav>
          <ul className="flex gap-12 font-normal text-sm text-[#4F5665]">
            <li>about</li>
            <li>features</li>
            <li>pricing</li>
            <li>testimonies</li>
            <li>help</li>
          </ul>
        </nav>
        <div className="ml-auto space-x-10">
          <button className="text-[#0B132A] font-medium text-sm">
            Sign In
          </button>
          <button className="text-[#F53855] border-1 p-2 w-28 rounded-2xl font-medium text-sm">
            Sign Up
          </button>
        </div>
      </header>

      <main>
        <section className="hero-section p-4 m-4 mt-14 flex gap-8">
          <div className="w-lg items-center">
            <h2 className="text-5xl font-medium">
              Want anything to be easy with <b>LaslesVPN</b>.
            </h2>
            <p className="text-sm font-medium  mt-8">
              Provide a network for all your needs with ease and fun using
              LaslesVPN discover interesting features from us.
            </p>
            <button className="w-60 h-12 rounded-2xl bg-[#F53838] text-white text-sm p-2 shadow font-bold mt-8">
              Get Started
            </button>
          </div>
          <img
            src="/src/assets/hero.png"
            className="ml-auto mr-12 max-w-2xl h-96"
            alt="person using vpn app"
          />
        </section>

        <section className="grid grid-cols-3 gap-10 mt-10 p-4 m-4">
          <CardIcon icons={<User />} number={"90+"} name={"User"} />
          <CardIcon icons={<MapPin />} number={"30+"} name={"Location"} />
          <CardIcon icons={<Server />} number={"50+"} name={"Server"} />
        </section>

        <section className="grid grid-cols-2 mt-10 p-4 m-4">
          <img src="/src/assets/user_computer.png" className="w-md h-96" alt="person using the computer" />
          <div className="w-lg">
            <h2 className="font-medium text-5xl text-[#0B132A] mt-10">We Provide Many Features You Can Use</h2>
            <h2 className="font-normal text-[#4F5665] mt-5 text-lg">
              You can explore the features that we provide with fun and have
              their own functions each feature.
            </h2>
            <ul className="text-[#4F5665] font-normal text-sm mt-5">
              <li className="mt-3 flex gap-2"><CircleCheck className="text-green-500"/>Powerfull online protection.</li>
              <li className="mt-3 flex gap-2"><CircleCheck className="text-green-500"/>Internet without borders.</li>
              <li className="mt-3 flex gap-2"><CircleCheck className="text-green-500"/>Supercharged VPN</li>
              <li className="mt-3 flex gap-2"><CircleCheck className="text-green-500"/>No specific time limits.</li>
            </ul>
          </div>
        </section>

        
      </main>
    </>
  );
}

export default App;
