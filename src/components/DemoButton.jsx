import { TfiWorld } from "react-icons/tfi"

export function DemoButton ({ children, as = 'a', href, onClick }) {
  const Component = as
  const componentProps = {
    a: { target: '_blank', href },
    button: {
      onClick,
    }
  }

  
  return <Component className='rounded-lg bg-rose2 py-1 px-2 max-[1180px]:py-3 max-[1180px]:w-2/5 flex items-center justify-center w-max gap-x-2' {...componentProps[as]} >
    <TfiWorld className='h-5 w-5' />
    {children}
  </Component>
}