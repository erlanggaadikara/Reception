import {observer} from 'mobx-react-lite'
import { RouteComponentProps } from "@reach/router";


interface propType{
    path?: RouteComponentProps,
    children?: any
}

export default observer((props:propType) =>{
    return(
        <div>Dashboard</div>
    )
})