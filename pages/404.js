import Layouts from '../components/Layouts'

const error = () => {
  return (
    <Layouts>
      <div className='font-semibold text-center py-24 uppercase text-4xl'>
        Arjen, bu bölgeye girmenizi yasakladı!
      </div>
    </Layouts>
  )
}

export default error
