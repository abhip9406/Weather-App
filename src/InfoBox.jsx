import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';

export default function InfoBox({info}) {

    let HOT_URL = "https://images.unsplash.com/photo-1504370805625-d32c54b16100";
    let COLD_URL = "https://images.unsplash.com/photo-1612208695882-02f2322b7fee";
    let RAIN_URL = "https://images.unsplash.com/photo-1501594907352-04cda38ebc29";

    return (
        <div className="InfoBox">
            <div className='cardContainer'>
            <Card className="weather-card">

            <CardMedia 
              className="media"
              image={
                info.humidity > 80 
                  ? RAIN_URL 
                  : info.temp > 15 
                  ? HOT_URL 
                  : COLD_URL
              }
            />

           <CardContent>
            <Typography variant="h5" className="city">
              {info.city} {
                info.humidity > 80 
                  ? <ThunderstormIcon /> 
                  : info.temp > 15 
                  ? <WbSunnyIcon /> 
                  : <AcUnitIcon />
              }
            </Typography>

            <Typography>🌡 Temp: {info.temp}°C</Typography>
            <Typography>💧 Humidity: {info.humidity}%</Typography>
            <Typography>📉 Min: {info.tempMin}°C</Typography>
            <Typography>📈 Max: {info.tempMax}°C</Typography>

            <Typography className="desc">
              {info.weather} (feels like {info.feelsLike}°C)
            </Typography>

           </CardContent>
           </Card>
           </div>
        </div>
    )
}
