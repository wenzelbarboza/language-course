// components/Banner.js
const Banner = () => {
  return (
    <section id="top" className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center">
          {/* Left Content */}
          <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
            <div className="space-y-4">
              <h6 className="text-sm text-gray-600">
                Welcome to Space Dynamic
              </h6>
              <h2 className="text-4xl font-bold">
                We Make <em className="italic text-blue-500">Digital Ideas</em>{" "}
                & <span className="text-red-500">SEO</span> Marketing
              </h2>
              <p className="text-gray-700">
                Space Dynamic is a professional looking HTML template using
                Bootstrap. This CSS template is free for you provided by{" "}
                <a
                  rel="nofollow"
                  href="https://templatemo.com/page/1"
                  target="_blank"
                  className="text-blue-500 hover:underline"
                >
                  TemplateMo
                </a>
                .
              </p>
              <form
                id="search"
                action="#"
                method="GET"
                className="flex space-x-2"
              >
                <input
                  type="text"
                  name="address"
                  placeholder="Your website URL..."
                  autoComplete="on"
                  required
                  className="px-4 py-2 border border-gray-300 rounded flex-1 focus:outline-none focus:border-blue-500"
                />
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                  Analyze Site
                </button>
              </form>
            </div>
          </div>
          {/* Right Image */}
          <div className="w-full lg:w-1/2">
            <img
              src="/assets/images/banner-right-image.png"
              alt="team meeting"
              className="w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
