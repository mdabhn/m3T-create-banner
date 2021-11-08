import { useRef } from 'react'
import { useReactToPrint } from 'react-to-print'

import './output-style.css'

const Outputx = ({ qr_, size, bat, mrp, artical }) => {
  const printRef = useRef()

  const print = useReactToPrint({
    documentTitle: 'Banner',
    copyStyles: true,
    content: () => printRef.current,
  })

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        marginTop: '30px',
      }}
      className='printable'
    >
      <div className='__main_container' style={{ width: '25%' }} ref={printRef}>
        <div className='row'>
          <div
            className='col-2 border d-flex justify-content-center'
            style={{ minHeight: '120px' }}
          >
            <span className='d-flex justify-content-center align-items-center'>
              <img
                src='/logo.png'
                alt=''
                style={{ width: '130px', transform: 'rotate(90deg)' }}
              />
            </span>
          </div>
          <div className='col-6 border' style={{ padding: '30px' }}>
            <div>BAT - {bat}</div>
            <div className='d-flex justify-content-between'>
              <span>MRP - {mrp}</span>
              <span>size - {size}</span>
            </div>
            <div className=''>Artical - {artical}</div>
          </div>
          <div className='col-4 border d-flex justify-content-center align-items-center'>
            <img src={qr_} alt='qr-code' style={{ width: '120px' }} />
          </div>
        </div>
      </div>

      <button className='btn btn-dark w-25 mt-4' onClick={print}>
        Print
      </button>
      <div style={{ minHeight: '100px' }}></div>
    </div>
  )
}

export default Outputx
