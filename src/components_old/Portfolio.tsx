// components/Portfolio.js
const Portfolio = () => {
  return (
    <section id="portfolio" className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">
            See What Our Agency <em className="italic text-blue-500">Offers</em>{" "}
            &amp; What We <span className="text-red-500">Provide</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Portfolio Item 1 */}
          <a href="#" className="group block relative overflow-hidden rounded">
            <img
              src="/assets/images/portfolio-image.png"
              alt="SEO Analysis"
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4">
              <h4 className="text-white text-xl font-bold">SEO Analysis</h4>
              <p className="text-white text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          </a>
          {/* Portfolio Item 2 */}
          <a href="#" className="group block relative overflow-hidden rounded">
            <img
              src="/assets/images/portfolio-image.png"
              alt="Website Reporting"
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4">
              <h4 className="text-white text-xl font-bold">
                Website Reporting
              </h4>
              <p className="text-white text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          </a>
          {/* Portfolio Item 3 */}
          <a href="#" className="group block relative overflow-hidden rounded">
            <img
              src="/assets/images/portfolio-image.png"
              alt="Performance Tests"
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4">
              <h4 className="text-white text-xl font-bold">
                Performance Tests
              </h4>
              <p className="text-white text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          </a>
          {/* Portfolio Item 4 */}
          <a href="#" className="group block relative overflow-hidden rounded">
            <img
              src="/assets/images/portfolio-image.png"
              alt="Data Analysis"
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4">
              <h4 className="text-white text-xl font-bold">Data Analysis</h4>
              <p className="text-white text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
