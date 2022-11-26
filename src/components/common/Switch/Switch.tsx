import React, { FC } from 'react';
import { Switch } from '@mui/material';
import styles from "./Switch.module.scss"

const Switches: FC = () => {
    const [state, setState] = React.useState({
        checkedA: true,
    });

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setState({ ...state, [event.target.name]: event.target.checked });
    };

    return (
        <Switch
        checked={state.checkedA}
        onChange={handleChange}
        name="checkedA"
        inputProps={{ 'aria-label': 'secondary checkbox' }}
        classes={{
            root: styles.root,
            switchBase: styles.switchBase,
            thumb: styles.thumb,
            track: styles.track,
            checked: styles.checked,
        }}
        />
    );
};

export default Switches;