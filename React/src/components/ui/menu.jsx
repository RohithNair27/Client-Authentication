import { Menu as ChakraMenu, Portal } from "@chakra-ui/react";
import * as React from "react";

export const MenuContent = React.forwardRef(function MenuContent(props, ref) {
  const { portalled = true, portalRef, ...rest } = props;
  return (
    <Portal disabled={!portalled} container={portalRef}>
      <ChakraMenu.Positioner>
        <ChakraMenu.Content ref={ref} {...rest} />
      </ChakraMenu.Positioner>
    </Portal>
  );
});

export const MenuRadioItemGroup = ChakraMenu.RadioItemGroup;
export const MenuContextTrigger = ChakraMenu.ContextTrigger;
export const MenuRoot = ChakraMenu.Root;
export const MenuSeparator = ChakraMenu.Separator;

export const MenuItem = ChakraMenu.Item;
export const MenuItemText = ChakraMenu.ItemText;
export const MenuItemCommand = ChakraMenu.ItemCommand;
export const MenuTrigger = ChakraMenu.Trigger;
