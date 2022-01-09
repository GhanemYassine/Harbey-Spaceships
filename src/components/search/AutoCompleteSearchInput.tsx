import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';

interface AutoCompleteSearchInputProps {
    setText: (x : string) => void
    searchText : string
    label : string
    options : string[]
}

export const AutoCompleteSearchInput = (props : AutoCompleteSearchInputProps) => {
    return (
        <Autocomplete
            freeSolo
            disableClearable
            options={props.options}
            onChange={(_e,value)=>{props.setText(value)}}
            renderInput={(params) => (
            <TextField
                value={props.searchText}
                onChange={(e)=>{props.setText(e.target.value)}}
                {...params}
                label={props.label}
                InputProps={{
                ...params.InputProps,
                type: 'search',
                }}
            />
            )}
        />
    )
}