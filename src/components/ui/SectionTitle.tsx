type Props = {
  title: string;
  subTitle: string;
  className?: string;
  light?: boolean;
};

const SectionTitle = (props: Props) => {
  return (
    <div className={`${props.className} text-center`}>
      <span className="text-accent capitalize">{props.subTitle}</span>
      <h1
        className={`text-3xl capitalize font-bold mt-2 ${
          props.light ? "text-white" : "text-foreground"
        }`}
      >
        {props.title}
      </h1>
    </div>
  );
};

export default SectionTitle;
