'use client'
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { signIn, useSession } from "next-auth/react";
const page = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const router = useRouter();
  async function handleSubmit(event) {
    event.preventDefault();
    const email = formData.email;
    const password = formData.password;
    const result = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    if (result.error) {
      alert(result.error);
      console.log(result.error);
    } else {
      router.push("/");
    }
  }
  return (
    <section className="login-reg ad-login-reg">
      <div className="container">
        <div className="row">
          <div className="login-main">
            <div className="log-bor">&nbsp;</div>{" "}
            <span className="udb-inst">Super Admin</span>
            <div className="log log-1">
              <div className="login">
                <h4>Admin Login</h4>
                <form
                  name="directory_login"
                  onSubmit={handleSubmit}
                >
                  <div className="form-group">
                    {/*                                  <input type="text" name="admin_email" id="admin_email"  class="form-control" placeholder="Enter email*" pattern="^[\w]{1,}[\w.+-]{0,}@[\w-]{2,}([.][a-zA-Z]{2,}|[.][\w-]{2,}[.][a-zA-Z]{2,})$" title="Invalid email address" required>*/}
                    <input
                      type="text"
                      name="email"
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          email: e.target.value,
                        }))
                      }
                      value={formData.email}
                      id="admin_email"
                      className="form-control"
                      placeholder="Enter email*"
                      title="Invalid email address"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="password"
                      name="password"
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          password: e.target.value,
                        }))
                      }
                      value={formData.password}
                      id="admin_password"
                      className="form-control"
                      placeholder="Enter password*"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    value="submit"
                    name="admin_submit"
                    className="btn btn-primary"
                  >
                    Sign in
                  </button>
                </form>
              </div>
            </div>
            <div className="log log-3">
              <div className="login">
                <h4>Forgot password</h4>
                <form>
                  <div className="form-group">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Enter email*"
                      pattern="^[\w]{1,}[\w.+-]{0,}@[\w-]{2,}([.][a-zA-Z]{2,}|[.][\w-]{2,}[.][a-zA-Z]{2,})$"
                      title="Invalid email address"
                      required
                    />
                  </div>
                  <button type="submit" className="btn btn-primary">
                    Sign in
                  </button>
                </form>
              </div>
            </div>
            <div className="log-bot">
              <ul>
                <li>
                  {" "}
                  <span className="ll-1">Login?</span>
                </li>
                <li>
                  {" "}
                  <span className="ll-3">Forgot password?</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
