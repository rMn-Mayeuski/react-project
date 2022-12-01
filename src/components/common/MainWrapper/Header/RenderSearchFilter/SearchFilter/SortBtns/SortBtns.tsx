import React, { FC } from 'react';
import { ITabsProps } from '../../../../../../../types/types';
import Button from './Button/Button';

const SortBtns: FC<ITabsProps> = ({
    config = [],
    activeTabItem = 1,
    onClick = () => {},
}) => {
    return (
        <>
            {config.map(tab => (
                <Button
                    key={tab.id}
                    id={tab.id}
                    title={tab.title}
                    onClick={() => onClick(tab.id)}
                    activeTabItem={activeTabItem}
                />
            ))}            
        </>
    );
};

export default SortBtns;