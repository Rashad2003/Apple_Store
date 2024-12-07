import { useState } from "react";

export const MyImage = ({ imgs = [{url:""}] }) => { 
  const [mainImage, setMainImage] = useState(imgs[0]);
  return (
    <>
    <div className="container-mi">
      <div className="grid grid-four-columns">
        {imgs.map((curElm, index) => {
            return (
              <figure key={index}>
                <img 
                src={curElm.url} 
                alt={curElm.filename}
                className="box-image--style" 
                key={index} 
                onClick={() => setMainImage(curElm)}
                />
              </figure>
            );
          })
        }
      </div>
      <div className="main-screen">
        <img src={mainImage.url} alt={mainImage.filename} />
      </div>
    </div>
    </>
  )
}