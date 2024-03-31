import logo from '../assets/logo-pokemon.png'

export const Header = () => {
  return (
    <header className='flex justify-center mb-5'>
        <img src={logo} alt="logo" className='h-[200px]' />
    </header>
  )
}
