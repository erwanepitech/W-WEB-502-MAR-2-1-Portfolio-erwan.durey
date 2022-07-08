import React, { useState } from 'react';
import useDarkSide from "../hook/useDarkSide";
import { DarkModeSwitch } from 'react-toggle-dark-mode';

function Switcher() {

    const [colorTheme, setTheme] = useDarkSide();
    const [darkSide, setDarkSide] = useState(colorTheme)

    const toggleDarkMode = (checked) => {
        setTheme(colorTheme)
        setDarkSide(checked);
    };

    return (
        <div className="flex items-center">
            <DarkModeSwitch
                checked={darkSide}
                onChange={toggleDarkMode}
                size={35}
                className="border border-indigo-500 rounded-full m-2 p-2"
            />
        </div>
    )
}


export default Switcher