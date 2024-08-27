import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <section className="bg-gray-900 text-white">
      <div className="h-screen md:flex">
        <div className="relative overflow-hidden md:flex w-1/2 bg-gradient-to-tr from-blue-800 to-purple-700 i justify-around items-center hidden">
          <div className="flex flex-col gap-6">
            <h1 className="text-white font-bold text-4xl font-sans">
              HealthSage
            </h1>
            <p className="text-white mt-1">
              Discover the best medicine recommendations tailored to your needs.
            </p>
            <a
              href="/"
              className="block w-28 bg-white text-indigo-800 mt-4 py-2 rounded-2xl font-bold mb-2 text-center"
            >
              Read More
            </a>
          </div>
          <div className="absolute -bottom-32 -left-40 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
          <div className="absolute -bottom-40 -left-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
          <div className="absolute -top-40 -right-0 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
          <div className="absolute -top-20 -right-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
        </div>
        <div className="flex md:w-1/2 justify-center py-10 items-center bg-white">
          <SignIn path="/sign-in" />
        </div>
      </div>
    </section>
  );
}
