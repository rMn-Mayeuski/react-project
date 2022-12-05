import * as React from 'react';
import Switch from '@mui/material/Switch';
import styles from "./Switch.module.scss"

interface ISwithes {
    onClick?: any,
}

const Switches: React.FC<ISwithes> = ({ onClick }) => {
    const [state, setState] = React.useState({
        checkedA: true,
    });

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setState({ ...state, [event.target.name]: event.target.checked });
    };

    return (
        <Switch
        onClick={onClick}
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