import { observer} from "mobx-react-lite";
import { RouteComponentProps } from "@reach/router";
import Sidebar from "Page/Admin/Sidebar"

interface propType{
    path?: RouteComponentProps,
    children?: any
}

export default observer((props:propType) =>{
    return(
        <div className="flex flex-row w-screen">
            <Sidebar/>
            {props.children}
        </div>
    )
})
