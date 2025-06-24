import React from 'react';
import image1 from '../../assets/GalleryOnePhoto/masud-sir (1).jpeg'
import image2 from '../../assets/GalleryOnePhoto/masud-sir (2).jpeg'
import image3 from '../../assets/GalleryOnePhoto/masud-sir (3).jpeg'
// import image4 from '../../assets/GalleryOnePhoto/masud-sir (4).jpeg'
import image5 from '../../assets/GalleryOnePhoto/masud-sir (5).jpeg'
import image6 from '../../assets/GalleryOnePhoto/masud-sir (6).jpeg'
import image7 from '../../assets/GalleryOnePhoto/masud-sir (7).jpeg'
import image8 from '../../assets/GalleryOnePhoto/masud-sir (8).jpeg'
import image9 from '../../assets/GalleryOnePhoto/masud-sir (9).jpeg'
import image10 from '../../assets/GalleryOnePhoto/masud-sir (10).jpeg'
import image11 from '../../assets/GalleryOnePhoto/masud-sir (11).jpeg'
import image12 from '../../assets/GalleryOnePhoto/masud-sir (12).jpeg'
import image13 from '../../assets/GalleryOnePhoto/masud-sir (13).jpeg'
import image14 from '../../assets/GalleryOnePhoto/masud-sir (14).jpeg'
import image15 from '../../assets/GalleryOnePhoto/masud-sir (15).jpeg'
import image16 from '../../assets/GalleryOnePhoto/masud-sir (16).jpeg'
import image17 from '../../assets/GalleryOnePhoto/masud-sir (17).jpeg'
import image18 from '../../assets/GalleryOnePhoto/masud-sir (18).jpeg'
import image19 from '../../assets/GalleryOnePhoto/masud-sir (19).jpeg'
import image20 from '../../assets/GalleryOnePhoto/masud-sir (20).jpeg'
import image21 from '../../assets/GalleryOnePhoto/masud-sir (21).jpeg'
import image22 from '../../assets/GalleryOnePhoto/masud-sir (22).jpeg'
import image23 from '../../assets/GalleryOnePhoto/masud-sir (23).jpeg'
import image24 from '../../assets/GalleryOnePhoto/masud-sir (24).jpeg'
import image25 from '../../assets/GalleryOnePhoto/masud-sir (25).jpeg'
import image26 from '../../assets/GalleryOnePhoto/masud-sir (26).jpeg'
import image27 from '../../assets/GalleryOnePhoto/masud-sir (27).jpeg'
import image28 from '../../assets/GalleryOnePhoto/masud-sir (28).jpeg'
import image29 from '../../assets/GalleryOnePhoto/masud-sir (29).jpeg'

const NavBarGallery = () => {
      const renderImageCard = (imageSrc) => (
    <div className="overflow-hidden rounded-md shadow-md">
      <img
        src={imageSrc}
        alt="Gallery"
        className="w-full h-72 object-cover transform transition-transform duration-500 hover:scale-110"
      />
    </div>
  );
    return (
        
 <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Gallery...</h2>

      {/* First grid layout */}
      <div className="grid grid-cols-3 gap-4 mb-8">
        <div>{renderImageCard(image1)}</div>
        <div>{renderImageCard(image2)}</div>
        <div>{renderImageCard(image3)}</div>
        <div className="col-span-2">{renderImageCard(image23)}</div>
        <div>{renderImageCard(image5)}</div>
        <div>{renderImageCard(image6)}</div>
        <div className="col-span-2">{renderImageCard(image7)}</div>
      </div>

      {/* Second grid layout */}
      <div className="grid grid-cols-6 gap-4">
        <div className="col-span-4 col-start-2">{renderImageCard(image8)}</div>
        <div className="col-start-1 col-end-3">{renderImageCard(image9)}</div>
        <div className="col-span-2 col-end-7">{renderImageCard(image11)}</div>
        <div className="col-start-1 col-end-7">{renderImageCard(image10)}</div>
      </div>

            <div className="grid grid-cols-3 gap-4 mb-8">
              <div>{renderImageCard(image12)}</div>
              <div>{renderImageCard(image13)}</div>
              <div>{renderImageCard(image14)}</div>
              <div className="col-span-2">{renderImageCard(image15)}</div>
              <div>{renderImageCard(image16)}</div>
              <div>{renderImageCard(image17)}</div>
              <div className="col-span-2">{renderImageCard(image18)}</div>
            </div>
            <div className="grid grid-cols-3 gap-4 mb-8">
              <div>{renderImageCard(image18)}</div>
              <div>{renderImageCard(image19)}</div>
              <div>{renderImageCard(image20)}</div>
              <div className="col-span-2">{renderImageCard(image21)}</div>
              <div>{renderImageCard(image22)}</div>
              <div>{renderImageCard(image29)}</div>
              <div className="col-span-2">{renderImageCard(image24)}</div>
            </div>
                  <div className="grid grid-cols-6 gap-4">
                    <div className="col-span-4 col-start-2">{renderImageCard(image25)}</div>
                    <div className="col-start-1 col-end-3">{renderImageCard(image26)}</div>
                    <div className="col-span-2 col-end-7">{renderImageCard(image27)}</div>
                    <div className="col-start-1 col-end-7">{renderImageCard(image28)}</div>
                  </div>

    </div>
    );
};

export default NavBarGallery;