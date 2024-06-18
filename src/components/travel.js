import logo from './images/pin.svg'

export default function Travel(props){
   return(

      <div className='travel'>
         <img src={props.imageUrl} className='travel-image'/>

         <div className='travel-section'>

            <div className='travel-text'>

               {/* <img src={logo} className='travel-logo' alt={props.title}/> */}
               <span className="badge">{props.location}</span>
               <p className='link'>
                  <a href={props.googleMapsUrl}
                  target='_blank'
                  >
                  View on Google Map
                  </a>
               </p>

            </div>

            <h2 className='title'>{props.title}</h2>

            <div className="date">
                    <span className="start-date">{props.startDate}</span>
                    <span className="dash"> - </span>
                    <span className="end-date">{props.endDate}</span>
            </div>

            <p className="description">
                  <span>{props.description}</span>
            </p>

         </div>

      </div>
   )
}