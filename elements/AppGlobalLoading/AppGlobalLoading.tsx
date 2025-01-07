import { createRef, forwardRef, useImperativeHandle, useState } from "react";
import { YStack, Spinner } from "tamagui";

export const appGlobalLoadingRef = createRef();

export const AppGlobalLoading = forwardRef((props, ref) => {
  const [show, setShow] = useState(false);

  useImperativeHandle(ref, () => ({
    show: () => setShow(true),
    hide: () => setShow(false),
  }));

  if (!show) return null;
  return (
    <YStack
      flex={1}
      alignItems="center"
      justifyContent="center"
      position="absolute"
      inset={0}
      backgroundColor={'rgba(0, 0, 0, 0.2)'}
    >
      <YStack
        alignItems="center"
        justifyContent="center"
        width={100}
        height={80}
        borderRadius={12}
        backgroundColor={"rgba(0, 0, 0, 0.6)"}
      >
        <Spinner color={"$background"} size="large" />
      </YStack>
    </YStack>
  );
});
