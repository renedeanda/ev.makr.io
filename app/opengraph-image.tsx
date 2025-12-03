import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'ev.makr.io - Educational Resource for New EV Owners'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #C75B39 0%, #D97706 100%)',
          fontFamily: 'Inter, sans-serif',
        }}
      >
        {/* Lightning bolt emoji */}
        <div
          style={{
            fontSize: '180px',
            marginBottom: '40px',
            display: 'flex',
          }}
        >
          ⚡️
        </div>

        {/* Site name */}
        <div
          style={{
            fontSize: '72px',
            fontWeight: 700,
            color: 'white',
            marginBottom: '20px',
            display: 'flex',
          }}
        >
          ev.makr.io
        </div>

        {/* Tagline */}
        <div
          style={{
            fontSize: '32px',
            color: 'rgba(255, 255, 255, 0.9)',
            display: 'flex',
          }}
        >
          Educational Resource for New EV Owners
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
