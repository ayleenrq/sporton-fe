import PriceFormatter from "@/app/utils/price-formatter";
import Image from "next/image";
import Button from "../ui/button";
import { cartList } from "../ui/cart-popup";
import { FiArrowRight, FiCreditCard, FiTrash2 } from "react-icons/fi";
import CardWithHeader from "../ui/card-with-header";

const CardItems = () => {
  const totalPrice = cartList.reduce(
    (total, item) => total + item.price * item.qty,
    0,
  );

  return (
    <CardWithHeader title="Cart Items">
      <div className="overflow-auto max-h-75">
        {cartList.map((item, index) => (
          <div className="border-b border-gray-100 p-4 flex gap-3" key={index}>
            <div className="bg-primary-light aspect-square w-16 flex justify-center items-center">
              <Image
                src={`/images/products/${item.imgUrl}`}
                width={63}
                height={63}
                alt={item.name}
                className="aspect-square object-contain"
              />
            </div>
            <div className="self-center">
              <div className="text-sm font-medium">{item.name}</div>
              <div className="flex gap-3 font-medium text-xs">
                <div>{item.qty}x</div>
                <div className="text-primary">{PriceFormatter(item.price)}</div>
              </div>
            </div>
            <Button
              size="small"
              variant="ghost"
              className="w-7 h-7 p-0! self-center ml-auto"
            >
              <FiTrash2 />
            </Button>
          </div>
        ))}
      </div>
      <div className="px-6 py-5 shadow-[0_-3px_10px_rgba(0,0,0,0.05)]">
        <div className="flex justify-between items-center font-semibold">
          <div>Total</div>
          <div className="text-primary text-sm">
            {PriceFormatter(totalPrice)}
          </div>
        </div>
      </div>
      <div className="pb-5 px-6">
        <Button variant="dark" className="w-full">
          <FiCreditCard /> Proceed to Payment
        </Button>
      </div>
    </CardWithHeader>
  );
};

export default CardItems;
