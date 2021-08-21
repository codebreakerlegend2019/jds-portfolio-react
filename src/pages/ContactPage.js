import ContactItem from '../components/ContactItem'
import './ContactPage.css'
const contacts = [
    {
        id: 1,
        imgUrl:'https://w7.pngwing.com/pngs/524/809/png-transparent-computer-icons-resume-linkedin-logo-job-hunting-others-blue-angle-text-thumbnail.png',
        title:'LinkedIn',
        href:'https://www.linkedin.com/in/joshua-siuagan-132960173/'
    },
    {
        id: 2,
        imgUrl:'https://www.pinclipart.com/picdir/middle/2-21918_download-transparent-background-facebook-logo-clipart-facebook-logo.png',
        title:'Facebook',
        href:'https://www.facebook.com/joshua.siuagan/'
    }
]
function ContactPage(){
    return(
    <div className='center'>
        <h1>Contact me</h1>
        <div className='row'>
        {contacts.map((contact)=> {
                    return(
                        <ContactItem contact={contact}/>
                    )
                })}
        </div>
    
    </div>
    )
}

export default ContactPage;