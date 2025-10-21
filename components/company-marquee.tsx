"use client";

const companies = [
  "Harvard University",
  "MIT",
  "Stanford",
  "UC Berkeley",
  "Oxford",
  "Cambridge",
  "IIT Bombay",
  "NUS",
  "Yale",
  "Columbia",
];

export default function CompanyMarquee() {
  return (
    <div className="w-full overflow-hidden bg-white py-3 ">
      <div className="flex whitespace-nowrap animate-marquee text-gray-700 font-medium text-sm sm:text-base">
        {[...companies, ...companies].map((name, index) => (
          <span key={index} className="mx-6">
            {name}
          </span>
        ))}
      </div>
    </div>
  );
}
