export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-gray-100">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-5xl font-bold mb-8 text-black">自己紹介</h2>
            <div className="space-y-6 text-lg text-gray-700">
              <p>
                <strong className="whitespace-nowrap">
                  長岡技術科学大学 工学部 情報・経営システム工学分野 3学年の掛端宗介です。
                </strong>
              </p>
              <p className="whitespace-nowrap">
                技大祭実行委員の情報局に所属しており、フロントエンドに興味があります。
              </p>
              <p>主にHtml,CSS,TypeScriptについて勉強しています。</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}