export default function CTASection() {
  return (
    <section className="container mx-auto px-4 md:px-6 py-12 md:py-16">
      <div className="text-center">
        <div className="bg-[#1a3535] rounded-2xl p-8 md:p-12 border border-[#2a4545]">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Ready to start shopping?
          </h3>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Explore our collection of premium vendors and discover unique products tailored to your style and needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-[#159C47] hover:bg-[#128739] text-white px-8 py-3 rounded-xl font-semibold transition-colors">
              Browse All Vendors
            </button>
            <button className="bg-[#2a4545] hover:bg-[#3a5555] text-white px-8 py-3 rounded-xl font-semibold transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}