import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';

export default function InfoBox({info}) {
    const INIT_URL = 
    "https://media.istockphoto.com/id/2217879604/photo/landscape.webp?a=1&b=1&s=612x612&w=0&k=20&c=B44Fg4w993uZWsQ4klDTmcUBSJpp5fJjMqFCMIIWE5w=";

    let HOT_URL = 
      "https://images.unsplash.com/photo-1504370805625-d32c54b16100?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG90JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";
    let COLD_URL = 
      "https://images.unsplash.com/photo-1612208695882-02f2322b7fee?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29sZCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
    let RAIN_URL = 
      "https://plus.unsplash.com/premium_photo-1725408051956-a6dc142169bd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cmFpbiUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";

    return (
        <div className="InfoBox">
            <div className='cardContainer'>
            <Card sx={{ maxWidth: 345 }}>
            <CardMedia 
              sx={{ height: 140 }} 
              image= {
                info.humidity > 80 
                  ? RAIN_URL 
                  : info.temp > 15 
                  ? HOT_URL 
                  : COLD_URL
              } 
              title="green iguana"
            />
           <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {info.city} {
                info.humidity > 80 
                  ? <ThunderstormIcon /> 
                  : info.temp > 15 
                  ? <WbSunnyIcon /> 
                  : <AcUnitIcon />
                } 
            </Typography>
            <Typography variant="body2" color="text.secondary">
                Temperature = {info.temp}°C
            </Typography>
            <Typography variant="body2" color="text.secondary">
                Humidity = {info.humidity}%
            </Typography>
            <Typography variant="body2" color="text.secondary">
                Min Temp = {info.tempMin}°C
            </Typography>
            <Typography variant="body2" color="text.secondary">
                Max Temp = {info.tempMax}°C
            </Typography>
            <Typography variant="body2" color="text.secondary">
                The weather can be described as <i>{info.weather}</i> and feels like {info.feelsLike}°C
            </Typography>
           </CardContent>
           </Card>
           </div>
        </div>
    )
}