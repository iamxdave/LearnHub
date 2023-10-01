type TitleProps = {
  type?: string;
  children: React.ReactNode;
};

const Title = ({ type, children }: TitleProps) => {
  return (
    <div className="mb-8 text-center">
      <span className="font-bold uppercase text-accent-700">{type}</span>
      <h2 className="text-xl font-semibold capitalize sm:text-4xl">
        {children}
      </h2>
    </div>
  );
};
export default Title;
