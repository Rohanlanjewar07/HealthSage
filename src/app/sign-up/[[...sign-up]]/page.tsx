import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <section className="bg-gray-900 text-white">
      <div className="mx-auto max-w-screen-xl px-4 py-32 flex h-screen items-center">
        <div className="mx-auto max-w-3xl text-center">
          <SignUp path="/sign-up" />
        </div>
      </div>
    </section>
  );
}
