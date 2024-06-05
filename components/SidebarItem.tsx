import { IconType } from "react-icons";
import Link from "next/link";
import { twMerge } from "tailwind-merge";

interface SidebarItemsProps {
  icon: IconType;
  label: string;
  active?: boolean;
  href: string;
}

const SidebarItem: React.FC<SidebarItemsProps> = ({
  icon: Icon,
  label,
  active,
  href,
}) => {
  if (!href) {
    console.error("The `href` prop is required and cannot be `undefined`.");
    return null;
  }

  return (
    <Link
      href={href}
      className={twMerge(
        `
flex flex-row h-auto items-center w-full gap-x-4 text-md font-mendium cursor-pointer hover:text-white transition text-neutral-400 py-1`,
        active && "text-white"
      )}
    >
      {" "}
      <Icon size={26} />
      <p className="truncate w-full">{label}</p>
    </Link>
  );
};

export default SidebarItem;
