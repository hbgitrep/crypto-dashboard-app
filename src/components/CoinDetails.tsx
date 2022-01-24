import Card from "antd/lib/card";
import { coin } from "../state/reducers/CryptoReducer";
import './CardDetails.css';

const CoinDetails  = (props:{details: coin}) => {

    const  {details:coinDetails} = props;

    // color the price based on change price
    const priceChangeColor = (price: number)=> {
        return Math.sign(price) >= 0 ? 'green' : 'red';
    }
    return (
        <>
        <Card className='coin-card' title={<div className='coni-card-title'><img style={{ width:20, height:20}}src={coinDetails.icon} alt={coinDetails.name}/> <span>{coinDetails.name}</span> </div>} bordered={true}>
            <div>
                <img style={{ width:40, height:40}}src={coinDetails.icon} alt={coinDetails.name}/>
            </div>
            <div style={{paddingLeft: 12}}>
                <div>
                    <h4>{coinDetails.name}</h4>
                    <span className='sub-title'>{coinDetails.symbol}</span> 
                </div>
                <div style={{marginTop: 20}}>
                    <span>{parseFloat(''+coinDetails.price).toFixed(2)}</span>
                    <span style={{paddingLeft: 4, color: priceChangeColor(coinDetails.priceChange1h)}}>({coinDetails?.priceChange1h}%)</span>
                </div>  
            </div>
             
            
        </Card>
        </>
    )   

}

export default CoinDetails;