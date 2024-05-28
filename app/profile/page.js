'use client'
import React,{useEffect,useState} from 'react'
import { CldUploadWidget } from 'next-cloudinary';
import { useSession } from 'next-auth/react'
import { toast } from 'react-toastify'
const page = () => {
  const {data:session,status,update} = useSession();
  const [formData,setFormData] = useState({
    name:'',
    email:'',
    password:'',
    gender:'',
    image:''
  })
  const getProfile = async () => {
    try {
      const res = await fetch(
        process.env.BACKEND_URL + `/api/employee/${session.user.id}`,
        {
          headers: {
            authorization: "Bearer " + session.jwt,
          },
        }
      );

      const data = await res.json();
      const {name,email,gender,_id,image} = await data;
      setFormData({name,email,gender,_id,image})
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      
      const res = await fetch(
        process.env.BACKEND_URL + `/api/employee/${session.user.id}`,
        {
          method:'PATCH',
          headers: {
            'Content-Type': 'application/json',
            authorization: "Bearer " + session?.jwt,
          },
          body: JSON.stringify(formData)
        }
      );
      const data = await res.json();
      if(res.status ===200){
        toast.success(data.message)
        update({image:formData.image});
      } else if(res.status === 400) {
        toast.error(data.message);
      }
      console.log(res);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getProfile(); 
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [session]);
  const handleChange = (event) => {
      setFormData({
        ...formData,
        [event.target.name]: event.target.value,
        
      });
      console.log(formData);
    
  };
  return (
   <section>
  <div className="ad-com">
    <div className="ad-dash leftpadd">
      <div className="ud-cen">
        <div className="log-bor">&nbsp;</div>
        <span className="udb-inst">Settings</span>
        <div className="ud-cen-s2 ud-pro-edit">
          <form name="setting_form" onSubmit={handleSubmit} id="setting_form"  encType="multipart/form-data">
          <h2>Update Profile</h2>
            <table className="responsive-table bordered">
              <tbody>
              <tr>
                  <td>Name</td>
                  <td>
                    <div className="form-group">
                      <input type="text" value={formData.name} onChange={handleChange} className="form-control"  required="required" name="name"  placeholder="Name" />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>Email :</td>
                  <td>
                    <div className="form-group">
                      <input type="email" name="email" value={formData.email} onChange={handleChange} className="form-control" placeholder="Email"  />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>New Password</td>
                  <td>
                    <div className="form-group">
                      <input type="password" className="form-control" value={formData.password} onChange={handleChange} name="password"  placeholder="Enter new password if you like to change" />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>Profile Picture</td>
                  <td>
                    <div className="form-group">
                      <label>Choose profile image</label>
                <div className="fil-img-uplo">
                <span className="dumfil">Upload a file</span>
                <CldUploadWidget
                signatureEndpoint="/api/sign-cloudinary-params"
                uploadPreset='profile_image'
                onSuccess={(result, { widget }) => {
                  setFormData(prevFormData => ({
                    ...prevFormData,
                    image: result?.info?.secure_url,
                  }));
                  widget.close();
                }}
              >
                {({ open }) => {
                  function handleOnClick() {
                    open();
                  }
                  return (
                    <button type="button" onClick={handleOnClick}>
                      upload image
                    </button>
                  );
                }}
              </CldUploadWidget>
                    </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>Gender</td>
                  <td>
                    <div className="form-group">
                      <select name="gender" value={formData.gender} onChange={handleChange} className="form-control">
                        <option  value="Male">Male</option>
                        <option value="Female">Female</option>
                      </select>
                    </div>
                  </td>
                </tr>
                <tr>
              <td colSpan="2">
                <button type="submit" name="setting_submit" className="db-pro-bot-btn">Update Profile</button>
              </td>
            </tr>
              </tbody>
            </table>
          </form>
        </div>
      </div>
    </div>
  </div>
</section>

  )
}

export default page
