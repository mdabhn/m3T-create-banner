import { useRef } from 'react'
import { useReactToPrint } from 'react-to-print'
import domtoimage from 'dom-to-image'
import { saveAs } from 'file-saver'

import './output-style.css'

const Output = ({ qr_, size, colors, mrp, bat, article }) => {
  const printRef = useRef()

  const print = useReactToPrint({
    documentTitle: 'Banner',
    copyStyles: true,
    content: () => printRef.current,
  })

  const saveImage = async () => {
    domtoimage
      .toPng(document.getElementById('main__container'))
      .then(function (dataUrl) {
        let img = new Image()
        let canvas = document.createElement('canvas')
        let ctx = canvas.getContext('2d')
        img.onload = function () {
          ctx.drawImage(img, 0, 0, 288, 96)
          saveAs(canvas.toDataURL(), `${article}.png`)
        }
        img.src = dataUrl
      })
      .catch(function (error) {
        console.error('oops, something went wrong!', error)
      })
  }

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
      <div
        className='__main_container'
        id='main__container'
        style={{ width: '25%' }}
        ref={printRef}
      >
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
              display: 'flex',
              position: 'relative',
              justifyContent: 'center',
              fontFamily: 'monospace',
              flexDirection: 'column',
            }}
          >
            <div
              className=' d-flex align-items-center flex-column'
              style={{ fontSize: '13px' }}
            >
              <div style={{ textAlign: 'justify' }}>Available Colors</div>
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
            <div className='mrp' style={{ fontSize: '12px' }}>
              MRP - {mrp}
            </div>
            <div className='bat' style={{ fontSize: '12px' }}>
              Bat - {bat}
            </div>
            <div className='mrp' style={{ fontSize: '12px' }}>
              Article - {article}
            </div>
          </div>
        </div>
      </div>

      <button className='btn btn-dark w-25 mt-4' onClick={print}>
        Print
      </button>
      <button className='btn btn-dark w-25 mt-4' onClick={saveImage}>
        Save Image
      </button>
    </div>
  )
}

export default Output
