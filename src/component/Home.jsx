import {
  Card,
  Typography,
 
  Button,

  IconButton,
} from "@material-tailwind/react";
import {
  ChevronUpIcon,

  ArrowLeftIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/outline";
import { useState } from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

// import { Input } from "postcss";
function Home() {
  const [selectedTab, setSelectedTab] = useState(null);

  const TABLE_HEAD = ["Position", "Time", "Info", "Quantity", ""];

  const TABLE_ROWS = [
    {
      Position: "Camera 1 (Video)",
      Time: "9 am - 7 pm",
      Info: "LP Default",
      Quantity: "20",
    },
    {
      Position: "Camera 1 (Video)",
      Time: "9 am - 7 pm",
      Info: "LP Default",
      Quantity: "20",
    },
    {
      Position: "Camera 1 (Video)",
      Time: "9 am - 7 pm",
      Info: "LP Default",
      Quantity: "20",
    },
    {
      Position: "Camera 1 (Video)",
      Time: "9 am - 7 pm",
      Info: "LP Default",
      Quantity: "20",
    },
    {
      Position: "Camera 1 (Video)",
      Time: "9 am - 7 pmr",
      Info: "LP Default",
      Quantity: "20",
    },
    {
      Position: "Camera 1 (Video)",
      Time: "9 am - 7 pm",
      Info: "LP Default",
      Quantity: "20",
    },
    {
      Position: "Camera 1 (Video)",
      Time: "9 am - 7 pm",
      Info: "LP Default",
      Quantity: "20",
    },
    {
      Position: "Camera 1 (Video)",
      Time: "9 am - 7 pm",
      Info: "LP Default",
      Quantity: "20",
    },
  ];

  const TAB_VALUES = [
    "EventDetails",
    "AssignCoordination/Coordinator",
    "SessionManagement",
    "GenerateSOW",
  ];
  const handletab = (tab) => {
    setSelectedTab(tab);
  };
  return (
    <div className="bg-black h-screen p-5">
      <div className=" h-full p-3 rounded-3xl ring-2 ring-white overflow-scroll gradient-animation ">
        {/* naubar */}
        <div className="w-full p-5 flex justify-end">
          <Navbar />
        </div>
        <div className="flex gap-3 ">
          {/* first div */}
          <Sidebar />

          {/* second div */}
          <div className="w-fit border-r-2 border-t-2 shadow-lg rounded-lg shadow-purple-200  border-purple-200 focus:!border-purple-300 p-2 ">
            <div className="flex items-center">
              <Typography
                variant="h3"
                color="white"
                className="text-center p-3"
              >
                Event Name
              </Typography>
              <Typography
                              variant="h5"

                color="white"
                className="mt-1 font-normal text-center"
              >
                (Venue Details)
              </Typography>
            </div>

            <div className="flex items-center ring-2 ring-purple-500 w-fit rounded-md ml-4 ">
              {TAB_VALUES.map((tab, index) => (
                <div
                  key={index}
                  className={`border-r-2 border-purple-500 tabcolor ${
                    selectedTab === tab ? "selected" : ""
                  }`}
                  onClick={() => handletab(tab)}
                >
                    {tab==="AssignCoordination/Coordinator"
                    }
                  <Typography className="font-normal text-center p-2">
                    {tab}
                  </Typography>
                </div>
              ))}

             
            </div>

            <div className="flex gap-6">
              <div className="pl-3">
                <Typography
                  color="white"
                  className="mt-1 font-normal text-start "
                >
                  Assign Coordinator
                </Typography>
                <div className=" h-8 mt-2 flex justify-between items-center p-1 border ring-1 ring-purple-50 text-xs rounded-md border-pink-200  shadow-purple-100 text-white w-96">
                  <h1>Search Coordinator</h1>
                  <ChevronUpIcon class="h-4 w-4 arrow " />
                </div>
                <Typography
                  color="white"
                  className="mt-1 font-normal text-xs textcolor text-start "
                >
                  Add new Coordinator
                </Typography>
              </div>

              <div>
                <Typography
                  color="white"
                  className="mt-1 font-normal text-start "
                >
                  Event Name
                </Typography>
                <div className=" mt-2 flex justify-between items-center p-1 border ring-1 ring-purple-50 text-xs rounded-md border-pink-200  shadow-purple-100 text-white w-96">
                  <h1>Start: 12-12-2023 Coordinator</h1>
                  <h1>End: 15-12-2023</h1>
                </div>
                <div className=" mt-2  p-1 border ring-1 ring-purple-50 text-xs rounded-md border-pink-200  shadow-purple-100 text-white w-96">
                  <h1>Venue Address : Some Location 12, Name Here, City, State.</h1>
                </div>
              </div>
            </div>

            <div
              className="flex gap-5 mt-5
"
            >
              {/* third div */}
              <div className="pl-3 mt-2 ">
                <Typography
                  color="white"
                  className="mt-1 font-normal text-start "
                >
                  Assign Contractor
                </Typography>

                <div className="ring-1 ring-purple-300  p-4 w-fit rounded-md bg-black mt-2 shadow-md shadow-purple-300">
                  <div className="mt-1.5 border w-64 rounded-md hoverdiv meetingroom p-1 ">
                    <div className="flex items-center gap-2 p-2 ">
                      <Typography color="white" className="text-sm">
                        Meeting Room 1
                      </Typography>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        className="h-4  svg-image"
                      >
                        <path
                          fill="#c152e0"
                          d="M284.3 11.7c-15.6-15.6-40.9-15.6-56.6 0l-216 216c-15.6 15.6-15.6 40.9 0 56.6l216 216c15.6 15.6 40.9 15.6 56.6 0l216-216c15.6-15.6 15.6-40.9 0-56.6l-216-216z"
                        />
                      </svg>
                      <p className="font-bold"> 12 Positions</p>
                    </div>
                    <h1 className="p-2 text-xs text-white -mt-4 ">
                      Search Coordinator
                    </h1>
                  </div>

                  <div className=" border w-64 rounded-md hoverdiv mt-5 p-1">
                    <div className="flex items-center gap-2 p-2 ">
                      <Typography color="white" className="text-sm">
                        Meeting Room 1
                      </Typography>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        className="h-4  svg-image"
                      >
                        <path
                          fill="#c152e0"
                          d="M284.3 11.7c-15.6-15.6-40.9-15.6-56.6 0l-216 216c-15.6 15.6-15.6 40.9 0 56.6l216 216c15.6 15.6 40.9 15.6 56.6 0l216-216c15.6-15.6 15.6-40.9 0-56.6l-216-216z"
                        />
                      </svg>
                      <p className="textcolor "> 12 Positions</p>
                    </div>
                    <h1 className="p-2 text-xs text-white -mt-4 ">
                      Search Coordinator
                    </h1>
                  </div>

                  <div className="border w-64 rounded-md hoverdiv   mt-5 p-1">
                    <div className="flex items-center gap-2 p-2 ">
                      <Typography color="white" className="text-sm">
                        Meeting Room 1
                      </Typography>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        className="h-4  svg-image"
                      >
                        <path
                          fill="#c152e0"
                          d="M284.3 11.7c-15.6-15.6-40.9-15.6-56.6 0l-216 216c-15.6 15.6-15.6 40.9 0 56.6l216 216c15.6 15.6 40.9 15.6 56.6 0l216-216c15.6-15.6 15.6-40.9 0-56.6l-216-216z"
                        />
                      </svg>
                      <p className="textcolor "> 12 Positions</p>
                    </div>
                    <h1 className="p-2 text-xs text-white -mt-4 ">
                      Search Coordinator
                    </h1>
                  </div>

                  <div className="border w-64 rounded-md hoverdiv mt-5 p-1">
                    <div className="flex items-center gap-2 p-2 ">
                      <Typography color="white" className="text-sm">
                        Meeting Room 1
                      </Typography>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        className="h-4  svg-image"
                      >
                        <path
                          fill="#c152e0"
                          d="M284.3 11.7c-15.6-15.6-40.9-15.6-56.6 0l-216 216c-15.6 15.6-15.6 40.9 0 56.6l216 216c15.6 15.6 40.9 15.6 56.6 0l216-216c15.6-15.6 15.6-40.9 0-56.6l-216-216z"
                        />
                      </svg>
                      <p className="textcolor "> 12 Positions</p>
                    </div>
                    <h1 className="p-2 text-xs text-white -mt-4 ">
                      Search Coordinator
                    </h1>
                  </div>

                  <div className="border w-64 rounded-md hoverdiv mt-5 p-1 mb-1.5">
                    <div className="flex items-center gap-2 p-2 ">
                      <Typography color="white" className="text-sm">
                        Meeting Room 1
                      </Typography>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        className="h-4  svg-image"
                      >
                        <path
                          fill="#c152e0"
                          d="M284.3 11.7c-15.6-15.6-40.9-15.6-56.6 0l-216 216c-15.6 15.6-15.6 40.9 0 56.6l216 216c15.6 15.6 40.9 15.6 56.6 0l216-216c15.6-15.6 15.6-40.9 0-56.6l-216-216z"
                        />
                      </svg>
                      <p className="textcolor "> 12 Positions</p>
                    </div>
                    <h1 className="p-2 text-xs text-white -mt-4 ">
                      Search Coordinator
                    </h1>
                  </div>
                </div>
              </div>

              {/* forth div */}
              <div className=" mt-2">
                <Typography color="white" className="font-normal text-start ">
                  Positions
                </Typography>

                {/* <div className="ring-1 ring-purple-300 shadow-sm p-2 w-fit rounded-md bg-black mt-2"></div> */}

                <Card className="mt-2 rounded-xl border-t-2 border-r-2 border-purple-300 bg-black shadow-md shadow-purple-200">
                  <table className=" table-auto text-left ">
                    <thead className="border-b border-purple-300 rounded-2xl">
                      <tr>
                        {TABLE_HEAD.map((head) => (
                          <th key={head} className=" p-4 ">
                            <Typography
                              variant="small"
                              color="white"
                              className="font-normal leading-none opacity-70 w-36"
                            >
                              {head}
                            </Typography>
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="">
                      {TABLE_ROWS.map(
                        ({ Position, Time, Info, Quantity }, index) => {
                          const isLast = index === TABLE_ROWS.length - 1;
                          const classes = isLast
                            ? "p-2"
                            : "p-1.5 border-b border-blue-gray-50";

                          return (
                            <tr key={name}>
                              <td className={classes}>
                                <Typography
                                  variant="small"
                                  color="white"
                                  className="font-normal ml-1"
                                >
                                  {Position}
                                </Typography>
                              </td>
                              <td className={classes}>
                                <Typography
                                  variant="small"
                                  color="white"
                                  className="font-normal"
                                >
                                  {Time}
                                </Typography>
                              </td>
                              <td className={classes}>
                                <Typography
                                  variant="small"
                                  color="white"
                                  className="font-normal"
                                >
                                  {Info}
                                </Typography>
                              </td>

                              <td className={classes}>
                                <Typography
                                  variant="small"
                                  color="white"
                                  className="font-normal ml-4"
                                >
                                  {Quantity}
                                </Typography>
                              </td>

                              <td className={classes}>
                                <div className="-ml-16 mr-2 flex justify-between items-center p-1 border ring-1 ring-purple-300 rounded-md border-pink-200 shadow-sm shadow-purple-100 text-white bg-black w-52">
                                  <h1>Select Contractor</h1>
                                  <ChevronUpIcon class="h-4 w-4 arrow " />
                                </div>
                              </td>
                            </tr>
                          );
                        }
                      )}
                    </tbody>
                  </table>

                  <div className="flex items-center justify-center border-t-2">
                    <div className="flex items-center gap-2 ">
                      <IconButton variant="text" size="sm" color="white">
                        <ArrowLeftIcon className="h-4" />
                      </IconButton>
                      <IconButton variant="text" size="sm" color="white">
                        o
                      </IconButton>
                      <IconButton
                        variant="text"
                        size="sm"
                        color="purple"
                        className="bg-purple-200 rounded-full w-4 h-4 shadow-md shadow-purple-300"
                      >
                        o
                      </IconButton>
                      <IconButton variant="text" size="sm" color="white">
                        <ArrowRightIcon className="h-4" />
                      </IconButton>
                    </div>
                  </div>
                </Card>
              </div>
              {/* forth div end */}
            </div>
            <div className="flex justify-center items-center mt-4 mb-1 ">
              <Button className="w-40 bg-purple-400 shadow-sm shadow-purple-300 text-center ">
                Save Edits
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
