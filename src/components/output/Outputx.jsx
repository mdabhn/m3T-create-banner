import { useRef } from 'react'
import { useReactToPrint } from 'react-to-print'
import domtoimage from 'dom-to-image'
import { saveAs } from 'file-saver'

import './output-style.css'

const Outputx = ({ qr_, size, bat, mrp, article }) => {
  const printRef = useRef()

  const print = useReactToPrint({
    documentTitle: 'Banner',
    copyStyles: true,
    content: () => printRef.current,
  })

  const saveImage = async () => {
    domtoimage
      .toPng(document.getElementById('main__container2'))
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
        id='main__container2'
        style={{ width: '25%' }}
        ref={printRef}
      >
        <div className='row'>
          <div
            className='col-2 border d-flex justify-content-center'
            style={{ minHeight: '120px' }}
          >
            <span className='d-flex justify-content-center align-items-center'>
              <img
                src='/logo.png'
                alt='logo'
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
            <div className=''>article - {article}</div>
          </div>
          <div className='col-4 border d-flex justify-content-center align-items-center'>
            <img src={qr_} alt='qr-code' style={{ width: '120px' }} />
          </div>
        </div>
      </div>

      <button className='btn btn-dark w-25 mt-4' onClick={print}>
        Print
      </button>
      <button className='btn btn-dark w-25 mt-4' onClick={saveImage}>
        Save Image
      </button>
      <div style={{ minHeight: '100px' }}></div>
    </div>
  )
}

export default Outputx
