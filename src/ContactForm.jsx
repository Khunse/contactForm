
function ContactForm()
{
    const inputData = [
        {
            kid: 1,
            name: 'firstName',
            type: 'text',
            label: 'First Name *',
            pstyle: 'flex flex-col gap-3',
            istyle: 'border-2 rounded-md p-2'
        },
        {
            kid: 2,
            name: 'lastName',
            label: 'Last Name *',
            type: 'text',
            pstyle: 'flex flex-col gap-3',
            istyle: 'border-2 rounded-md p-2'
        },
        {
            kid: 3,
            name: 'email',
            label: 'Email *',
            type: 'email',
            pstyle: 'flex flex-col gap-3',
            istyle: 'border-2 rounded-md p-2'
        },
        {
            kid: 4,
            name: 'rad',
            label: '',
            type: 'text',
            pstyle: 'flex flex-col gap-3',
            istyle: 'border-2 rounded-md p-2'
        },
        {
            kid: 5,
            name: 'rad2',
            label: '',
            type: 'text',
            pstyle: 'flex flex-col gap-3',
            istyle: 'border-2 rounded-md p-2'
        },
        {
            kid: 6,
            name: 'message',
            label: 'Message *',
            type: 'textarea',
            pstyle: 'flex flex-col gap-3',
            istyle: 'border-2 rounded-md p-2'
        },
        {
            kid: 6,
            name: 'chBox',
            type: 'checkbox',
            label: 'I consent to being contacted by the team *',
            pstyle: 'flex items-center gap-3',
            istyle: 'border-2 rounded-md p-2',
            rv: true
        }
    ]

    return(
        <form className='flex flex-col gap-6'>
            <h1 className='font-mycusBoldFon'>Contact Us</h1>
            <div className="flex flex-col gap-3">
            {
                inputData.map(w => {
                    
                    return    <InputF {...w} key={w.kid}/>;
                
            })
            }
            </div>
            <button className='p-4 text-panel-color bg-green-800 w-full rounded-lg'>Submit</button>
        </form>
    )
}

function InputF(props)
{

    return(

        
            props.rv ? 
            <div className={props.pstyle}>
            <input  id={props.name} {...props} className={props.istyle}/>
            <label htmlFor={props.name}>{props.label}</label>
        </div>
        :
        <div className={props.pstyle}>
        <label htmlFor={props.name}>{props.label}</label>
        <input  id={props.name} {...props} className={props.istyle}/>
    </div>

    )
}

export default ContactForm;