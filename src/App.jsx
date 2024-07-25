import { useState } from 'react';
import './App.css'
import ContactForm from './ContactForm'

function App() {

  const [formdata,setformdata] = useState({
    firstName:'',
    lastName: '',
    message: '',
    queryType: '',
    emailAddress: '',
    chBox: ''
  });

  const formdataOnchange = e => {
    setformdata({...formdata, [e.target.name] : e.target.value});
  };

  const formHandler = e => {
    e.preventDefault();
    console.log('formm data :: ',formdata);

    for (const key in formdata) {
     if(formdata[key] == '' )
      {
        console.log(`${key} is empty!`);
      }
    }

  };


  return (
    <div className='flex min-h-screen items-center justify-center font-mycusRegFon bg-root-color'>
        <div className='bg-panel-color p-5 rounded-lg my-8'>
     <form className='flex flex-col gap-6' onSubmit={formHandler}>

      <h1 className='font-mycusBoldFon text-3xl'>Contact Us</h1>

      <div className='flex flex-col gap-3 lg:flex-row'>

        <div className='flex flex-col gap-3 flex-grow'>
        <label htmlFor='firstName'>First Name *</label>
        <input type='text' id='firstName' name='firstName' className='border-2 rounded-md p-2' onChange={formdataOnchange}/>
        {/* <span className='text-red-600 hidden'>This field is required</span> */}
        </div>

        <div className='flex flex-col gap-3 flex-grow'>
        <label htmlFor='lastName'>Last Name *</label>
        <input type='text' id='lastName' name='lastName' className='border-2 rounded-md p-2' onChange={formdataOnchange}/>
        <span className='text-red-600 hidden'>This field is required</span>
        </div>

      </div>

      <div className='flex flex-col gap-3'>
        <label htmlFor='emailAddress'>Email Address *</label>
        <input type='text' id='emailAddress' name='emailAddress' className='border-2 rounded-md p-2' onChange={formdataOnchange}/>
        <span className='text-red-600 hidden'>Please enter a valid email address</span>
      </div>

      <div className='flex flex-col gap-y-3'>
        <label htmlFor='queryType'>Query Type *</label>
        <div className='flex flex-col gap-3 lg:flex-row'>
        <div className='flex border-2 items-center rounded-md p-3 gap-3 flex-grow radio_main'>
          <label htmlFor='generalType' className='inline-flex items-center radio'>
          <input type='radio' name='queryType' id="generalType" value='General Enquiry' className='hidden radio_input' onChange={formdataOnchange}/>
          <div className="cus_radio mr-5"></div>
            General Enquiry
            </label>
        </div>
      

        <div className='flex border-2 rounded-md p-3 items-center gap-3 flex-grow radio_main'>
          <label htmlFor="supportType" className='inline-flex items-center radio'>
          <input type='radio' id="supportType"  className='hidden radio_input' name='queryType' value='Support Request' onChange={formdataOnchange}/>
          <div className="cus_radio mr-5"></div>
          Support Request
          </label>
        </div>
        </div>
        <span className='text-red-600 hidden'>Please select a query type</span>
      </div>

      <div className='flex flex-col'>
        <label htmlFor="message">Messages *</label>
        <textarea id="message" className='border-2 rounded-md min-h-48 p-2' name='message' onChange={formdataOnchange}></textarea>
        <span className='text-red-600 hidden'>This field is required</span>
      </div>

    <div>
      <div className='flex items-center gap-3'>
        <input type="checkbox" id="chBox" onChange={formdataOnchange} className='hidden' name='chBox'/>
        <div className='cus_check'></div>
        <label htmlFor="chBox" className='hover:cursor-pointer'>I consent to being contacted by the team *</label>
      </div>
        <span className='text-red-600 hidden'>To submit this form, please consent to being contacted</span>
        </div>

      <button className='p-4 text-panel-color bg-green-800 w-full rounded-lg'>Submit</button>
      
     </form>

        {/* <ContactForm /> */}

      </div>
    </div>
  )
}

export default App
