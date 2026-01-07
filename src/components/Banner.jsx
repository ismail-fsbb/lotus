import { useEffect, useState } from "react";

const slides = [
  {
    id: 1,
    image: "/games-images-1.jpg",
    title: "PUBG Mobile",
  },
  {
    id: 2,
    image: "/games-images-4.jpg",
    title: "Fortnite",
  },
  {
    id: 3,
    image: "/games-images-7.jpg",
    title: "Minecraft",
  },
];

export default function Banner() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);
  return (
    <>
      <div className="relative w-full h-[300px] md:h-[450px] overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-700 ${
              index === current ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <h2 className="text-white text-3xl md:text-5xl font-bold">
                {slide.title}
              </h2>
            </div>
          </div>
        ))}

        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-3 h-3 rounded-full ${
                current === index ? "bg-white" : "bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>
    </>
  );
}
