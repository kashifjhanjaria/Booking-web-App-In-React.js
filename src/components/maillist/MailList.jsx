import './maillist.css';

const MailList = () => {
  return (
    <div className='mail' >
        <h1 className="mailTitle">Save Time , Save Mony!</h1>
        <span className="mailDesc">Sign up and w'll send you best deals to you</span>
        <div className="mailInputContainer">
            <input type="text" placeholder='Your Email' />
            <button>Subscribe</button>
        </div>
    </div>
  )
}

export default MailList