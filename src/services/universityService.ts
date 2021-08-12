import AsyncStorage from '@react-native-community/async-storage';

import { httpService } from '~/utils/Http';


export async function getUniversities(country: string): Promise<any > {
  try {
    
    const { data } = await httpService.get<any>(
      `/search?country=${country}`
    );
    

    return data;
  } catch (error) {
    console.log('error universities service', error.response.data);
    throw error;
  }
}



export default { getUniversities };