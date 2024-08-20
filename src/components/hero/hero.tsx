import styles from "@/components/hero/hero.module.css";
import { SignedOut, SignedIn, SignInButton, UserButton } from "@clerk/nextjs";
const Hero = () => {
  return (
    <section className="bg-gray-900 text-white">
      <div className="mx-auto max-w-screen-xl px-4 py-32 flex h-screen items-center">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className={styles.adroitheading}>
            MedRecom
          </h1>

          <p className="mx-auto mt-4 max-w-xl sm:text-xl/relaxed">
            {"Let's track your health with pocket doctor."}
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <div className="block w-full rounded border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto">
              <SignedOut>
                <SignInButton />
              </SignedOut>
              <SignedIn>
                <UserButton afterSignOutUrl="/" />
              </SignedIn>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
