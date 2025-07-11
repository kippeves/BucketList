import { loadData } from "../utils/Auth";

const key = "themes";

export const getThemes = () => loadData<string[]>(key);