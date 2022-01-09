import { 
    Container,
    Grid,
    FormControlLabel,
    Switch
} from "@mui/material"
import { useAtom } from "jotai";
import React from "react";
import { 
    shipsAtom,
    displayOnlyFavoriteShipsAtom,
    favoriteShipsAtom,
} from "../../atoms";
import { Ship } from "../../types/Ship";
import { ShipCard } from "./ShipCard";
import { ShipInformationModal } from "./ShipInformationModal";

export const ShipsList = () => {
    const [allShips] = useAtom(shipsAtom);
    const [favoriteShips] = useAtom(favoriteShipsAtom)
    const [displayOnlyFavoriteShips,setDisplayOnlyFavoriteShips] = useAtom(displayOnlyFavoriteShipsAtom)
    
    return (
        <Container >
            <FormControlLabel
                sx={{
                display: 'block',
                }}
                control={
                <Switch
                    checked={displayOnlyFavoriteShips}
                    onChange={() => setDisplayOnlyFavoriteShips((prev)=>!prev)}
                    name="loading"
                    color="primary"
                />
                }
                label="Only show favorite ships"
            />
            <Grid container spacing={3} >
                {allShips.filter((e)=>!displayOnlyFavoriteShips || favoriteShips.some(favoriteship=>e.id===favoriteship.id)).map((ship : Ship,index : number) => 
                    <Grid item key={index} >
                        <ShipCard ship = {ship} />
                    </Grid>
                )}
            </Grid>
            <ShipInformationModal/>
        </Container>
    )
}