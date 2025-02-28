import { ValuePropositionItemType } from "./Types";
import { cn } from "../../lib/utils";

const ValueItem = ({
  item,
  className = "",
}: {
  item: ValuePropositionItemType;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "group flex lg:flex-row flex-col gap-3 items-center rounded-lg px-5 py-3 hover:shadow-md transition-all duration-500 w-full h-full relative",
        className
      )}
    >
      <div>{item.iconSVG}</div>
      <div className="flex-grow-1 ">
        <div
          className="text-text_primary transition-all duration-200 ease-in-out
            group-hover:lg:font-semibold 
            group-hover:lg:-translate-y-2.5 
            group-hover:lg:translate-x-0.5
            md:text-center
            sm:text-center
        "
        >
          {item.title}
        </div>
        <div
          className="transition-opacity duration-100 ease-in-out flex-grow-1 text-text_secondary w-full
            opacity-0   
            group-hover:opacity-100 
            
            lg:block
            hidden
            absolute bottom-3

            text-sm"
        >
          {item.description}
        </div>
      </div>
    </div>
  );
};

export default ValueItem;
