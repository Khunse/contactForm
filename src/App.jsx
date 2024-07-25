import { useState } from 'react';
import './App.css'
import ContactForm from './ContactForm'
import { useForm } from 'react-hook-form';
import toast, { Toaster } from 'react-hot-toast';

function App() {

  const [formdata,setformdata] = useState([
   { firstName:'',isError:false,ermsg:'cant be empty!'},
   { lastName:'',isError:false,ermsg:'cant be empty!'},
   { message:'',isError:false,ermsg:'cant be empty!'},
   { queryType:'',isError:false,ermsg:'cant be empty!'},
   { emailAddress:'',isError:false,ermsg:'cant be empty!'},
   { chBox:'',isError:false,ermsg:'cant be empty!'}
  ]);

  const { register, handleSubmit, formState : {errors} } = useForm();
const notify = () => {
  toast.custom(<div className='cust_toast'>
  <h1><i></i>Message Sent!</h1>
  <p>
    Thanks for completing the form. We'll be in touch soon!
  </p>
  </div>);
};


  const formHandler = e => {
    console.log('formm data :: ',e);
    notify();

  };

  const emailVf= email => {
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(email) || 'Invalid email address';
  }

  return (
    <div className='flex min-h-screen items-center justify-center font-mycusRegFon bg-root-color'>
        <div className='bg-panel-color p-5 rounded-lg formd my-28'>
     <form className='flex flex-col gap-6' onSubmit={handleSubmit(formHandler)}>

      <h1 className='font-mycusBoldFon text-3xl'>Contact Us</h1>

      <div className='flex flex-col gap-3 lg:flex-row'>

        <div className='flex flex-col gap-3 flex-grow'>
        <label htmlFor='firstName'>First Name *</label>
        <input type='text' id='firstName' {...register('firstName',{required: 'first name is required!'})} name='firstName' className={`border-2 ${errors.firstName && 'border-red-600'} rounded-md p-2`} />
        <span className={errors.firstName ? ' text-red-600' :'hidden'}>{errors.firstName && errors.firstName.message}</span>
        </div>

        <div className='flex flex-col gap-3 flex-grow'>
        <label htmlFor='lastName'>Last Name *</label>
        <input type='text' id='lastName' name='lastName' {...register('lastName',{required: 'last name is required!'})}  className={`border-2 ${errors.lastName && 'border-red-600'} rounded-md p-2`}/>
        <span className={errors.lastName ? ' text-red-600' :'hidden'}>{errors.lastName && errors.lastName.message}</span>
        </div>

      </div>

      <div className='flex flex-col gap-3'>
        <label htmlFor='emailAddress'>Email Address *</label>
        <input type='text' id='emailAddress' name='emailAddress' {...register('email',{required: 'email is required!', validate: emailVf})}  className={`border-2 ${errors.email && 'border-red-600'} rounded-md p-2`}/>
        <span className={errors.email ? ' text-red-600' :'hidden'}>{errors.email && errors.email.message}</span>
      </div>

      <div className='flex flex-col gap-y-3'>
        <label htmlFor='queryType'>Query Type *</label>
        <div className='flex flex-col gap-3 lg:flex-row'>
        <div className='flex border-2 items-center rounded-md p-3 gap-3 flex-grow radio_main'>
          <label htmlFor='generalType' className='inline-flex items-center radio'>
          <input type='radio' name='queryType' id="generalType" {...register('queryType',{required: 'please select query type'})}  value='General Enquiry' className='hidden radio_input' />
          <div className="cus_radio mr-5"></div>
            General Enquiry
            </label>
        </div>
      

        <div className='flex border-2 rounded-md p-3 items-center gap-3 flex-grow radio_main'>
          <label htmlFor="supportType" className='inline-flex items-center radio'>
          <input type='radio' id="supportType"  {...register('queryType',{required: 'please select query type'})}    name='queryType' value='Support Request' className='hidden radio_input'/>
          <div className="cus_radio mr-5"></div>
          Support Request
          </label>
        </div>

        </div>
        <span className={errors.queryType ? ' text-red-600' :'hidden'}>{errors.queryType && errors.queryType.message}</span>
      </div>

      <div className='flex flex-col'>
        <label htmlFor="message">Messages *</label>
        <textarea id="message" className={`border-2 rounded-md min-h-48 p-2 hover:cursor-pointer ${errors.message && 'border-red-600'}`} {...register('message',{required: 'This field is required'})}  name='message'></textarea>
        <span className={errors.message ? ' text-red-600' :'hidden'}>{errors.message && errors.message.message}</span>
      </div>

    <div>
      <div className='flex items-center gap-3'>
        <label htmlFor="chBox" className='flex items-center gap-x-5 hover:cursor-pointer'>
        <input type="checkbox" id="chBox"  {...register('chBox',{required: 'This filed is required'})}  name='chBox' className='hidden'/>
        <div className='cus_check'></div>
          I consent to being contacted by the team *
          </label>
      </div>
      <span className={errors.chBox ? ' text-red-600' :'hidden'}>{errors.chBox && errors.chBox.message}</span>
        </div>

      <button className='p-4 text-panel-color bg-green-800 w-full rounded-lg subBtn'>Submit</button>
      
     </form>
        {/* <ContactForm /> */}

      </div>
      
      <Toaster />
    </div>
  )
}

export default App
