const Hero = () => {
  return (
    <main className="bg-gray-900 text-white">
      <section className="dark:bg-gray-100 dark:text-gray-800" id="hero">
        <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
          <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
            <h1 className="text-5xl font-bold leading-none sm:text-6xl">
              Personalized Medicine Recommendations
            </h1>
            <p className="mt-6 mb-8 text-lg sm:mb-12">
              Get tailored medicine recommendations based on your health
              profile. Our system analyzes your medical history and preferences
              to suggest the best options for you.
            </p>
            <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
              <a
                rel="noopener noreferrer"
                href="#get-started"
                className="px-8 py-3 text-lg font-semibold rounded dark:bg-violet-600 dark:text-gray-50"
              >
                Get Started
              </a>
            </div>
          </div>
          <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
            <img
              src="Version-control-amico-1.svg"
              alt="Medicine Recommendation System"
              className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
            />
          </div>
        </div>
      </section>

      <section id="features">
        <div className="bg-deep-purple-accent-700">
          <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="max-w-xl sm:mx-auto lg:max-w-2xl">
              <div className="flex flex-col mb-16 sm:text-center sm:mb-0">
                <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                  <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-white sm:text-4xl md:mx-auto">
                    <span className="relative inline-block">
                      <svg
                        viewBox="0 0 52 24"
                        fill="currentColor"
                        className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-deep-purple-accent-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                      >
                        <defs>
                          <pattern
                            id="700c93bf-0068-4e32-aafe-ef5b6a647708"
                            x="0"
                            y="0"
                            width=".135"
                            height=".30"
                          >
                            <circle cx="1" cy="1" r=".7" />
                          </pattern>
                        </defs>
                        <rect
                          fill="url(#700c93bf-0068-4e32-aafe-ef5b6a647708)"
                          width="52"
                          height="24"
                        />
                      </svg>
                      <span className="relative">Key</span>
                    </span>{" "}
                    Features of Our Medicine Recommendation System
                  </h2>
                  <p className="text-base text-indigo-100 md:text-lg">
                    Discover the standout features that make our system the best
                    choice for personalized medicine recommendations:
                  </p>
                </div>
                <div className="flex flex-wrap justify-center gap-8">
                  {[
                    {
                      text: "Personalized Recommendations: Get tailored medicine suggestions based on your specific health needs and conditions.",
                      icon: "fa-user-md",
                    },
                    {
                      text: "Comprehensive Database: Access an extensive database of medicines, including both over-the-counter and prescription options.",
                      icon: "fa-pills",
                    },
                    {
                      text: "User-Friendly Interface: Navigate easily through our intuitive interface designed for a seamless user experience.",
                      icon: "fa-laptop-medical",
                    },
                    {
                      text: "Secure and Confidential: Your data is protected with top-notch security measures to ensure your privacy and confidentiality.",
                      icon: "fa-lock",
                    },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="bg-white dark:bg-gray-800 py-8 px-8 rounded-3xl w-72 my-4 shadow-xl transform transition duration-500 hover:scale-105"
                    >
                      <div className="text-center mb-4">
                        <i
                          className={`fas ${item.icon} text-4xl text-blue-500`}
                        ></i>
                      </div>
                      <p className="text-gray-800 dark:text-gray-100 text-lg font-medium text-center leading-snug md:leading-normal">
                        {item.text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="whychooseus">
        <div className="relative flex flex-col-reverse py-16 lg:pt-0 lg:flex-col lg:pb-0 bg-white">
          <div className="inset-y-0 top-0 right-0 z-0 w-full max-w-xl px-4 mx-auto md:px-0 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-7/12 lg:max-w-full lg:absolute xl:px-0">
            <svg
              className="absolute left-0 hidden h-full text-white transform -translate-x-1/2 lg:block"
              viewBox="0 0 100 100"
              fill="currentColor"
              preserveAspectRatio="none slice"
            >
              <path d="M50 0H100L50 100H0L50 0Z" />
            </svg>
            <img
              className="object-cover w-full h-56 rounded shadow-lg lg:rounded-none lg:shadow-none md:h-96 lg:h-full"
              src="https://images.unsplash.com/photo-1502945015378-0e284ca1a5be?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Medicine recommendation system"
            />
          </div>
          <div className="relative flex flex-col items-start w-full max-w-xl px-4 mx-auto md:px-0 lg:px-8 lg:max-w-screen-xl">
            <div className="mb-16 lg:my-40 lg:max-w-lg lg:pr-5">
              <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
                Why Choose Us
              </p>
              <h2 className="mb-5 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                Your Personalized
                <br className="hidden md:block" />
                Medicine Recommendation{" "}
                <span className="inline-block text-deep-purple-accent-400">
                  Starts Here
                </span>
              </h2>
              <p className="pr-5 mb-5 text-base text-gray-700 md:text-lg">
                Our cutting-edge medicine recommendation system uses advanced
                algorithms and comprehensive databases to provide you with
                personalized and reliable medicine recommendations. Whether
                you’re looking for over-the-counter remedies or prescription
                medications, we ensure you get accurate and safe recommendations
                tailored to your health needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="aboutus">
        <div className="2xl:mx-auto 2xl:container mx-4 py-16">
          <div className="w-full relative flex items-center justify-center">
            <img
              src="https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="healthcare research"
              className="w-full h-full absolute z-0 hidden sm:block"
            />
            <div className="bg-gray-800 bg-opacity-80 md:my-16 lg:py-16 py-10 w-full md:mx-24 md:px-12 px-4 flex flex-col items-center justify-center relative z-40">
              <h1 className="text-4xl font-semibold leading-9 text-white text-center">
                About Us
              </h1>
              <p className="text-base leading-normal text-center text-white mt-6">
                We are a team of dedicated students from Grouop 13 working on an
                innovative project to develop a personalized medicine
                recommendation system. Our goal is to harness the power of
                technology to provide users with tailored medicine suggestions
                that cater to their unique health needs and preferences.
                <br />
                <br />
                This project is the culmination of our studies in healthcare
                technology and data analysis, and it reflects our commitment to
                making a positive impact in the field of medicine. With a focus
                on accuracy, privacy, and user experience, we aim to offer a
                reliable resource for both over-the-counter and prescription
                medicines.
                <br />
                <br />
                We believe in the importance of collaboration and are proud to
                contribute to the ongoing advancement of healthcare through this
                project. Thank you for supporting our journey as we strive to
                bring our vision to life.
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-white lg:grid lg:grid-cols-5">
        <div className="relative block h-32 lg:col-span-2 lg:h-full">
          <img
            src="https://images.unsplash.com/photo-1486049125644-f35e226a5e14?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>

        <div className="px-4 py-16 sm:px-6 lg:col-span-3 lg:px-8">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
            <div>
              <p>
                <span className="text-xs uppercase tracking-wide text-gray-500">
                  Call us
                </span>

                <a
                  href="#"
                  className="block text-2xl font-medium text-gray-900 hover:opacity-75 sm:text-3xl"
                >
                  0123456789
                </a>
              </p>

              <ul className="mt-8 flex gap-6">
                <li>
                  <a
                    href="#"
                    rel="noreferrer"
                    target="_blank"
                    className="text-gray-700 transition hover:opacity-75"
                  >
                    <span className="sr-only">Facebook</span>
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    rel="noreferrer"
                    target="_blank"
                    className="text-gray-700 transition hover:opacity-75"
                  >
                    <span className="sr-only">Instagram</span>
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <p>
                <span className="text-xs uppercase tracking-wide text-gray-500">
                  Email us
                </span>

                <a
                  href="mailto:info@example.com"
                  className="block text-2xl font-medium text-gray-900 hover:opacity-75 sm:text-3xl"
                >
                  mail@gmail.com
                </a>
              </p>
            </div>
          </div>

          <div className="mt-16 border-t border-gray-200 pt-8">
            <div className="sm:flex sm:items-center sm:justify-between">
              <p className="text-sm text-gray-500">
                &copy; 2024 Group 13. All rights reserved.
              </p>

              <ul className="mt-4 flex gap-6 sm:mt-0">
                <li>
                  <a
                    href="#features"
                    className="text-gray-500 hover:text-gray-600"
                  >
                    Features
                  </a>
                </li>

                <li>
                  <a
                    href="#whychooseus"
                    className="text-gray-500 hover:text-gray-600"
                  >
                    Why Choose Us
                  </a>
                </li>

                <li>
                  <a
                    href="#aboutus"
                    className="text-gray-500 hover:text-gray-600"
                  >
                    About Us
                  </a>
                </li>

                <li>
                  <a href="#hero" className="text-gray-500 hover:text-gray-600">
                    Get Started
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
};

export default Hero;
