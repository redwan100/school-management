import axios from "axios";
import { useEffect, useState } from "react";
import { MdClose } from "react-icons/md";
import { RiMenu2Fill } from "react-icons/ri";
import { NavLink, Outlet, useNavigate } from "react-router-dom";

const AdminDashboard = () => {
  const [isShow, setIsShow] = useState(true);
  const [showChild, setShowChild] = useState(false);
  const [isShowCommittee, setIsShowCommittee] = useState(false);
  const toggleShowChild = () => {
    setShowChild(false);
    setIsShowCommittee(false);
  };
  const [isDisabled, setIsDisabled] = useState(false);
  const [disabledPresident, setDisabledPresident] = useState(false);
  const [isShowCommunication, setIsShowCommunication] = useState(false);

  const navigate = useNavigate();
  const email = localStorage.getItem("email");

  const handleLogout = () => {
    localStorage.removeItem("email");
    navigate("/");
  };

  useEffect(() => {
    fetchHeadmasterData();
    fetchPresidentData();
    fetchInstituteCommunication();
  });

  const fetchHeadmasterData = async () => {
    const res = await axios.get(
      `${import.meta.env.VITE_BASE_URL}/all-headmasterinformation`
    );

    if (res.data.length > 0) {
      setIsDisabled(true);
    }
  };
  const fetchPresidentData = async () => {
    const res = await axios.get(
      `${import.meta.env.VITE_BASE_URL}/sovapotirbani`
    );

    if (res.data.length > 0) {
      setDisabledPresident(true);
    }
  };

  const fetchInstituteCommunication = async () => {
    const res = await axios.get(
      `${import.meta.env.VITE_BASE_URL}/communication`
    );

    if (res.data.length > 0) {
      setIsShowCommunication(true);
    }
  };
  return (
    <div className="">
      <div
        className={`min-h-screen w-full  grid  overflow-hidden transition ${
          isShow ? "grid-cols-[15rem,_1fr]" : "grid-cols-[0rem,_1fr]"
        }`}
      >
        <div className="bg-zinc-300 w-full h-full p-2 shadow-md space-y-4">
          <div className="bg-zinc-400 rounded-md p-2 ">
            <h1 className="text-center text-lg font-semibold text-white mb-3">
              Create your content
            </h1>
            <ul className="text-white  flex flex-col gap-2 text-center">
              <NavLink
                to={"/"}
                className={
                  "py-1 rounded-md block w-full bg-zinc-500 shadow-sm hover:bg-zinc-600 transition "
                }
              >
                <li className="">Home</li>
              </NavLink>

              <div className="active pending hover:bg-zinc-800">
                <li
                  onClick={() => setShowChild((prev) => !prev)}
                  className="cursor-pointer py-1"
                >
                  Add Teacher
                </li>
                <ul
                  className={`${!showChild && "h-0 overflow-hidden"} space-y-1`}
                >
                  <NavLink
                    to={"/dashboard/add-teacher"}
                    className={({ isActive }) =>
                      isActive ? "active" : "pending"
                    }
                  >
                    <li className="">Teacher</li>
                  </NavLink>
                  {isDisabled ? (
                    <button
                      disabled={true}
                      className="text-zinc-600 cursor-not-allowed bg-zinc-300 w-full rounded-md py-1"
                    >
                      Headmaster [disabled]
                    </button>
                  ) : (
                    <NavLink
                      to={"/dashboard/add-headmaster"}
                      className={({ isActive }) =>
                        isActive ? "active" : "pending"
                      }
                    >
                      <li className={`w-full h-full`}>Headmaster</li>
                    </NavLink>
                  )}
                </ul>
              </div>

              <NavLink
                to={"/dashboard/add-stuff"}
                className={({ isActive }) => (isActive ? "active" : "pending")}
              >
                <li onClick={toggleShowChild} className="">
                  Add Stuff
                </li>
              </NavLink>

              <NavLink
                to={"/dashboard/add-routine"}
                className={({ isActive }) => (isActive ? "active" : "pending")}
              >
                <li onClick={toggleShowChild} className="">
                  Add Routine
                </li>
              </NavLink>

              <NavLink
                to={"/dashboard/add-notice"}
                className={({ isActive }) => (isActive ? "active" : "pending")}
              >
                <li onClick={toggleShowChild} className="">
                  Add Notice
                </li>
              </NavLink>

              {/* <NavLink
                to={"/dashboard/add-porishod"}
                className={({ isActive }) => (isActive ? "active" : "pending")}
              >
                <li onClick={toggleShowChild} className="">
                  Add Management Committee
                </li>
              </NavLink> */}
              <div className="active pending hover:bg-zinc-400">
                <li
                  onClick={() => setIsShowCommittee((prev) => !prev)}
                  className="cursor-pointer"
                >
                  Add Management Committee
                </li>
                <ul
                  className={`${
                    !isShowCommittee && "h-0 overflow-hidden"
                  } space-y-1`}
                >
                  <NavLink
                    to={"/dashboard/add-president"}
                    className={({ isActive }) =>
                      isActive ? "active" : "pending"
                    }
                  >
                    <li className=""> Add Management Committee President</li>
                  </NavLink>
                  <NavLink
                    to={"/dashboard/add-othermember"}
                    className={({ isActive }) =>
                      isActive ? "active" : "pending"
                    }
                  >
                    <li>Add Management Committee Other Member</li>
                  </NavLink>
                </ul>
              </div>

              <NavLink
                to={"/dashboard/add-headmasterbai"}
                className={({ isActive }) => (isActive ? "active" : "pending")}
              >
                <li onClick={toggleShowChild} className="">
                  Add Headmaster Message
                </li>
              </NavLink>

              {disabledPresident ? (
                <button
                  disabled={true}
                  className="text-zinc-600 cursor-not-allowed bg-zinc-300 w-full rounded-md py-1"
                >
                  Add President Message [disabled]
                </button>
              ) : (
                <NavLink
                  to={"/dashboard/add-sovapotirbani"}
                  className={({ isActive }) =>
                    isActive ? "active" : "pending"
                  }
                >
                  <li onClick={toggleShowChild}>Add President Message</li>
                </NavLink>
              )}
              <NavLink
                to={"/dashboard/add-instituteinfo"}
                className={({ isActive }) => (isActive ? "active" : "pending")}
              >
                <li onClick={toggleShowChild} className="">
                  Add Institute History
                </li>
              </NavLink>

              <NavLink
                to={"/dashboard/add-schoolinfo"}
                className={({ isActive }) => (isActive ? "active" : "pending")}
              >
                <li onClick={toggleShowChild} className="">
                  Add Institute Info
                </li>
              </NavLink>
              <NavLink
                to={"/dashboard/add-instituteimages"}
                className={({ isActive }) => (isActive ? "active" : "pending")}
              >
                <li onClick={toggleShowChild} className="">
                  Add Institute Images
                </li>
              </NavLink>
              <NavLink
                to={"/dashboard/add-classinfo"}
                className={({ isActive }) => (isActive ? "active" : "pending")}
              >
                <li onClick={toggleShowChild} className="">
                  Add Class Information
                </li>
              </NavLink>

              {isShowCommunication ? (
                <button
                  disabled={true}
                  className="text-zinc-600 cursor-not-allowed bg-zinc-300 w-full rounded-md py-1"
                >
                  {" "}
                  Add Communication Information [disabled]
                </button>
              ) : (
                <NavLink
                  to={"/dashboard/add-communicationinfo"}
                  className={({ isActive }) =>
                    isActive ? "active" : "pending"
                  }
                >
                  <button
                    disabled={isShowCommunication}
                    onClick={toggleShowChild}
                    className={`${
                      isShowCommunication && "text-zinc-300 cursor-not-allowed"
                    }`}
                  >
                    Add Communication Information
                  </button>
                </NavLink>
              )}

              <NavLink
                to={"/dashboard/add-importantlinks"}
                className={({ isActive }) => (isActive ? "active" : "pending")}
              >
                <li onClick={toggleShowChild} className="">
                  Add Important Links
                </li>
              </NavLink>
              <NavLink
                to={"/dashboard/add-achievement"}
                className={({ isActive }) => (isActive ? "active" : "pending")}
              >
                <li onClick={toggleShowChild} className="">
                  Add Achievement
                </li>
              </NavLink>
            </ul>
          </div>

          <div className="bg-zinc-400 rounded-md p-2">
            <h1 className="text-center text-lg text-white mb-3 font-semibold">
              Update or Delete
            </h1>
            <ul className="text-white text-center flex flex-col gap-2">
              <NavLink
                to={"/dashboard/headmasterInfo"}
                className={({ isActive }) => (isActive ? "active" : "pending")}
              >
                <li onClick={toggleShowChild} className="">
                  HEADMASTER INFORMATION
                </li>
              </NavLink>
              <NavLink
                to={"/dashboard/headmasterbani"}
                className={({ isActive }) => (isActive ? "active" : "pending")}
              >
                <li onClick={toggleShowChild} className="">
                  Headmaster Message
                </li>
              </NavLink>
              <NavLink
                to={"/dashboard/all-teacher"}
                className={({ isActive }) => (isActive ? "active" : "pending")}
              >
                <li onClick={toggleShowChild} className="">
                  All Teacher
                </li>
              </NavLink>

              <NavLink
                to={"/dashboard/all-stuff"}
                className={({ isActive }) => (isActive ? "active" : "pending")}
              >
                <li onClick={toggleShowChild} className="">
                  All Stuff
                </li>
              </NavLink>
              <NavLink
                to={"/dashboard/all-porishod"}
                className={({ isActive }) => (isActive ? "active" : "pending")}
              >
                <li onClick={toggleShowChild} className="">
                  Committee President
                </li>
              </NavLink>

              <NavLink
                to={"/dashboard/all-members"}
                className={({ isActive }) => (isActive ? "active" : "pending")}
              >
                <li onClick={toggleShowChild} className="">
                  Committee Members
                </li>
              </NavLink>

              <NavLink
                to={"/dashboard/sovapotir-bani"}
                className={({ isActive }) => (isActive ? "active" : "pending")}
              >
                <li onClick={toggleShowChild} className="">
                  President Message
                </li>
              </NavLink>

              <NavLink
                to={"/dashboard/all-routine"}
                className={({ isActive }) => (isActive ? "active" : "pending")}
              >
                <li onClick={toggleShowChild} className="">
                  All Routine
                </li>
              </NavLink>

              <NavLink
                to={"/dashboard/all-notice"}
                className={({ isActive }) => (isActive ? "active" : "pending")}
              >
                <li onClick={toggleShowChild} className="">
                  All Notice
                </li>
              </NavLink>
              <NavLink
                to={"/dashboard/all-school-information"}
                className={({ isActive }) => (isActive ? "active" : "pending")}
              >
                <li onClick={toggleShowChild} className="">
                  All School Information
                </li>
              </NavLink>
              <NavLink
                to={"/dashboard/all-class-information"}
                className={({ isActive }) => (isActive ? "active" : "pending")}
              >
                <li onClick={toggleShowChild} className="">
                  All Class Information
                </li>
              </NavLink>
              <NavLink
                to={"/dashboard/all-communication-information"}
                className={({ isActive }) => (isActive ? "active" : "pending")}
              >
                <li onClick={toggleShowChild} className="">
                  Communication Information
                </li>
              </NavLink>
              <NavLink
                to={"/dashboard/all-important-link"}
                className={({ isActive }) => (isActive ? "active" : "pending")}
              >
                <li onClick={toggleShowChild} className="">
                  Important Links
                </li>
              </NavLink>
              <NavLink
                to={"/dashboard/all-achievement"}
                className={({ isActive }) => (isActive ? "active" : "pending")}
              >
                <li onClick={toggleShowChild} className="">
                  Achievements
                </li>
              </NavLink>
            </ul>
          </div>
        </div>

        <div className="w-full min-h-screen bg-zinc-100 overflow-x-auto">
          <nav
            className=" py-3 px-4 bg-zinc-400 text-white mb-3 drop-shadow-md flex justify-between
        "
          >
            {isShow ? (
              <MdClose
                className="cursor-pointer"
                size={25}
                onClick={() => setIsShow((prev) => !prev)}
              />
            ) : (
              <RiMenu2Fill
                className="cursor-pointer"
                size={25}
                onClick={() => setIsShow((prev) => !prev)}
              />
            )}

            {email && (
              <p onClick={handleLogout} className="cursor-pointer">
                Logout
              </p>
            )}
          </nav>

          {<Outlet />}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
