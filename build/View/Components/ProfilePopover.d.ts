import * as React from 'react';
interface Props {
    isAuthenticated: Boolean;
    userPicture: string | undefined;
}
export default function ProfilePopover({ isAuthenticated, userPicture }: Props): React.JSX.Element;
export {};
