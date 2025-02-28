import React from "react";
import {
  SpaceDiscountType,
  SpaceItemType,
} from "../../features/spaces/spaceTypes";
import { cn } from "../../lib/utils";
import Button from "../../components/ui/Button";
import { DirectionIcon, Honeykomb, ThreeChevronRight } from "../../icons/icons";

const SpacesListItem: React.FC<{ space: SpaceItemType }> = ({ space }) => {
  return (
    <div
      className="
        p-4 border-secondary_stroke shadow-md bg-white rounded-md 
        flex flex-col gap-3"
    >
      <div className="flex items-start justify-between gap-3">
        <div className="text-h4 font-medium flex-grow">{space.name}</div>
        <a
          href={space.google_maps_url}
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="">
            <Button
              variant="secondary"
              size="md"
              className="w-full break-keep "
            >
              <div className="flex items-center flex-col">
                <DirectionIcon />
                <div className="text-xs mt-2 text-text_secondary font-normal break-keep">
                  6 kms
                </div>
              </div>
            </Button>
          </div>
        </a>
      </div>
      <div
        className="bg-cover lg:h-[220px] h-[200px] rounded-md relative bg-center"
        style={{
          backgroundImage: `url(/${space.images[0]})`,
        }}
      >
        <div
          className="
            text-sm text-primary
            absolute top-3 left-3
            flex items-center justify-center gap-2
            p-2 rounded-md 
            border border-primary_stroke/50
            bg-gradient-to-r
            from-text_primary
            to-text_primary/60
          "
        >
          <Honeykomb color="primary" />
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
            / {days} Day{days > 1 ? "s" : ""}
          </div>
        </div>
        <div>
          <ThreeChevronRight color="text_primary" />
        </div>
      </div>
    </Button>
  );
};
