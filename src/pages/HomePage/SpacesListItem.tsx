import React from "react";
import {
  SpaceDiscountType,
  SpaceItemType,
} from "../../features/spaces/spaceTypes";
import { cn } from "../../lib/utils";
import Button from "../../components/ui/Button";
import { DirectionIcon, ThreeChevronRight } from "../../icons/icons";

const SpacesListItem: React.FC<{ space: SpaceItemType }> = ({ space }) => {
  return (
    <div className="p-4 border-secondary_stroke shadow-md bg-white rounded-md flex flex-col gap-3">
      <div className="flex items-start justify-between gap-3">
        <div className="text-h4 font-medium">{space.name}</div>
        <Button variant="secondary" size="md">
          <div className="flex items-center flex-col">
            <DirectionIcon />
            <div className="text-xs mt-2 text-text_secondary font-normal">
              6 kms
            </div>
          </div>
        </Button>
      </div>
      <div
        className="bg-cover lg:h-[220px] h-[200px] rounded-md relative bg-center"
        style={{
          backgroundImage: `url(/${space.images[0]})`,
        }}
      >
        <div
          className="text-sm gap-2 absolute flex items-center justify-center p-2 top-3 left-3 rounded-md text-primary border border-primary_stroke/50"
          style={{
            background:
              "linear-gradient(100.27deg, #263238 22.66%, #2F4B59 67.67%)",
          }}
        >
          <svg
            width="19"
            height="20"
            viewBox="0 0 19 20"
            fill="none"
            className="fill-none text-primary"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g filter="url(#filter0_d_1_1072)">
              <path
                d="M15.8333 10.4583C15.8333 9.54833 15.2325 8.78416 14.4042 8.52166C14.5675 8.22999 14.6667 7.89749 14.6667 7.54166C14.6667 6.63166 14.0658 5.86749 13.2375 5.60499C13.4008 5.31333 13.5 4.98083 13.5 4.62499C13.5 3.49916 12.5842 2.58333 11.4583 2.58333H7.375C6.24917 2.58333 5.33333 3.49916 5.33333 4.62499C5.33333 4.98083 5.4325 5.31333 5.59583 5.60499C4.77333 5.86749 4.16667 6.63166 4.16667 7.54166C4.16667 7.89749 4.26583 8.22999 4.42917 8.52166C3.60667 8.78416 3 9.54833 3 10.4583C3 11.1933 3.39083 11.8233 3.97417 12.185C3.72917 12.5175 3.58333 12.9317 3.58333 13.375C3.58333 14.5008 4.49917 15.4167 5.625 15.4167H13.2083C14.3342 15.4167 15.25 14.5008 15.25 13.375C15.25 12.9317 15.1042 12.5175 14.8592 12.185C15.4425 11.8233 15.8333 11.1933 15.8333 10.4583ZM7.375 3.74999H11.4583C11.9425 3.74999 12.3333 4.14083 12.3333 4.62499C12.3333 5.10916 11.9425 5.49999 11.4583 5.49999H7.375C6.89083 5.49999 6.5 5.10916 6.5 4.62499C6.5 4.14083 6.89083 3.74999 7.375 3.74999ZM6.20833 6.66666H12.625C13.1092 6.66666 13.5 7.05749 13.5 7.54166C13.5 8.02583 13.1092 8.41666 12.625 8.41666H6.20833C5.72417 8.41666 5.33333 8.02583 5.33333 7.54166C5.33333 7.05749 5.72417 6.66666 6.20833 6.66666ZM4.75 13.375C4.75 12.8908 5.14083 12.5 5.625 12.5H7.66667V14.25H5.625C5.14083 14.25 4.75 13.8592 4.75 13.375ZM13.2083 14.25H11.1667V12.5H13.2083C13.6925 12.5 14.0833 12.8908 14.0833 13.375C14.0833 13.8592 13.6925 14.25 13.2083 14.25ZM13.7917 11.3333H11.0617C10.8167 10.6567 10.175 10.1667 9.41667 10.1667C8.65833 10.1667 8.01667 10.6567 7.77167 11.3333H5.04167C4.5575 11.3333 4.16667 10.9425 4.16667 10.4583C4.16667 9.97416 4.5575 9.58333 5.04167 9.58333H13.7917C14.2758 9.58333 14.6667 9.97416 14.6667 10.4583C14.6667 10.9425 14.2758 11.3333 13.7917 11.3333Z"
                className="fill-primary"
              />
            </g>
            <defs>
              <filter
                id="filter0_d_1_1072"
                x="0"
                y="0.583328"
                width="18.8333"
                height="18.8333"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="1" />
                <feGaussianBlur stdDeviation="1.5" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 1 0 0 0 0 0.815755 0 0 0 0 0.309082 0 0 0 0.6 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_1_1072"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_1_1072"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>
          Honeykomb
        </div>
      </div>
      <div className="grid grid-cols-2 gap-3">
        {Object.entries(space.day_pass_discounts_percentage).map(
          ([key, value], i) => (
            <ButtonComponent
              variant={i == 0 ? "secondary" : "primary"}
              key={key}
              discount={value}
              days={Number(key)}
              price={space.day_pass_price}
            />
          )
        )}
      </div>
    </div>
  );
};

export default SpacesListItem;

const ButtonComponent = ({
  variant,
  discount,
  days,
  price,
}: {
  variant: "primary" | "secondary";
  discount: SpaceDiscountType;
  days: number;
  price: number;
}) => {
  const calculatePrice = (price: number, days: number, discount: number) => {
    const totalPrice = price * days;
    if (discount == 0) return totalPrice;
    let discountAmt = (totalPrice * discount) / 100;
    return totalPrice - discountAmt;
  };

  return (
    <Button
      variant={variant}
      className="w-full"
      size="md"
      textTag={discount.value > 0 ? discount.value + "% discount" : undefined}
    >
      <div className="flex gap-2 justify-start text-left items-center">
        <div className="flex-grow">
          <div className={cn("font-normal mb-2", "text-text_secondary")}>
            {days == 1 ? "Day" : "Bulk"} Pass
          </div>
          <div className="text-text_primary text-h4 font-medium inline">
            {"₹" + " " + calculatePrice(price, days, discount.value)}
          </div>
          <div className="inline text-sm font-normal text-text_secondary">
            / {days} Day{days > 1 ? "s" : ""}{" "}
          </div>
        </div>
        <div>
          <ThreeChevronRight color="text_primary" />
        </div>
      </div>
    </Button>
  );
};
