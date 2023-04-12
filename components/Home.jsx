import Link from 'next/link'
import LogoSVG from './LogoSVG'
import BlueSVG from './BlueSVG'

const Home = () => {
  return (
    <div className='mt-10'>
      <div className='flex items-center '>
        <LogoSVG />
        <div className='flex pl-3 flex-col'>
          <h1 className='text-3xl  font-bold'>
            Arjen <BlueSVG />
          </h1>
          <h4 className='opacity-50'>Portföy Kurucusu</h4>
        </div>
      </div>
      <article className='mt-10'>
        <p>
          Merhaba, Ben Arjen. Türkiye'de yaşıyorum. Sizlere kendimi ve üzerinde çalıştığım projeleri tanıtmak için portföy sitesi oluşturdum. Hedefim yazılım üzerinden gelişmek ve her daim yanımda olan insanları geliştirmek.<br />
     </p>

        <p>
          Projelere daha hızlı bir şekilde ulaşmak için {' '}
          <Link
            className='cursor-ne-resize  font-bold'
            href='https://github.com/arjenxyz'
          >
            Github
          </Link> profilini takip et.
        </p>
        <p>
          {' '}
          <Link
            className='cursor-ne-resize  font-bold'
            href='https://www.instagram.com/roi.xyz/'
          >
            Instagram,
          </Link>{' '}
          <Link
            href='https://twitter.com/arjenxyz'
            className='cursor-ne-resize  font-bold'
          >
            Twitter 
          </Link>
          ve {' '}
          <Link
            className='cursor-ne-resize  font-bold'
            href='https://www.snapchat.com/add/roi.xyz?share_id=rHzo2vf6aAw&locale=en-AU'
          >
            SnapChat
          </Link>
          iletişim araçlarımızdır.
        </p>
           
        <p>Hicr Suresi 97. Ayet:<br />
        Göğsünün daraldığını biliyoruz..<br /> (ama sabret, Seni zafere ulaştıracağız.)<br /> <br />
        {' '}
          <Link className='font-bold' href='https://arjenxyz.vercel.app/mesaj.html'>
           🧡 Şifreli Hatıra Mesajı
          </Link>
          
        </p>
      </article>
      <style jsx>{`
        p {
          margin-top: 20px;
          line-height: 1.8;
          font-size: 1.1rem;
        }
      `}</style>
    </div>
  )
}

export default Home
