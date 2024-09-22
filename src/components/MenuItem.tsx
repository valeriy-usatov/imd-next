import Link from "next/link";
import { IconType } from 'react-icons';

type HeaderProps = {
  title: string;
  address: string;
  Icon: IconType;
};

const MenuItem = ({ title, address, Icon }:HeaderProps) => {
  return (
        <Link className="hover:text-amber-500" href={address}>
            <Icon className="text-2xl sm:hidden" />
            <p className="uppercase hidden sm:inline text-sm" >{title}</p>
        </Link>
    );
};

export default MenuItem;
