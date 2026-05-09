const OrderInformation = () => {
  return (
    <div className="bg-white">
        <div className="py-5 px-6 border-b border-gray-200">
            <h2 className="font-bold text-lg">Order Information</h2>
        </div>
        <div className="py-5 px-6">
          <div className="input-group">
            <label htmlFor="full_name">Full Name</label>
            <input type="text" placeholder="Type your full name" id="full_name"></input>
          </div>
          <div className="input-group">
            <label htmlFor="wa_number">Whatsapp Number</label>
            <input type="text" placeholder="+62xxxx" id="Wa_number"></input>
          </div>
          <div className="input-group mb-0!">
            <label htmlFor="address">Shipping Address</label>
            <textarea placeholder="Example Street, 18, West Jakarta, Indonesia, 66521" id="address" rows={6} />
          </div>
        </div>
    </div>
  );
};

export default OrderInformation;