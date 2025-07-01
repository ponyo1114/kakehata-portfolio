export function HeroSection() {
  return (
    <section id="home" className="min-h-screen flex items-center bg-black text-white relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-6xl md:text-8xl font-bold leading-tight">
              掛端宗介
              <br />
            </h1>
            <div className="w-24 h-1 bg-white"></div>
            <p className="text-xl text-gray-300">フロントエンジニア</p>
          </div>
          <div className="relative">
            <div className="bg-green-500 w-full h-96 lg:h-[600px] flex items-center justify-center">
              <div className="text-white text-6xl lg:text-8xl font-bold transform rotate-90 origin-center">
                Kakehata<br />Sosuke
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}