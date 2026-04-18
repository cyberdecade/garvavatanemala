"use client";
import Image from "next/image";
import { FC, useEffect, useState } from "react";

const Preloader: FC = () => {
  const [active, setActive] = useState<boolean>(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setActive(false);
    }, 500);

    // cleanup
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {active ? (
        <div className='loading-screen' id='loading-screen'>
          <span className='bar top-bar' />
          <span className='bar down-bar' />
          <div className='animation-preloader'>
            <div className='position-relative z-1'>
              <div className='preloader-logo-zoom position-absolute top-50 start-50 translate-middle tw-z-999'>
                <Image
                  width={200}
                  height={120}
                  className='position-relative tw-z-999'
                  src='/assets/images/logo/garva-vatanemala-250-150.png'
                  alt='brand'
                />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </>
  );
};

export default Preloader;
