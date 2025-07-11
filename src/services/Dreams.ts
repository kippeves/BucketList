import { Dream } from "../models/Dream.js"
import { loadData } from "../utils/Auth.js"

const key = "dreams";

export const getDreams = () => loadData<Dream[]>(key);