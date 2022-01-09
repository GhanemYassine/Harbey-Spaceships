import {useSearch} from './hooks/useSearch';
import {  Grid } from '@mui/material';
import {AutoCompleteSearchInput} from './AutoCompleteSearchInput'
import {flatten } from 'lodash'
import { Ship } from '../../types/Ship';
import {isMobile} from 'react-device-detect';


export const SearchInputs = () => {
  const {
    ships,
    shipNameSearchText,
    shipTypeSearchText,
    shipMissionNameSearchText,
    setShipNameSearchText,
    setShipTypeSearchText,
    setShipMissionNameSearchText
  }= useSearch();

  return (
      <Grid container spacing={3} marginBottom={10} direction={isMobile ? "column" : "row"}>
        <Grid item xs>
          <AutoCompleteSearchInput 
            options={ships.map((option: Ship) => option.name)} 
            label={"Search By Ship Name"}
            searchText={shipNameSearchText}
            setText={setShipNameSearchText}
          />
        </Grid>
        <Grid item xs>
          <AutoCompleteSearchInput 
            options={[...new Set(ships.map((option: Ship) => option.type))]} 
            label={"Search By Ship Type"}
            searchText={shipTypeSearchText}
            setText={setShipTypeSearchText}
          />
        </Grid>
        <Grid item xs>
          <AutoCompleteSearchInput 
            options={flatten([...new Set(ships.map((option: Ship) => option.missions.map((mission) => mission.name)))])} 
            label={"Search By Mission Name"}
            searchText={shipMissionNameSearchText}
            setText={setShipMissionNameSearchText}
          />
        </Grid>
    </Grid>
  );
}