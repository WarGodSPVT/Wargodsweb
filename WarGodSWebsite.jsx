import React from "react";

export default function WarGodSWebsite() {
  return (
    <div className="bg-black text-white min-h-screen font-sans">
      <section className="flex flex-col items-center justify-center text-center py-20 px-4 bg-gradient-to-b from-black via-gray-900 to-black">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">WarGodS PVT LTD</h1>
        <p className="text-xl md:text-2xl italic mb-6 text-gray-300">"Born from Stars. Built for the Unknown."</p>
        <button className="bg-purple-700 hover:bg-purple-600 text-white px-6 py-3 rounded-full shadow-xl">Explore Our Mission</button>
      </section>
      <section className="px-6 py-16 max-w-4xl mx-auto">
        <h2 className="text-3xl font-semibold mb-4">About Us</h2>
        <p className="text-gray-300 text-lg">
          WarGodS PVT LTD is a cutting-edge research company dedicated to unlocking the greatest mysteries of space, time, and the universe.
        </p>
      </section>
      <section className="px-6 py-16 bg-gray-900 max-w-5xl mx-auto">
        <h2 className="text-3xl font-semibold mb-6">Our Focus</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <h3 className="text-xl font-semibold">Cosmic Research</h3>
            <p className="text-gray-400 mt-2">Exploring black holes, dark matter, and quantum phenomena.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold">Space Missions</h3>
            <p className="text-gray-400 mt-2">Launching innovative ideas into the cosmos.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold">Deep Science</h3>
            <p className="text-gray-400 mt-2">Connecting fundamental science with real-world applications.</p>
          </div>
        </div>
      </section>
      <section className="px-6 py-16 max-w-4xl mx-auto">
        <h2 className="text-3xl font-semibold mb-4">Meet the Founder</h2>
        <p className="text-gray-300 text-lg">
          Mr. WarGodS – Visionary, researcher, and space thinker. Known for exploring the intersection of science and mystery.
        </p>
      </section>
      <section className="bg-gray-950 px-6 py-16 text-center">
        <h2 className="text-3xl font-semibold mb-4">Contact Us</h2>
        <p className="text-gray-400">Email: contact@wargods.space</p>
        <p className="text-gray-400 mt-2">Twitter: <a href="https://twitter.com/yourhandle" className="text-blue-400">@WarGodS</a></p>
      </section>
      <footer className="text-center text-gray-500 py-6 text-sm border-t border-gray-800">
        © {new Date().getFullYear()} WarGodS PVT LTD. All rights reserved.
      </footer>
    </div>
  );
}