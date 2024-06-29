"use client";
import React, { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { CldUploadWidget } from "next-cloudinary";
import { toast } from "react-toastify";
import { CREATE_EMPLOYEE } from "@/lib/mutation";
import { client } from "@/lib/apollo";
import { GET_ALL_ROLES } from "@/lib/query";
const page = () => {
  const [roles, setRoles] = useState();
  const { data: session } = useSession();
  const [formData, setFormData] = useState({
    "title":"",
    "description":"",
    "assignedBy":"",
    "assignedTo":"",
    "permission":[],
  });

  const getRoles = async () => {

    try {
      const { data, errors } = await client.query({
        query: GET_ALL_ROLES,
        context: {
          headers: {
            Authorization: `Bearer ${session.jwt}`,
          },
        },
      });

      if (errors || data.getAllRoles.code !== 200) {
        throw new Error("Something went wrong");
      }

      console.log(data);
      setRoles(data.getAllRoles.roles);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };
  useEffect(() => {
    getRoles();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [session]);
  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
    console.log(formData);
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

  return (
    <section>
      <div className="ad-com">
        <div className="ad-dash leftpadd">
          <div className="ud-cen">
            <div className="log-bor">&nbsp;</div>
            <span className="udb-inst">Assign Task</span>

            <div className="ud-cen-s2 ud-pro-edit">
              <form
                name="admin_sub_admin_form"
                onSubmit={handleSubmit}
                encType="multipart/form-data"
              >
                <h2>Assign Task</h2>

                <table className="responsive-table bordered">
                  <tbody>
                    <tr>
                      <td>Task  Title</td>
                      <td>
                        <div className="form-group">
                          <input
                            type="text"
                            name="title"
                            value={formData.title}
                            onChange={handleChange}
                            required="required"
                            className="form-control"
                            placeholder="task title"
                          />
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>Task Description</td>
                      <td>
                        <div className="form-group">
                          <input
                            type="text"
                            name="description"
                            value={formData.description}
                            onChange={handleChange}
                            required="required"
                            className="form-control"
                            placeholder="Email"
                          />
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>Select Task</td>
                      <td>
                        <div className="form-group">
                          <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            required="required"
                            className="form-control"
                            placeholder="Enter password"
                          />
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
