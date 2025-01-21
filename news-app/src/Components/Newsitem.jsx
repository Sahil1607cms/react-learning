import React from 'react'

function Newsitem (props) {
  return (
      <div
        className='card d-inline-block m-2 p-2 bg-dark text-light '
        style={{ height: '500px', width: '340px' }}
      >
        <img
          src={props.src}
          className='card-img-top'
          style={{ height: '250px', width: '320px' }}
          alt='...'
        />
        <div className='card-body'>
          <h5 className='card-title'>{props.title.slice(0, 70)}</h5>
          <p className='card-text'>
            {props.description ? props.description.slice(0, 100) : ''}
          </p>
          <a href={props.url} className='btn btn-primary'>
            Read more
          </a>
        </div>
      </div>
  )
}

export default Newsitem
