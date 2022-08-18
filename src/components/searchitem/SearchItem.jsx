import './searchitem.css';

const SearchItem = () => {
  return (
    <div className='searchItem'>
        <img src="https://cf.bstatic.com/xdata/images/hotel/square200/323415402.webp?k=a56e96a33bd7638278fbad4c261832042d1d6a3458c0011193160f0ecfabc637&o=&s=1" alt="" className='siImg' />
        <div className="siDesc">
            <h1 className="siTitle">Rose Palace Hotel, Gulberg</h1>
            <span className="siDistance">5.4 km from center</span>
            <span className="siTaxiOp">Free airport taxi</span>
            <span className="siSubtitle">
                Studio Apartment with Air conditioning
            </span>
            <span className="siFeatures">
                Entire studio . 1 bathroom . 21m 1 full bed
            </span>
            <span className="siCancelOp">
                Free Cancellation
            </span>
            <span className="siCancelOpSubtitle">
                You can cancel later, so lock in this great  price today!
            </span>

        </div>
        <div className="siDetail">
        <div className="siRating">
            <span>Excellent</span>
            <button>8.9</button>
        </div>
        <div className="siDetailTexts">
            <span className='siPrice' >$140</span>
            <span className="siTexOP">Iclude Texes and fees</span>
            <button className='ciCheckButton'>See Availabilty</button>
        </div>
        </div>
      
    </div>
  )
}

export default SearchItem
