import React from 'react';
import { Scissors, Clock, Phone, MapPin, Instagram, Facebook } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div 
        className="h-screen bg-cover bg-center relative"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80&w=2000")'
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-4">Beauty Salon SAKURA</h1>
            <p className="text-xl mb-8">美しさの新しい発見</p>
            <button className="bg-white text-black px-8 py-3 rounded-full hover:bg-opacity-90 transition">
              予約する
            </button>
          </div>
        </div>
      </div>

      {/* Concept Section */}
      <div className="py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Concept</h2>
          <p className="text-lg leading-relaxed text-gray-700 mb-8">
            Beauty Salon SAKURAは、お客様一人ひとりの個性を大切にし、<br />
            その方に合った最適なヘアスタイルを提案いたします。<br />
            落ち着いた空間で、日常から離れ、<br />
            心身ともにリラックスしていただける場所を目指しています。
          </p>
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4">上質な技術</h3>
              <p className="text-gray-600">経験豊富なスタイリストによる、確かな技術でお客様の理想を実現します。</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4">こだわりの商材</h3>
              <p className="text-gray-600">髪に優しい厳選されたヘアケア商品を使用し、髪本来の美しさを引き出します。</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4">くつろぎの空間</h3>
              <p className="text-gray-600">静かで落ち着いた雰囲気の中で、贅沢なサロンタイムをお過ごしいただけます。</p>
            </div>
          </div>
        </div>
      </div>

      {/* About Us Section */}
      <div className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">About Us</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&q=80&w=1000"
                alt="Salon Interior"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div>
              <p className="text-lg leading-relaxed text-gray-700 mb-6">
                2020年にオープンしたBeauty Salon SAKURAは、「美しさの新しい発見」をコンセプトに、
                お客様一人ひとりに寄り添った丁寧な施術を心がけています。
              </p>
              <p className="text-lg leading-relaxed text-gray-700 mb-6">
                経験豊富なスタイリストたちが、最新のトレンドと確かな技術で、
                お客様の理想のスタイルを実現いたします。
              </p>
              <p className="text-lg leading-relaxed text-gray-700">
                また、店内はナチュラルな木材を基調とした落ち着いた空間で、
                日常の喧騒から離れ、ゆったりとした時間をお過ごしいただけます。
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="py-20 px-4 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">メニュー</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gray-50 p-6 rounded-lg text-center">
            <Scissors className="w-12 h-12 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">カット</h3>
            <p className="text-gray-600">¥4,800〜</p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg text-center">
            <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center">
              <span className="text-2xl">💇</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">カラー</h3>
            <p className="text-gray-600">¥8,000〜</p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg text-center">
            <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center">
              <span className="text-2xl">✨</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">トリートメント</h3>
            <p className="text-gray-600">¥6,000〜</p>
          </div>
        </div>
      </div>

      {/* Staff Section */}
      <div className="bg-gray-50 py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">スタイリスト</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <img
                src="/staff1.jpg?auto=format&fit=crop&q=80&w=400"
                alt="Stylist 1"
                className="w-48 h-48 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold">田中 美咲</h3>
              <p className="text-gray-600">チーフスタイリスト</p>
            </div>
            <div className="text-center">
              <img
                src="https://images.unsplash.com/photo-1595152772835-219674b2a8a6?auto=format&fit=crop&q=80&w=400"
                alt="Stylist 2"
                className="w-48 h-48 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold">佐藤 健一</h3>
              <p className="text-gray-600">スタイリスト</p>
            </div>
            <div className="text-center">
              <img
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400"
                alt="Stylist 3"
                className="w-48 h-48 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold">山田 愛子</h3>
              <p className="text-gray-600">スタイリスト</p>
            </div>
          </div>
        </div>
      </div>

      {/* Information Section */}
      <div className="py-20 px-4 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold mb-8">営業時間・アクセス</h2>
            <div className="space-y-4">
              <div className="flex items-center">
                <Clock className="w-6 h-6 mr-3" />
                <div>
                  <p className="font-semibold">営業時間</p>
                  <p className="text-gray-600">10:00 - 20:00（最終受付 19:00）</p>
                  <p className="text-gray-600">定休日：毎週月曜日</p>
                </div>
              </div>
              <div className="flex items-center">
                <MapPin className="w-6 h-6 mr-3" />
                <div>
                  <p className="font-semibold">住所</p>
                  <p className="text-gray-600">〒150-0002 東京都渋谷区渋谷1-1-1</p>
                </div>
              </div>
              <div className="flex items-center">
                <Phone className="w-6 h-6 mr-3" />
                <div>
                  <p className="font-semibold">電話番号</p>
                  <p className="text-gray-600">03-1234-5678</p>
                </div>
              </div>
            </div>
          </div>
          <div className="h-[400px] rounded-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.7479754722366!2d139.70071687677415!3d35.65858013126095!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188ca7c2087f63%3A0x5e011c9f5cb0f8f4!2z5riL6LC35YWs5ZyS!5e0!3m2!1sja!2sjp!4v1709574844317!5m2!1sja!2sjp"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h3 className="text-2xl font-bold">Beauty Salon SAKURA</h3>
              <p className="mt-2">美しさの新しい発見</p>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-gray-300">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-gray-300">
                <Facebook className="w-6 h-6" />
              </a>
            </div>
          </div>
          <div className="mt-8 text-center text-gray-400">
            <p>&copy; 2024 Beauty Salon SAKURA. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;