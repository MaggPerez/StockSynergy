import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react'

interface PageHeaderProps {
    title: string;
    pathTo?: string;
    chevronName?: string;
}

function PageHeader({ title, pathTo, chevronName }: PageHeaderProps): JSX.Element {
    let newPath = pathTo?.replace("/", "");
    return (
        <div className="flex flex-col gap-4 pl-4 pt-16">
            { pathTo &&
                <Link to={pathTo} className=' flex items-center gap-2 w-28'>
                    <div className='flex gap-3 lg:hidden items-center'><ChevronLeft size={25} className='bg-gray-200 dark:bg-common-black rounded-xl' /><p>{chevronName}</p></div>
                </Link>
            }
            <header className="text-3xl text-violet-600 font-bold">{title}</header>
        </div>
    );
}

export default PageHeader;