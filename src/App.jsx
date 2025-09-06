function App() {
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
            <h2 className="text-5xl font-medium">Want anything to be easy with <b>LaslesVPN</b>.</h2>
            <p className="text-sm font-medium  mt-8">
              Provide a network for all your needs with ease and fun using
              LaslesVPN discover interesting features from us.
            </p>
            <button className="w-60 h-12 rounded-2xl bg-[#F53838] text-white text-sm p-2 shadow font-bold mt-8">Get Started</button>
          </div>
          <img src="/src/assets/hero.png" className="ml-auto mr-12 max-w-2xl h-96" alt="person using vpn app" />
        </section>
      </main>
    </>
  );
}

export default App;
