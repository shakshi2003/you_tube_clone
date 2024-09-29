import React from 'react'
import './Describechannel.css'
import { FaEdit, FaUpload } from 'react-icons/fa'
import { useSelector } from 'react-redux'

const Describechannel = ({ seteditcreatechanelbtn, cid, setvideouploadpage }) => {
    // const channel = [
    //     {
    //         _id: 1,
    //         name: "shakshi",
    //         email: "abcd@gmail.com",
    //         joinedon: "222-07-134",
    //         desc: "channel1 description",
    //     }
    // ]
    const channel = useSelector(state => state.chanelreducer)
    const currentchannel = channel.filter((c) => c._id === cid)[0]
    const currentuser = useSelector(state => state.currentuserreducer);
    return (
        <div className="container3_channel">
            <div className="channel_logo_channel">
                <b>{currentchannel?.name.charAt(0).toUpperCase()}</b>
            </div>
            <div className="description_channel">
                <b>{currentchannel?.name}</b>
                <p>{currentchannel?.desc}</p>
            </div>
            {currentuser?.result._id === currentchannel?._id && (
                <>
                    <p className="editbtn_channel" onClick={() => seteditcreatechanelbtn(true)}>
                        <FaEdit />
                        <b>Edit Channel</b>
                    </p>
                    <p className="uploadbtn_channel" onClick={() => setvideouploadpage(true)}>
                        <FaUpload />
                        <b>Upload Video</b>
                    </p>
                </>
            )}
        </div>
    )
}

export default Describechannel
