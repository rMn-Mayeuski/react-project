import { createContext } from "react";
import { ScreenWidthValue } from "../types/types";

export const ScreenWidthContext = createContext<ScreenWidthValue | null>(null)