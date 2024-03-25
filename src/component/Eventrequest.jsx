import { Card, IconButton, Input, Typography } from "@material-tailwind/react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import {

  ArrowLongLeftIcon,
  ArrowLongRightIcon,
 
  ChevronDownIcon,
  ChevronUpIcon,
  MagnifyingGlassIcon,
  PlusIcon,
} from "@heroicons/react/24/outline";

function Eventrequest() {
  const TABLE_HEAD_MAIN = ["EventName"];
  const TABLE_ROWS_MAIN = [
    {
      EventName: "Filled Name",
    },
    {
      EventName: "Filled Name",
    },
    {
      EventName: "Filled Name",
    },
    {
      EventName: "Filled Name",
    },
    {
      EventName: "Filled Name",
    },
    {
      EventName: "Filled Name",
    },
    {
      EventName: "Filled Name",
    },
    {
      EventName: "Filled Name",
    },
    {
      EventName: "Filled Name",
    },
    {
      EventName: "Filled Name",
    },
    {
      EventName: "Filled Name",
    },
    {
      EventName: "Filled Name",
    },
  ];

  const TABLE_HEAD = [
    "Event Start",
    "Event End",
    "Client Name",
    "Contact Info",
    "Time",
    "Venue",
    "City",
    "State",
    "Zip Code",
  ];
  const TABLE_ROWS = [
    {
      EventStart: "Jan 14, 2024",
      EventEnd: "9 am - 7 pm",
      ClientName: "Muhammad Asad",

      ContactInfo: "+1234567890",
      Time: "9 am - 7 pm",
      Venue: "Lorem Ipsum Dolor",
      City: "-",
      State: "-",
      ZipCode: "-",
    },
    {
      EventStart: "Jan 14, 2024",
      EventEnd: "9 am - 7 pm",
      ClientName: "Muhammad Asad",

      ContactInfo: "+1234567890",
      Time: "9 am - 7 pm",
      Venue: "Lorem Ipsum Dolor",
      City: "-",
      State: "-",
      ZipCode: "-",
    },
    {
      EventStart: "Jan 14, 2024",
      EventEnd: "9 am - 7 pm",
      ClientName: "Muhammad Asad",

      ContactInfo: "+1234567890",
      Time: "9 am - 7 pm",
      Venue: "Lorem Ipsum Dolor",
      City: "-",
      State: "-",
      ZipCode: "-",
    },
    {
      EventStart: "Jan 14, 2024",
      EventEnd: "9 am - 7 pm",
      ClientName: "Muhammad Asad",

      ContactInfo: "+1234567890",
      Time: "9 am - 7 pm",
      Venue: "Lorem Ipsum Dolor",
      City: "-",
      State: "-",
      ZipCode: "-",
    },
    {
      EventStart: "Jan 14, 2024",
      EventEnd: "9 am - 7 pm",
      ClientName: "Muhammad Asad",

      ContactInfo: "+1234567890",
      Time: "9 am - 7 pm",
      Venue: "Lorem Ipsum Dolor",
      City: "-",
      State: "-",
      ZipCode: "-",
    },
    {
      EventStart: "Jan 14, 2024",
      EventEnd: "9 am - 7 pm",
      ClientName: "Muhammad Asad",

      ContactInfo: "+1234567890",
      Time: "9 am - 7 pm",
      Venue: "Lorem Ipsum Dolor",
      City: "-",
      State: "-",
      ZipCode: "-",
    },
    {
      EventStart: "Jan 14, 2024",
      EventEnd: "9 am - 7 pm",
      ClientName: "Muhammad Asad",

      ContactInfo: "+1234567890",
      Time: "9 am - 7 pm",
      Venue: "Lorem Ipsum Dolor",
      City: "-",
      State: "-",
      ZipCode: "-",
    },
    {
      EventStart: "Jan 14, 2024",
      EventEnd: "9 am - 7 pm",
      ClientName: "Muhammad Asad",

      ContactInfo: "+1234567890",
      Time: "9 am - 7 pm",
      Venue: "Lorem Ipsum Dolor",
      City: "-",
      State: "-",
      ZipCode: "-",
    },
    {
      EventStart: "Jan 14, 2024",
      EventEnd: "9 am - 7 pm",
      ClientName: "Muhammad Asad",

      ContactInfo: "+1234567890",
      Time: "9 am - 7 pm",
      Venue: "Lorem Ipsum Dolor",
      City: "-",
      State: "-",
      ZipCode: "-",
    },
    {
      EventStart: "Jan 14, 2024",
      EventEnd: "9 am - 7 pm",
      ClientName: "Muhammad Asad",

      ContactInfo: "+1234567890",
      Time: "9 am - 7 pm",
      Venue: "Lorem Ipsum Dolor",
      City: "-",
      State: "-",
      ZipCode: "-",
    },
    {
      EventStart: "Jan 14, 2024",
      EventEnd: "9 am - 7 pm",
      ClientName: "Muhammad Asad",

      ContactInfo: "+1234567890",
      Time: "9 am - 7 pm",
      Venue: "Lorem Ipsum Dolor",
      City: "-",
      State: "-",
      ZipCode: "-",
    },
    {
      EventStart: "Jan 14, 2024",
      EventEnd: "9 am - 7 pm",
      ClientName: "Muhammad Asad",

      ContactInfo: "+1234567890",
      Time: "9 am - 7 pm",
      Venue: "Lorem Ipsum Dolor",
      City: "-",
      State: "-",
      ZipCode: "-",
    },
  ];
  return (
    
      <div className="bg-black h-screen p-5 ">
        <div className="no-scrollbar h-full p-3 rounded-3xl ring-2 ring-white overflow-scroll gradient-animation ">
          {/* naubar */}
          <div className="w-full p-5 flex justify-end">
            <Navbar />
          </div>
          <div className="flex gap-3 overflow-x-scroll">
            {/* first div */}
            <Sidebar />

            {/* second div */}
            <div className=" relative  border-r-2 border-t-2 shadow-lg rounded-lg shadow-purple-200  border-purple-200 focus:!border-purple-300 p-2 overflow-scroll no-scrollbar w-full">
              <div className="flex flex-wrap items-center justify-between">
                <div className="w-100">
                  <Typography
                    variant="h3"
                    color="white"
                    className="text-center p-3"
                  >
                    Event Requests
                  </Typography>
                </div>
                <div className="w-96  flex gap-2 items-center ">
                  <Input
                    label="Search"
                    className= "cursoepading "
                    icon={<MagnifyingGlassIcon className="h-5 w-5 " />}
                  />
                  <div className="p-2">
                    <button
                      //    style={{
                      //     backgroundImage:
                      //       "linear-gradient(173.1deg, rgba(226,66,249,0.94) 10.2%, rgba(79,147,249,1) 77.3%)",
                      //   }}
                      className="h-8 w-8  flex justify-center items-center bg-gradient-to-r from-purple-400 via-purple-500 to-deep-purple-600 ring-white ring-1"
                      style={{ borderRadius: "3px" }}
                    >
                      <PlusIcon className="h-5" color="white" />
                    </button>
                  </div>
                </div>
              </div>

              <Card className="absolute mt-2 opacity-65 rounded-b-none z-50 left-2 top-13 rounded-r-none    border-t-2 border-r-2 border-purple-300 bg-black  ">
                <table className=" table-auto text-left ">
                  <thead className="border-b text-opacity-0 opacity-100 border-purple-300 rounded-2xl ">
                    <tr>
                      {TABLE_HEAD_MAIN.map((head) => (
                        <th
                          key={head}
                          className=" p-4 bg-purple-400 rounded-tl-lg "
                        >
                          <div className="flex items-center gap-2">
                            <ChevronUpIcon className="h-5 w-5 text-purple-400  rounded-full bg-white" />

                            <Typography
                              variant="small"
                              color="white"
                              className=" leading-none w-36 font-bold "
                            >
                              {head}
                            </Typography>
                          </div>
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {TABLE_ROWS_MAIN.map(({ EventName }, index) => {
                      const isLast = index === TABLE_ROWS.length - 1;
                      const classes = isLast
                        ? "p-2"
                        : "p-1.5 border-b border-blue-gray-50";

                      return (
                        <tr key={EventName}>
                          <td className={classes}>
                            <Typography
                              variant="small"
                              color="white"
                              className="font-normal ml-1 p-1.5"
                            >
                                <div className="flex items-center gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
  <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
</svg>

                              {EventName}
                                </div>
                            </Typography>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </Card>
              <div className=" ml-4 no-scrollbar overflow-x-scroll w-[calc(100vw-20rem)]">
                <Card className="mt-2 ml-[11rem]  left-3 w-fit rounded-xl rounded-b-none rounded-l-none border-t-2 border-r-2 border-purple-300 bg-black shadow-md shadow-purple-200">
                  <table className=" table-auto text-left ">
                    <thead className="border-b border-purple-300 rounded-2xl">
                      <tr>
                        {TABLE_HEAD.map((head) => (
                          <th key={head} className="p-4 bg-purple-400">
                            <Typography
                              variant="small"
                              color="white"
                              className="font-normal leading-none opacity-70 w-36"
                            >
                              {head === "Event End" ? (
                                <div className="flex items-center gap-2">
                                  <ChevronDownIcon className="h-5 w-6 text-purple-400  rounded-full bg-white" />

                                  <Typography
                                    variant="small"
                                    color="white"
                                    className=" leading-none w-36 font-bold "
                                  >
                                    {head}
                                  </Typography>
                                </div>
                              ) : head === "Client Name" ? (
                                <div className="flex items-center gap-2">
                                  <ChevronUpIcon className="h-5 w-6 text-purple-400  rounded-full bg-white" />

                                  <Typography
                                    variant="small"
                                    color="white"
                                    className=" leading-none w-36 font-bold "
                                  >
                                    {head}
                                  </Typography>
                                </div>
                              ) : (
                                <>{head}</>
                              )}
                            </Typography>
                          </th>
                        ))}
                      </tr>
                    </thead>

                    <tbody className="">
                      {TABLE_ROWS.map(
                        (
                          {
                            EventStart,
                            EventEnd,
                            ClientName,
                            ContactInfo,
                            Time,
                            Venue,
                            City,
                            State,
                            ZipCode,
                          },
                          index
                        ) => {
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
                                  className="font-normal ml-1 p-1.5"
                                >
                                  {EventStart}
                                </Typography>
                              </td>
                              <td className={classes}>
                                <Typography
                                  variant="small"
                                  color="white"
                                  className="font-normal"
                                >
                                  {EventEnd}
                                </Typography>
                              </td>
                              <td className={classes}>
                                <Typography
                                  variant="small"
                                  color="white"
                                  className="font-normal"
                                >
                                  {ClientName}
                                </Typography>
                              </td>

                              <td className={classes}>
                                <Typography
                                  variant="small"
                                  color="white"
                                  className="font-normal ml-4"
                                >
                                  {ContactInfo}
                                </Typography>
                              </td>

                              <td className={classes}>
                                <Typography
                                  variant="small"
                                  color="white"
                                  className="font-normal ml-4"
                                >
                                  {Time}
                                </Typography>
                              </td>

                              <td className={classes}>
                                <Typography
                                  variant="small"
                                  color="white"
                                  className="font-normal ml-4"
                                >
                                  {Venue}
                                </Typography>
                              </td>
                              <td className={classes}>
                                <Typography
                                  variant="small"
                                  color="white"
                                  className="font-normal ml-4"
                                >
                                  {City}
                                </Typography>
                              </td>
                              <td className={classes}>
                                <Typography
                                  variant="small"
                                  color="white"
                                  className="font-normal ml-4"
                                >
                                  {State}
                                </Typography>
                              </td>
                              <td className={classes}>
                                <Typography
                                  variant="small"
                                  color="white"
                                  className="font-normal ml-4"
                                >
                                  {ZipCode}
                                </Typography>
                              </td>
                            </tr>
                          );
                        }
                      )}
                    </tbody>
                  </table>
                </Card>
              </div>

              {/* pagination */}
              <div className="  flex items-center gap-1 justify-center border-t-2 bg-black rounded-b-lg h-12 ring-2 ring-purple-300 ">
              <ArrowLongLeftIcon class="h-6 w-4 text-gray-500" />

          <IconButton variant="text" size="sm" className="text-white">
            1
          </IconButton>
          <IconButton variant="text" size="sm" className="text-white">
            2
          </IconButton>
          <IconButton variant="text" size="sm" className="text-white">
            3
          </IconButton>
          <IconButton variant="text" size="sm" className="text-purple-400">
            4
          </IconButton>
         
          <ArrowLongRightIcon class="h-6 w-4 text-gray-500" />

              </div>
              {/* pagination end*/}
            </div>
            {/* second div */}
          </div>
        </div>
      </div>
    
  );
}

export default Eventrequest;
