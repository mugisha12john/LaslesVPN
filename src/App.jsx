import { User, MapPin, Server, CircleCheck, Check } from "lucide-react";
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

  const Feedback = ({ image, name, city, rate, description }) => {
    return (
      <>
        <div className="grid grid-cols-4 w-1/4 border-[#4F5665] rounded-xl p-4 border-2">
          <img
            src={image}
            className="w-12 h-12 rounded-full"
            alt="profile picture"
          />
          <div className="col-span-2 items-start">
            <p className="text-[#0B132A] font-medium text-lg">{name}</p>
            <p className="text-[#4F5665] font-normal text-sm">{city}</p>
          </div>
          <dir>{rate} ⭐</dir>
          <p className="text-sm font-medium text-[#4F5665] col-span-4 mt-5">
            {description}
          </p>
        </div>
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
          <img
            src="/src/assets/user_computer.png"
            className="w-md h-96"
            alt="person using the computer"
          />
          <div className="w-lg">
            <h2 className="font-medium text-5xl text-[#0B132A] mt-10">
              We Provide Many Features You Can Use
            </h2>
            <h2 className="font-normal text-[#4F5665] mt-5 text-lg">
              You can explore the features that we provide with fun and have
              their own functions each feature.
            </h2>
            <ul className="text-[#4F5665] font-normal text-sm mt-5">
              <li className="mt-3 flex gap-2">
                <CircleCheck className="text-green-500" />
                Powerfull online protection.
              </li>
              <li className="mt-3 flex gap-2">
                <CircleCheck className="text-green-500" />
                Internet without borders.
              </li>
              <li className="mt-3 flex gap-2">
                <CircleCheck className="text-green-500" />
                Supercharged VPN
              </li>
              <li className="mt-3 flex gap-2">
                <CircleCheck className="text-green-500" />
                No specific time limits.
              </li>
            </ul>
          </div>
        </section>

        <section className="p-4 m-4">
          <div className="flex flex-col justify-center items-center mt-12">
            <h2 className="text-[#0B132A] font-normal text-5xl">
              Choose Your Plan
            </h2>
            <h3 className="text-[#4F5665] font-normal text-lg mt-4">
              Let's choose the package that is best for you and explore it
              happily and cheerfully.
            </h3>
          </div>

          {/* choose plant featue */}
          <div className="grid grid-cols-3 mt-20">
            <div className="w-96  border-2 border-[#DDDDDD] flex flex-col justify-center items-center">
              <img
                src="/src/assets/user_computer.png"
                className="w-36 h-40 mt-15"
                alt="person using the computer"
              />
              <h2 className="mt-10 text-[#0B132A] font-bold text-lg">
                Free Plan
              </h2>
              <ul className="text-[#4F5665] font-normal text-sm mt-5">
                <li className="mt-5 flex gap-5">
                  <Check className="text-green-500" />
                  Unlimited Bandwitch
                </li>
                <li className="mt-5 flex gap-5">
                  <Check className="text-green-500" />
                  Encrypted Connection
                </li>
                <li className="mt-5 flex gap-5">
                  <Check className="text-green-500" />
                  No Traffic Logs
                </li>
                <li className="mt-5 flex gap-5">
                  <Check className="text-green-500" />
                  Works on All Devices
                </li>
              </ul>
              <h1 className="text-[#0B132A] font-medium text-2xl mt-32">
                Free
              </h1>

              <button className="font-normal text-sm text-[#F53838] border-2 border-[#F53838] w-44 rounded-4xl p-2  mt-4">
                Select
              </button>
            </div>
            {/* second choose */}
            <div className="w-96 border-2 border-[#DDDDDD] flex flex-col justify-center items-center">
              <img
                src="/src/assets/user_computer.png"
                className="w-36 h-40 mt-15"
                alt="person using the computer"
              />
              <h2 className="mt-10 text-[#0B132A] font-bold text-lg">
                Standard Plan
              </h2>
              <ul className="text-[#4F5665] font-normal text-sm mt-5">
                <li className="mt-5 flex gap-5">
                  <Check className="text-green-500" />
                  Unlimited Bandwitch
                </li>
                <li className="mt-5 flex gap-5">
                  <Check className="text-green-500" />
                  Encrypted Connection
                </li>
                <li className="mt-5 flex gap-5">
                  <Check className="text-green-500" />
                  Yes Traffic Logs
                </li>
                <li className="mt-5 flex gap-5">
                  <Check className="text-green-500" />
                  Works on All Devices
                </li>
                <li className="mt-5 flex gap-5">
                  <Check className="text-green-500" />
                  Connect Anyware
                </li>
              </ul>
              <h1 className="text-[#0B132A] font-medium text-2xl mt-32 flex">
                $9/ <p className="text-[#4F5665]">mo</p>
              </h1>

              <button className="font-normal text-sm text-[#F53838] border-2 border-[#F53838] w-44 rounded-4xl p-2 mb-12 mt-4">
                Select
              </button>
            </div>
            {/* third chooce */}
            <div className="w-96  border-2 border-[#DDDDDD] flex flex-col justify-center items-center">
              <img
                src="/src/assets/user_computer.png"
                className="w-36 h-40 mt-15"
                alt="person using the computer"
              />
              <h2 className="mt-10 text-[#0B132A] font-bold text-lg">
                Premium Plan
              </h2>
              <ul className="text-[#4F5665] font-normal text-sm mt-5">
                <li className="mt-5 flex gap-5">
                  <Check className="text-green-500" />
                  Unlimited Bandwitch
                </li>
                <li className="mt-5 flex gap-5">
                  <Check className="text-green-500" />
                  Encrypted Connection
                </li>
                <li className="mt-5 flex gap-5">
                  <Check className="text-green-500" />
                  No Traffic Logs
                </li>
                <li className="mt-5 flex gap-5">
                  <Check className="text-green-500" />
                  Works on All Devices
                </li>
                <li className="mt-5 flex gap-5">
                  <Check className="text-green-500" />
                  Get New Features
                </li>
              </ul>
              <h1 className="text-[#0B132A] font-medium text-2xl mt-32 flex">
                $12/ <p className="text-[#4F5665]">mo</p>
              </h1>

              <button className="font-normal text-sm bg-[#F53838] text-white  shadow-[#F53838] shadow-2xl w-44 rounded-4xl p-2 mb-12 mt-6">
                Select
              </button>
            </div>
          </div>
        </section>

        <section className="p-4 m-4">
          <div className="flex flex-col justify-center items-center mt-12">
            <h2 className="text-[#0B132A] font-normal text-4xl">
              Huge Global Network of Fast VPN
            </h2>
            <h3 className="text-[#4F5665] font-normal text-sm mt-4">
              See LaslesVPN everywhere to make it easier for you when you move
              locations.
            </h3>
          </div>
          <img
            src="/src/assets/map.png"
            className="w-4/5 ml-25 mt-20"
            alt="map of all our vpn acces"
          />

          <img
            src="/src/assets/supports.png"
            className="w-4/5 ml-25 mt-10"
            alt="our partneship"
          />
        </section>
        <section className="p-4 m-4">
          <div className="flex flex-col justify-center items-center mt-12">
            <h2 className="text-[#0B132A] font-normal text-center text-4xl">
              Trusted by Thousands of <br /> Happy Customer
            </h2>
            <h3 className="text-[#4F5665] font-normal text-center text-sm mt-4">
              These are the stories of our customers who have joined us with{" "}
              <br />
              great pleasure when using this crazy feature.
            </h3>
          </div>

          <div className="mt-15 flex gap-10 justify-center ">
            <Feedback
              image={"/src/assets/image.png"}
              rate={4.5}
              name={"Viezh Robert"}
              city={"Warsaw, Poland"}
              description={
                "“Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best”."
              }
            />
            <Feedback
              image={"/src/assets/image1.png"}
              rate={4.5}
              name={"Yessica Christy"}
              city={"Shanxi, China"}
              description={
                "“I like it because I like to travel far and still can connect with high speed.”"
              }
            />
            <Feedback
              image={"/src/assets/image2.png"}
              rate={4.5}
              name={"Kim Young Jou"}
              city={"Seoul, South Korea "}
              description={
                "“This is very unusual for my business that currently requires a virtual private network that has high security.”"
              }
            />
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
