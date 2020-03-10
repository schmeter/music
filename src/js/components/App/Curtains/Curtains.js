import React, { useState } from 'react';
import classNames from 'classnames';

const Curtains = () => {
    const [open, setOpen] = useState(true);

    const handleClickCurtains = () => {
        setOpen(!open);
    };

    return (
        <>
            {['left', 'right'].map(position => (
                <div
                    key={position}
                    className={classNames(
                        'curtain',
                        position,
                        open && 'open',
                    )}
                    onClick={handleClickCurtains}
                />
            ))}
        </>
    );
};

export default Curtains;
