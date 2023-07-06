import { FC, PropsWithChildren } from "react";

export const PageContainer: FC<PropsWithChildren> = ({ children }) => {
  return <div className="container mx-auto mt-4 flex-1">{children}</div>;
};
