import PricingCard from "../PricingCard/PricingCard";

const AllPricingCard = ({ pricingCardData }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
          Start Growing Today
        </h2>

        <p className="mt-4 text-gray-600 text-base sm:text-lg leading-relaxed">
          Choose a plan that fits your needs. Get access to our team of
          designers and developers ready to help you grow.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8 justify-center">
        {pricingCardData.map((cardData) => (
          <PricingCard key={cardData.id} cardData={cardData} />
        ))}
      </div>
    </div>
  );
};

export default AllPricingCard;
