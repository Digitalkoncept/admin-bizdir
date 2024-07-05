"use client";
import React, { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { toast } from "react-toastify";
import JobCategory from "@/components/JobCategory";
import { client } from "@/lib/apollo";
import { CREATE_JOB } from "@/lib/mutation";
import { GET_ALL_JOB_CATEGORY } from "@/lib/query";

const page = () => {
  const { data: session, status } = useSession();
  const [subcategory, setSubCategory] = useState();

  const [jobs, setJobs] = useState();
  const [task, setTask] = useState();
  const initialFormState = {
    title: "",
    description: "",
    job_category: "",
    job_subcategory: "",
    tasks: [],
  };

  const [formData, setFormData] = useState(initialFormState);

  const getJobCategory = async () => {
    try {
      const { data, errors } = await client.query({
        query: GET_ALL_JOB_CATEGORY,
        context: {
          headers: {
            Authorization: `Bearer ${session.jwt}`,
          },
        },
      });

      if (errors || data.getAllJobCategories.code !== 200) {
        throw new Error("Something went wrong");
      }

      console.log(data);
      setJobs(data.getAllJobCategories.jobCategories);
    } catch (error) {
      console.error("something went wrong:", error);
    }
  };

  useEffect(() => {
    if (status === "authenticated") getJobCategory();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [session]);
  console.log("all job category =>",jobs)
  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    if (type === "checkbox") {
      if (checked) {
        setFormData((prevFormData) => ({
          ...prevFormData,
          tasks: [...prevFormData.tasks, value],
        }));
      } else {
        setFormData((prevFormData) => ({
          ...prevFormData,
          tasks: prevFormData.tasks.filter(
            (permission) => permission !== value
          ),
        }));
      }
    } else
      setFormData({
        ...formData,
        [name]: value,
      });
    console.log(formData);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data, errors } = await client.mutate({
        mutation: CREATE_JOB,
        variables: { data: formData },
        context: {
          headers: {
            Authorization: `Bearer ${session.jwt}`,
          },
        },
      });

      if (errors || data.createJob.code !== 201) {
        throw new Error("Something went wrong");
      }
      setFormData(initialFormState);
      toast.success("Job Created Successully.");
      console.log(data);
    } catch (error) {
      console.error("something went wrong:", error);
    }
  };

  return (
    <section>
      <div className="ad-com">
        <div className="ad-dash leftpadd">
          <div className="ud-cen">
            <div className="log-bor">&nbsp;</div>
            <span className="udb-inst">Add new Job</span>

            <div className="ud-cen-s2 ud-pro-edit">
              <form
                name="admin_sub_admin_form"
                onSubmit={handleSubmit}
                encType="multipart/form-data"
              >
                <h2>Create Job</h2>

                <table className="responsive-table bordered">
                  <tbody>
                    <JobCategory
                      formData={formData}
                      subcategory={subcategory}
                      setSubCategory={setSubCategory}
                      setFormData={setFormData}
                      category={jobs}
                      setTask={setTask}
                      task={task}
                    />
                    <tr>
                      <td className="col-md-4">Job Title</td>
                      <td>
                        <div className="col-md-6 ml-0">
                          <div className="form-group">
                            <input
                              type="text"
                              name="title"
                              value={formData.title}
                              onChange={handleChange}
                              required="required"
                              className="form-control"
                              placeholder="Enter Title"
                            />
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>Description</td>
                      <td className="col-md-6 ml-[16px]">
                        <div className="form-group">
                          <textarea
                            name="description"
                            value={formData.description}
                            onChange={handleChange}
                            required="required"
                            className="form-control"
                            placeholder="description"
                          />
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>Tasks</td>
                      <td>
                        <div className="ad-sub-cre">
                          <ul>
                            {task?.map((item, index) => {
                              return (
                                <li key={index}>
                                  <div className="chbox">
                                    <input
                                      type="checkbox"
                                      name="admin_user_options"
                                      checked={formData.tasks.includes(item)}
                                      value={item}
                                      onChange={handleChange}
                                      id={index}
                                    />
                                    <label htmlFor={index}>{item} </label>
                                  </div>
                                </li>
                              );
                            })}
                          </ul>
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
                  Submit
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
