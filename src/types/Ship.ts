export type Ship = {
    id : string
    name : string
    image : string
    active : boolean
    type : string
    missions : {name: string}[]
    year_built: number | null
    successful_landings: number | null
    model: string | null
}