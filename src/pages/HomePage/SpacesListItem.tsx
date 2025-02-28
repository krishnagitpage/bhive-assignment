import React from "react";
import {
  SpaceDiscountType,
  SpaceItemType,
} from "../../features/spaces/spaceTypes";
import { cn } from "../../lib/utils";
import Button from "../../components/ui/Button";

const SpacesListItem: React.FC<{ space: SpaceItemType }> = ({ space }) => {
  return (
    <div className="p-4 border-secondary_stroke shadow-md bg-white rounded-md flex flex-col gap-3">
      <div className="flex items-start justify-between gap-3">
        <div className="text-h4 font-medium">{space.name}</div>
        <Button variant="secondary" size="md">
          <div className="flex items-center flex-col">
            <svg
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 18C7.75909 18 6.58977 17.7648 5.49205 17.2943C4.39432 16.8239 3.43977 16.183 2.62841 15.3716C1.81705 14.5602 1.17614 13.6057 0.705682 12.508C0.235227 11.4102 0 10.2409 0 9C0 7.74545 0.235227 6.57273 0.705682 5.48182C1.17614 4.39091 1.81705 3.43977 2.62841 2.62841C3.43977 1.81705 4.39432 1.17614 5.49205 0.705682C6.58977 0.235227 7.75909 0 9 0C10.2545 0 11.4273 0.235227 12.5182 0.705682C13.6091 1.17614 14.5602 1.81705 15.3716 2.62841C16.183 3.43977 16.8239 4.39091 17.2943 5.48182C17.7648 6.57273 18 7.74545 18 9C18 10.2409 17.7648 11.4102 17.2943 12.508C16.8239 13.6057 16.183 14.5602 15.3716 15.3716C14.5602 16.183 13.6091 16.8239 12.5182 17.2943C11.4273 17.7648 10.2545 18 9 18ZM8.48864 15.3614C8.625 15.4977 8.78182 15.5659 8.95909 15.5659C9.13636 15.5659 9.29318 15.4977 9.42955 15.3614L15.3205 9.47045C15.4568 9.33409 15.525 9.17045 15.525 8.97955C15.525 8.78864 15.4568 8.625 15.3205 8.48864L9.42955 2.59773C9.29318 2.46136 9.13636 2.39318 8.95909 2.39318C8.78182 2.39318 8.625 2.46136 8.48864 2.59773L2.59773 8.48864C2.46136 8.625 2.39318 8.78864 2.39318 8.97955C2.39318 9.17045 2.46136 9.33409 2.59773 9.47045L8.48864 15.3614ZM5.70682 11.4341V8.16136C5.70682 7.91591 5.78182 7.71818 5.93182 7.56818C6.08182 7.41818 6.27955 7.34318 6.525 7.34318H9.92045L9.06136 6.44318L10.2068 5.29773L13.0705 8.16136L10.2068 11.025L9.06136 9.87955L9.92045 8.97955H7.34318V11.4341H5.70682ZM9 16.3636C11.0591 16.3636 12.8011 15.6511 14.2261 14.2261C15.6511 12.8011 16.3636 11.0591 16.3636 9C16.3636 6.94091 15.6511 5.19886 14.2261 3.77386C12.8011 2.34886 11.0591 1.63636 9 1.63636C6.94091 1.63636 5.19886 2.34886 3.77386 3.77386C2.34886 5.19886 1.63636 6.94091 1.63636 9C1.63636 11.0591 2.34886 12.8011 3.77386 14.2261C5.19886 15.6511 6.94091 16.3636 9 16.3636Z"
                className="fill-text_primary"
              />
            </svg>
            <div className="text-xs mt-2 text-text_secondary font-normal">
              6 kms
            </div>
          </div>
        </Button>
      </div>
      <div
        className={cn(
          "bg-cover lg:h-[220px] h-[200px] rounded-md relative bg-center"
        )}
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
    <Button variant={variant} className="w-full" size="md">
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
          <svg
            width="21"
            height="12"
            viewBox="0 0 21 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M13.7071 5.29289C14.0976 5.68342 14.0976 6.31658 13.7071 6.70711L8.70711 11.7071C8.31658 12.0976 7.68342 12.0976 7.29289 11.7071C6.90237 11.3166 6.90237 10.6834 7.29289 10.2929L11.5858 6L7.29289 1.70711C6.90237 1.31658 6.90237 0.683417 7.29289 0.292893C7.68342 -0.0976314 8.31658 -0.0976313 8.70711 0.292893L13.7071 5.29289Z"
              className="fill-text_primary/60"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M6.70711 5.29289C7.09763 5.68342 7.09763 6.31658 6.70711 6.70711L1.70711 11.7071C1.31658 12.0976 0.683417 12.0976 0.292893 11.7071C-0.0976315 11.3166 -0.0976314 10.6834 0.292893 10.2929L4.58579 6L0.292893 1.70711C-0.097631 1.31658 -0.097631 0.683417 0.292893 0.292893C0.683417 -0.0976314 1.31658 -0.0976313 1.70711 0.292893L6.70711 5.29289Z"
              className="fill-text_primary/40"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M20.7071 5.29289C21.0976 5.68342 21.0976 6.31658 20.7071 6.70711L15.7071 11.7071C15.3166 12.0976 14.6834 12.0976 14.2929 11.7071C13.9024 11.3166 13.9024 10.6834 14.2929 10.2929L18.5858 6L14.2929 1.70711C13.9024 1.31658 13.9024 0.683417 14.2929 0.292893C14.6834 -0.0976314 15.3166 -0.0976313 15.7071 0.292893L20.7071 5.29289Z"
              className="fill-text_primary"
            />
          </svg>
        </div>
      </div>
    </Button>
  );
};
