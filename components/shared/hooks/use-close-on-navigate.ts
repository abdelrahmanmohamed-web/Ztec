import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export function useCloseOnNavigate() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return { isOpen, setIsOpen };
}
