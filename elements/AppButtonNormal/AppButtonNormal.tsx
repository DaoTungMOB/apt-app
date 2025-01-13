import React, { Children } from "react";
import { Button, ButtonProps, Spinner } from "tamagui";

type Props = React.PropsWithChildren<ButtonProps & { isLoading: boolean }>;

export function AppButtonNormal(props: Props) {
  const { children, isLoading, ...rest } = props;

  const renderContent = () => {
    if (!isLoading) return children;
    return <Spinner color={"$background"} />;
  };
  return (
    <Button bg={"$tint"} color={"$background"} disabled={isLoading} fontFamily={'$semiBold'} fos={16} {...rest}>
      {renderContent()}
    </Button>
  );
}
