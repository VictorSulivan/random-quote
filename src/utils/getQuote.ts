export interface QuoteType {
    category: string;
    type: string;
    joke?: string; 
    setup?: string; 
    delivery?: string;
}
  
const getInsult = async (): Promise<QuoteType> => {
    const url = 'https://v2.jokeapi.dev/joke/Any';
    const response = await fetch(url);
    const data: QuoteType = await response.json();
    return data;
};  
export default getInsult;