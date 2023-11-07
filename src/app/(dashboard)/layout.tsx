import NavbarUI from '@/ui/NavbarUI';
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
