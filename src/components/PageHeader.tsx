import React from 'react';

interface PageHeaderProps {
    title: string;
}

function PageHeader({ title }: PageHeaderProps): JSX.Element {
    return (
        <div className="pl-5 py-5">
            <header className="text-4xl text-violet-600 font-bold">{title}</header>
        </div>
    );
}

export default PageHeader;