import { Theme } from "../../context/ThemeContext";

    export function changeCssRootVariables(theme: Theme) {
        const root = document.querySelector(":root") as HTMLElement;

        const themeVariables = [
            `body-background`,
            `search-background`,
            `filter-background`,
            `sortBtn-background`,
            `text-color`,
        ];

        themeVariables.forEach(themeVariable => {
            root.style.setProperty(
            `--${themeVariable}-default`,
            `var(--${themeVariable}-${theme})`
            );
        }); 
    }