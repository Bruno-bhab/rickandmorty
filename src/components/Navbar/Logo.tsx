import img from '../../assets/img/Logo.png'

export function Logo () {
  return (
    <div>
      <a href="#"><img src={img} alt="Rick and Morty Logo" className='h-16'/></a>
    </div>
  )
}