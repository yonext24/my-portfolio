import { useEffect, useState } from "react";

export function ImageSlider ({ images }) {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    setCurrentSlide(0)
  }, [images])

  const handlePrev = () => {
    if (currentSlide <= 0) {
      setCurrentSlide(images.length - 1)
      return
    }
    setCurrentSlide(prev => prev - 1)
  }
  const handleNext = () => {
    if (currentSlide >= images.length - 1) {
      setCurrentSlide(0)
      return
    }
    setCurrentSlide(prev => prev + 1)
  }

  return <div className='aspect-[1280/700] overflow-hidden rounded-2xl my-auto mx-auto object-cover relative
  max-[580px]:w-full max-[1180px]:w-10/12'>
    {
      images.length > 1 && <>
        <button onClick={handlePrev} className='absolute left-0 w-[10%] h-full bg-[#0004] text-white text-3xl z-20'>{'<'}</button>
        <button onClick={handleNext} className='absolute right-0 w-[10%] h-full bg-[#0004] text-white text-3xl z-20'>{'>'}</button>
      </>
    }
  { 
    images.map((image, index) => {
      return <img draggable='false' className={`w-full rounded-lg transition-transform aspect-[1280/700] dark:brightness-90 object-cover
      absolute ${index === currentSlide ? 'z-10' : 'z-0'} left-0`} src={image} style={{ transform: `translateX(${100 * (index - currentSlide)}%)` }} />
    })
  }

</div>
}