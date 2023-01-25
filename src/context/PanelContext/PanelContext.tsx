import { getFromStorage } from "../../services/storageService";
import createCtx from "../contextGeneric";

const storagedGridValue: GridLayoutType = getFromStorage("grid") ?? "2";

export type GridLayoutType = "2" | "1";

export const [usePanelValue, PanelProvider] =
  createCtx<GridLayoutType>(storagedGridValue);
