import React, { FC } from 'react';
import { INavTabProps } from '../../../../../../types/types';

const NavTab: FC<INavTabProps> = ({
    title,
    icon, 
    onClick,
    className, 
}) => {
    return (
        <button
            type='button' 
            onClick={onClick}
            className={className}
        >
            <>{icon}</>
            <p>{title}</p>    
        </button>
    );
};

export default NavTab;