import React, { useState } from "react";
import Navbar from "./Shared/Navbar";

const Onboarding = () => {
  const [formData, setFormData]= useState({
    user_id:'',
    first_name:'',
    dob_day:'',
    dob_month:'',
    dob_year:'',
    show_gender: false,
    gender_identity:'man',
    gender_interest:'woman',
    email:'',
    url:'',
    about:'',
    matches:[]
  })

const handleSubmit = () => {};
const handleChange = (e) => {
  console.log(e);
  const value =
    e.target.type === "checkbox" ? e.target.checked : e.target.value;
  const name=e.target.name

  setFormData((prevState)=>({
    ...prevState,
    [name]:value
  }))

};

console.log(formData);
  return (
    <>
      <Navbar minimal={true} setShowModal={() => {}} showModal={false}></Navbar>
      <div className="onBoarding">
        <h2>CREATE ACCOUNT</h2>
        <form onSubmit={handleSubmit}>
          <section>
            <label htmlFor="first_name">First Name</label>
            <input
              type="text"
              name="first_name"
              id="first_name"
              placeholder="First Name"
              required={true}
              value={formData.first_name}
              onChange={handleChange}
            />
            <label>Birthday</label>
            <div className="multi-input-container">
              <input
                type="number"
                name="dob_day"
                id="dob_day"
                placeholder="dd"
                required={true}
                value={formData.dob_day}
                onChange={handleChange}
              />

              <input
                type="number"
                name="dob_month"
                id="dob_month"
                placeholder="mm"
                required={true}
                value={formData.dob_month}
                onChange={handleChange}
              />

              <input
                type="number"
                name="dob_year"
                id="dob_year"
                placeholder="yyyy"
                required={true}
                value={formData.dob_year}
                onChange={handleChange}
              />
            </div>
            <label>Gender</label>
            <div className="multi-input-container">
              <input
                type="radio"
                name="gender_identity"
                id="man-gender-identity"
                required={true}
                value="man"
                onChange={handleChange}
                checked={formData.gender_identity === "man"}
              />
              <label htmlFor="man-gender-identity">Man</label>

              <input
                type="radio"
                name="gender_identity"
                id="woman-gender-identity"
                required={true}
                value="woman"
                onChange={handleChange}
                checked={formData.gender_identity === "woman"}
              />
              <label htmlFor="woman-gender-identity">Woman</label>

              <input
                type="radio"
                name="gender_identity"
                id="more-gender-identity"
                required={true}
                value="more"
                onChange={handleChange}
                checked={formData.gender_identity === "more"}
              />
              <label htmlFor="more-gender-identity">More</label>
            </div>
            <label htmlFor="show-gender">Show Gender on my profile</label>
            <input
              type="checkbox"
              name="show_gender"
              id="show-gender"
              onChange={handleChange}
              checked={formData.show_gender}
            />
            <label>Show Me</label>
            <div className="multi-input-container">
              <input
                type="radio"
                name="gender_interest"
                id="man-gender-interest"
                required={true}
                value="man"
                onChange={handleChange}
                checked={formData.gender_interest === "man"}
              />
              <label htmlFor="man-gender-interest">Man</label>

              <input
                type="radio"
                name="gender_interest"
                id="woman-gender-interest"
                required={true}
                value="woman"
                onChange={handleChange}
                checked={formData.gender_interest === "woman"}
              />
              <label htmlFor="woman-gender-interest">Woman</label>

              <input
                type="radio"
                name="gender_interest"
                id="everyone-gender-interest"
                required={true}
                value="everyone"
                onChange={handleChange}
                checked={formData.gender_interest === "everyone"}
              />
              <label htmlFor="everyone-gender-interest">Everyone</label>
            </div>
            <label htmlFor="about">About Me</label>
            <input
              id="about"
              type="text"
              name="about"
              required={false}
              placeholder="eg:I Like Long Walks..."
              value={formData.about}
              onChange={handleChange}
            />
            <input type="submit" />
          </section>

          <section>
            <label htmlFor="url">Profile Photo</label>
            <input
              id="url"
              type="url"
              name="url"
              required={true}
              onChange={handleChange}
            />
            <div className="photo-container">
              {formData.url && (
                <img src={formData.url} alt="profile pic preview" />
              )}
            </div>
          </section>
        </form>
      </div>
    </>
  );
};

export default Onboarding;
