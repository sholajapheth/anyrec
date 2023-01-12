export const PageTitle = ({ children, padding, className }: any) => (
  <p
    className={`font-[900] laptop:text-[50px] text-[24px] ${
      padding && "laptop:my-[4rem]"
    } ${className}`}
  >
    {children}
  </p>
);

export const PageSubTitle = ({ children }: any) => (
  <p className="font-[500] laptop:text-[20px] text-[15px] ">{children}</p>
);
