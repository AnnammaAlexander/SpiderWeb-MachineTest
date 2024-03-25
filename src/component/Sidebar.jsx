import {
   
    Typography,
   
    Button,
    Chip,
  } from "@material-tailwind/react";
  import {
    ChevronUpIcon,
      ArrowLeftStartOnRectangleIcon,
      ChevronDownIcon,
  } from "@heroicons/react/24/outline";
import { useState,  } from "react";
import { useNavigate } from "react-router-dom";
function Sidebar() {
    const [eventdropdown,setEventdropdown] = useState(true)
    const [usersdropdown,setUsersdropdown] = useState(true)
    const navigate = useNavigate()
    const handleEventdropdown = ()=>{
        setEventdropdown(!eventdropdown)
    }
    const handleUsersdropdown = ()=>{
        setUsersdropdown(!usersdropdown)
    }
    const handleevent =() =>{
        navigate("/event")
    }
  return (
    
       <div className="flex flex-col justify-between w-fit border-r-2 border-t-2 shadow-md rounded-lg shadow-purple-200 border-purple-200 focus:!border-purple-300   p-2 ">
        <div>
            <div className=" w-48 flex justify-between items-center p-1 border ring-1 ring-purple-300 rounded-md border-pink-200 shadow-md shadow-purple-100 custom-placeholder bg-black">
              <h1>Events</h1>
              {eventdropdown ===true ?(
                  
                  <ChevronUpIcon class="h-4 w-4 arrow " onClick={handleEventdropdown}/>
                  ):(
                  <ChevronDownIcon class="h-4 w-4 arrow " onClick={handleEventdropdown}/>

              )
}
            </div>
{eventdropdown ===true &&
(
    <div> <div className="flex">
    <div className="w-3 h-6 border-l-2 border-b rounded-bl-md ml-4"></div>
    <div onClick={handleevent} className="mt-3 ml-1 pr-2 pb-1  border ring-1 ring-purple-300 rounded-md border-pink-200 shadow-md shadow-purple-100 custom-placeholder bg-black max-w-fit">
      <Typography className="mt-1 font-normal text-center text-xs ">
        NewRequest
      </Typography>
    </div>
  </div>

  <div className="flex">
    <div className="-mt-5 w-3 h-12 border-l border-b rounded-bl-md ml-4"></div>
    <div className="flex justify-betweent w-32 h-8 items-center gap-3 mt-3 z-50 pr-2 pb-1  shadow-purple-100 custom-sidebar ">
      <Typography className="mt-1 font-normal text-center text-xs ">
        Estimate
      </Typography>
      <Chip
        value="14"
        size="sm"
        className="rounded-full bg-white mt-1 pl-1.5"
        style={{ color: "#9e5989" }}
      />
    </div>
  </div>

  <div className="flex">
    <div className="-mt-5 w-3 h-12 border-l border-b rounded-bl-md ml-4"></div>
    <div className="flex justify-betweent w-32 h-8 items-center gap-3 mt-3 z-50 pr-2 pb-1  shadow-purple-100 custom-sidebar ">
      <Typography className="mt-1 font-normal text-center text-xs ">
        Events
      </Typography>
    </div>
  </div>

  <div className="flex">
    <div className="-mt-5 w-3 h-12 border-l border-b rounded-bl-md ml-4"></div>
    <div className="flex justify-betweent w-32 h-8 items-center gap-3 mt-3 z-50 pr-2 pb-1  shadow-purple-100 custom-sidebar ">
      <Typography className="mt-1 font-normal text-center text-xs ">
        Partial Requests
      </Typography>
    </div>
  </div>

     </div>
)}
           

            <div className="pl-1 mt-5">
              <Typography color="white" className="font-normal ">
                Positions
              </Typography>
            </div>

            <div className="pl-1 mt-5">
              <Typography color="white" className="font-normal ">
                Contractors
              </Typography>
            </div>

            <div className="flex mt-4 justify-between items-center p-1 text-white">
              <h1>Users</h1>
              {usersdropdown === true ?
              (
                <ChevronUpIcon class="h-4 w-4 arrow " onClick={handleUsersdropdown}/>

              ):
              (
                <ChevronDownIcon class="h-4 w-4 arrow " onClick={handleUsersdropdown}/>

              )
}
            </div>
            {usersdropdown === true &&
            (
<div>

                <div className="flex">
                <div className="mt-1 w-3 h-6 border-l border-b rounded-bl-md ml-4"></div>
                <div className="flex justify-betweent w-32 h-8 items-center gap-3 mt-3 z-50 pr-2 pb-1  shadow-purple-100 custom-sidebar ">
                  <Typography className="mt-1 font-normal text-center text-xs ">
                    Admins
                  </Typography>
                </div>
              </div>
  
              <div className="flex">
                <div className="-mt-5 w-3 h-12 border-l border-b rounded-bl-md ml-4"></div>
                <div className="flex justify-betweent w-32 h-8 items-center gap-3 mt-3 z-50 pr-2 pb-1  shadow-purple-100 custom-sidebar ">
                  <Typography className="mt-1 font-normal text-center text-xs ">
                    Clients
                  </Typography>
                </div>
              </div>
  
              <div className="flex">
                <div className="-mt-5 w-3 h-12 border-l border-b rounded-bl-md ml-4"></div>
                <div className="flex justify-betweent w-32 h-8 items-center gap-3 mt-3 z-50 pr-2 pb-1  shadow-purple-100 custom-sidebar ">
                  <Typography className="mt-1 font-normal text-center text-xs ">
                    Coordinators
                  </Typography>
                </div>
              </div>
              </div>
            )}


            <div className="pl-1">
              <Typography color="white" className="mt-4 font-normal ">
                Profile
              </Typography>
            </div>
            </div>
            <div className="flex justify-center">
              <Button fullWidth className="flex gap-4 items-center justify-center bg-black shadow-sm shadow-blue-gray-500">
                <ArrowLeftStartOnRectangleIcon className="h-5 w-5" />
                <p size="sm">Log Out</p>
              </Button>
            </div>
          </div>
    
  )
}

export default Sidebar
