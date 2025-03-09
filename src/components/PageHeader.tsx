import React from 'react';
import { Link } from 'react-router-dom';

interface PageHeaderProps {
    title: string;
    pathTo?: string;
}

function PageHeader({ title, pathTo }: PageHeaderProps): JSX.Element {
    return (
        <div className="flex flex-col gap-4 pl-4">
            { pathTo &&
                <Link to={pathTo} className=' flex items-center gap-2'>
                    <img src="/images/back_arrow.svg" className='w-10 dark:invert' alt="" /> Back to Home
                </Link>
            }
            <header className="text-4xl text-violet-600 font-bold">{title}</header>
        </div>
    );
}

export default PageHeader;