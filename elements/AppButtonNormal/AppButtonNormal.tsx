import React, { Children } from "react";
import { Button, ButtonProps } from "tamagui";

type Props = React.PropsWithChildren<ButtonProps>;

export function AppButtonNormal(props: Props) {
  const { children, ...rest } = props;
  return (
    <Button
      bg={'$tint'} color={'$background'}
      {...rest}
    >
      {children}
    </Button>
  );
}
