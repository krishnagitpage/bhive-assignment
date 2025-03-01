import { ThreeChevronRight } from "../../../icons/Icons";
import { cn } from "../../../lib/utils";
import Button from "../../Atoms/Button";

const ButtonContentPriceDiscount = ({
  variant,
  discount,
  days,
  price,
}: {
  variant: "primary" | "secondary";
  discount: { value: number; message: string };
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

export default ButtonContentPriceDiscount;
