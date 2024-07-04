"use client";
import React, { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { toast } from "react-toastify";
import JobCategory from "@/components/JobCategory";
import { client } from "@/lib/apollo";
import { UPDATE_JOb } from "@/lib/mutation";
import { GET_ALL_JOB_CATEGORY, GET_JOB_BY_ID } from "@/lib/query";

const page = ({params}) => {
  const [subcategory, setSubCategory] = useState();
  const [cat,setCat] = useState();
  const [subcat,setSubCat] = useState();
  const { data: session, status } = useSession();
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
  const getJobById = async () => {
    try {
      const { data, errors } = await client.query({
        query: GET_JOB_BY_ID,
        variables: { id: params.id },
        context: {
          headers: {
            Authorization: `Bearer ${session.jwt}`,
          },
        },
      });

      if (errors || data.getJobById.code !== 200) {
        throw new Error("Something went wrong");
      }

      const { title, description, tasks,job_subcategory,job_category } = await data.getJobById.job;
      setCat(job_category)
      setSubCat(job_subcategory);
      setFormData({ title, description,tasks,job_subcategory,job_category });

    } catch (error) {
      console.error("something went wrong:", error);
    }
  };
  const getJobCategory = async (cat,subcat) => {
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
      const {jobCategories} = await data.getAllJobCategories;
      const temp = await jobCategories.find(category => category.name === cat)?.job_subcategories || [];
      const temp2 = await temp.find(item => item.name === subcat)?.tasks || [];
      setJobs(jobCategories);
      setSubCategory(temp);
      setTask(temp2);
      
    } catch (error) {
      console.error("something went wrong:", error);
    }
  };
 

  useEffect(() => {
    if (status === "authenticated") 
      getJobById();
      getJobCategory(cat,subcat);
    
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [session,cat,subcat]);
  console.log("name=>",cat)
  console.log("filtersubcategory =>",subcategory)
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
        mutation: UPDATE_JOb,
        variables: { data: formData,id:params.id },
        context: {
          headers: {
            Authorization: `Bearer ${session.jwt}`,
          },
        },
      });

      if (errors || data.updateJob.code !== 200) {
        throw new Error("Something went wrong");
      }
      setFormData(initialFormState);
      toast.success("Job updated Successully.");
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
                <h2>Update Job</h2>

                <table className="responsive-table bordered">
                  <tbody>
                    <JobCategory
                      formData={formData}
                      setFormData={setFormData}
                      subcategory={subcategory}
                      setSubCategory={setSubCategory}
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
                      <td>Credentials</td>
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
