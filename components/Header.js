import Image from 'next/image';
import {
    BadgeCheckIcon,
    CollectionIcon,
    HomeIcon,
    LightBulbIcon,
    SearchIcon,
    UserIcon
} from "@heroicons/react/outline";
import Headeritem from './Headeritem';

function Header() {
    return (
        <header className="flex flex-col sm:flex-row m-5 justify-between items-center h-auto">
            <div className="flex flex-grow max-w-2xl justify-evenly">
                <Headeritem title="HOME" Icon={HomeIcon}/>
                <Headeritem title="TRENDING" Icon={LightBulbIcon}/>
                <Headeritem title="VERIFIED" Icon={BadgeCheckIcon}/>
                <Headeritem title="COLLECTIONS" Icon={CollectionIcon}/>
                <Headeritem title="SEARCH" Icon={SearchIcon}/>
                <Headeritem title="ACCOUNT" Icon={UserIcon}/>
            </div>
            <Image 
                className="object-contain"
                src="https://links.papareact.com/ua6" width={200} height={100} alt="hulu logo"/>
        </header>
    )
}

export default Header
