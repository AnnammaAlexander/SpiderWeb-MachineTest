import { BellIcon, InformationCircleIcon } from "@heroicons/react/24/outline"
import { Avatar, IconButton, Typography } from "@material-tailwind/react"

function Navbar() {
  return (
    <div className="flex  gap-3">
    <InformationCircleIcon className="h-6 w-6 rounded-none text-white" />
<div className="relative">

    <BellIcon class="h-6 w-6 text-white " />
    <IconButton variant="text" size="sm" color="purple" className="absolute -top-3 text-purple-400 font-extrabold">
                        o
                      </IconButton>
</div>
    <div className="flex flex-col justify-start items-center">
      <div className="flex ml-4">
        <Typography color="white" className="text-center text-sm ">
          Hi,
        </Typography>
        <Typography
          className="text-center text-sm"
          style={{ color: "#17a2b8" }}
        >
          Muhammad Asad
        </Typography>
      </div>
      <Typography color="white" className="mt-1 font-normal text-center">
        Welcome back!
      </Typography>
    </div>
    <Avatar
      variant="circular"
      alt="candice"
      src="https://docs.material-tailwind.com/img/face-1.jpg"
      className="border-2 border-purple-400"
    />
  </div>
  )
}

export default Navbar
