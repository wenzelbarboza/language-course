// components/Blog.js
const Blog = () => {
  return (
    <section id="blog" className="py-16">
      <div className="container mx-auto px-4">
        {/* Section Heading */}
        <div className="flex flex-wrap items-center mb-12">
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl font-bold">
              Check Out What Is{" "}
              <em className="italic text-blue-500">Trending</em> In Our Latest{" "}
              <span className="text-red-500">News</span>
            </h2>
          </div>
          <div className="w-full md:w-1/2 flex justify-end">
            <img
              src="/assets/images/blog-dec.png"
              alt="decoration"
              className="w-32"
            />
          </div>
        </div>
        {/* Blog Posts */}
        <div className="flex flex-wrap">
          {/* Big Blog Post */}
          <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
            <div className="relative">
              <a href="#">
                <img
                  src="/assets/images/big-blog-thumb.jpg"
                  alt="Workspace Desktop"
                  className="w-full rounded"
                />
              </a>
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-end p-6 rounded">
                <div className="text-white">
                  <ul className="flex space-x-4 text-sm mb-2">
                    <li>
                      <i className="fa fa-calendar"></i> 24 Mar 2021
                    </li>
                    <li>
                      <i className="fa fa-users"></i> TemplateMo
                    </li>
                    <li>
                      <i className="fa fa-folder"></i> Branding
                    </li>
                  </ul>
                  <a href="#">
                    <h4 className="text-2xl font-bold">
                      SEO Agency &amp; Digital Marketing
                    </h4>
                  </a>
                  <p className="mt-2">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor...
                  </p>
                  <a
                    href="#"
                    className="inline-block mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                  >
                    Discover More
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* Right Blog List */}
          <div className="w-full lg:w-1/2">
            <ul className="space-y-6">
              {/* Blog List Item 1 */}
              <li className="flex items-center">
                <div className="flex-1">
                  <span className="text-sm text-gray-500">
                    <i className="fa fa-calendar"></i> 18 Mar 2021
                  </span>
                  <a href="#">
                    <h4 className="text-xl font-bold">
                      New Websites &amp; Backlinks
                    </h4>
                  </a>
                  <p className="text-gray-600">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit...
                  </p>
                </div>
                <div className="ml-4">
                  <a href="#">
                    <img
                      src="/assets/images/blog-thumb-01.jpg"
                      alt=""
                      className="w-24 h-24 object-cover rounded"
                    />
                  </a>
                </div>
              </li>
              {/* Blog List Item 2 */}
              <li className="flex items-center">
                <div className="flex-1">
                  <span className="text-sm text-gray-500">
                    <i className="fa fa-calendar"></i> 14 Mar 2021
                  </span>
                  <a href="#">
                    <h4 className="text-xl font-bold">
                      SEO Analysis &amp; Content Ideas
                    </h4>
                  </a>
                  <p className="text-gray-600">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit...
                  </p>
                </div>
                <div className="ml-4">
                  <a href="#">
                    <img
                      src="/assets/images/blog-thumb-01.jpg"
                      alt=""
                      className="w-24 h-24 object-cover rounded"
                    />
                  </a>
                </div>
              </li>
              {/* Blog List Item 3 */}
              <li className="flex items-center">
                <div className="flex-1">
                  <span className="text-sm text-gray-500">
                    <i className="fa fa-calendar"></i> 06 Mar 2021
                  </span>
                  <a href="#">
                    <h4 className="text-xl font-bold">
                      SEO Tips &amp; Digital Marketing
                    </h4>
                  </a>
                  <p className="text-gray-600">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit...
                  </p>
                </div>
                <div className="ml-4">
                  <a href="#">
                    <img
                      src="/assets/images/blog-thumb-01.jpg"
                      alt=""
                      className="w-24 h-24 object-cover rounded"
                    />
                  </a>
                </div>
              </li>
            </ul>
          </div>
          {/* End Right Blog List */}
        </div>
      </div>
    </section>
  );
};

export default Blog;
