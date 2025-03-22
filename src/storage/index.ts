import AsyncStorage from "@react-native-async-storage/async-storage";
import { HOME_COLLECTION } from "./config";
import { Meal } from "src/@types";

export async function mealsAdd(data: Meal) {
  try {
    const storage = await mealsGetAll(); 
    const newStorage = JSON.stringify([...storage, {...data, id: storage.length+1, date: formatDate(data.date)}]);
    await AsyncStorage.setItem(HOME_COLLECTION, newStorage);
    console.log('ADD MEAL: ', newStorage);
  } catch (error) {
    throw error;
  }
}

export async function mealsEdit(data: Meal) {
  try {
    const storage = await mealsGetAll();
    const updateStorage = storage.map(item => {
      if (item.id === data.id) {
        return {...item, ...data};
      }
      return item;
    }) 
    const newStorage = JSON.stringify([...updateStorage]);
    await AsyncStorage.setItem(HOME_COLLECTION, newStorage);
    console.log('EDIT MEAL: ', updateStorage);
  } catch (error) {
    throw error;
  }
}

export async function mealsGetAll() {
  try {
    const storage = await AsyncStorage.getItem(HOME_COLLECTION);
    const data: Array<Meal> = storage ? JSON.parse(storage) : [];
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
    if (data) return data.find(item => item.id === id);
    return null;
  } catch (error) {
    throw error;    
  }
}

export function formatDate(date: string) {
  const splitDate = date.split('/');
  return `${splitDate[2]}-${splitDate[1]}-${splitDate[0]}`;
}

export function convertDate(date: string) {
  const splitDate = date.split('-');
  return `${splitDate[2]}.${splitDate[1]}.${splitDate[0]}`;
}