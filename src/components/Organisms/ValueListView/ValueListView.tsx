import React from "react";
import { ValueCardType } from "../../Molecules/ValueCardItem/ValueCardTypes";
import ValueCardItem from "../../Molecules/ValueCardItem/ValueCardItem";
import { cn } from "../../../lib/utils";

type ValueListProps = {
  items: ValueCardType[];
};

const borderClasses = (i: number) => {
  // for xl screens
  let classNames = "";
  if (i >= 0 && i <= 3) {
    classNames = cn(
      classNames,
      i < 3 ? "xl:border-e" : "xl:border-0",
      "xl:border-b"
    );
  }

  if (i >= 4 && i <= 7) {
    classNames = cn(
      classNames,
      i < 7 ? "xl:border-e" : "xl:border-e-0",
      "xl:border-b-0"
    );
  }

  // for lg screens
  if (i >= 0 && i <= 2) {
    classNames = cn(classNames, i < 2 ? "lg:border-e" : "", "lg:border-b");
  }

  if (i > 2 && i <= 5) {
    classNames = cn(classNames, i < 5 ? "lg:border-e" : "", "lg:border-b");
  }

  if (i > 5 && i < 8) {
    classNames = cn(classNames, i < 8 ? "lg:border-e" : "");
  }

  return classNames;
};

const ValueListView: React.FC<ValueListProps> = ({ items }) => {
  return (
    <div className="grid grid-cols-12 gap-5 xl:gap-0 lg:gap-0 ">
      {items.map((item, i) => {
        return (
          <div
            key={item.id}
            className={cn(
              `xl:col-span-3 lg:col-span-4 col-span-6 
                  xl:h-[80px] lg:h-[100px]
                  border-gray-300
                  bg-white lg:bg-transparent xl:bg-transparent 
                  hover:bg-white 
                  border-0`,
              borderClasses(i)
            )}
          >
            <ValueCardItem item={item} />
          </div>
        );
      })}
    </div>
  );
};

export default ValueListView;
