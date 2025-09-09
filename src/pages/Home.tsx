import React, { useEffect, useState } from "react";
import { FiSearch } from "react-icons/fi";
import { FaRegStar, FaStar } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

interface Coin {
  id: string;
  name: string;
  symbol: string;
  image: string;
  current_price: number;
  price_change_percentage_24h: number;
  market_cap: number;
}

interface NewsItem {
  id: string;
  title: string;
  url: string;
  imageurl?: string;
  source_info: { name: string };
  published_on: number;
}

const Home: React.FC = () => {
  const [coins, setCoins] = useState<Coin[]>([]);
  const [topCoins, setTopCoins] = useState<Coin[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [placeholders] = useState([
    "BTC/USDT",
    "ETH/USDT",
    "BNB/USDT",
    "SOL/USDT",
    "DOGE/USDT",
  ]);
  const [placeholderIndex, setPlaceholderIndex] = useState(0);
  const [favorites, setFavorites] = useState<Coin[]>([]);
  const [news, setNews] = useState<NewsItem[]>([]);
  const [loadingCoins, setLoadingCoins] = useState(true);
  const [loadingNews, setLoadingNews] = useState(true);

  //  placeholder Slide effect 
  useEffect(() => {
    const interval = setInterval(() => {
      setPlaceholderIndex((prev) => (prev + 1) % placeholders.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [placeholders.length]);

  // coins Api Fetch
  useEffect(() => {
    setLoadingCoins(true);
    fetch(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1"
    )
      .then((res) => res.json())
      .then((data: Coin[]) => {
        setCoins(data);
        setTopCoins(data.slice(0, 5));
      })
      .catch((err) => console.error(err))
      .finally(() => setLoadingCoins(false));
  }, []);

  useEffect(() => {
    setLoadingNews(true);
    fetch("https://min-api.cryptocompare.com/data/v2/news/?lang=EN")
      .then((res) => res.json())
      .then((data) => setNews(data.Data || []))
      .catch((err) => console.error(err))
      .finally(() => setLoadingNews(false));
  }, []);

 
  useEffect(() => {
    const saved = localStorage.getItem("favorites");
    if (saved) setFavorites(JSON.parse(saved));
  }, []);


  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const toggleFavorite = (coin: Coin) => {
    if (favorites.find((fav) => fav.id === coin.id)) {
      setFavorites(favorites.filter((fav) => fav.id !== coin.id));
    } else {
      setFavorites([...favorites, coin]);
    }
  };


  const filteredCoins = searchTerm
    ? coins.filter(
        (coin) =>
          coin.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          coin.symbol.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : topCoins;

  return (
    <div className="bg-gray-100 min-h-screen py-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-10">
     
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 text-center sm:text-left">
          Cryptocurrency Dashboard
        </h1>

    
        <div className="relative mb-8 max-w-md mx-auto sm:mx-0">
          <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
          <input
            type="text"
            placeholder={`Search e.g. ${placeholders[placeholderIndex]}`}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>

       
        <h2 className="text-xl sm:text-2xl font-bold mb-4">Top Coins</h2>
        {loadingCoins ? (
          <p className="text-gray-500">Loading coins...</p>
        ) : (
          <div className="overflow-x-auto mb-10">
            <table className="w-full border-collapse bg-white rounded-lg shadow-lg text-sm sm:text-base">
              <thead className="bg-gray-900 text-white">
                <tr>
                  <th className="px-3 sm:px-4 py-3 text-left">#</th>
                  <th className="px-3 sm:px-4 py-3 text-left">Coin</th>
                  <th className="px-3 sm:px-4 py-3">Price</th>
                  <th className="px-3 sm:px-4 py-3">24h Change</th>
                  <th className="px-3 sm:px-4 py-3 hidden sm:table-cell">
                    Market Cap
                  </th>
                  <th className="px-3 sm:px-4 py-3">Pin</th>
                </tr>
              </thead>
              <tbody>
                {filteredCoins.map((coin, index) => (
                  <tr
                    key={coin.id}
                    className="border-b hover:bg-gray-50 transition"
                  >
                    <td className="px-3 sm:px-4 py-3">{index + 1}</td>
                    <td className="px-3 sm:px-4 py-3 flex items-center gap-2 sm:gap-3">
                      <img
                        src={coin.image}
                        alt={coin.name}
                        className="w-6 h-6 sm:w-8 sm:h-8 rounded-full"
                      />
                      <span className="font-semibold">{coin.name}</span>
                      <span className="text-gray-500 text-xs sm:text-sm">
                        ({coin.symbol.toUpperCase()})
                      </span>
                    </td>
                    <td className="px-3 sm:px-4 py-3">
                      ${coin.current_price.toLocaleString()}
                    </td>
                    <td
                      className={`px-3 sm:px-4 py-3 font-semibold ${
                        coin.price_change_percentage_24h > 0
                          ? "text-green-500"
                          : "text-red-500"
                      }`}
                    >
                      {coin.price_change_percentage_24h.toFixed(2)}%
                    </td>
                    <td className="px-3 sm:px-4 py-3 hidden sm:table-cell">
                      ${coin.market_cap.toLocaleString()}
                    </td>
                    <td className="px-3 sm:px-4 py-3 text-center">
                      <button onClick={() => toggleFavorite(coin)}>
                        {favorites.find((fav) => fav.id === coin.id) ? (
                          <FaStar className="text-yellow-500 text-lg" />
                        ) : (
                          <FaRegStar className="text-gray-400 text-lg" />
                        )}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* Favorites */}
        {favorites.length > 0 && (
          <div className="mt-12">
            <h2 className="text-xl sm:text-2xl font-bold mb-4">
              Pinned Coins
            </h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {favorites.map((coin) => (
                <div
                  key={coin.id}
                  className="bg-white rounded-lg shadow-md p-6"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <img
                      src={coin.image}
                      alt={coin.name}
                      className="w-10 h-10 rounded-full"
                    />
                    <div>
                      <h3 className="font-bold">{coin.name}</h3>
                      <p className="text-gray-500 text-sm">
                        {coin.symbol.toUpperCase()}
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-800 font-semibold mb-2">
                    Price: ${coin.current_price.toLocaleString()}
                  </p>
                  <p
                    className={`mb-2 ${
                      coin.price_change_percentage_24h > 0
                        ? "text-green-500"
                        : "text-red-500"
                    }`}
                  >
                    24h Change: {coin.price_change_percentage_24h.toFixed(2)}%
                  </p>
                  <p className="text-gray-600">
                    Market Cap: ${coin.market_cap.toLocaleString()}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* News */}
        <div className="mt-16">
          <h2 className="text-xl sm:text-2xl text-center font-bold mb-4">
            Latest Crypto News
          </h2>
          {loadingNews ? (
            <p className="text-gray-500">Loading news...</p>
          ) : (
            <Swiper
              spaceBetween={20}
              slidesPerView={1}
              autoplay={{ delay: 5000 }}
              modules={[Autoplay]}
              className="max-w-4xl mx-auto"
            >
              {news.map((item) => (
                <SwiperSlide key={item.id}>
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block bg-white rounded-lg shadow-md overflow-hidden"
                  >
                    {item.imageurl && (
                      <img
                        src={item.imageurl}
                        alt={item.title}
                        className="w-full h-64 sm:h-80 object-cover"
                      />
                    )}
                    <div className="p-4">
                      <h3 className="font-bold text-lg">{item.title}</h3>
                      <p className="text-gray-600 text-sm mt-2">
                        {item.source_info.name}
                      </p>
                      <p className="text-gray-500 text-xs mt-1">
                        {new Date(
                          item.published_on * 1000
                        ).toLocaleDateString()}
                      </p>
                    </div>
                  </a>
                </SwiperSlide>
              ))}
            </Swiper>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
