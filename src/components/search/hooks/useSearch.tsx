import React from "react";
import axios from "axios";
import { useAtom } from "jotai";

import { 
    displayOnlyFavoriteShipsAtom, 
    favoriteShipsAtom, 
    shipsAtom,
    searchInputIsEmptyAtom
} from "../../../atoms";
import { Ship } from "../../../types/Ship";
const graphqlQuery = (shipNameInput: string, shipType: string, shipMissionName: string) => {
    return{
        "query": ` {
            ships(find: {name: "${shipNameInput}", type: "${shipType}" , mission: "${shipMissionName}"}) {
                id,
                name,
                type,
                missions {
                    flight
                    name
                },
                image,
                active,
                year_built,
                successful_landings,
                model
                }
            }`,
        "variables": {}
    }
};
export const useSearch = ()=> {
    const [shipNameSearchText, setShipNameSearchText] = React.useState<string>("");
    const [shipTypeSearchText, setShipTypeSearchText] = React.useState<string>("");
    const [shipMissionNameSearchText, setShipMissionNameSearchText] = React.useState<string>("");
    const [ships,setShips] = useAtom(shipsAtom);
    const [favoriteShips] = useAtom(favoriteShipsAtom)
    const [displayOnlyFavoriteShips] = useAtom(displayOnlyFavoriteShipsAtom)
    const [_searchInputIsEmpty,setSearchInputIsEmpty] = useAtom(searchInputIsEmptyAtom)

    React.useEffect(() => {
        const inputFieldsAreEmpty = shipNameSearchText.trim() === "" && 
            shipTypeSearchText.trim() === "" && 
            shipMissionNameSearchText.trim() === ""
        setSearchInputIsEmpty(inputFieldsAreEmpty)
        const fetchSapceships = async() => {
            const currentYear = new Date().getFullYear() - 10
            console.log(currentYear);
            const result = await axios.post("https://api.spacex.land/graphql/",graphqlQuery(shipNameSearchText,shipTypeSearchText,shipMissionNameSearchText))
            let ships = result.data.data.ships
            if(inputFieldsAreEmpty){
                ships = ships.filter((e : Ship)=>(e.year_built && e.year_built >= currentYear))
            }
            setShips(e => ships)
        }
        fetchSapceships()
    },[shipNameSearchText,shipTypeSearchText,shipMissionNameSearchText,setShips])
    return { 
        shipNameSearchText,
        ships : displayOnlyFavoriteShips ? favoriteShips : ships || [],
        setShipNameSearchText,
        shipTypeSearchText,
        shipMissionNameSearchText,
        setShipTypeSearchText,
        setShipMissionNameSearchText
    }
}