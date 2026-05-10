type TCardWithHeaderProps = {
  title: string;
  children: React.ReactNode;
};

const CardWithHeader = ({ title, children }: TCardWithHeaderProps) => {
  return (
    <div className="bg-white">
      <div className="py-5 px-6 border-b border-gray-200">
        <h2 className="font-bold text-lg">{title}</h2>
      </div>
      {children}
    </div>
  );
};

export default CardWithHeader;
