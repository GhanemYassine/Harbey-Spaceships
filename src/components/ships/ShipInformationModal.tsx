import {  Fade, Modal } from "@mui/material"
import { useAtom } from "jotai"
import { showShipInformationModalAtom,shipToDisplayAtom } from "../../atoms"
import { Box } from "@material-ui/core";
import { isMobile } from "react-device-detect";


const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: isMobile?300:400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

export const ShipInformationModal = () => {
    const [showModal , setShowModal] = useAtom(showShipInformationModalAtom)
    const [ship] = useAtom(shipToDisplayAtom)
    return (
        <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={showModal}
            onClose={()=>setShowModal((prev) => false)}
            closeAfterTransition
            BackdropProps={{
            timeout: 500,
            }}
        >
            <Fade in={showModal}>
                <Box sx={style} >
                    <h2 id="transition-modal-title">Ship name : {ship?.name}</h2>
                    <h3 id="transition-modal-description">State : {ship?.active ? "Active" : "Not active"}</h3>
                    <h3 id="transition-modal-description">Type : {ship?.type ?? "Unknown"} </h3>
                    <h3 id="transition-modal-description">Built in : {ship?.year_built ?? "Unknown"}</h3>
                    <h3 id="transition-modal-description">Successful landings: {ship?.successful_landings ?? "Unkown"}</h3>
                    <h3 id="transition-modal-description">Model : {ship?.model ?? "Unkown"}</h3>

                </Box>
            </Fade>
        </Modal>
    )
}