import React, { PropsWithChildren } from "react";

type Props = PropsWithChildren<{}>;

function Wizard({ children }: Props) {
  return <>{children}</>;
}

export default Wizard;
