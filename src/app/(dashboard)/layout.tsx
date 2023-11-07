import NavbarUI from '@/components/NavbarComponent';
import React from 'react';

interface Props {
    children: React.ReactNode;
}

export default function DashboardLayout({ children }: Readonly<Props>) {
    return (
        <div>
            <NavbarUI />
            {children}
        </div>
    );
}
