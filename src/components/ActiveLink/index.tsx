import { useRouter } from 'next/dist/client/router';
import Link, { LinkProps } from 'next/link';
import { ReactElement, cloneElement } from 'react';

interface AcriveLinkProps extends LinkProps {
    children: ReactElement;
    activeClassName: string;
}

export function ActiveLink({ children, activeClassName, ...rest }: AcriveLinkProps) {
    const { asPath } = useRouter();
    
    const className = asPath === rest.href
        ? activeClassName
        : '';

    return (
        <Link {...rest}>
            {cloneElement(children, {
                className,
            })}
        </Link>
    );
}