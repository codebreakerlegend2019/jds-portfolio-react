import './ContactItem.css'
function ContactItem (props){
    const contact = props.contact;
    return(
    <div id= {contact.id} className='column'>
           <div id= {contact.id} className='card'>
            <img id= {contact.id}  src={contact.imgUrl} className='icon'/>
            <h3 id= {contact.id} >{contact.title}</h3>
            <a id= {contact.id} href={contact.href}>Click Here!</a>
        </div>
    </div>
           
    )
}

export default ContactItem;