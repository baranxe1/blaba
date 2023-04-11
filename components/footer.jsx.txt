import Link from 'next/link'
import classNames from '../util/classNames'

const footer = () => {
  var time = new Date()
  var fullTime = new Intl.DateTimeFormat('tr-TR', {
    weekday: 'short',
  }).format(time)

  var min =
    ('0' + time.getHours()).slice(-2) +
    ':' +
    ('0' + time.getMinutes()).slice(-2)

  return (
    <>
      <div
        className={classNames(
          'py-4 pl-3 text-xs text-slate-600',
          'sm:pl-12',
          '',
          'dark:text-neutral-300',
        )}
      >
        <div className=''>
          Tüm hakları saklıdır
        </div>
        <div className='font-bold'>
          Yerel Zaman: {min} {fullTime}
        </div>
      </div>
    </>
  )
}

export default footer
