import { createOgImage } from './createOgImage'

const title = `Arjen`
const description = `Resmi Portföy Sayfasıdır`
const domain = `arjen-xyz.vercel.app`
const twitter = `@arjenxyz`
const meta = `Developer`

export const seo = {
  title: title + ' | ' + meta,
  description,
  openGraph: {
    title,
    type: 'website',
    url: `https://${domain}`,
    site_name: title,
    images: [
      {
        url: createOgImage({ title, meta }),
        width: 1600,
        height: 836,
        alt: title,
      },
    ],
  },
  twitter: {
    handle: twitter,
    cardType: 'summary_large_image',
  },
}
