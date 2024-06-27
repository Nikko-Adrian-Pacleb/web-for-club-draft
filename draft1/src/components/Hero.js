import Image from "next/image";

export default function Hero() {
  return (
    <div className="flex flex-col lg:flex-row">
      <img
        className="w-full h-full lg:w-1/2"
        width="200"
        height="200"
        src="https://plus.unsplash.com/premium_vector-1683141007615-9c8bbdb61969?q=80&w=3600&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
      <div className="flex flex-col justify-center text-center">
        <h1>Welcome to Engineering Club</h1>
        <p>
          The engineering club is a group where students collaborate on
          projects, share knowledge, and develop skills in various engineering
          fields. Members participate in workshops, competitions, and networking
          events to enhance their technical and professional growth. This is
          from ChatGPT BTW
        </p>
        <a
          className="w-52 mt-4 px-4 py-2 mx-auto bg-blue-500 text-white font-semibold rounded hover:bg-blue-600 transition"
          href="#"
        >
          Join Discord
        </a>
      </div>
    </div>
  );
}
