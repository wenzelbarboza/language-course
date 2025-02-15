// components/Contact.js
const Contact = () => {
  return (
    <section id="contact" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap">
          {/* Left Contact Info */}
          <div className="w-full lg:w-1/2 mb-8 lg:mb-0 flex flex-col justify-center">
            <h2 className="text-3xl font-bold mb-4">
              Feel Free To Send Us a Message About Your Website Needs
            </h2>
            <p className="text-gray-700 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div className="phone-info">
              <h4 className="text-xl font-semibold">
                For any enquiry, Call Us:{" "}
                <span className="ml-2 text-blue-500">
                  <i className="fa fa-phone"></i>{" "}
                  <a href="tel:010-020-0340" className="hover:underline">
                    010-020-0340
                  </a>
                </span>
              </h4>
            </div>
          </div>
          {/* Contact Form */}
          <div className="w-full lg:w-1/2">
            <form
              id="contact"
              action=""
              method="post"
              className="bg-white p-6 rounded shadow"
            >
              <div className="flex flex-wrap -mx-2 mb-4">
                <div className="w-full md:w-1/2 px-2 mb-4 md:mb-0">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Name"
                    autoComplete="on"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                  />
                </div>
                <div className="w-full md:w-1/2 px-2">
                  <input
                    type="text"
                    name="surname"
                    id="surname"
                    placeholder="Surname"
                    autoComplete="on"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                  />
                </div>
              </div>
              <div className="mb-4">
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Your Email"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                />
              </div>
              <div className="mb-4">
                <textarea
                  name="message"
                  id="message"
                  placeholder="Message"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                ></textarea>
              </div>
              <button
                type="submit"
                id="form-submit"
                className="w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
