import { atom } from "jotai";
import { Ship } from "../types/Ship";

export const shipsAtom = atom<Ship[]>([])
export const favoriteShipsAtom = atom<Ship[]>([])
export const displayOnlyFavoriteShipsAtom = atom<boolean>(false) // if true display only favorite ships
export const showShipInformationModalAtom = atom<boolean>(false)
export const shipToDisplayAtom = atom<Ship | null>(null) // will have the ship information to show in modal
