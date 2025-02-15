import Image from "next/image";

export default function Blog() {
  const blogPosts = [
    {
      date: "24 Mar 2021",
      author: "TemplateMo",
      category: "Branding",
      title: "SEO Agency & Digital Marketing",
      excerpt:
        "Lorem ipsum dolor sit amet, consectetur and sed doer ket eismod tempor incididunt ut labore et dolore magna...",
    },
    {
      date: "18 Mar 2021",
      title: "New Websites & Backlinks",
      excerpt: "Lorem ipsum dolor sit amsecteturii and sed doer ket eismod...",
    },
    {
      date: "14 Mar 2021",
      title: "SEO Analysis & Content Ideas",
      excerpt: "Lorem ipsum dolor sit amsecteturii and sed doer ket eismod...",
    },
    {
      date: "06 Mar 2021",
      title: "SEO Tips & Digital Marketing",
      excerpt: "Lorem ipsum dolor sit amsecteturii and sed doer ket eismod...",
    },
  ];

  return (
    <section id="blog" className="py-20 bg-gray-50 relative -z-50">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">
          Check Out What Is <span className="text-blue-600">Trending</span> In
          Our Latest <span className="text-red-600">News</span>
        </h2>
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <Image
              src="/placeholder.svg?height=400&width=600"
              alt="Featured blog post"
              width={600}
              height={400}
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <div className="flex items-center text-sm text-gray-600 mb-4">
                <span className="mr-4">{blogPosts[0].date}</span>
                <span className="mr-4">{blogPosts[0].author}</span>
                <span>{blogPosts[0].category}</span>
              </div>
              <h3 className="text-2xl font-semibold mb-4">
                {blogPosts[0].title}
              </h3>
              <p className="text-gray-600 mb-4">{blogPosts[0].excerpt}</p>
              <a
                href="#"
                className="inline-block bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition duration-300"
              >
                Discover More
              </a>
            </div>
          </div>
          <div className="space-y-8">
            {blogPosts.slice(1).map((post, index) => (
              <div
                key={index}
                className="flex bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <div className="p-6 flex-grow">
                  <span className="text-sm text-gray-600 mb-2 block">
                    {post.date}
                  </span>
                  <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                  <p className="text-gray-600">{post.excerpt}</p>
                </div>
                <Image
                  src="/placeholder.svg?height=150&width=150"
                  alt={post.title}
                  width={150}
                  height={150}
                  className="w-1/3 object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
