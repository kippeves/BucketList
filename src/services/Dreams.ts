import { Dream } from "../models/Dream.js"
import { storage } from "../utils/Storage.js"

export const { save: saveDreams, load: getDreams } = storage<Dream[]>("dreams");