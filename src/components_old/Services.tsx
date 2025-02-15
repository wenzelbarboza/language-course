// components/Services.js
const Services = () => {
  return (
    <section id="services" className="py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center">
          {/* Left Image */}
          <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
            <img
              src="/assets/images/services-left-image.png"
              alt="Services"
              className="w-full rounded"
            />
          </div>
          {/* Right Content */}
          <div className="w-full lg:w-1/2">
            <div className="mb-8">
              <h2 className="text-3xl font-bold">
                Grow your website with our{" "}
                <em className="italic text-blue-500">SEO</em> service &{" "}
                <span className="text-red-500">Project</span> Ideas
              </h2>
              <p className="text-gray-700 mt-4">
                Space Dynamic HTML5 template is free to use for your website
                projects. However, redistribution is not permitted. Please
                contact us for more information.
              </p>
            </div>
            {/* Progress Bars */}
            <div className="space-y-4">
              {/* Progress Bar 1 */}
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-base font-medium text-blue-700">
                    Website Analysis
                  </span>
                  <span className="text-sm font-medium text-blue-700">84%</span>
                </div>
                <div className="w-full bg-gray-200 rounded h-4">
                  <div
                    className="bg-blue-500 h-4 rounded"
                    style={{ width: "84%" }}
                  ></div>
                </div>
              </div>
              {/* Progress Bar 2 */}
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-base font-medium text-blue-700">
                    SEO Reports
                  </span>
                  <span className="text-sm font-medium text-blue-700">88%</span>
                </div>
                <div className="w-full bg-gray-200 rounded h-4">
                  <div
                    className="bg-blue-500 h-4 rounded"
                    style={{ width: "88%" }}
                  ></div>
                </div>
              </div>
              {/* Progress Bar 3 */}
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-base font-medium text-blue-700">
                    Page Optimizations
                  </span>
                  <span className="text-sm font-medium text-blue-700">94%</span>
                </div>
                <div className="w-full bg-gray-200 rounded h-4">
                  <div
                    className="bg-blue-500 h-4 rounded"
                    style={{ width: "94%" }}
                  ></div>
                </div>
              </div>
            </div>
            {/* End of Progress Bars */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
