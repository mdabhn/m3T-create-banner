import { useState } from 'react'
import QRCode from 'qrcode'

import OutPut from '../output/output'
import OutPutx from '../output/Outputx'

function QR() {
  const [qr_, setQr] = useState('')
  const [qr_text, setQrText] = useState('')
  const [size, setSize] = useState(undefined)
  const [colors, setColors] = useState(undefined)
  const [bat, setBat] = useState(undefined)
  const [mrp, setMrp] = useState(undefined)
  const [artical, setArtical] = useState('')

  const genBanner = (event) => {
    event.preventDefault()

    QRCode.toDataURL(qr_text)
      .then((url) => {
        setQr(url)
        console.log(url)
      })
      .catch((err) => {
        console.error(err)
      })
  }

  return (
    <div className='container-fluid'>
      <div
        className='text-center h2 mt-3 mb-2'
        style={{
          textTransform: 'uppercase',
          letterSpacing: '3px',
          wordSpacing: '5px',
        }}
      >
        create New banner
      </div>

      <div
        className='__container_box mt-4'
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <form onSubmit={genBanner}>
          <div className='card p-4 shadow'>
            <label htmlFor='qr-details'>QR Deatils - </label>
            <input
              type='text'
              className='form-control mt-1'
              value={qr_text}
              onChange={(e) => setQrText(e.target.value)}
              required
            />
            <label htmlFor='size' className='mt-1'>
              Size -{' '}
            </label>
            <input
              type='number'
              className='form-control mt-1'
              value={size}
              onChange={(e) => setSize(e.target.value)}
              required
            />
            <label htmlFor='size' className='mt-1'>
              Available Colors{' '}
              <span className='text-muted' style={{ fontSize: '12px' }}>
                plese separate color with coma ','
              </span>
            </label>
            <input
              type='text'
              className='form-control mt-1'
              value={colors}
              onChange={(e) => setColors(e.target.value)}
              required
            />
            <label htmlFor='size' className='mt-1'>
              MRP
            </label>
            <input
              type='number'
              className='form-control mt-1'
              value={mrp}
              onChange={(e) => setMrp(e.target.value)}
              required
            />
            <label htmlFor='size' className='mt-1'>
              Bat
            </label>
            <input
              type='text'
              className='form-control mt-1'
              value={bat}
              onChange={(e) => setBat(e.target.value)}
              required
            />

            <label htmlFor='size' className='mt-1'>
              Artical
            </label>
            <input
              type='text'
              className='form-control mt-1'
              value={artical}
              onChange={(e) => setArtical(e.target.value)}
              required
            />

            <div className='d-flex justify-content-center'>
              <button className='btn btn-dark w-50 mt-4 text-center'>
                Generate
              </button>
            </div>
          </div>
        </form>
      </div>

      {qr_ && <OutPut qr_={qr_} size={size} colors={colors} />}
      {qr_ && (
        <OutPutx qr_={qr_} size={size} bat={bat} mrp={mrp} artical={artical} />
      )}
    </div>
  )
}

export default QR
