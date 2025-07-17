import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
        <div className="descriptionbox-navigator">
            <div className="descriptionbox-nav-box">Description</div>
            <div className="descriptionbox-nav-box fade">Reviews (122)</div>
        </div>
        <div className="descriptionbox-description">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima, expedita placeat, ratione ipsa, voluptate optio porro laudantium accusamus iusto odio ea. Quidem aliquid voluptates fuga eveniet fugit neque facere distinctio!</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam obcaecati pariatur omnis voluptate maiores consectetur, itaque numquam. Sit distinctio qui excepturi culpa ex illum soluta! Vitae recusandae reiciendis blanditiis placeat?</p>
        </div>
    </div>
  )
}

export default DescriptionBox