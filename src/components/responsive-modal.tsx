import { useMedia } from "react-use";

import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Drawer, DrawerContent, DrawerTitle } from "./ui/drawer";

interface ResponsiveModalProps {
  open: boolean;
  children: React.ReactNode;
  onOpenChange: (open: boolean) => void;
}

export const ResponsiveModal = ({
  open,
  children,
  onOpenChange,
}: ResponsiveModalProps) => {
  const isDesktop = useMedia("(min-width:1024px)", true);

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogTitle hidden />
        <DialogContent className="hide-scrollbar max-h-[85vh] w-full overflow-y-auto border-none p-0 sm:max-w-lg">
          {children}
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Drawer open={open} onOpenChange={onOpenChange}>
      <DrawerTitle hidden />
      <DrawerContent>
        <div className="hide-scrollbar max-h-[85vh] overflow-y-auto">
          {children}
        </div>
      </DrawerContent>
    </Drawer>
  );
};
