import { supabase } from './supabase.js'

export async function getCabins() {

const { data , error } = await supabase
  .from('cabins')
  .select('*')

  if(error) {
    console.error(error) 
    throw new Error('cabins not loaded')
}

    return data;
}