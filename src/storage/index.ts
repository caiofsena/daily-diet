import AsyncStorage from "@react-native-async-storage/async-storage";
import { HOME_COLLECTION } from "./config";
import { Meal } from "src/@types";

export async function mealsAdd(data: Meal) {
  try {
    const storage = await mealsGetAll(); 
    const newStorage = JSON.stringify([...storage, data]);
    await AsyncStorage.setItem(HOME_COLLECTION, newStorage);
    console.log('ADD MEAL: ', newStorage);
  } catch (error) {
    throw error;
  }
}

export async function mealsGetAll() {
  try {
    const storage = await AsyncStorage.getItem(HOME_COLLECTION);
    const data = storage ? JSON.parse(storage) : [];
    console.log('ALL MEAL: ', data);
    return data;
  } catch (error) {
    throw error;    
  }
}

export async function mealsGetId(id: number) {
  try {
    const storage = await AsyncStorage.getItem(HOME_COLLECTION);
    const data: Meal[] = storage ? JSON.parse(storage) : null;
    if (data) return data.filter(item => item.id === id);
    return null;
  } catch (error) {
    throw error;    
  }
}