
import { BUTTON_COLOR} from "../../variables/Variables"
import { ThreeCircles } from "react-loader-spinner"
import { LoaderBox } from "./Loader.styled"

export const Loader = () => {
    return <LoaderBox>
    <ThreeCircles
       color={BUTTON_COLOR}
       outerCircleColor='#2AA955'
       height={90}
       width={90}
       ariaLabel="three-circles-rotating"
/></LoaderBox>}