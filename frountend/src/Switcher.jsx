
import { useState } from "react";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import useDarkSide from "./Hooks/useDarkSide";
 
export default function Switcher() {
    const [colorTheme, setTheme] = useDarkSide();
    const [darkSide, setDarkSide] = useState(
        colorTheme === "light" ? true : false
    );
 
    const toggleDarkMode = (checked) => {
        setTheme(colorTheme);
        setDarkSide(checked);
    };
 
    return (
        <div className="flex items-center justify-center px-1">
            <DarkModeSwitch
                style={{ }}
                checked={darkSide}
                onChange={toggleDarkMode}
                size={25}
                
            />
        </div>
    );
}