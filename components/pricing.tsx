import { pricingsData } from "@/lib/data";
import clsx from "clsx";

type PricingProps = (typeof pricingsData)[number] & { isOdd: boolean };

const Pricing = ({
  type,
  price,
  description,
  features,
  isOdd,
}: PricingProps) => {
  return (
    <div
      className={clsx(
        "flex flex-col overflow-hidden overflow-x-hidden rounded-sm border-2 border-primary-950 p-6 text-left shadow-primary sm:p-8 2xl:max-w-[28rem]",
        {
          "bg-primary-50 text-primary-950 shadow-accent-700": isOdd,
          "bg-accent-700 text-primary-50 shadow-primary-950": !isOdd,
        },
      )}
    >
      <div className="flex flex-col justify-between sm:flex-row sm:gap-6 lg:flex-col lg:gap-0">
        <div>
          <div className="mb-2 font-bold sm:mb-4 sm:text-xl 2xl:text-2xl">
            {type}
          </div>
          <span className="text-2xl font-bold sm:text-4xl 2xl:text-6xl">
            {price}
            <span className="ml-2 text-sm">/month</span>
          </span>
          <p className="my-3 text-sm sm:hidden sm:text-base lg:my-5 lg:block">
            {description}
          </p>
        </div>
        <ul className="mb-3 max-w-fit flex-1 sm:mb-0 lg:mb-6">
          {features.map((feature, index) => (
            <li className="mb-2 flex space-x-2" key={index}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className={clsx("h-4 w-4 flex-shrink-0 sm:h-6 sm:w-6", {
                  "text-accent-700": isOdd,
                  "text-primary-50": !isOdd,
                })}
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span className="text-sm sm:text-base">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
      <p className="my-3 hidden text-sm sm:block sm:text-base lg:my-5 lg:hidden">
        {description}
      </p>
      <button
        type="button"
        className={clsx(
          "mt-auto inline-block rounded px-3 py-2 text-center text-sm font-semibold sm:px-5 sm:py-3 sm:text-base",
          {
            "bg-accent-700 text-primary-50": isOdd,
            "bg-primary-50 text-accent-700": !isOdd,
          },
        )}
      >
        Get Started
      </button>
    </div>
  );
};
export default Pricing;
