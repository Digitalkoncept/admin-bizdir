"use client";
import React, { useState, useEffect, useRef } from "react";
import { useSession } from "next-auth/react";
import { toast } from "react-toastify";
import { CREATE_EMPLOYEE } from "@/lib/mutation";
import { client } from "@/lib/apollo";
import { GET_ALL_ROLES, GET_EMPLOYEES } from "@/lib/query";
const page = () => {
  const [roles, setRoles] = useState();
  const divRef1 = useRef(null);
  const divRef2 = useRef(null);
  const [employee, setEmployee] = useState();
  const [task,setTask] = useState();

  const { data: session, status } = useSession();
  const [formData, setFormData] = useState({
    employee: "",
    task: "",
  });

  const [select, setSelect] = useState({
    num: null,
    isVisible: false,
  });
  const [searchemp, setSearchEmp] = useState({
    _id: "",
    keyword: "",
    value: "",
  });
  const [searchtask, setSearchTask] = useState({
    _id: "",
    keyword: "",
    value: "",
  });

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        !divRef1.current.contains(event.target)
      ) {
        setSelect((prevState) => ({
          ...prevState,
          isVisible: false,
        }));
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const getEmployee = async () => {
    try {
      const { data, errors } = await client.query({
        query: GET_EMPLOYEES,
        context: {
          headers: {
            Authorization: `Bearer ${session.jwt}`,
          },
        },
      });

      if (errors || data.getEmployees.code !== 200) {
        throw new Error("Something went wrong");
      }

      console.log(data);
      setEmployee(data.getEmployees.employees);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  const getTasks = async () => {
    try {
      const { data, errors } = await client.query({
        query: GET_ALL_TASK,
        context: {
          headers: {
            Authorization: `Bearer ${session.jwt}`,
          },
        },
      });

      if (errors || data.getAllTasks.code !== 200) {
        throw new Error("Something went wrong");
      }

      console.log(data);
      setTask(data.getAllTasks.tasks);
      setLoading(false);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };
  useEffect(() => {
    if (status === "authenticated") 
      getEmployee();
      getTasks();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [session]);
  console.log("all employee =>", employee);

  const handleClick = (num) => {
    setSelect((prevState) => ({
      num: num,
      isVisible: !prevState.isVisible,
    }));
  };

  const handleInputChange = (e,number) => {
    const { name, value } = e.target;
    if (number === 1) {
      setSearchEmp((prevState) => ({
          ...prevState,
          keyword: value,
      }));
  }
    setSelect((prevState) => ({
        ...prevState,
        isVisible: true
      }));
      
  };
  const handleOptionClick = (option,number) => {
    if(number === 1){
      setFormData(prevState =>({
        ...prevState,
        employee:option._id
    }));
     
    setSearchEmp((prevState) => ({
      ...prevState,
      value: option.name,
  }));
    }
    setSelect((prevState) => ({
        ...prevState,
        isVisible: false
      }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data, errors } = await client.mutate({
        mutation: CREATE_EMPLOYEE,
        variables: { data: formData },
        context: {
          headers: {
            Authorization: `Bearer ${session.jwt}`,
          },
        },
      });

      if (errors || data.CREATE_EMPLOYEE.code !== 201) {
        throw new Error("Something went wrong");
      }

      toast.success("Employee created successfully");
      console.log(data);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  const filteredemp = employee?.filter((option) =>
    option.name.toLowerCase().includes(searchemp.keyword.toLowerCase())
  );
  const filteredtask = task?.filter((option) =>
    option.name.toLowerCase().includes(searchtask.keyword.toLowerCase())
  );
  return (
    <section>
      <div className="ad-com">
        <div className="ad-dash leftpadd">
          <div className="ud-cen">
            <div className="log-bor">&nbsp;</div>
            <span className="udb-inst">Assign New Task</span>

            <div className="ud-cen-s2 ud-pro-edit">
              <form
                name="admin_sub_admin_form"
                onSubmit={handleSubmit}
                encType="multipart/form-data"
              >
                <h2>Assign task to employee</h2>

                <table className="responsive-table bordered">
                  <tbody>
                    <tr>
                      <td>Select Employee:</td>
                      <td>
                        <div className="col-md-6 pl-0">
                        <div className="form-group">
                          <div
                            className={`chosen-container chosen-container-single ${
                              select.num === 1 && select.isVisible
                                ? "chosen-with-drop"
                                : ""
                            } chosen-container-active !w-[300px]`}
                            alt=""
                            ref={divRef1}
                            id="emp_id_chosen"
                            style={{ width: 305 }}
                          >
                            <a
                              className="chosen-single"
                              onClick={() => handleClick(1)}
                            >
                              <span>{formData.employee.length > 0 ? searchemp.value : 'select employee'}</span>
                              <div>
                                <b />
                              </div>
                            </a>
                            <div className="chosen-drop">
                              <div className="chosen-search">
                                <input
                                  className="chosen-search-input valid"
                                  type="text"
                                  name="state"
                                  autoComplete="off"
                                  value={searchemp.keyword}
                                  onChange={(e) => handleInputChange(e, 1)}
                                />
                              </div>
                              <ul className="chosen-results">
                                <li
                                  className="active-result"
                                  data-option-array-index={0}
                                >
                                  Select Employee
                                </li>
                                {filteredemp?.map((option) => (
                                  <li
                                    key={option._id}
                                    onClick={() => handleOptionClick(option, 1)}
                                    className="active-result"
                                    data-option-array-index={1}
                                  >
                                    {option.name}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>Select Task:</td>
                      <td>
                        <div className="col-md-6 pl-0">
                        <div className="form-group">
                          <div
                            className={`chosen-container chosen-container-single ${
                              select.num === 2 && select.isVisible
                                ? "chosen-with-drop"
                                : ""
                            } chosen-container-active !w-[300px]`}
                            alt=""
                            ref={divRef2}
                            id="task_id_chosen"
                            style={{ width: 305 }}
                          >
                            <a
                              className="chosen-single"
                              onClick={() => handleClick(2)}
                            >
                              <span>{formData.task.length > 0 ? searchtask.value : 'select employee'}</span>
                              <div>
                                <b />
                              </div>
                            </a>
                            <div className="chosen-drop">
                              <div className="chosen-search">
                                <input
                                  className="chosen-search-input valid"
                                  type="text"
                                  name="state"
                                  autoComplete="off"
                                  value={searchtask.keyword}
                                  onChange={(e) => handleInputChange(e, 2)}
                                />
                              </div>
                              <ul className="chosen-results">
                                <li
                                  className="active-result"
                                  data-option-array-index={0}
                                >
                                  Select Task
                                </li>
                                {filteredtask?.map((option) => (
                                  <li
                                    key={option._id}
                                    onClick={() => handleOptionClick(option, 2)}
                                    className="active-result"
                                    data-option-array-index={1}
                                  >
                                    {option.name}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </div>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <button
                  type="submit"
                  name="sub_admin_submit"
                  className="db-pro-bot-btn"
                >
                  Add Employee
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
