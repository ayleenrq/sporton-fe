"use client";

import PriceFormatter from "@/app/utils/price-formatter";
import { FiCheckCircle, FiCreditCard } from "react-icons/fi";
import CardWithHeader from "../ui/card-with-header";
import FileUpload from "./file-upload";
import Button from "../ui/button";
import { useRouter } from "next/navigation";

const PaymentSteps = () => {
  const { push } = useRouter();

  const uploadAndConfirm = () => {
    push("/order-status/1");
  };

  return (
    <CardWithHeader title="Payment Steps">
      <div className="div p-5">
        <ol className="list-decimal text-xs pl-2 flex flex-col gap-4 mb-5">
          <li>
            Transfer the total amount of <span></span> to your preferred bank
            account listed under 'Payment Options' (BCA, Mandiri, or BTPN).
          </li>
          <li>
            After completing the transfer, <b>keep the payment receipt</b> or a
            screenshot of the transfer confirmation. This will be needed for the
            next step.
          </li>
          <li>
            Upload the payment receipt/screenshot using the{" "}
            <b>'Upload Receipt & Confirm'</b> button below to validate your
            transaction.
          </li>
        </ol>
        <FileUpload />
      </div>

      <div className="px-6 py-5 shadow-[0_-3px_10px_rgba(0,0,0,0.05)]">
        <div className="flex justify-between items-center font-semibold">
          <div>Total</div>
          <div className="text-primary text-sm">{PriceFormatter(45000)}</div>
        </div>
      </div>
      <div className="pb-5 px-6">
        <Button variant="dark" className="w-full" onClick={uploadAndConfirm}>
          <FiCheckCircle /> Upload Receipt & Confirm
        </Button>
      </div>
    </CardWithHeader>
  );
};

export default PaymentSteps;
