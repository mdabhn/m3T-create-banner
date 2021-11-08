import { useRef } from 'react'
import { useReactToPrint } from 'react-to-print'

import './output-style.css'

const Output = ({ qr_, size, colors }) => {
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
          <div className='col border d-flex justify-content-center align-items-center common-height qr-section '>
            <img
              src={qr_}
              alt=''
              style={{ width: '150px' }}
              className='qr-image'
            />
          </div>

          <div
            className='col border size__container'
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              fontSize: '90px',
            }}
          >
            <span>{size}</span>
          </div>

          <div
            className='col border common-height'
            style={{
              position: 'relative',
              display: 'flex',
              justifyContent: 'center',
              fontFamily: 'monospace',
            }}
          >
            <div className='mt-4 d-flex align-items-center flex-column'>
              <div style={{ fontSize: '13px', textAlign: 'justify' }}>
                Available Colors
              </div>
              <div className='d-flex mt-1'>
                <span
                  style={{
                    fontSize: '12px',
                    hyphens: 'auto',
                    wordWrap: 'break-word',
                    overflowWrap: 'break-word',
                    fontWeight: 'bold',
                  }}
                >
                  {colors}
                </span>
              </div>
            </div>
            <div
              className='company___logo'
              style={{ position: 'absolute', bottom: '0' }}
            >
              <img
                src='/logo.png'
                alt=''
                style={{ width: '120px', marginBottom: '10px' }}
              />
            </div>
          </div>
        </div>
      </div>

      <button className='btn btn-dark w-25 mt-4' onClick={print}>
        Print
      </button>
    </div>
  )
}

export default Output
