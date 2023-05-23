import * as React from 'react';
interface Props {
    isAuthenticated: Boolean;
    userName: string | undefined | null;
}
export default function LoginButton({ isAuthenticated, userName }: Props): React.JSX.Element;
export {};
