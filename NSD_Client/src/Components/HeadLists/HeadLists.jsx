import './HeadLists.css'
const HeadLists = () => {
    return (
        <div className="headlists">
            <button className='headlist-buttons w-25 fw-bold py-3 bg-white'>Profile</button>
            <button className='headlist-active-buttons w-25 fw-bold py-3 bg-white'>Application</button>
            <button className='headlist-buttons w-25 fw-bold py-3 bg-white'>Inbox</button>
            <button className='headlist-buttons w-25 fw-bold py-3 bg-white'>Settings</button>
        </div>
    )
}

export default HeadLists
