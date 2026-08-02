import { CircleCheckBig } from "lucide-react";

const PricingCard = ({ cardData }) => {
  return (
    <div
      className={`
    w-full max-w-sm mx-auto rounded-3xl border  border-gray-200 bg-white p-8 mt-5 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 relative ${cardData.recommended === true ? "border-t-4 border-t-blue-600 rounded-tl-2xl rounded-tr-2xl top-0 md:top-56 lg:top-0 lg:-mt-6" : ""}
    `}
    >
      {cardData.recommended === true ? (
        <span className="absolute -top-2 right-3 inline-block bg-blue-600 text-white text-sm font-semibold px-4 py-1 rounded-full rotate-8 shadow-lg">
          {cardData.badge}
        </span>
      ) : (
        ""
      )}
      <div className="mb-6">
        <h3 className="text-2xl font-bold text-gray-900">{cardData.plan}</h3>
        <p className="mt-2 text-sm text-gray-500">{cardData.description}</p>
      </div>

      <div className="mb-6">
        <span className="text-5xl font-extrabold text-gray-900">
          {cardData.price}$
        </span>
        <span className="text-gray-500">/month</span>
      </div>

      <button
        className={`
        w-full cursor-pointer rounded-xl bg-emerald-600 py-3 font-semibold text-white transition ${cardData.recommended === true ? "hover:bg-blue-500" : " hover:bg-emerald-700"}
        `}
      >
        {cardData.buttonText}
      </button>

      <div className="my-8 border-t border-dashed"></div>

      <ul className="space-y-3">
        {cardData.features.map((feature) => (
          <li key={feature.id} className="flex items-center gap-2">
            <CircleCheckBig className="w-5 h-5 text-blue-500" />

            <span>{feature.title}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PricingCard;
