// components/About.js
const About = () => {
  return (
    <section id="about" className="py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center">
          {/* Left Image */}
          <div className="w-full lg:w-1/3 mb-8 lg:mb-0">
            <img
              src="/assets/images/about-left-image.png"
              alt="person graphic"
              className="w-full"
            />
          </div>
          {/* Services Items */}
          <div className="w-full lg:w-2/3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Item 1 */}
              <div className="flex items-start space-x-4">
                <img
                  src="/assets/images/service-icon-01.png"
                  alt="Data Analysis"
                  className="w-12 h-12"
                />
                <div>
                  <h4 className="text-xl font-semibold">Data Analysis</h4>
                  <p className="text-gray-600">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
              </div>
              {/* Item 2 */}
              <div className="flex items-start space-x-4">
                <img
                  src="/assets/images/service-icon-02.png"
                  alt="Data Reporting"
                  className="w-12 h-12"
                />
                <div>
                  <h4 className="text-xl font-semibold">Data Reporting</h4>
                  <p className="text-gray-600">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
              </div>
              {/* Item 3 */}
              <div className="flex items-start space-x-4">
                <img
                  src="/assets/images/service-icon-03.png"
                  alt="Web Analytics"
                  className="w-12 h-12"
                />
                <div>
                  <h4 className="text-xl font-semibold">Web Analytics</h4>
                  <p className="text-gray-600">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
              </div>
              {/* Item 4 */}
              <div className="flex items-start space-x-4">
                <img
                  src="/assets/images/service-icon-04.png"
                  alt="SEO Suggestions"
                  className="w-12 h-12"
                />
                <div>
                  <h4 className="text-xl font-semibold">SEO Suggestions</h4>
                  <p className="text-gray-600">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* End of Services Items */}
        </div>
      </div>
    </section>
  );
};

export default About;
