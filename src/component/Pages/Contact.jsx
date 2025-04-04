import React, { useState } from 'react';

const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "623818f7-f142-42eb-89a6-a10084953848");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };





  return (
    <div className='md:px-52 md:py-28 p-4'>
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-40 gap-10">
        <div className="form-container">
          <h2 className="text-2xl font-semibold mb-2">Contact us</h2>
          <p className="text-gray-600 mb-4">We are excited to get planning!</p>

          <form onSubmit={onSubmit} className="space-y-4">
            <input type="text" placeholder="Name" className="w-full p-2 border rounded" required name='name' />
            <input type="email" placeholder="Email" className="w-full p-2 border rounded" required name='email' />
            <input type="tel" placeholder="Phone no." className="w-full p-2 border rounded" required name='phone number' />
            <h4 className="text-lg font-medium mt-4">Who’s getting married?</h4>
            <input type="text" placeholder="Partner 1" className="w-full p-2 border rounded" required name='partner 1' />
            <input type="text" placeholder="Partner 2" className="w-full p-2 border rounded" required name='partner 2' />
            <input type="text" placeholder="MM/YY" className="w-full p-2 border rounded" required name='MM/YY' />
            <input type="number" placeholder="Expected number of guests" className="w-full p-2 border rounded" required name='expected number of guest' />
            <textarea placeholder="Tell us anything more that can help!" className="w-full p-2 border rounded" rows="6" name='massage' ></textarea>
            <button type="submit" className="bg-[#576250] text-base font-semibold leading-7 text-white px-8 py-2 rounded hover:bg-green-500">Send</button>
            <p className='mt-4'> {result} </p>
          </form>

        </div>
        <div className="map-container flex flex-col items-start justify-center">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12370371.792462911!2d2.124175805707262!3d40.803569895279246!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12d4fe82448dd203%3A0xe22cf55c24635e6f!2sItaly!5e0!3m2!1sen!2sbd!4v1743793799594!5m2!1sen!2sbd" 
            className="w-full h-[330px] bg-blend-color rounded-lg" >
          </iframe>
          <h3 className="text-xl font-semibold mt-4">Head office</h3>
          <div className="text-gray-600">
            <p>Via Roma, 123<br/>20121 Milano (MI)<br/>Italy</p>
            <p>Phone: +39 (0)322 221211</p>
            <p>Mobile: +39 328 221212</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
