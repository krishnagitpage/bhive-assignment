import { ValueCardType } from "./ValueCardTypes";
import { cn } from "../../../lib/utils";

const ValueCardItem = ({
  item,
  className = "",
}: {
  item: ValueCardType;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        `group 
        flex lg:flex-row flex-col gap-3 items-center 
        rounded-lg 
        px-5 py-3 
        hover:shadow-md 
        transition-all duration-500 
        w-full h-full 
        relative`,
        className
      )}
    >
      <div>{item.iconSVG}</div>
      <div className="flex-grow-1">
        <div
          className="
            text-text_primary lg:text-left text-center

            group-hover:lg:font-semibold group-hover:lg:-translate-y-2.5 group-hover:lg:translate-x-0.5
            
            transition-all duration-200 ease-in-out
        "
        >
          {item.title}
        </div>
        <div
          className="
            flex-grow-1
            text-text_secondary text-sm
            w-full
            group-hover:opacity-100 opacity-0 
            
            lg:block hidden 
            absolute lg:bottom-3 

            transition-opacity duration-100 ease-in-out
          "
        >
          {item.description}
        </div>
      </div>
    </div>
  );
};

export default ValueCardItem;
