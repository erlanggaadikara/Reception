/** @jsxImportSource @emotion/react */
import { css, jsx } from "@emotion/react";
import { observer } from "mobx-react-lite";
import Text from "libs/ui/Text";
import Button from "libs/ui/Button"
import Image from "libs/ui/Image"
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';

export default observer(() =>{

    return(
        <div className="flex flex-row p-14 justify-between">
            <div className="lg:w-1/3 mr-4">
                <Text>Contact</Text>
                <Separator/>
                <div className="flex-col flex mt-9 text-base">
                    <Text>Email: email@email.com</Text>
                    <Text>Phone: 0123456789</Text>
                </div>
            </div>
            <div className="lg:w-1/3 mr-4">
                <Text>Social Media</Text>
                <Separator/>
                <div className="flex-row flex mt-9">
                    <InstagramIcon className="mr-3"/>
                    <FacebookIcon className="mr-3"/>
                    <TwitterIcon className="mr-3"/>
                </div>
            </div>
            <div className="lg:w-1/3">
                <Text>Maps</Text>
                <Separator/>
                <div className="mt-9  bg-gray-200"> 
                <Image src={"assets/image/GoogleMap.png"} className="bg-gray-200"/>
                </div>
            </div>
        </div>
    )
})

const Separator = () => (
    <div className="h-2 bg-blue-400 w-auto"/>
)