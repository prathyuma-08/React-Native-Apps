import axios from 'axios';

const formatMarketData = (data) =>{
    let formattedData = [];

    data.forEach(item => {
        const formattedItem = {
            ...item
        }
        formattedData.push(formattedItem);

    });
    return formattedData;
}

export const getMarketData = async () =>{
    //https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&sparkline=true&price_change_percentage=7d
    try{
        const response = await axios.get(
            "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&sparkline=true&price_change_percentage=7d"
        );
        const data = response.data;
        const formattedResponse = formatMarketData(data);
        return formattedResponse;
    }
    catch(error){
        console.log(error.message);
    }
}