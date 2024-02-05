import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
      <div className="descriptionbox-navigator">
      <div className="descriptionbox-nav-box">description</div>
      <div className="descriptionbox-nav-box fade">Reviews</div>
      </div>
      <div className="descriptionbox--description">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Velit, esse sapiente deleniti modi quo vitae debitis autem, 
          neque vel dignissimos voluptate nesciunt laborum expedita quas, quis 
          cumque adipisci voluptates totam?</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit 
            ab impedit assumenda tempore eaque a libero architecto accusamus, repudiandae 
            autem quia, dolore veritatis odio nesciunt quos nemo, hic nobis at.</p>
      </div>
    </div>
  )
}

export default DescriptionBox
