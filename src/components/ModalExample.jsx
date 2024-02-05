import React from 'react'

export function ModalExample ({ closeModal }) {
  return <div className='flex flex-col gap-2 border border-neutral-500 p-6 rounded-lg bg-gradient-to-tr from-rose2/80 via-rose2/80 to-blue2/80 max-w-[500px]'>
    <h3 className='text-2xl'>Esta es una modal invocada con mi paquete</h3>
    <p>Estas seguro de que quieres instalar react-modal-observer para invocar modales desde cualquier lugar?</p>
    <div className='flex justify-end gap-2'>
      <button className='bg-red-500 border border-red-500 text-white p-2 rounded' onClick={closeModal}>Cancelar</button>
      <button className='text-white p-2 border border-white rounded'>Aceptar</button>
    </div>
  </div>
}