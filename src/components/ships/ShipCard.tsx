import { Ship } from "../../types/Ship"
import { 
    Card,
    CardHeader,
    CardMedia,
    CardContent,
    Typography,
    CardActions, 
    IconButton 
} from "@mui/material"
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useAtom } from "jotai";
import { 
    favoriteShipsAtom , 
    shipToDisplayAtom,
    showShipInformationModalAtom
} from "../../atoms";
import {isMobile} from 'react-device-detect';



export const ShipCard = ({ship } : {ship : Ship}) => {
    const [_shipToDisplay,setShipToDisplay] = useAtom(shipToDisplayAtom)
    const [_,setShowShipInformationModal] = useAtom(showShipInformationModalAtom)

    const [favoriteShips,setFavoriteShips] = useAtom(favoriteShipsAtom);
    
    const likeOrUlikeShip = () => {
        const shipIsFavorite = favoriteShips.some((e) => e.id === ship.id)
        console.log(shipIsFavorite);
        
        if(shipIsFavorite){
            // dislike (not favorite anymore)
            setFavoriteShips((prev) => prev.filter(e => e.id !== ship.id))
        }
        else{
            // like (add to favorite ships)
            setFavoriteShips((prev) => [...prev,ship])
        }
    }

    return (
        <Card 
            sx={{ minWidth: isMobile ? 325 : 345 , maxWidth: isMobile ? 325 : 345 }} 
            style={{cursor:"pointer"}}
            
        >
            <div onClick={()=>{
                setShipToDisplay((_) => ship)
                setShowShipInformationModal((_) => true)
            }}>
            <CardHeader
                title={ship.name}
            />
            <CardMedia
                component="img"
                height="194"
                image={ship.image}
                alt="Paella dish"
            />
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    <span>{ship.active ? "Active" : "Not Active"}</span>
                    <br />
                    <span>{`Missions : ${ship.missions.length}`}</span>
                    <br/>
                    {ship.year_built && <span>{`Built in : ${ship.year_built}`}</span>}
                </Typography>
            </CardContent>
            </div>
            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites" onClick = {likeOrUlikeShip}>
                    <FavoriteIcon 
                        style={{color : favoriteShips.some((e) => e.id === ship.id) ? 'red' : ''}}
                    />
                </IconButton>
            </CardActions>
        </Card>
    )
}