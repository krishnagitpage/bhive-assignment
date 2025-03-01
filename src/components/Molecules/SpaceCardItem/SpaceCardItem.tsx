import React from "react";
import { SpaceItemType } from "../../../features/spaces/spaceTypes";

import Button from "../../Atoms/Button";
import { DirectionIcon, Honeykomb } from "../../../icons/icons";
import ButtonContentPriceDiscount from "../ButtonContentPriceDiscount/ButtonContentPriceDiscount";

const SpaceCardItem: React.FC<{ space: SpaceItemType }> = ({ space }) => {
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
          <Button variant="secondary" size="md" className="w-full">
            <div className="flex items-center flex-col">
              <DirectionIcon />
              <div className="text-xs mt-2 text-text_secondary font-normal whitespace-nowrap">
                6 kms
              </div>
            </div>
          </Button>
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
            <ButtonContentPriceDiscount
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

export default SpaceCardItem;
